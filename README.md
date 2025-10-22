# ⚛️ ReactJS + Vite Notes

---

## 🧠 What is ReactJS?

- **ReactJS** is a **JavaScript library** used to build **User Interfaces (UI)** or **Frontends**, especially **complex** and **dynamic** ones.
- It was **developed by Meta (Facebook)** in **2013**.

---

## 💡 Why ReactJS?

### Problem (Before React):

On Facebook, to update:

- 🔔 Notification count → had to reload the page.
- 💬 Message count → had to reload the page.
- 👥 Friend request count → had to reload the page.

Reloading made the experience **slow** and **inefficient**.

---

### Solution: ReactJS

- React introduced a **Component-Based Architecture**.
- Each part of the UI (button, navbar, profile card, etc.) is treated as a **component**.
- When data changes, **only that component re-renders**, not the whole page.

---

## 🧩 Vite + React Setup

1. Create a new Vite project:

   ```bash
   npm create vite
   ```

2. Install dependencies:

   ```bash
   npm i
   ```

3. Run the development server:

   ```bash
   npm run dev
   ```

---

## 🏗️ File Structure

- **index.html** → Parent of `main.jsx` _(grandparent of `App.jsx`)_
- **main.jsx** → Parent of `App.jsx`
- **App.jsx** → Child component

> 💡 In `main.jsx`, remove **React.StrictMode** if not needed.

---

## 📤 Exporting Components

- Use `export default` when exporting **only one** component or function per file.

Example:

```jsx
const App = () => {
  return <h1>Hello React!</h1>;
};

export default App;
```

---

## ⚡ JSX (JavaScript XML)

- JSX = **HTML + JavaScript**
- It allows you to **write HTML-like syntax** inside JavaScript files.

Example:

```jsx
const App = () => {
  const name = "Rayied";
  return <h1>Hello {name}!</h1>;
};
```

---

## 🌳 Real DOM vs Virtual DOM

### 🧱 Real DOM

- Represents the **actual structure** of the HTML document.
- Every small change **re-renders the entire page**.
- Causes **slow performance** (like Facebook’s old reload issue).

### ⚙️ Virtual DOM

- A **lightweight copy** of the Real DOM.
- React makes changes to the **Virtual DOM first**.
- It **compares** (diffing algorithm) with the Real DOM.
- Then **updates only the changed parts** → **no full re-render**.

✅ **Faster performance** and **smoother UI**.

---

## ⚛️ React Component Shortcuts

- **Shortcut:** `rafce` → Creates a React Arrow Function Component with Export.

Example:

```jsx
const App = () => {
  return <div>Hello World</div>;
};

export default App;
```

---

## 🧠 Returning Multiple Elements

- A React component **must return only one parent element**.
- To return **multiple elements**, wrap them in a single parent tag like `<div>` **or** use **fragments**.

### ✅ Example using `<div>`:

```jsx
function App() {
  return (
    <div>
      <h1>Hello</h1>
      <h2>World</h2>
    </div>
  );
}
```

### ✅ Example using **Fragments** (`<> </>`):

```jsx
function App() {
  return (
    <>
      <div id="dad">
        <h1 id="child1">App</h1>
        <h1 id="child2">Hello</h1>
      </div>
      <div id="chacha"></div>
    </>
  );
}
```

---

## 🧹 ESLint

- **ESLint** helps maintain code quality.
- It allows creating **custom rules** to enforce consistent coding style and catch potential errors.

---

## 🧩 Components

- A **component** is a small, reusable piece of code used for a specific feature or UI part.
- React applications follow a **component-based architecture**.

### Example Folder Structure:

```
src/
 ├── components/         # Small, reusable features
 │   ├── Navbar.jsx
 │   ├── Button.jsx
 │   └── Card.jsx
 ├── App.jsx
 ├── main.jsx
 └── index.html
```

> 🏗️ **Feature-based or Atomic Design structures** are preferred for **scalable** and **maintainable** projects.

---

## 🧭 Props in React

### 💬 What are Props?

- **Props** (short for _properties_) are used to **pass data from one component to another**.
- They make components **reusable and dynamic**.
- Data flow in React is **one-directional** (from **parent → child**).

---

### ⚙️ Props Drilling

- **Props drilling** means passing data **from parent to child**, and sometimes **through multiple layers** of components.

Example:

```
App → Card → Image
```

- Data can **flow downward (parent → child)**.
- Data **cannot** flow **upward (child → parent)**.

---

### 🧩 Example: Passing Props

#### 📁 App.jsx (Parent)

```jsx
import Card from "./components/Card";

function App() {
  return (
    <div className="parent">
      <Card
        user="Rayied"
        age={25}
        image="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=1470"
      />
      <Card
        user="Aman"
        age={18}
        image="https://images.unsplash.com/photo-1625786682948-2168238883d2?auto=format&fit=crop&q=80&w=687"
      />
      <Card
        user="Sarthak"
        age={21}
        image="https://plus.unsplash.com/premium_photo-1669635062493-cd4806e9b5d6?auto=format&fit=crop&q=80&w=687"
      />
    </div>
  );
}

export default App;
```

---

#### 📁 Card.jsx (Child)

```jsx
const Card = (props) => {
  console.log(props); // Logs the entire props object
  console.log(props.user); // Logs individual values

  return (
    <div className="card">
      <img src={props.image} alt={props.user} />
      <h1>
        {props.user} : {props.age}
      </h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <button>View Profile</button>
    </div>
  );
};

export default Card;
```

---

### 🧩 Props as Objects

- In React, all props are received as a **single object**.
- You can access each value using `props.propertyName`.

Example:

```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}!</h1>;
}
```

---

### 🪄 Destructuring Props (Cleaner Code)

Instead of `props.user` or `props.age`, you can destructure them:

```jsx
const Card = ({ user, age, image }) => {
  return (
    <div className="card">
      <img src={image} alt={user} />
      <h1>
        {user} : {age}
      </h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <button>View Profile</button>
    </div>
  );
};
```

---

### 🧱 Data Flow Summary

| Direction         | Description                                          |
| ----------------- | ---------------------------------------------------- |
| ⬇️ Parent → Child | Data passed via props                                |
| ⬆️ Child → Parent | Not possible directly (use state lifting or context) |

---

## 🗂️ Summary Table

| Concept           | Description                                   |
| ----------------- | --------------------------------------------- |
| ReactJS           | JS library for building UI (by Meta, 2013)    |
| Component-Based   | Each UI part is a reusable component          |
| Virtual DOM       | Faster, only updates changed parts            |
| JSX               | Mix of HTML + JavaScript                      |
| `npm create vite` | Creates a new Vite project                    |
| `npm run dev`     | Runs development server                       |
| `rafce`           | React Arrow Function Component shortcut       |
| Fragments         | Used to return multiple elements              |
| ESLint            | Helps write cleaner code                      |
| Components Folder | Store small, reusable features                |
| Props             | Pass data from parent to child components     |
| Props Drilling    | Data passed through multiple component levels |

---

✅ **Key Takeaway:**  
React’s **component-based** and **one-way data flow** structure makes it efficient, reusable, and scalable for modern UI development.
