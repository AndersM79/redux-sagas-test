import { resolve } from "upath";

const fakeToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.3iZpOPe0sDZTreFdC3h-6c-5H7OBsHPb4cHhv8YqUOE";

const authorize = (user, password) => {
    console.log('doing login!!..')
    return new Promise(res =>
        fetch('https://randomuser.me/api/')
            .then(response => response.json())
            .then(users => {
                let data = {}
                users.results.forEach(user => {
                    data = {
                        name: user.name.first,
                        email: user.email,
                        token: fakeToken
                    }
                })
                res(data);
            })
    )
}

const storeItem = (token) => {
    console.log('guardando token..');
    localStorage.setItem('token', token);
};

const clearItem = (key) => {
    console.log('Eliminando Token..');
    localStorage.removeItem(key);
};

export default {
    authorize,
    storeItem,
    clearItem
}