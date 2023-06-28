import { Cliente } from 'src/app/cliente/interfaces/cliente.interfaces';
import { Producto } from '../../producto/interfaces/producto.interface';
export interface Pedido {
    codigoPedido: number;
    fecha: Date;
    clientes: Cliente[];
    valor_total: number;
    cantidad: number;
    productos: Producto[];
}
