import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { debounceTime, Subject } from 'rxjs';
import { MoviesService } from '../../service/movies.service';

@Component({
  selector: 'wm-list-movies',
  templateUrl: './list-movies.component.html',
})
export class ListMoviesComponent implements OnInit, OnDestroy {
  constructor(
    private formBuilder: FormBuilder,
    private service: MoviesService
  ) {}

  isLoading = true;
  movies: any[] = [];
  form: any;
  currentePage = 0;
  totalPages = 0;
  debounce: Subject<number> = new Subject<number>();
  @Output() onTyping = new EventEmitter<number>();

  ngOnInit(): void {
    this.form = this.createForm();
    this.search();
    this.searchOnChangeYear();
  }

  ngOnDestroy(): void {
    this.debounce.unsubscribe();
  }

  search() {
    const winner = this.form.get('winner').value;
    const year = this.form.get('year').value;

    this.service.getAll(year, winner, this.currentePage).subscribe((resultado: any) => {
      this.movies = resultado.content;
      this.totalPages = resultado.totalPages;
      this.isLoading = false;
    });
  }

  searchOnChangeYear(){
    this.debounce.pipe(debounceTime(400)).subscribe((value) => {
      this.form.patchValue({ year: value });
      this.changeFilter();
    });
  }

  changeToPage(page: any){
    this.currentePage = page;
    this.search();
  }

  changeFilter(){
    this.currentePage = 0;
    this.search();
  }

  createForm(){
    return this.formBuilder.group({
      year: [],
      winner: [],
      page: [0]
    });
  }
}