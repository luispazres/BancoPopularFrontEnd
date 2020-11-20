import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, map } from 'rxjs/operators';
import { Estado } from '../interfaces/estado';

@Injectable({
  providedIn: 'root'
})
export class EstadosService {

  private url = 'https://localhost/BancoPopularBackEnd/api/estados';

  constructor( private http: HttpClient) { }

  getAsesores(){
    return this.http.get(`${ this.url }/read.php`)
           .pipe(
             map( this.crearArreglo ),
             delay(0)
           );
  }

  private crearArreglo( estadoObj: object ) {

    const estados: Estado[] = [];

    Object.keys( estadoObj ).forEach( key => {

      const estado: Estado = estadoObj[key];
      estado.id = parseInt(key);

      estados.push( estado );
    });


    return estados;

  }
}
