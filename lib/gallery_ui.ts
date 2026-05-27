import Handlebars from "handlebars";
import {load} from "./gallery.js";
import {getPicture} from "./index.js";

export function display_galerie(uri:string){
    let html = document.querySelector("#galerieTemplate")?.innerHTML;
    let template = Handlebars.compile(html);
    load(uri).then((images)=>{
        document.querySelector("#galerie")!.innerHTML = template({photos:images});
        let imgs = document.querySelectorAll(".photo");
        imgs.forEach(img=>{
            img.addEventListener("click", ()=>{
                getPicture(parseInt(img.getAttribute("data-photoId")!));
            })
        })
    });

}