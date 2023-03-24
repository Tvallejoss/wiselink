
import "./App.css";

//Componentes Importados
import { Navbar } from "./componentes/Navbar"
import { Home } from "./componentes/Home"

function App() {
    return <div className="App">

        <Navbar/>

            <Home/>
    </div>;
}

export default App;
