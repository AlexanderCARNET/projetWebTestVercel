export interface Commentaire{
    id:number,
    titre:string,
    content:string,
    pseudo:string,
    date:string,
}

export interface imgGallerie{
    id:number,
    titre:string,
    file:string,
    thumbnail:{href:string},
    original:{href:string},
}