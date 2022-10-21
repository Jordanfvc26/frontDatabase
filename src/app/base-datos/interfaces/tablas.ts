export interface Tablas {
    table:    string;
    columnas: Columna[];
}

export interface Columna {
    column_name: string;
    data_type:   string;
    is_nullable: string;
}
