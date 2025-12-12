import { Suspense, lazy } from "react"
import { Outlet } from "react-router-dom"

const Navbar = lazy(() => import("./components/Navbar.jsx"))
const Footer = lazy(() => import("./components/Footer.jsx"))

function App() {
  return (
    <Suspense fallback={<div className="flex items-center justify-center h-screen"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div></div>}>
      <Navbar />
      <Outlet />
      <Footer />
    </Suspense>
  )
}

export default App
