import { GlobalStyle } from "./style";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserContext from "./contexts/UserContext";
import { useState } from "react";

import SignInPage from './components/SignInPage';

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
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    );
}