import { GlobalStyle } from "./style";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserContext from "./contexts/UserContext";
import { useState } from "react";

import SignInPage from './components/SignInPage';
import SignUpPage from "./components/SignUpPage";
import ExtractPage from "./components/ExtractPage";
import AddValorPage from "./components/AddValorPage";
import RemoveValorPage from "./components/RemoveValorPage";

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
                    <Route path='/add' element={<AddValorPage />} />
                    <Route path='/remove' element={<RemoveValorPage />} />
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    );
}