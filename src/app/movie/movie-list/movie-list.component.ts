import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Genre } from 'src/models/Genre';
import { Movie } from 'src/models/Movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  public genres:Genre[];
  
  public moviePatchForm = this.fb.group({
    title: ['', [Validators.required, Validators.minLength(3)]],
    year: ['', [Validators.required, Validators.min(1900), Validators.max(2026)]],
    runtime: ['', [Validators.required, Validators.min(0)]],
    genres: ['', [Validators.required]],
  });

  public movies!: Movie[];

  public selectedMovie!: Movie | null;

  constructor(private fb: FormBuilder, private movieService: MovieService) { 
    this.genres = [{
      name: "Drama",
    }, {
      name: "Horror"
    }];
  }

  ngOnInit(): void {
    this.getMovies();

    this.movieService.movieCreateForm$.subscribe(response => {
      if(response)
        this.getMovies();
    });

    //this.movieService.addedMovie.emit(true);
  }

  private getMovies(): void {
    this.movies = [];
    this.movieService.getMovies().subscribe(response => { 
      this.movies = response 
    });
  }

  public deleteMovie(_id: string): void {
    this.movieService.deleteMovie(_id).subscribe(response => {
      this.getMovies();
    });
  }

  public patchMovie(): void {
    let movie: Movie = JSON.parse(JSON.stringify({...this.moviePatchForm.value}));

    this.movieService.patchMovie(this.selectedMovie?._id!, movie).subscribe(response => {
      this.selectedMovie = null;
      this.getMovies();
    })
  }

  public selectMovie(movie: Movie): void {
    this.selectedMovie = movie;
    console.log(movie)
    this.moviePatchForm.patchValue(movie);

    
    console.log(this.moviePatchForm.value.genres)
  }

}
