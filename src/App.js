import './App.css';
import Header from "./components/Header";
import Section from "./components/Wallpapers/Section";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import About from "./components/About";
import Notes from "./components/Notes/Notes";
import Footer from "./components/Footer";

function App() {
    return (
        <BrowserRouter>
            <div className="wrapper">
                <Header/>
                {/*<Section/>*/}
                <section>
                    <Routes>
                        <Route path = ""  element={<Notes/>}/>
                        <Route path = "/about" element = {<About/>}/>
                    </Routes>
                    <Footer/>
                </section>
            </div>
        </BrowserRouter>
    );
}

export default App;
