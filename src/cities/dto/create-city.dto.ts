
export class CreateCityDto {
    name: string;
    country: string;
    latitude?: number;
    longitude?: number;
  }
// ayuda a NEST a validar los datos de entrada