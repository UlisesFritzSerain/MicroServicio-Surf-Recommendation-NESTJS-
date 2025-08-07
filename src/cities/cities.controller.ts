import { Controller, Get, Post, Put, Delete, Param, Body, ParseIntPipe } from '@nestjs/common';
import { CitiesService } from './cities.service';
import { City } from './city.model';
import { CreateCityDto } from './dto/create-city.dto';

// manejo de rutas

@Controller('cities')
export class CitiesController {
  constructor(private readonly citiesService: CitiesService) {}

  @Get()
  getAll(): City[] {
    return this.citiesService.findAll();
  }

  @Get(':id')
  getOne(@Param('id', ParseIntPipe) id: number): City {
    return this.citiesService.findOne(id);
  }

  @Post()
  create(@Body() cityData: CreateCityDto): City {
    console.log('cityData:', cityData);
    return this.citiesService.create(cityData);
  }

  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() cityData: Partial<Omit<City, 'id'>>): City {
    return this.citiesService.update(id, cityData);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number): void {
    return this.citiesService.remove(id);
  }
}
