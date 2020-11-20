import { Component, OnInit } from '@angular/core';
import { Solicitud } from 'src/app/interfaces/solicitud';
import { solicitudes } from '../../data/solicitudes';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';

import Swal from 'sweetalert2';
import { SolicitudModel } from 'src/app/models/solicitud.model';

@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.component.html',
  styleUrls: ['./solicitud.component.css']
})
export class SolicitudComponent implements OnInit {

  solicitudes: Solicitud[] = solicitudes;
  solicitud: SolicitudModel = new SolicitudModel();
  tipoPrestamos: any[] = [
    {
      id: 1,
      nombre: "Agro"
    },
    {
      id: 2,
      nombre: "Mipime"
    },
  ]

  constructor( private route: ActivatedRoute ) { }

  ngOnInit(): void {
    const solicitud = this.route.snapshot.paramMap.get('numeroSolicitud');

    if ( solicitud !== 'nuevo' ) {

      this.solicitud = solicitudes[solicitud];

    }

    console.log(this.solicitud);
    
  }

  guardar( forma: NgForm ) {

    if ( forma.invalid ) {
      Object.values( forma.controls ).forEach( control => {
        control.markAsTouched();
      });
      return;
    }

    Swal.fire({
      title: 'Espere',
      text: 'Guardando información',
      icon: 'info',
      allowOutsideClick: false
    });
    Swal.showLoading();


    let peticion: Observable<any>;

    if ( this.solicitud.numeroSolicitud ) {
      //peticion = this.heroesService.actualizarHeroe( this.heroe );
    } else {
      //peticion = this.heroesService.crearHeroe( this.heroe );
    }

    peticion.subscribe( resp => {

      Swal.fire({
        title: `${this.solicitud.numeroSolicitud}`,
        text: 'Se actualizó correctamente',
        icon: 'success'
      });

    });



  }

}
