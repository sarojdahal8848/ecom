import { Link, Outlet } from "react-router-dom"

function App() {
  return (
    <>
    <ul className="flex items-center justify-center gap-5">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </ul>

    <Outlet />
    </>
  )
}

export default App
