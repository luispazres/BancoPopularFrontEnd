import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, map } from 'rxjs/operators';
import { TipoPrestamo } from '../interfaces/tipoSolicitud';

@Injectable({
  providedIn: 'root'
})
export class TipoPrestamoService {

  private url = 'https://localhost/BancoPopularBackEnd/api/tipoPrestamos';

  constructor( private http: HttpClient) { }

  getAsesores(){
    return this.http.get(`${ this.url }/read.php`)
           .pipe(
             map( this.crearArreglo ),
             delay(0)
           );
  }

  private crearArreglo( tipoPrestamoObj: object ) {

    const tipoPrestamos: TipoPrestamo[] = [];

    Object.keys( tipoPrestamoObj ).forEach( key => {

      const tipoPrestamo: TipoPrestamo = tipoPrestamoObj[key];
      tipoPrestamo.id = parseInt(key);

      tipoPrestamos.push( tipoPrestamo );
    });


    return tipoPrestamos;

  }
}
