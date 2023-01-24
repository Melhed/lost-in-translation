const apiKey = process.env.REACT_APP_API_KEY;
const apiURL = process.env.REACT_APP_API_URL;

// Posts the translations of the user.
function postTranslation(signs, uid) {
    fetch(`${apiURL}/${uid}`, {
        method: "PATCH",
        headers: {
            "X-API-Key": apiKey,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            translations: signs
        })
    })
    .then(res => {
        if(!res.ok) throw new Error("Couldn't update translation history.");
        return res.json();
    })
    .catch(err => console.log(err));
}

export const translation = {
    postTranslation,
}