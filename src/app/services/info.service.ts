import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Info} from "../model/info";


@Injectable()
export class InfoService {

    private URL = 'https://api-codigos-postales.herokuapp.com/v2/codigo_postal'

    constructor(private http: HttpClient) {

    }

    loadInfoByCodigo(codigo: string) {
        return this.http.get<Info[]>(`${this.URL}/${codigo}`);
    }
}