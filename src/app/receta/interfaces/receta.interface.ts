import { Producto } from "src/app/producto/interfaces/producto.interface";

export interface Receta {
    codigo_mp: number;
    descripcion_mp: string;
    cantidad: number;
    unidad_medida: [];
    costo_unitario: number;
    costo_total_unitario: number;
}