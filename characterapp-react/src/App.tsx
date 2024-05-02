import './App.css'
import {
  BrowserRouter,
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import AllCharacterPage from './pages/AllCharacterPage'
import Navbar from './components/Navbar'
import CharacterDetailPage from './pages/CharacterDetailPage';

const AppLayout = () => (
  <>
    <Navbar />
    <div className="container">
      <Outlet />
    </div>
  </>
);
const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/character/:characterId",
        element: <CharacterDetailPage/>
      },
      {
        path: "/",
        element: <AllCharacterPage />,
      }
    ]
  },
])
function App() {
  return <RouterProvider router={router}/>
}

export default App
