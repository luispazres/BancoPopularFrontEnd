import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DataTableDirective } from 'angular-datatables';
import { Solicitud } from 'src/app/interfaces/solicitud';
import { solicitudes } from '../../data/solicitudes';
@Component({
  selector: 'app-solicitudes',
  templateUrl: './solicitudes.component.html',
  styleUrls: ['./solicitudes.component.css']
})
export class SolicitudesComponent implements OnInit, AfterViewInit {
  @ViewChild(DataTableDirective, {static: false})
  datatableElement: DataTableDirective;

  solicitudes: Solicitud[] = solicitudes;
  cargando = false;

  constructor( public router: Router) { }

  ngOnInit(): void {
  
  }

  ngAfterViewInit(): void {
    this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.columns().every(function () {
        const that = this;
        $('input', this.footer()).on('keyup change', function () {
          if (that.search() !== this['value']) {
            that
              .search(this['value'])
              .draw();
          }
        });
      });
    });
  }
}
