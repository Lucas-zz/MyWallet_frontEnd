import axios from 'axios';

const BASE_URL = 'http://localhost:5000';

function createHeaders(token) {
    return { headers: { Authorization: `Bearer ${token}` } };
}

async function signIn(user) {
    const promise = await axios.post(`${BASE_URL}/sign-in`, {
        email: user.email,
        password: user.password,
    });

    return promise;
}

async function signUp(user) {
    const promise = await axios.post(`${BASE_URL}/sign-up`, {
        name: user.name,
        email: user.email,
        password: user.password,
    });

    return promise;
}

async function getEntries(token) {
    const auth = createHeaders(token);

    const promise = await axios.get(`${BASE_URL}/entries`, auth);

    return promise;
}

async function postEntry(newEntry, token) {
    const auth = createHeaders(token);

    const promise = await axios.post(`${BASE_URL}/entry`, newEntry, auth);

    return promise;
}

async function deleteEntry(id, token) {
    const auth = createHeaders(token);

    const promise = await axios.delete(`${BASE_URL}/entry/${id}`, auth);

    return promise;
}

const api = {
    signIn,
    signUp,
    postEntry,
    deleteEntry,
    getEntries,
}

export default api;