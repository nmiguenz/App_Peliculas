import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private url : string = 'https://restcountries.com/v3.1/subregion/europe';
  private urlPelis : string = 'https://api.themoviedb.org/3/movie/';
  private apiKey : string = 'e286de8cab14e42ecc0868b49545d5cf';
  public arrayPelis : [] = []; 

  constructor(public httpClient: HttpClient) { }

  getPaises(){
    return this.httpClient.get(this.url);
  }

  getPeliculas(){
    // for(let i=1; i++; i<=100){
    //   this.arrayPelis.push()
     return this.httpClient.get(this.urlPelis + 20 +'?api_key=' + this.apiKey);
      
    // }
  }

}
