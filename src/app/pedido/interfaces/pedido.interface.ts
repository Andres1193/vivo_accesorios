import { Producto } from '../../producto/interfaces/producto.interface';
export interface Pedido {
    codigoPedido: number;
    codigoCliente: number;
    fecha: Date;
    nombreCliente: string;
    productos: Producto[];
}
