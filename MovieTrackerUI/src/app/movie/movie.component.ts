import { MovieService } from './movie.service';
import { MovieDto } from './movie.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})
export class MovieComponent implements OnInit {
  movies: MovieDto[] = [
    {
      title: 'Mission Impossible: Fallout',
      description: 'An epic movie worth watching!',
    },
    {
      title: 'The Hateful Eight',
      description: 'Great movie',
    },
  ];

  movieTitle: string = 'Test';
  movieDescription: string = 'Test';

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {}

  sendNewData(title: string) {
    this.movieService.sendData(title);
  }
}
