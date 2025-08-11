import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class FavoritesService {
  private favorites: number[] = [];

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
}
