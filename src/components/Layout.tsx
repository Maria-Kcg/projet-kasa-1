import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function Layout() {
    return (
        <>
            <Header />

            <main>
                <Outlet />
            </main>

            <Header />
        </>
    )
}

export default Layout;