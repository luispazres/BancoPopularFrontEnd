import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, map } from 'rxjs/operators';
import { Asesor } from '../interfaces/asesor';

@Injectable({
  providedIn: 'root'
})
export class AsesoresService {

  private url = 'https://localhost/BancoPopularBackEnd/api/asesores';

  constructor( private http: HttpClient) { }

  getAsesores(){
    return this.http.get(`${ this.url }/read.php`)
           .pipe(
             map( this.crearArreglo ),
             delay(0)
           );
  }

  private crearArreglo( asesorObj: object ) {

    const asesores: Asesor[] = [];

    Object.keys( asesorObj ).forEach( key => {

      const asesor: Asesor = asesorObj[key];
      asesor.id = parseInt(key);

      asesores.push( asesor );
    });


    return asesores;

  }
}
