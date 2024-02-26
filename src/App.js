import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import './App.css';
import { Header } from './header';
import { Home } from './home';
import { useState } from "react";

export default function App() {
    const [navBarIsOpened, setOpeningOfNavBar] = useState(false);
    return <>
        <BrowserRouter>
            <Header isOpened={navBarIsOpened} setOpening={setOpeningOfNavBar}/>
                <Routes>
                    <Route path="/" element={<Home isOpened={navBarIsOpened} setOpening={setOpeningOfNavBar}/>}/>
                </Routes>
        </BrowserRouter>
    </>
}