
import { Proveedor } from "src/app/proveedor/interfaces/proveedor.interface";

export interface MateriasPrimas {
    cod_interno: string; 
    tipo_materia_prima: string;
    desc_mp: string;
    cant_linea: number;
    precio_linea: number;
    unidad_medida: string;
    costo_unitario: number;
    costo_total_unitario: number;
    bodega: string;
    stock: number;
    estado: string;
}
