import {api} from "./config.js";


export async function loadPicture(idPicture: number) {
    return fetch(`${api}/photos/${idPicture}`, {credentials: "include"})
        .then(response => response.json().then((dataImage)=>dataImage))
        .catch(error => console.log(error));
}

export async function loadResource(uri: string):Promise<any> {
    return fetch("https://webetu.iutnc.univ-lorraine.fr"+uri, {credentials: "include"}).then(
        (data) => {
            return data.json();
        }
    );
}
