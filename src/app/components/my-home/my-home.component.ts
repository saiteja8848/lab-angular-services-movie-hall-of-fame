import { Component, OnInit } from '@angular/core';
import { MovieDataServiceService } from '../../Services/movie-data-service.service'
import { Movie } from '../../Services/Movie'

@Component({
  selector: 'app-my-home',
  templateUrl: './my-home.component.html',
  styleUrls: ['./my-home.component.css']
})
export class MyHomeComponent implements OnInit {
  moviesList: Movie[];

  constructor(_movieDataService: MovieDataServiceService) {
    this.moviesList = _movieDataService.getMovies();
  }

  ngOnInit(): void {
  }

}
