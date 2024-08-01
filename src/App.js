import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./component/Header";
import NotFound from "./page/NotFound";
import Home from "./page/Home";
import BoardList from "./page/BoardList";
import BoardOne from "./page/BoardOne";
import Footer from "./component/Footer";
import BoardWrite from "./page/BoardWrite";
import CustomEditor from "./component/CustomEditor";

function App() {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/BoardList"} element={<BoardList/>}/>
                <Route path={"/BoardOne"} element={<BoardOne/>}/>
                <Route path={"/BoardWrite"} element={<BoardWrite/>}/>
                <Route path={"/CustomEditor"} element={<CustomEditor/>}/>
                <Route path={"*"} element={<NotFound/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    );
}

export default App;
