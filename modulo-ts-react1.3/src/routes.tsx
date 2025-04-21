import { createBrowserRouter } from "react-router";

import { Home } from './pages/home'
import { Sobre } from "./pages/sobre";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/sobre",
        element: <Sobre />
    }

])

export { router }