import { Outlet } from "react-router"
import { Header } from "../../components/header"

export function Layout() {
    return (
        <>
            <Header />
            <Outlet />
            <br /> <br /> <br />
            <footer>
                <span>Todos direitos reservados @2025</span>
            </footer>
        </>
    )
}