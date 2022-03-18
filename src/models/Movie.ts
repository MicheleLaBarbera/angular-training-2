import { Genre } from "./Genre";

export interface Movie {
  _id?: string,
  title: string,
  year: number,
  runtime: number,
  genres: Genre
}