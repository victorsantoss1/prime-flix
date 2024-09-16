import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Filme from "./pages/filme";
import Header from "./components/Header";
import Erro from "./pages/erro";
import Favoritos from "./pages/Favoritos";

function RoutesApp(){
    return(
        <BrowserRouter>
        <Header></Header>
        <Routes>
            <Route path="/"element={<Home></Home>}></Route>
            <Route path="/filme/:id"element={<Filme></Filme>}></Route>
            <Route path="/favoritos" element={<Favoritos></Favoritos>}></Route>



            <Route path="*" element={<Erro></Erro>}></Route>
        </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;