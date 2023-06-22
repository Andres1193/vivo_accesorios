import { Proveedor } from "src/app/proveedor/interfaces/proveedor.interface";

export interface MateriasPrimas {
    cod_interno: string;
    desc_mp: string;
    categoria_mp: string;
    cant_linea: number;
    precio_linea: number;
    unidad_medida: string;
    costo_unitario: number;
    costo_total_unitario: number;
    estado: string;
    proveedores: Proveedor[];
}