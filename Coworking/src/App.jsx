import './App.css'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Coworkings from "./pages/Coworkings.jsx";
import Coworking from "./pages/Coworking.jsx";
import Profile from "./pages/Profile.jsx";
import EditCoworkings from "./pages/EditCoworkings.jsx";
import axios from "axios";

function App() {
    axios.defaults.withCredentials = true;

    const router = createBrowserRouter([
        {
            path: '/',
            element: <Home />
        },
        {
            path: '/coworkings',
            element: <Coworkings />,
        },
        {
            path: '/coworkings/:id',
            element: <Coworking />,
        },
        {
            path: '/profile',
            element: <Profile />
        },
        {
            path: '/profile/edit',
            element: <EditCoworkings />
        }
    ]);
    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}

export default App
