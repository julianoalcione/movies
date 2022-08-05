import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MoviesService } from 'src/app/service/movies.service';

@Component({
  selector: 'wm-movies-winners',
  templateUrl: './wm-movies-winners.component.html',
})
export class WmMoviesWinnersComponent implements OnInit {
  form: any;
  winners: any[];
  headers = ['Id', 'Year', 'Title'];
  columns = ['id', 'year', 'title'];

  constructor(
    private service: MoviesService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.form = this.createForm();
  }

  search(){
    const year = this.form.get('year').value;

    this.service.getWinnersByYear(year).subscribe((res: any) => {
      if (res && res.length) {
        this.winners = res;
      }
    });
  }

  createForm(){
    return this.formBuilder.group({
      year: [],
    });
  }
}
