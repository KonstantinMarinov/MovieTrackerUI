import { MovieService } from './../../movie/movie.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.css'],
})
export class MoviePageComponent implements OnInit {
  constructor(private movieService: MovieService) {}

  movieTitle: string = '';

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.movieService.data.subscribe((response) => {
      this.movieTitle = response; // you will receive the data from sender component here.
    });
  }
}
