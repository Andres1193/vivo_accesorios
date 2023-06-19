import { Pedido } from "src/app/pedido/interfaces/pedido.interface";

export interface Producto {
    codigo: number;
    nombre: string;
    costo_Producto: number;
    porcent_Utilidad: number;
    precio_Producto: number;
    estado: string;
    pedido?: Pedido;
    categoriaProducto: {
        codigoCP: number;
        descuentoCategoria: number;
        estado: string;   
    };
}