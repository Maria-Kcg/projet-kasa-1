import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Error from "./pages/Error";
import Logement from "./pages/Logement";

function Routeur() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/logement" element={<Logement/>} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<Error />} />
            </Route>
        </Routes>
    )
}

export default Routeur;