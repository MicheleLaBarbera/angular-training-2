import { Genre } from "./Genre";

export interface Movie {
  title: String,
  year: Number,
  runtime: Number,
  genres: Genre
}