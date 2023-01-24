const apiURL = process.env.REACT_APP_API_URL;
const apiKey = process.env.REACT_APP_API_KEY;

// Clears all translations and returns new user object. 
async function clearTranslations(uid) {
    const newUser = await fetch(`${apiURL}/${uid}`, {
        method: "PATCH",
        headers: {
            "X-API-KEY": apiKey,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            translations: []
        })
    })
    .then(res => {
        if(!res.ok) throw new Error("ERROR: Couldn't clear translation history.")
        return res.json();
    })
    .then(user => user)
    .catch(err => console.log(`ERROR: ${err}`));

    return newUser;
}

export const profile = {
    clearTranslations,
}