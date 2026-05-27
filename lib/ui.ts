import Handlebars from "handlebars";
import type {Commentaire} from "./intefaces.js";

export default function displayPicture(dataImage:any){
    let html = document.querySelector("#photoTemplate")?.innerHTML;
    let template = Handlebars.compile(html);
    document.querySelector("#la_photo")!.innerHTML = template({image: dataImage, url: dataImage.url.href});
}

export function displayCategorie(categorie:String){
    document.querySelector("#la_categorie")!.innerHTML += categorie;
}


export function displayComments(commentaires:Commentaire[]){
    let res = commentaires.reduce((acc,commentaire:Commentaire)=>{
        return acc + "<li>" + commentaire.pseudo + " : " + commentaire.content + "</li>";
    },"");

    document.querySelector("#les_commentaires")!.innerHTML = res;

}
