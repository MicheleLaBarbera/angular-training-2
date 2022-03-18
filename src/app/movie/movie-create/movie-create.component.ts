import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Genre } from 'src/models/Genre';
import { Movie } from 'src/models/Movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-create',
  templateUrl: './movie-create.component.html',
  styleUrls: ['./movie-create.component.css']
})
export class MovieCreateComponent implements OnInit {
  public genres:Genre[];

  public movieCreateForm = this.fb.group({
    title: ['', [Validators.required]],
    year: ['', [Validators.required]],
    runtime: ['', [Validators.required]],
    genre: ['', [Validators.required]],
  });

  constructor(private fb: FormBuilder, private movieService: MovieService) { 
    this.genres = [{
      name: "Drama",
    }, {
      name: "Horror"
    }];
  }

  ngOnInit(): void {
  }

  public addMovie(): void {
    let movie: Movie = JSON.parse(JSON.stringify({...this.movieCreateForm.value}));

    this.movieService.addMovie(movie).subscribe(response => console.log(response));
    
  }

}
