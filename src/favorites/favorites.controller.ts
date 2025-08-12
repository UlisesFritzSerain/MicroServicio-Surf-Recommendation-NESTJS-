import { Controller, Get, Post, Delete, Param, Body, ParseIntPipe, ValidationPipe, UsePipes } from '@nestjs/common';
import { FavoritesService } from './favorites.service';
import {CreateFavoriteDto} from '../dto/create-favorite.dto';

@Controller('favorites')
export class FavoritesController {
  constructor(private readonly favoritesService: FavoritesService) {}

  @Get()
  getAll() {
    return this.favoritesService.findAll();
  }

  @Get('recommendations') // recommendatios tiene que ir antes que :id para que no interprete como un id
  async getRecommendations() {
    return await this.favoritesService.getRecommendations();
  }

  @Get(':id')
  getOne(@Param('id', ParseIntPipe) id: number) {
    console.log('Buscando favorito con id:', id, typeof id);
    return this.favoritesService.findOne(+id);
  }

  @Post()
  @UsePipes(new ValidationPipe())
  add(@Body() CreateFavoriteDto: CreateFavoriteDto) {
    return this.favoritesService.create(CreateFavoriteDto.id);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    console.log(`Removing favorite movie with ID: ${id}`);
    this.favoritesService.remove(+id);
    return { message: `Favorite movie with ID ${id} removed` };
  }
}
