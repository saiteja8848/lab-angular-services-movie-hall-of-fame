import { Injectable } from '@angular/core';
import { Movie } from './Movie';
import { moviesData } from './moviesData'

@Injectable({
  providedIn: 'root'
})

export class MovieDataServiceService {
  moviesData: Movie[];

  constructor() {
    this.moviesData = moviesData;
  }

  getMovies(): Movie[] {
    return this.moviesData
  }
  getMovie(movieId: number) {

  }

}
