import { Injectable, NotFoundException } from '@nestjs/common';
import { MoviesService } from 'src/movies/movies.service';

@Injectable()
export class FavoritesService {
  private favorites: number[] = [];

  constructor(private readonly moviesService: MoviesService) {} // injectando MoviesService en FavoritesService para poder usarlo en getRecommendations

  findAll(): number[] {
    return this.favorites;
  }

  findOne(id: number): number {
    const exists = this.favorites.find(fav => fav === id);
    if (!exists && exists !== 0) throw new NotFoundException(`Favorite movie ID ${id} not found`);
    return exists;
  }

  create(id: number): number {
    const numericId = Number(id);  // Convertir a número
    if (!this.favorites.includes(numericId)) {
      this.favorites.push(numericId);
    }
    console.log('Favorites array:', this.favorites);
    return numericId;
  }

  remove(id: number): void {
    const index = this.favorites.findIndex(fav => fav === id);
    if (index === -1) throw new NotFoundException(`Favorite movie ID ${id} not found`);
    this.favorites.splice(index, 1);
    console.log(this.favorites);
  }

  async getRecommendations() {
    const recommendations = new Set();
  
    for (const favId of this.favorites) {
      const recs = await this.moviesService.getRecommendations(favId);
      for (const movie of recs.results) {
        // Filtrar por popularidad y que no esté en favoritos
        if (movie.popularity < 20 && !this.favorites.includes(movie.id)) {
          recommendations.add(movie);
        }
      }
    }
  
    return Array.from(recommendations);
  }
  
}
