import { Suspense } from "react"
import React from "react"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import { Outlet } from "react-router-dom"
// const Home = React.lazy(() => import("./pages/Home"))
function App() {
  return (
    <>

      <Suspense fallback={<div>Loading...</div>}>
        <Navbar />
        <Outlet />
        <Footer/>
      </Suspense>
    </>
  )
}

export default App
