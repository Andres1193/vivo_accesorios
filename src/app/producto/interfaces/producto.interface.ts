import { Categoria } from './categoria.interface';

export interface Producto {
    idProducto: number;
    codigoProducto: string;
    nombre: string;
    costo_Producto: number;
    porcent_Utilidad: number;
    precio_Producto: number;
    stock: number;
    idPedido?: string;
    estado: string;
    categoria: Categoria;
}
