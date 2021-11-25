import { environment } from "src/environments/environment";

export interface ListaDeListas {
    page:          number;
    results:       ListaDePeliculasJucarlox[];
    total_pages:   number;
    total_results: number;
}

export interface ListaDePeliculasJucarlox {
    description:    string;
    favorite_count: number;
    id:             number;
    item_count:     number;
    iso_639_1:      string;
    list_type:      string;
    name:           string;
    poster_path:    null;
}

export class DtoList{
    media_id: number;

    constructor(){
        this.media_id= 0;
    }
}

export class CreateDtoList{
    name: string;
    language: string;
    description: string;

    constructor(){
        this.name= "";
        this.description="";
        this.language=environment.defaultLang;
    }
}


export interface DtoListResponse {
    status_code:    number;
    status_message: string;
    success:        boolean;
    list_id:        number;
}