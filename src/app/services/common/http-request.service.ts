import { Injectable } from '@angular/core';
import { Parameter } from '../../../app/shared/model/commun/parameter';
import { Observable} from 'rxjs';
import { environment } from '../../../environments/environment.dev';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpRequestService {

  constructor(private _http: HttpClient) { }

  public http(parametro: Parameter): Observable<any> {
    parametro.url = environment.host + parametro.url
    return this.callHttpClient(parametro)
  }

  private callHttpClient(parametro: Parameter): Observable<any> {
    let rpta: Observable<any> | undefined = undefined;
  
    switch (parametro.method) {
      case 'GET':
        rpta = this._http.get(parametro.url, this.getHttpOptions(parametro.excludeLoader));
        break;
      case 'DELETE':
        rpta = this._http.delete(parametro.url, this.getHttpOptions(parametro.excludeLoader));
        break;
      case 'POST':
        rpta = this._http.post(parametro.url, parametro.data, this.getHttpOptions(parametro.excludeLoader));
        break;
      case 'PUT':
        rpta = this._http.put(parametro.url, parametro.data, this.getHttpOptions(parametro.excludeLoader));
        break;
    }
  
    return rpta!;
  }

  private getHttpOptions(excludeLoader: number): any {
    let cabecera
    if (excludeLoader === 1) {
      cabecera = {
        'Content-Type': 'application/json',
        'excludeLoader': excludeLoader
      }
    } else {
      cabecera = {
        'Content-Type': 'application/json'
      }
    }
    return { Headers: new HttpHeaders(cabecera) }
  }
}
