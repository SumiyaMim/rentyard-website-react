import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"

const App = () => {
  return (
    <div className="font-fustat">
      <Navbar />
      <Outlet />
    </div>
  )
}

export default App
