import {loadResource} from "./photoloader.js";
import type {imgGallerie} from "./intefaces.js";
import {display_galerie} from "./gallery_ui.js";

let precUri = "";
let nextUri = "";
let firstUri = "";
let lastUri = "";

export async function load(uri: string): Promise<imgGallerie[]> {
    let listeImgGallerie: imgGallerie[] = [];
    let fetch = loadResource(uri);
    return fetch.then((data)=>{
        precUri = data.links.prev.href;
        nextUri = data.links.next.href;
        firstUri = data.links.first.href;
        lastUri = data.links.last.href;
        data.photos.forEach((photo: any) => {
            listeImgGallerie.push(photo.photo);
        });
        return listeImgGallerie;
    })

}

export function next(){
    if(nextUri != ""){
        display_galerie(nextUri);
    }
}

export function prev(){
    if(precUri != ""){
        display_galerie(precUri);
    }
}

export function first(){
    if(firstUri != ""){
        console.log(firstUri);
        display_galerie(firstUri);
    }
}

export function last(){
    if(lastUri != ""){
        display_galerie(lastUri);
    }
}