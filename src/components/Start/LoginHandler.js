const apiURL = `https://melhed-assignment-api.up.railway.app/translations`;
const apiKey = `imciemfkmcsdfasdiocmadjicefmwcjxgkgkdhmvz`;

async function checkUser(username) {
    const user = await fetch(`${apiURL}?username=${username}`)
    .then(res => res.json())
    .then(results => {
        if(!results[0]) return createUser(username);
        return results[0];
    })
    .catch(err => console.log(err))

    return user;
}

async function createUser(username) {
    const user = await fetch(`${apiURL}`, {
        method: "POST",
        headers: {
            "X-API-KEY": apiKey,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username: username,
            translations: []
        })
    })
    .then(res => {
        if(!res.ok) throw new Error("Couldn't create a new user");
        return res.json() 
    })
    .then(user => user)
    .catch(err => console.log(err));

    return user;
}

export const loginHandler = {
    checkUser,
    createUser,
}