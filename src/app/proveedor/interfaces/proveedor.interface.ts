

export interface Proveedor {
    [key: string]: any;
    cod_proveedor: string;
    nombre: string;
    telefono_1: string;
    telefono_2?: string;
    telefono_3?: string;
    telefono_4?: string;
    telefono_5?: string;
    direccion: string;
    ciudad: string;
    estado: string;
}
