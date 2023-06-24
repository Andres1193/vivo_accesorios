import { Categoria } from "src/app/producto/interfaces/categoria.interface";
import { Proveedor } from "src/app/proveedor/interfaces/proveedor.interface";

export interface MaterialEmpaque {
    estado_me: string;
    codigo_proveedor: string;
    proveedores: Proveedor[];
    codigo_categoria: string;
    categorias: Categoria[];
    nombre: string;

    // Composición - Materiales
    precio_banio_linea_m: number;
    rendimiento_linea_m: number;
    unidad_medida_m: number;
    costo_banio_un_m: number;

    // Composición - Actividades o Transformaciones
    precio_linea_a: number;
    rendimiento_linea_a: number;
    unidad_medida_a: number;
    costo_banio_un_a: number;

    // Costo
    precio_linea_c: number;
    rendimiento_linea_c: number;
    unidad_medida_c: number;
    costo_un_c: number;
}