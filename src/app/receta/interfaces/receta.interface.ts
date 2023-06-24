import { Producto } from "src/app/producto/interfaces/producto.interface";

export interface Receta {
    codigoInterno: number;
    costo_total_un: number;
    cantidad: number;
    cod_producto: number;
    estado: string;
    productos: Producto[];
}