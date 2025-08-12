import { Module } from '@nestjs/common';
import { FavoritesController } from './favorites.controller';
import { FavoritesService } from './favorites.service';
import { MoviesModule } from 'src/movies/movies.module'; 

@Module({
  imports: [MoviesModule], 
  controllers: [FavoritesController],
  providers: [FavoritesService]
})
export class FavoritesModule {}
