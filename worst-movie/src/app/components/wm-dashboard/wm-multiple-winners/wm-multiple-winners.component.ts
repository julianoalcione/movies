import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/service/movies.service';

@Component({
  selector: 'wm-multiple-winners',
  templateUrl: './wm-multiple-winners.component.html',
})
export class WmMultipleWinnersComponent implements OnInit {
  winners: any[];

  constructor(private service: MoviesService) {}

  ngOnInit(): void {
    this.service.getYearsMultipleWinners().subscribe((res: any) => {
      if (res && res.years) {
        this.winners = res.years;
      }
    });
  }
}
