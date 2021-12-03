export interface GasolinerasListResponse {
    fecha:             string;
    listaEESSPrecio:   ListaEESSPrecio[];
    nota:              string;
    resultadoConsulta: string;
}

export interface ListaEESSPrecio {
    cP:                             string;
    dirección:                      string;
    horario:                        string;
    latitud:                        string;
    localidad:                      string;
    longitud:                       string
    municipio:                      string;
    precioGasoleoA:                 string;
    precioGasoleoB:                 string;
    precioGasolina95E5:             string;
    precioGasolina98E5:             string;
    provincia:                      string;
    rotulo:                         string      
    ideess:                         string;
    idMunicipio:                    string;
    IDprovincia:                    string;
    idccaa:                         string;
                            
}





