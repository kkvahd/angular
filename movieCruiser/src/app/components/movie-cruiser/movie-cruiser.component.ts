import { Component, OnInit } from '@angular/core';
import { Movies } from "../../model/movies";
import { Data } from "../../model/data";

@Component({
  selector: 'app-movie-cruiser',
  templateUrl: './movie-cruiser.component.html',
  styleUrls: ['./movie-cruiser.component.css']
})
export class MovieCruiserComponent implements OnInit {
  data: Data;
  movies: Movies[];
  favs: Movies[] = [];
  constructor() {
    this.data = new Data;
    this.movies = this.data.movieList;
    this.favs = this.favs;
    console.log(this.movies);
  }
  addToFavs(movieId: number, moviePath: string, movieTitle: string) {
    if (!this.favs.some(movie => movie.id === movieId)) {
      this.favs.push({ id: movieId, title: movieTitle, posterPath: moviePath });
    } else {
      window.alert("Movie already added to favourites");
    }
  }

  deleteFav(movieId: number) {
    if (this.favs.some(movie => movie.id === movieId)) {
      this.favs = this.favs.filter((item) => item.id !== movieId);
    }
  }

  ngOnInit() {
  }

}
