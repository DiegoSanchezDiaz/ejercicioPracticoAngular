import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})
export class MoviesComponent implements OnInit{

  movies: any[] = [];

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    
  }

getMovies(searchTerm: string) {
  console.log(searchTerm);
  this.movieService.getMovies(searchTerm).subscribe(data => {
    console.log(data);
    this.movies = data.Search;
  })
}

}