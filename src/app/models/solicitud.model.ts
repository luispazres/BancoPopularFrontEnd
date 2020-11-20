import { Solicitud } from '../interfaces/solicitud';

export class  SolicitudModel implements Solicitud {
    numeroSolicitud: number;
    nombreCompleto:  string;
    numeroIdentidad: string;
    fechaSolicitud:  string;
    tipoPrestamoId:  number;
    tipoPrestamo:    string;
    montoSolicitado: number;
    plazo:           number;
    asesorId:        number;
    asesor:          string;
    ciudad:          string;
    estadoId:        number;
    estado:          string;

    constructor() {
        
    }
}