import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieRoutingModule } from './movie-routing.module';
import { MovieComponent } from './movie.component';
import { MovieCreateComponent } from './movie-create/movie-create.component';
import { MovieListComponent } from './movie-list/movie-list.component';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MovieService } from './movie.service';

@NgModule({
  declarations: [
    MovieComponent,
    MovieCreateComponent,
    MovieListComponent
  ],
  imports: [
    CommonModule,
    MovieRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    MovieService
  ]
})
export class MovieModule { }
