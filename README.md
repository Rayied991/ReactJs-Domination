# ⚛️ ReactJS Domination

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

## 🗂️ Summary

| Concept           | Description                                |
| ----------------- | ------------------------------------------ |
| ReactJS           | JS library for building UI (by Meta, 2013) |
| Component-Based   | Each UI part is a reusable component       |
| Virtual DOM       | Faster, only updates changed parts         |
| JSX               | Mix of HTML + JavaScript                   |
| `npm create vite` | Creates a new Vite project                 |
| `npm run dev`     | Runs development server                    |
| `rafce`           | React Arrow Function Component shortcut    |
| Fragments         | Used to return multiple elements           |
| ESLint            | Helps write cleaner code                   |
| Components Folder | Store small, reusable features             |

---
