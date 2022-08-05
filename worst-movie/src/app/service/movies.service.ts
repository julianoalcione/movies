import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class MoviesService {
  API: string;
  elementsByPage = 15;

  constructor(private http: HttpClient) {
    this.API = environment.apiUrl + "/movies"
  }

  getAll(year: number, winner: any, page: number = 0) {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('size', this.elementsByPage);

    if (winner && winner !== 'null') {
      params = params.set('winner', winner);
    }

    if (year) {
      params = params.set('year', year.toString());
    }

    return this.http.get(this.API, { params });
  }

  getYearsMultipleWinners() {
    return this.http.get(`${this.API}?projection=years-with-multiple-winners`);
  }

  getStudiosWinners() {
    return this.http.get(`${this.API}?projection=studios-with-win-count`);
  }

  getProducerIntervalWins() {
    return this.http.get(
      `${this.API}?projection=max-min-win-interval-for-producers`
    );
  }

  getWinnersByYear(year: number) {
    return this.http.get(`${this.API}?winner=true&year=${year}`);
  }
}
