// To parse this data:
//
//   import { Convert, Solicitud } from "./file";
//
//   const solicitud = Convert.toSolicitud(json);

export interface Solicitud {
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
}

// Converts JSON strings to/from your types
export class Convert {
    public static toSolicitud(json: string): Solicitud {
        return JSON.parse(json);
    }

    public static solicitudToJson(value: Solicitud): string {
        return JSON.stringify(value);
    }
}
