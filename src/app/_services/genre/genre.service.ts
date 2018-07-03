import { Injectable } from '@angular/core';
import { GENRE } from '../genre/genre-list';

@Injectable()
export class GenreService {

  getGenre() {
    return GENRE;
  }
}
