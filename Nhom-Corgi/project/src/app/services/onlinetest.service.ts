import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import{ Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
@Injectable()
export class OnlineTestService{
    private apiUrl = "https://58ff55930dcf7e0011170619.mockapi.io/api/onlinetest/hoahoc/hoa2016";
    constructor(private _http: Http){

    }
    GetList(): Observable<any[]>{
        return this._http.get(this.apiUrl).map((response: Response)=>response.json())
    }
}