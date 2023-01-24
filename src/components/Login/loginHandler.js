const apiURL = process.env.REACT_APP_API_URL;
const apiKey = process.env.REACT_APP_API_KEY;

// Fetches and returns user by username, if no such user exists it runs registerUser().
async function fetchUser(username) {
    const user = await fetch(`${apiURL}?username=${username}`)
    .then(res => res.json())
    .then(results => {
        if(!results[0]) return registerUser(username);
        return results[0];
    })
    .catch(err => console.log(err))

    return user;
}

// Registers new user and returns the user object. 
async function registerUser(username) {
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
    fetchUser,
}