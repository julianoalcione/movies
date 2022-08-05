import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/service/movies.service';

@Component({
  selector: 'wm-producers-interval-wins',
  templateUrl: './wm-producers-interval-wins.component.html',
})
export class WmProducersIntervalWinsComponent implements OnInit {
  producerMin: any = {};
  producerMax: any = {};
  headers = ['Year', 'Win count', 'Previous year', 'Following year'];
  columns = ['producer', 'interval', 'previousWin', 'followingWin'];

  constructor(private service: MoviesService) {}

  ngOnInit(): void {
    this.service.getProducerIntervalWins().subscribe((res: any) => {
      if (res && res.min && res.min.length) {
        this.producerMin = res.min[0];
      }

      if (res && res.max && res.max.length) {
        this.producerMax = res.max[0];
      }
    });
  }
}
