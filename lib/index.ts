import {loadPicture, loadResource} from "./photoloader.js"
import {webetu_url} from "./config.js";
import displayPicture, {displayCategorie, displayComments} from "./ui.js";
import type {Commentaire} from "./intefaces.js";
import {first, last, load, next, prev} from "./gallery.js";
import {display_galerie} from "./gallery_ui.js";


const URL_gallerie_origine = "/www/canals5/phox/api/photos";

export function getPicture(id:number){
    let promise = loadPicture(id);
    promise.then(async (image)=>{
        let dataImage = image.photo
        dataImage.url.href = webetu_url + "/" + dataImage.url.href;
        displayPicture(dataImage);
        let cat = await getCategorie(image.links.categorie.href);
        displayCategorie(cat);
        displayComments(await getCommentaire(image.links.comments.href));
    })
}

async function getCategorie(uriImage: any): Promise<String>{
    return (await loadResource(uriImage)).categorie.nom;
}

async function getCommentaire(uriComment: any): Promise<Commentaire[]>{
    return (await loadResource(uriComment)).comments;
}

//getPicture(window.location.hash ? Number(window.location.hash.substr(1)): 105);

document.querySelector("#load")?.addEventListener("click",()=>{
    display_galerie(URL_gallerie_origine);
});
document.querySelector("#prev")?.addEventListener("click",()=>{
    prev();
});
document.querySelector("#next")?.addEventListener("click",()=>{
    next();
});
document.querySelector("#last")?.addEventListener("click",()=>{
    last();
});
document.querySelector("#first")?.addEventListener("click",()=>{
    first();
});
