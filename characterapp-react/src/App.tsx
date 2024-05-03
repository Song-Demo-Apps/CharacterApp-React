import './App.css'
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import AllCharacterPage from './pages/AllCharacterPage'
import Navbar from './components/Navbar'
import CharacterDetailPage from './pages/CharacterDetailPage';
import NotFound from './components/NotFound';

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
    errorElement: <NotFound />,
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
