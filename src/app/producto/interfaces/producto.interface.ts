import { Categoria } from "./categoria.interface";


export interface Producto {
    idProducto: number;
    cod_producto: string;
    nombre: string;
    porcent_Utilidad: number;
    precio_producto: number;
    bodega: string;
    stock: number;
    estado: string;
}