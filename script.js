// In questo esercizio, utilizzerai async/await per creare la funzione getChefBirthday(id).
// Questa funzione accetta un id di una ricetta e deve:
// Recuperare la ricetta da https://dummyjson.com/recipes/{id}
// Estrarre la proprietà userId dalla ricetta
// Usare userId per ottenere le informazioni dello chef da https://dummyjson.com/users/{userId}
// Restituire la data di nascita dello chef

// Note del docente
// Scrivi la funzione getChefBirthday(id), che deve:

// Essere asincrona (async).
// Utilizzare await per chiamare le API.
// Restituire una Promise con la data di nascita dello chef.
// Gestire gli errori con try/catch


async function fetchData(url) {
    const getIdFromUrl = await fetch(url);
    const data = await getIdFromUrl.json();
    return data;
}

async function getChefBirthday(id) {

    try {

        const getRecipe = await fetchData(`https://dummyjson.com/recipes/${id}`);
        const getChefId = await fetchData(`https://dummyjson.com/users/${getRecipe.userId}`);
        const getChefBirthday = getChefId.birthDate;
        return getChefBirthday;

    } catch (error) {

        throw new Error(`Non posso recuperare la data di nascita dello chef ${error.message}`)

    }

}


getChefBirthday(1)
    .then(result => console.log(" Data di nascita dello chef:", result))
    .catch(error => console.error(error.message))
