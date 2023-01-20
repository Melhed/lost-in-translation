const apiKey = process.env.REACT_APP_API_KEY;
const apiURL = process.env.REACT_APP_API_URL;

function postTranslation(signs, user) {
    fetch(`${apiURL}/${user.id}`, {
        method: "PATCH",
        headers: {
            "X-API-Key": apiKey,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            translations: [signs]
        })
    })
    .then(res => {
        if(!res.ok) {
            throw new Error("Couldn't update translation history.");
        }
        return res.json();
    })
    .then(updatedUser => {
        return updatedUser;
    })
    .catch(err => console.log(err));
}

export const translation = {

}