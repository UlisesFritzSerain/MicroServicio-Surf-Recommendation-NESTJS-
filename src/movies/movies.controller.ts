import { Controller, Get, Query, Param } from '@nestjs/common';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get('popular')
  getPopular() {
    return this.moviesService.getPopularMovies();
  }

  @Get('search')
  search(@Query('query') query: string) {
    return this.moviesService.searchMovies(query);
  }

  @Get(':id')
  getDetails(@Param('id') id: string) {
    return this.moviesService.getMovieDetails(+id);
  }
}
