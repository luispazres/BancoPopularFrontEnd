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
    tipoPrestamo:    string;
    montoSolicitado: number;
    plazo:           number;
    codigoAsesor:    number;
    ciudad:          string;
    estadoSolicitud: string;
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
