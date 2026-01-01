import { sortPlayers } from './helper'

/**
 * Gets the top n users
 * @param {Number} top the number of players to fetch 
 * @returns {Array<Object>} an array with the fetched players
 */
async function fetchTopUsers(top, filter) {
    // const URL = `https://wordleapi-qhp7.onrender.com/players`;
    const URL = `http://localhost:8080/players`;

    try {
        const res = await fetch(URL);

        if (!res.ok) { throw new Error(`HTTP error ${res.status}`); }

        const data = await res.json();

        if (!Array.isArray(data)) {
            console.warn("Not an array:", data);
            return [];
        }

        const sortedPlayers = sortPlayers(data, filter);

        return sortedPlayers.slice(0, top);

    } catch (error) {
        console.error("An error occurred:", error);
        return [];
    }
}

/**
 * Posts a new user to the database
 * @param {Object} user 
 * @returns The response from the API in json.
 */
async function registerUser(user) {
    //const URL = `https://wordleapi-qhp7.onrender.com/players`;
    const URL = `http://localhost:8080/players`;
    try {

        const res = await fetch(
            URL,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            }
        );

        if (!res.ok) {
            throw new Error(`HTTP Error: ${res.status} || User couldn't be registered.`);
        }

        const userRegistered = await res.json();
        console.log("User registered correctly:", userRegistered);
        return userRegistered;
    } catch (exception) {
        console.log("An error ocurred:", exception);
    }
}

/**
 * Checks if a player already exists in the database and if it does retrives the player data
 * @param {Object} userdata the player
 * @returns {Object} the user data
 */
async function userExists(userdata) {
    //const URL = `https://wordleapi-qhp7.onrender.com/players`;
    const URL = `http://localhost:8080/players/find`;
    try {

        const res = await fetch(
            URL,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userdata)
            }
        );

        if (!res.ok) {
            throw new Error(`HTTP Error: ${res.status} || User couldn't be registered.`);
        }

        const data = await res.json();

        if (data.status === 'declined') { throw new Error('HTTP request was denied.'); }

        const user = data.player;

        return user;
    } catch (exception) {
        console.log("An error ocurred:", exception);
    }
}

/**
 * 
 * @param {String} userID 
 * @param {Object} modifyArgs 
 * @returns {Object} The modified user
 */
async function modifyUser(userID, modifyArgs) {
    //const URL = `https://wordleapi-qhp7.onrender.com/players`;
    const URL = `http://localhost:8080/players/${userID}`;
    try {

        const res = await fetch(
            URL,
            {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(modifyArgs)
            }
        );

        if (!res.ok) { throw new Error(`HTTP Error: ${res.status} || User couldn't be registered.`); }

        const responseData = await res.json();
         
        return responseData.player;
    } catch (err) {
        console.error(err);
        return null;
    }
}

export { fetchTopUsers, registerUser, userExists, modifyUser }