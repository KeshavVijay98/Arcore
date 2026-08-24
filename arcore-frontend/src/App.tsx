import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./pages/signup/signup";
import Login from "./pages/login/login";

function App() {
    return (
        <BrowserRouter>
            <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;