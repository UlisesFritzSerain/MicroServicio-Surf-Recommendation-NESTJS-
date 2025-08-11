import { Injectable, HttpServer, HttpException, HttpStatus } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class MoviesService {
  private readonly apiKey = process.env.TMDB_API_KEY;
  private readonly baseUrl = 'https://api.themoviedb.org/3';

  async getPopularMovies() {
    try {
      const response = await axios.get(`${this.baseUrl}/movie/popular`, {
        params: {
          api_key: this.apiKey,
          language: 'es-ES',
          page: 1,
        },
      });
      return response.data;
    } catch (error) {
      throw new HttpException('Error fetching popular movies', HttpStatus.BAD_GATEWAY);
    }
  }

  async searchMovies(query: string) {
    try {
      const response = await axios.get(`${this.baseUrl}/search/movie`, {
        params: {
          api_key: this.apiKey,
          language: 'es-ES',
          query,
          page: 1,
        },
      });
      return response.data;
    } catch (error) {
      throw new HttpException('Error searching movies', HttpStatus.BAD_GATEWAY);
    }
  }

  async getMovieDetails(id: number) {
    try {
      const response = await axios.get(`${this.baseUrl}/movie/${id}`, {
        params: {
          api_key: this.apiKey,
          language: 'es-ES',
        },
      });
      return response.data;
    } catch (error) {
      throw new HttpException('Error fetching movie details', HttpStatus.NOT_FOUND);
    }
  }
}
