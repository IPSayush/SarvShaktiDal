import { Suspense } from "react"
import React from "react"
import Navbar from "./components/Navbar"
const Home = React.lazy(() => import("./pages/Home"))
function App() {
  return (
    <>
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <Home/>
      </Suspense>
    </>
  )
}

export default App
