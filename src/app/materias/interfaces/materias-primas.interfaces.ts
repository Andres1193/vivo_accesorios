import { Proveedor } from "src/app/proveedor/interfaces/proveedor.interface";
import { MateriasCrudas } from "./materias-crudas.interfaces";
import { MateriasListas } from "./materias-listas.interface";

export interface MateriasPrimas {
    codigoInterno: string;
    descripcion: string;
    categoriaMateriaPrima: string;
    cantidadLinea: number;
    precioLinea: number;
    unidadMedida: number;
    costoUnitario: number;
    costoTotalUnitario: number;
    estado: string;
    materiasCrudas?: MateriasCrudas;
    materiasListas?: MateriasListas;
    proveedor: Proveedor;
}