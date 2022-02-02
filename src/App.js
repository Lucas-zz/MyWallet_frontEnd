import { GlobalStyle } from "./style";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserContext from "./contexts/UserContext";
import { useState } from "react";

import SignInPage from './components/SignInPage';
import SignUpPage from "./components/SignUpPage";

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
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    );
}