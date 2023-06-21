import { Pedido } from "src/app/pedido/interfaces/pedido.interface";

export interface Producto {
    idProducto: number;
    codigoProducto: string;
    nombre: string;
    costo_Producto: number;
    porcent_Utilidad: number;
    precio_Producto: number;
    estado: string;
    stock: number;
    idPedido?: string;
}
