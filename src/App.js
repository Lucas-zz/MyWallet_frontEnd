import { GlobalStyle } from "./style";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserContext from "./contexts/UserContext";
import { useState } from "react";

import SignInPage from './pages/SignInPage';
import SignUpPage from "./pages/SignUpPage";
import ExtractPage from "./pages/ExtractPage/index";
import PlusValuePage from "./pages/PlusValuePage";
import MinusValuePage from "./pages/MinusValuePage";

export default function App() {
    const [token, setToken] = useState('');
    const [user, setUser] = useState(null);
    const [isLoading, setLoading] = useState(false);

    return (
        <UserContext.Provider value={{ token, setToken, user, setUser, isLoading, setLoading }}>
            <GlobalStyle />
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<SignInPage />} />
                    <Route path='/cadastro' element={<SignUpPage />} />
                    <Route path='/principal' element={<ExtractPage />} />
                    <Route path='/add' element={<PlusValuePage />} />
                    <Route path='/remove' element={<MinusValuePage />} />
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    );
}