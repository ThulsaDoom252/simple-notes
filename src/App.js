import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Section from "./components/Main/Section";

function App() {
    return (
        <div className="wrapper">
            <Header/>
            <Section/>
            <Footer/>
        </div>
    );
}
export default App;
