import { createBrowserRouter,RouterProvider } from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Home from "./pages/Home"
import RoomDetails from "./pages/RoomDetails"
function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home/>
    },
    {
      path: '/room/:id',
      element: <RoomDetails/>
    }
  ])
  return (
    <>
      <Header/>
      <RouterProvider router={router}/>
      <Footer/>
    </>
  )
}

export default App
