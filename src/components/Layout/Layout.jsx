import { Outlet } from "react-router-dom";
import cl from './Layout.module.scss'

const Layout = () => {
    return (
        <div className="container">
            <Outlet />
        </div>
    )
}

export { Layout }