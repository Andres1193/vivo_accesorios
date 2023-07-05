export interface MateriasPrimas {
    cod_interno: string; 
    tipo_materia_prima: string;
    desc_mp: string;
    cant_linea: number;
    precio_linea: number;
    unidad_medida: string;
    costo_unitario: number;
    costo_total_unitario: number;
    costo_banio_linea: number;
    cantidad_banada: number;
    costo_banio_un: number;
    bodega: string;
    stock: number;
    nomProveedor: string;
    estado: string;
}
