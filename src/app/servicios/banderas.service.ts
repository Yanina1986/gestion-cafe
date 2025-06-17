import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Bandera } from '../Clases/bandera';

@Injectable({
  providedIn: 'root'
})
export class BanderasService {
  
 /* public banderas: Array<Bandera>=[];
  constructor(public http: HttpClient) { 
    http.get ('https://restcountries.com/v3.1/all').subscribe({
      next:(data)=> {,
      console.info(data);
      (<Array<any>>data).forEach(f => this.banderas.push({ nombre: f.name.common, bandera: f.flags.svg, continente: f.continents[0] }));
        console.info(this.banderas);
      },
      error : (error) =>{console.log (error); alert (error)}
    });
  }*/
}
