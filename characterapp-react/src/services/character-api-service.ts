import Character from "../models/Character";

const baseUrl = "https://characterappapi.azurewebsites.net/api/";

function urlBuilder(route: string[], queryparam?: {name: string, value: string}[]): string {
    let url = baseUrl
    url += route.join("/")
    
    if(queryparam) {
        url += '?' + queryparam.map(q => `${q.name}=${q.value}`).join("&")
    }
    return url
}
/**
 * Retrieves all characters from the API.
 *
 * @param {number} [offset=0] - The offset from which to start retrieving characters. Defaults to 0.
 * @param {number} [limit=100] - The maximum number of characters to retrieve. Defaults to 100.
 * @return {Promise<Character[]>} A promise that resolves to an array of Character objects.
 */
export function getAllCharacters(offset: number = 0, limit: number = 100) : Promise<Character[]> {
    // Build the URL for the API endpoint with the provided offset and limit parameters.
    const url = urlBuilder(['Character'], [{name: 'offset', value: offset.toString()}, {name: 'limit', value: limit.toString()}])
    return fetch(url)
    .then(res => {
        if(res.ok) {
            return res.json()
        }
        return Promise.reject(res)
    })
}

/**
 * Retrieves a character by ID from the API.
 *
 * @param {number} characterId - The ID of the character to retrieve.
 * @return {Promise<Character>} A promise that resolves to the Character object.
 */
export async function getCharacterById(characterId: number) : Promise<Character> {
    const url = urlBuilder(['Character', characterId.toString()])
    return fetch(url)
    .then(res => {
        if(res.status === 204)
        {
            return Promise.resolve(null)   
        }
        else if(res.ok) {
            return res.json()
        }
        return Promise.reject(res)
    })
}