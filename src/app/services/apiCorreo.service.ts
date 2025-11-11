import { Injectable } from "@angular/core";
import { HttpRequestService } from "../services/common/http-request.service";
import { Parameter } from "../shared/model/commun/parameter";
import { Observable } from "rxjs";
@Injectable({
    providedIn: 'root'
})
export class ApiCorreoService {
    constructor(private _request: HttpRequestService) { }
    Correo(parametro: Parameter): Observable<any> {
        return this._request.http(parametro)
    }
}