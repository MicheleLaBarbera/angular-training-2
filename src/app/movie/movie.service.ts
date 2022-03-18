import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, Subject } from 'rxjs';
import { Movie } from 'src/models/Movie';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private movieEndpointUrl:string = environment.apiEndpointUrl + 'movies/';

  public movieCreateForm$  = new Subject<Movie>();

  //public addedMovie = new EventEmitter<boolean>();

  constructor(private http: HttpClient) { }

  public addMovie(movie: Movie): Observable<Movie> {
    //return this.http.post(this.movieEndpointUrl, movie).pipe(map(e => JSON.parse(JSON.stringify(e))));
    return this.http.post(this.movieEndpointUrl, movie) as Observable<Movie>;
  }

  public getMovies(): Observable<Movie[]> {
    return this.http.get(this.movieEndpointUrl) as Observable<Movie[]>;
  }

  public deleteMovie(_id: string): Observable<any> {
    return this.http.delete(this.movieEndpointUrl + _id);
  }

  public patchMovie(_id: string, movie: Movie): Observable<any> {
    return this.http.put(this.movieEndpointUrl + _id, movie);
  }
}
