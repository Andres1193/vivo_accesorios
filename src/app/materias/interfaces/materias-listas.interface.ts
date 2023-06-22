import { MateriasPrimas } from './materias-primas.interface';
export interface MateriasListas extends MateriasPrimas{
    costo_banio_linea: number;
    cantidad_banada: number;
    costo_banio_un: number;
}
