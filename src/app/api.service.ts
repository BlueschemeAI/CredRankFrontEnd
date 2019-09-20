import { environment } from "../environments/environment";
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
  })
export class ApiService {
headers = new HttpHeaders();
constructor(private httpClient: HttpClient) {}
// headers(){
//     let headerJson = {
//         'cache-control': 'no-cache',
//         'Access-Control-Allow-Origin': '*'
//     }
//     return headerJson
// }
headersType(){
  let header = { headers: new HttpHeaders(
      {
          'cache-control': 'no-cache',
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
          'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
          "Postman-Token": "e084c218-13db-4d9b-98d6-559205b93f82"
      })
    }
    return header
}
login(loginData: any){
    console.log(this.headersType)
   //return this.httpClient.post(environment.loginURL,loginData, this.headersType())
}
  
}