# react-router-full

**Developed by** **`Grace Chen Abudi`** 👩🏽‍💻

## 📣 Overview:

- Intro
- Tech Stack
- Techniques
- How to Get Started
- Additional Link

## 🔎 Intro:

**`react-router-full`**: A practice project in React, displaying multi-page SPA with React Router along basic Backend API.

## 🧰 Tech Stack:

- React
- React Router Dom v6
- JavaScript
- NodeJS + NodeJS Libraries
- ExpressJS
- CSS Modules

## 🛠️ Techniques:

- **`React Hooks`**:

  - **_useParams_**: This hook gives an access to multiple contents in the same URL path, then it enables each parameter to have a unique identification.

- **`React Components`**:

  - **_Suspense_**: Is a built-in React component which lets us temporarily render a fallback UI while its children are still loading.

- **`React Router Dom Hooks`**:

  - **_useLoaderData_**: Is a hook that helps to fetch the data for the component before it renders. It improves performance and prevents empty states.

    **`Note`**: This hook can be used only in the element that's assigned to a route **AND** in all components that might be used inside that element but not on a higher level route.

  - **_useRouteLoaderData_**: Is a hook that efficiently manages loading states and data for specific routes. It optimizes rendering by fetching data only when needed, enhancing user experience.
  - **_useNavigate_**: Is a hook that returns a function that lets you navigate programmatically.
  - **_useRouteError_**: This hook returns anything during an action, loader, or rendering inside of an **errorElement**
  - **_useSubmit_**: Is a hook that enables form submission programmatically. It returns a function that mimics a form submission without needing a form element.

- **`React Router Dom Components`**:
  - **_NavLink_**: Is used for navigation between pages.
  - **_Outlet_**: Is a component provided by React Router that serves as a placeholder for child routes within a parent route.
  - **_Await_**: Is a component that designed to handle the rendering of deferred values with automatic error handling.
- **_defer_**: Is a utility that allows us to defer values returned from loaders by passing promises instead of resolved values.
- Nested Routes, Indexed Routes, and Dynamic Routes.
- Relative Paths
- Handling Errors, and utilize Custom Error Handler.
- **_loader_**: **loader** function can be define in each route to provide data to the route element before it renders.
- **_redirect_**: When returning or throwing responses in loaders and actions, we can use **redirect** to redirect to another route.

  **`Note`**: It's recommended to use **redirect** in loaders and actions rather than **useNavigate** in your components when the **redirect** is in response to data.

- **_Validate_** user input and **_Handle Validation Errors_**.

---

# ✨ How to Get Started:

## **`1.`** Clone Project:

```bash

git clone https://github.com/Chen-Abudi/react-router-full

```

## **`2.`** Enter the project directory:

```bash

cd react-router-full

```

## **`3.`** Then enter the frontend folder:

```bash

cd frontend

```

## **`4.`** Install the Dependencies in **Frontend Folder**:

```bash

npm install

```

**_or in short_**

```bash

npm i

```

## **`5.`** Do the same for the Backend, First enter the project directory:

```bash

cd backend

```

## **`6.`** Then install the dependencies:

```bash

npm install

```

**_or in short_**

```bash

npm i

```

## 🧠 **_`Don't forget to add .gitignore to both folders`_**!

## 🚀 **`7.`** Launch for the Frontend mode:

```bash

npm run start

```

## 🚀 **`8.`** And in separate terminal, Launch the Backend server:

```bash

node app.js

```

---

## 🔗 Additional Link:

If you want to strengthen your knowledge and skills of **React, Redux, and more...** along the **Best Practices**, Feel free to check this course on Udemy by **`Maximilian Schwarzmüller`**:

## Visit the Course [&#128073;&#127997; **HERE !**](https://www.udemy.com/course/react-the-complete-guide-incl-redux/)

**_`Shoutout to Maximilian Schwarzmüller for the practice projects, all the lectures, the exercises, and the React course in Udemy. Mahalo, Thank you!`_** 🌺
