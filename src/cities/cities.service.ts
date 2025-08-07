import { Injectable, NotFoundException } from '@nestjs/common';

export interface City {
  id: number;
  name: string;
  country: string;
  latitude?: number;
  longitude?: number;
}

@Injectable()
export class CitiesService {
  private cities: City[] = []; // simular una base de datos
  private idCounter = 1;

  findAll(): City[] {
    return this.cities;
  }

  findOne(id: number): City {
    const city = this.cities.find(c => c.id === id);
    if (!city) throw new NotFoundException('City not found');
    return city;
  }

  create(cityData: Omit<City, 'id'>): City {
    const newCity: City = {
      id: this.idCounter++,
      name: cityData.name,
      country: cityData.country,
      latitude: cityData.latitude,
      longitude: cityData.longitude,
    };
    this.cities.push(newCity);
    return newCity;
  }

  update(id: number, cityData: Partial<Omit<City, 'id'>>): City {
    const city = this.findOne(id);
    Object.assign(city, cityData);
    return city;
  }

  remove(id: number): void {
    const index = this.cities.findIndex(c => c.id === id);
    if (index === -1) throw new NotFoundException('City not found');
    this.cities.splice(index, 1);
  }
}
