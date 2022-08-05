import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/service/movies.service';

@Component({
  selector: 'wm-top-studios-winners',
  templateUrl: './wm-top-studios-winners.component.html',
})
export class WmTopStudiosWinnersComponent implements OnInit {
  studios: any[];
  headers = ["Name", "Win Count"];
  columns = ["name", "winCount"]
  private quantityToShow = 3;

  constructor(private service: MoviesService) {}

  ngOnInit(): void {
    this.service.getStudiosWinners().subscribe((res: any) => {
      if (res && res.studios) 
        this.studios = res.studios.slice(0, this.getIndiceToSlice(res));
    });
  }

  getIndiceToSlice(res: any){
    return res.studios.length < this.quantityToShow
      ? res.studios.length
      : this.quantityToShow;
  }
}
