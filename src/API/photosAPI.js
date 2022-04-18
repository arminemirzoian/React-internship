import axios from "axios";

export function getPhotos() {
    return axios.get('https://jsonplaceholder.typicode.com/photos')
}
