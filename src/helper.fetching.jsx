import { sortPlayers } from './helper'

/**
 * Gets the top n users
 * @param {Number} top the number of players to fetch 
 * @returns {Array<Object>} an array with the fetched players
 */
async function fetchTopUsers(top, filter, descending = true) {
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

        const sortedPlayers = sortPlayers(data, filter, descending);

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

        const resJSON = await res.json();
        console.log("User registered correctly:", resJSON);
        return resJSON.player;
    } catch (exception) {
        console.log("An error ocurred:", exception);
        return null;
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
        return null;
    }
}

/**
 * 
 * @param {String} userID 
 * @param {Object} modifyArgs 
 * @returns {Object} The modified user
 */
async function modifyUser(userID, modifyArgs) {
    //const URL = `https://wordleapi-qhp7.onrender.com/players/${userID}``;
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

/**
 * Given an id retreives the correspoding player stats
 * @param {String} id the user id
 * @returns {Object} the user stats as an object
 */
async function fetchUserStats(id) {
    const URL = `http://localhost:8080/players/data/${id}`;

    try {
        const res = await fetch(URL);

        if (!res.ok) { throw new Error(`HTTP error ${res.status}`); }

        const data = await res.json();

        if (!Array.isArray(data)) {
            console.warn("Not an array:", data);
            return null;
        }

        return data[0];
    } catch (error) {
        console.error("An error occurred:", error);
        return null;
    }
}

/**
 * 
 * @param {String} matchID 
 * @param {Object} modifyArgs 
 * @returns {Object} The request response
 */
async function modifyMatch(matchId, modifyArgs) {
    //const URL = `https://wordleapi-qhp7.onrender.com/players/${userID}``;
    const URL = `http://localhost:8080/matches/${matchId}`;
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

        if (!res.ok) { throw new Error(`HTTP Error: ${res.status} || Match couldn't be modified.`); }

        const responseData = await res.json();

        return responseData;
    } catch (err) {
        console.error(err);
        return null;
    }
}

/**
 * Given an id retreives the opponent data
 * @param {String} id this user id
 * @param {String} matchId
 * @returns {Object} the user stats as an object
 */
async function fetchOpponent(thisId, matchId) {
    const URL = `http://localhost:8080/matches/${matchId}/opponent/${thisId}`;
    let data;

    try {
        const res = await fetch(URL);

        if (!res.ok) { throw new Error(`HTTP error ${res.status}`); }

        data = await res.json();

        return data;
    } catch (error) {
        console.error("An error occurred:", error);
        return data;
    }
}

export { fetchTopUsers, registerUser, userExists, modifyUser, fetchUserStats, modifyMatch, fetchOpponent }