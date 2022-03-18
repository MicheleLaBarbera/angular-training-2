import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from 'src/models/Movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  public addMovie(movie: Movie): Observable<any> {
    return this.http.post("https://crudcrud.com/api/388859dd59954f17aa776b40ac750775/movies", movie);
  }
}
