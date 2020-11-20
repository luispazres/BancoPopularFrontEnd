import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, delay } from 'rxjs/operators';
import { Solicitud, Convert } from '../interfaces/solicitud';

@Injectable({
  providedIn: 'root'
})
export class SolicitudesService {

  private url = 'https://localhost/BancoPopularBackEnd/api/solicitudes';

  constructor( private http: HttpClient) { }

  crearSolicitud(solicitud: Solicitud){
    return this.http.post(`${ this.url}/create.php`, Convert.solicitudToJson(solicitud))
      .pipe(
        map( (resp: any) => {
          solicitud.numeroSolicitud = resp.name;
          return solicitud;
        })
      );
  }

  modificarSolicitud(solicitud: Solicitud){
    return this.http.post(`${ this.url}/update.php`, Convert.solicitudToJson(solicitud))
      .pipe(
        map( (resp: any) => {
          solicitud.numeroSolicitud = resp.name;
          return solicitud;
        })
      );
  }

  borrarSolicitud( numeroSolicitud: number ){
    let httpParams = new HttpParams().set('numeroSolicitud', `${numeroSolicitud}`);
    let options = { params: httpParams };
    return this.http.delete(`${ this.url}/delete.php`, options);
  }

  getSolicitud( numeroSolicitud: number){
    return this.http.get(`${ this.url }/single_read.php/?numeroSolicitud=${numeroSolicitud}`);
  }

  getSolicitudes(){
    return this.http.get(`${ this.url }/read.php`)
           .pipe(
             map( this.crearArreglo ),
             delay(0)
           );
  }

  private crearArreglo( solicitudObj: object ) {

    const solicitudes: Solicitud[] = [];

    Object.keys( solicitudObj ).forEach( key => {

      const solicitud: Solicitud = solicitudObj[key];
      solicitud.numeroSolicitud = parseInt(key);

      solicitudes.push( solicitud );
    });


    return solicitudes;

  }
}
