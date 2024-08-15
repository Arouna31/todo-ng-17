import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';

export interface Hero {
  id: number;
  name: string;
}

@Injectable({
  providedIn: 'root',
})
export class HeroesService {
  private heroesUrl = 'api/heroes'; // URL to web api

  private http = inject(HttpClient);

  getHeroes(): Observable<Hero[]> {
    return this.http
      .get<
        Hero[]
      >(this.heroesUrl, { headers: { 'Content-Type': 'application/json' } })
      .pipe(catchError(this.handleError));
  }

  private handleError(error: any) {
    console.error('An error occurred', error); // for demo purposes only
    return throwError(() => new Error(error.message));
  }
}
