# 🚀 Complete React + TanStack Query Guide

> A comprehensive guide covering React fundamentals, hooks, routing, and advanced data fetching with TanStack Query

---

## 📑 Table of Contents

1. [React Fundamentals](#react-fundamentals)
2. [React Hooks Deep Dive](#react-hooks-deep-dive)
3. [Form Handling & Storage](#form-handling--storage)
4. [API Integration](#api-integration)
5. [React Router](#react-router)
6. [Context API](#context-api)
7. [Performance Optimization](#performance-optimization)
8. [TanStack Query (React Query)](#tanstack-query-react-query)

---

## React Fundamentals

### What is React?

React is a JavaScript library for building user interfaces, developed by Meta (Facebook) in 2013. It uses a **component-based architecture** where each UI element is a reusable component.

**Key Problem Solved:** Before React, updating individual parts of a page (notifications, messages, friend requests) required full page reloads. React introduced **selective re-rendering** through the Virtual DOM.

### Virtual DOM vs Real DOM

| Type        | Description                                       |
| ----------- | ------------------------------------------------- |
| Real DOM    | Directly updates HTML, re-renders entire page     |
| Virtual DOM | Updates only changed parts for faster performance |

### Setup with Vite

```bash
npm create vite
npm install
npm run dev
```

### Basic Component Structure

```jsx
// App.jsx
const App = () => {
  const name = "Rayied";
  return <h1>Hello {name}!</h1>;
};

export default App;
```

### JSX Rules

- Must return a single parent element (use fragments `<>...</>`)
- Use `className` instead of `class`
- Close all tags (`<img />`, `<input />`)
- JavaScript expressions go inside `{}`

### Component Props

```jsx
// Parent Component
const App = () => {
  const jobs = [
    { company: "Google", role: "Frontend Engineer", location: "Dhaka" },
    { company: "Meta", role: "Backend Developer", location: "Bangladesh" },
  ];

  return (
    <div>
      {jobs.map((job, index) => (
        <Card key={index} {...job} />
      ))}
    </div>
  );
};

// Child Component
const Card = ({ company, role, location }) => (
  <div className="card">
    <h2>{company}</h2>
    <p>{role}</p>
    <p>{location}</p>
  </div>
);
```

**Best Practice:** Always provide unique `key` props when rendering lists. Use stable IDs instead of array indices when possible.

---

## React Hooks Deep Dive

### 1. useState - State Management

Manages local component state with automatic re-rendering.

```jsx
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState({ name: "Sarthak", age: 25 });

  // Functional updates for batch operations
  const increment = () => setCount((prev) => prev + 1);

  // Object updates (immutable)
  const updateAge = () => setUser((prev) => ({ ...prev, age: 50 }));

  // Array updates (immutable)
  const [numbers, setNumbers] = useState([1, 2, 3]);
  const addNumber = () => setNumbers((prev) => [...prev, 4]);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>
    </div>
  );
};
```

**Batch Updates Example:**

```jsx
const [count, setCount] = useState(10);

const batchUpdate = () => {
  setCount((prev) => prev + 1);
  setCount((prev) => prev + 1);
  setCount((prev) => prev + 1); // Increments by 3
};
```

### 2. useEffect - Side Effects

Handles side effects like API calls, subscriptions, timers, and DOM updates.

```jsx
import { useEffect, useState } from "react";

const DataFetcher = () => {
  const [data, setData] = useState(null);

  // Run once on mount (componentDidMount)
  useEffect(() => {
    fetchData();
  }, []);

  // Run when dependency changes
  useEffect(() => {
    console.log("Count changed:", count);
  }, [count]);

  // Cleanup function
  useEffect(() => {
    const timer = setInterval(() => console.log("tick"), 1000);

    return () => clearInterval(timer); // Runs on unmount
  }, []);

  return <div>{data}</div>;
};
```

**Dependency Rules:**

- `[]` → Runs **once** on mount
- `[dep1, dep2]` → Runs when dependencies change
- No array → Runs **after every render** (avoid!)

### 3. useRef - Mutable Values & DOM Access

Creates mutable values that **don't trigger re-renders**.

```jsx
import { useRef } from "react";

const InputFocus = () => {
  const inputRef = useRef(null);
  const countRef = useRef(0);

  const focusInput = () => {
    inputRef.current.focus();
  };

  const incrementSilent = () => {
    countRef.current += 1; // No re-render
    console.log(countRef.current);
  };

  return (
    <>
      <input ref={inputRef} />
      <button onClick={focusInput}>Focus Input</button>
    </>
  );
};
```

**Use Cases:**

- Accessing DOM elements
- Storing timers/intervals
- Keeping mutable values without re-rendering

### 4. useContext - Global State

Shares state across components without prop drilling.

```jsx
import { createContext, useContext, useState } from "react";

// Create Context
const ThemeContext = createContext();

// Provider Component
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Consumer Component
const ThemedButton = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      Current: {theme}
    </button>
  );
};

// App Setup
const App = () => (
  <ThemeProvider>
    <ThemedButton />
  </ThemeProvider>
);
```

### 5. useReducer - Complex State Logic

Manages complex state with predictable updates.

```jsx
import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };
    case "decrement":
      return { ...state, count: state.count - 1 };
    case "reset":
      return { count: 0 };
    default:
      return state;
  }
};

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <h1>Count: {state.count}</h1>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
};
```

### 6. useId - Unique Accessibility IDs

Generates unique IDs for form elements.

```jsx
import { useId } from "react";

const RegistrationForm = () => {
  const id = useId();

  return (
    <form>
      <div>
        <label htmlFor={`${id}-username`}>Username:</label>
        <input type="text" id={`${id}-username`} />
      </div>
      <div>
        <label htmlFor={`${id}-email`}>Email:</label>
        <input type="email" id={`${id}-email`} />
      </div>
      <div>
        <label htmlFor={`${id}-password`}>Password:</label>
        <input type="password" id={`${id}-password`} />
      </div>
    </form>
  );
};
```

**Best Practice:** Use one `useId()` call with suffixes instead of multiple calls.

### 7. use Hook (React 19+)

Flexible context and promise reading with conditional support.

```jsx
import { use } from "react";

const Profile = ({ isLoggedIn }) => {
  // ✅ Can be called conditionally
  if (isLoggedIn) {
    const user = use(UserContext);
    return <h1>Welcome, {user.name}!</h1>;
  }

  return <div>Please log in</div>;
};
```

**Key Differences from useContext:**

| Feature           | useContext     | use        |
| ----------------- | -------------- | ---------- |
| Conditional calls | ❌ Not allowed | ✅ Allowed |
| Inside loops      | ❌ Not allowed | ✅ Allowed |
| Promise support   | ❌ No          | ✅ Yes     |
| React version     | All versions   | React 19+  |

### 8. useMemo & useCallback - Performance

Optimizes expensive calculations and function references.

```jsx
import { useMemo, useCallback, useState } from "react";

const ExpensiveComponent = ({ items }) => {
  // Memoize expensive calculation
  const total = useMemo(() => {
    return items.reduce((sum, item) => sum + item.price, 0);
  }, [items]);

  // Memoize function reference
  const handleClick = useCallback(() => {
    console.log("Clicked!");
  }, []);

  return <div>Total: {total}</div>;
};
```

**Difference:**

- `useMemo` → Caches computed **values**
- `useCallback` → Caches **function references**

---

## Form Handling & Storage

### Controlled Components

```jsx
import { useState } from "react";

const LoginForm = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    console.log(formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <input
        name="password"
        type="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Password"
      />
      <button>Submit</button>
    </form>
  );
};
```

### localStorage vs sessionStorage

| Feature  | localStorage               | sessionStorage         |
| -------- | -------------------------- | ---------------------- |
| Lifetime | Persistent (until cleared) | Session only           |
| Scope    | All tabs (same origin)     | Single tab             |
| Size     | ~5-10 MB                   | ~5 MB                  |
| Use Case | User preferences, tokens   | Temporary session data |

```jsx
// Store data
localStorage.setItem("user", JSON.stringify({ name: "Rayied", age: 25 }));

// Retrieve data
const user = JSON.parse(localStorage.getItem("user"));

// Remove item
localStorage.removeItem("user");

// Clear all
localStorage.clear();
```

---

## API Integration

### Using fetch()

```jsx
const fetchData = async () => {
  try {
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
};
```

### Using axios

```bash
npm install axios
```

```jsx
import axios from "axios";

const fetchData = async () => {
  try {
    const response = await axios.get("https://api.example.com/data");
    console.log(response.data);
  } catch (error) {
    console.error("Error:", error);
  }
};

// POST request
const createUser = async () => {
  try {
    const response = await axios.post("https://api.example.com/users", {
      name: "Rayied",
      email: "rayied@example.com",
    });
    console.log(response.data);
  } catch (error) {
    console.error("Error:", error);
  }
};
```

**Comparison:**

| Feature        | fetch()   | axios               |
| -------------- | --------- | ------------------- |
| Built-in       | ✅ Yes    | ❌ Requires install |
| JSON parsing   | ❌ Manual | ✅ Automatic        |
| Interceptors   | ❌ No     | ✅ Yes              |
| Error handling | Basic     | Advanced            |

---

## React Router

### Installation

```bash
npm install react-router-dom@6
```

### Basic Setup

```jsx
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
```

### Dynamic Routes

```jsx
import { useParams, useNavigate } from "react-router-dom";

const UserProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div>
      <h1>User ID: {id}</h1>
      <button onClick={() => navigate("/")}>Go Home</button>
    </div>
  );
};

// Route definition
<Route path="/users/:id" element={<UserProfile />} />;
```

### Router Types

| Router        | Use Case                               |
| ------------- | -------------------------------------- |
| BrowserRouter | Standard web apps with server support  |
| HashRouter    | Static hosting without server fallback |
| MemoryRouter  | Testing or non-DOM environments        |

---

## Context API

### Complete Example

```jsx
// 1. Create Context
import { createContext, useState } from "react";

export const ThemeContext = createContext();

// 2. Provider Component
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// 3. Wrap App
import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);

// 4. Consume Context
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const ThemedComponent = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className={theme}>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Toggle Theme
      </button>
    </div>
  );
};
```

---

## Performance Optimization

### Lazy Loading with Suspense

```jsx
import { lazy, Suspense } from "react";

const Dashboard = lazy(() => import("./Dashboard"));
const Settings = lazy(() => import("./Settings"));

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Suspense>
  );
};
```

### Infinite Scrolling

```jsx
import { useEffect, useRef, useState } from "react";

const InfiniteList = ({ fetchPage }) => {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const loaderRef = useRef(null);

  useEffect(() => {
    fetchPage(page).then(({ data, more }) => {
      setItems((prev) => [...prev, ...data]);
      setHasMore(more);
    });
  }, [page]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPage((prev) => prev + 1);
        }
      },
      { threshold: 1 }
    );

    if (loaderRef.current) observer.observe(loaderRef.current);
    return () => observer.disconnect();
  }, [hasMore]);

  return (
    <div>
      {items.map((item, i) => (
        <div key={i}>{item.title}</div>
      ))}
      <div ref={loaderRef} />
    </div>
  );
};
```

---

## TanStack Query (React Query)

### What is TanStack Query?

A powerful library for managing **server-side state** in React applications with features like:

- ✅ Automatic caching
- ✅ Background refetching
- ✅ Built-in loading/error states
- ✅ Pagination & infinite scrolling
- ✅ Optimistic updates

### Installation

```bash
npm install @tanstack/react-query
npm install @tanstack/react-query-devtools
```

### Setup

```jsx
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <YourApp />
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
);
```

### useQuery - Fetching Data

```jsx
import { useQuery } from "@tanstack/react-query";

const fetchPosts = async () => {
  const response = await fetch("https://api.example.com/posts");
  return response.json();
};

const PostsList = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <ul>
      {data.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
};
```

### Configuration Options

```jsx
const { data } = useQuery({
  queryKey: ["posts"],
  queryFn: fetchPosts,
  staleTime: 10000, // Data fresh for 10s
  gcTime: 300000, // Cache for 5 min
  refetchInterval: 5000, // Poll every 5s
  refetchIntervalInBackground: true,
});
```

### Dynamic Queries

```jsx
import { useParams } from "react-router-dom";

const PostDetail = () => {
  const { id } = useParams();

  const { data } = useQuery({
    queryKey: ["post", id],
    queryFn: () => fetchPost(id),
  });

  return <div>{data?.title}</div>;
};
```

### Pagination

```jsx
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { useState } from "react";

const PaginatedPosts = () => {
  const [page, setPage] = useState(0);

  const { data } = useQuery({
    queryKey: ["posts", page],
    queryFn: () => fetchPosts(page),
    placeholderData: keepPreviousData,
  });

  return (
    <div>
      <ul>
        {data?.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
      <button onClick={() => setPage((p) => Math.max(0, p - 1))}>
        Previous
      </button>
      <button onClick={() => setPage((p) => p + 1)}>Next</button>
    </div>
  );
};
```

### useMutation - Modifying Data

```jsx
import { useMutation, useQueryClient } from "@tanstack/react-query";

const PostManager = () => {
  const queryClient = useQueryClient();

  // Delete mutation
  const deleteMutation = useMutation({
    mutationFn: (id) => deletePost(id),
    onSuccess: (data, id) => {
      // Update cache
      queryClient.setQueryData(["posts"], (oldData) =>
        oldData.filter((post) => post.id !== id)
      );
    },
  });

  // Update mutation
  const updateMutation = useMutation({
    mutationFn: ({ id, data }) => updatePost(id, data),
    onSuccess: (apiData, { id }) => {
      queryClient.setQueryData(["posts"], (oldData) =>
        oldData.map((post) => (post.id === id ? { ...post, ...apiData } : post))
      );
    },
  });

  return (
    <div>
      <button onClick={() => deleteMutation.mutate(postId)}>Delete</button>
      <button onClick={() => updateMutation.mutate({ id, data })}>
        Update
      </button>
    </div>
  );
};
```

### Infinite Scrolling with useInfiniteQuery

```jsx
import { useInfiniteQuery } from "@tanstack/react-query";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const InfiniteUsers = () => {
  const { data, hasNextPage, fetchNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ["users"],
      queryFn: ({ pageParam = 1 }) => fetchUsers(pageParam),
      getNextPageParam: (lastPage, allPages) =>
        lastPage.length === 10 ? allPages.length + 1 : undefined,
    });

  const { ref, inView } = useInView({ threshold: 1 });

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage]);

  return (
    <div>
      {data?.pages.map((page, i) => (
        <div key={i}>
          {page.map((user) => (
            <div key={user.id}>{user.name}</div>
          ))}
        </div>
      ))}

      <div ref={ref}>
        {isFetchingNextPage
          ? "Loading..."
          : hasNextPage
          ? "Load more"
          : "No more"}
      </div>
    </div>
  );
};
```

### TanStack Query Summary

| Feature            | Hook                | Purpose                  |
| ------------------ | ------------------- | ------------------------ |
| Fetch data         | `useQuery`          | GET requests             |
| Modify data        | `useMutation`       | POST, PUT, DELETE        |
| Infinite scroll    | `useInfiniteQuery`  | Progressive data loading |
| Invalidate cache   | `invalidateQueries` | Force refetch            |
| Optimistic updates | `setQueryData`      | Instant UI updates       |

---

## Quick Reference Tables

### Hook Comparison

| Hook        | Purpose           | Re-renders? |
| ----------- | ----------------- | ----------- |
| useState    | Local state       | ✅ Yes      |
| useEffect   | Side effects      | ❌ No       |
| useRef      | Mutable values    | ❌ No       |
| useContext  | Global state      | ✅ Yes      |
| useReducer  | Complex state     | ✅ Yes      |
| useMemo     | Memoize values    | ❌ No       |
| useCallback | Memoize functions | ❌ No       |

### When to Use What

| Scenario                  | Solution              |
| ------------------------- | --------------------- |
| Simple counter            | useState              |
| API data fetching         | useQuery (TanStack)   |
| Form inputs               | useState + controlled |
| Global theme              | useContext            |
| Complex form state        | useReducer            |
| Expensive calculations    | useMemo               |
| Child component callbacks | useCallback           |
| Pagination                | useQuery + page state |
| Infinite scroll           | useInfiniteQuery      |

---

## Best Practices

### General React

1. ✅ Use functional components with hooks
2. ✅ Keep components small and focused
3. ✅ Use meaningful variable names
4. ✅ Always handle loading and error states
5. ✅ Memoize expensive operations
6. ✅ Use proper key props in lists
7. ✅ Clean up side effects in useEffect
8. ✅ Avoid inline function definitions in JSX

### TanStack Query

1. ✅ Use unique, descriptive queryKeys
2. ✅ Configure staleTime and gcTime appropriately
3. ✅ Implement error boundaries
4. ✅ Use placeholderData for smooth pagination
5. ✅ Invalidate queries after mutations
6. ✅ Keep queryFn functions pure
7. ✅ Enable React Query DevTools in development
8. ✅ Handle loading states with Suspense boundaries

---

## Production Build

```bash
npm run build
```

This creates an optimized production build in the `dist` folder. Deploy this folder to your hosting service.

---

## Additional Resources

- [React Documentation](https://react.dev)
- [TanStack Query Docs](https://tanstack.com/query/latest)
- [React Router Documentation](https://reactrouter.com)
- [MDN Web Docs](https://developer.mozilla.org)

---

**© 2025 — Complete React + TanStack Query Guide**
vitest:
npm install --save-dev vitest @testing-library/react @testing-library/user-event @testing-library/jet-dom jsdom
