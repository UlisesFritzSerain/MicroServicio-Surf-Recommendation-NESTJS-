import { Controller, Get, Post, Delete, Param, Body, ParseIntPipe } from '@nestjs/common';
import { FavoritesService } from './favorites.service';

@Controller('favorites')
export class FavoritesController {
  constructor(private readonly favoritesService: FavoritesService) {}

  @Get()
  getAll() {
    return this.favoritesService.findAll();
  }

  @Get(':id')
  getOne(@Param('id', ParseIntPipe) id: number) {
    console.log('Buscando favorito con id:', id, typeof id);
    return this.favoritesService.findOne(+id);
  }

  @Post()
  add(@Body('id') id: number) {
    console.log(`Adding favorite movie with ID: ${id}`);
    return this.favoritesService.create(id);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    console.log(`Removing favorite movie with ID: ${id}`);
    this.favoritesService.remove(+id);
    return { message: `Favorite movie with ID ${id} removed` };
  }
}
