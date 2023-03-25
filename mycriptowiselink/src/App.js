import "./App.css";

//Componentes Importados
import { Navbar } from "./componentes/Navbar";
import { Home } from "./componentes/Home";
import { Wallet } from "./componentes/Wallet";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                                <Navbar />

                                <Home />
                            </>
                        }
                    ></Route>

                    <Route
                        path="/myWallet"
                        element={
                            <>
                            <Navbar />
                                <Wallet />
                            </>
                        }
                    ></Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
