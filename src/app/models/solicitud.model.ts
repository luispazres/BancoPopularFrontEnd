import { Solicitud } from '../interfaces/solicitud';

export class  SolicitudModel implements Solicitud {
    numeroSolicitud: number;
    nombreCompleto:  string;
    numeroIdentidad: string;
    fechaSolicitud:  string;
    tipoPrestamo:    string;
    montoSolicitado: number;
    plazo:           number;
    codigoAsesor:    number;
    ciudad:          string;
    estadoSolicitud: string;

    constructor() {
        
    }
}