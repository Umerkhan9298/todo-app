import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.API_URL + "/todos/";

export function getTodos() {
    return fetch(baseUrl).then(handleResponse).catch(handleError);
}