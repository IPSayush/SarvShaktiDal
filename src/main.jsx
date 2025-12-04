import { StrictMode } from 'react'
import React from 'react'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import './index.css'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import News from './pages/News.jsx'
import Donate from './pages/Donate.jsx'
import Gallery from './pages/Gallery.jsx'
import Join from './pages/Join.jsx'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "news", element: <News /> },
      { path: "donate", element: <Donate /> },
      { path: "gallery", element: <Gallery /> },
      { path: "join", element: <Join /> },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);