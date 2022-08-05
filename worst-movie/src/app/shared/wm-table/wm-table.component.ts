import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'wm-table',
  templateUrl: './wm-table.component.html',
  styleUrls: ['./wm-table.component.scss'],
})
export class WmTableComponent implements OnInit, OnChanges {
  pages: number[][] = [];
  groupPages: any;
  @Input() elementsByPage = 15;
  @Input() currentePage: number;
  @Input() totalPages: number;
  @Input() headers: string[];
  @Input() columns: string[];
  @Input() data: any[];
  @Output() changeToPage = new EventEmitter<number>();

  ngOnInit(): void {
    this.createGroupPages();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['currentePage']) {
      this.getGroupPage();
    }
  }

  getGroupPage() {
    const groupPages = this.pages.filter(
      (g) => g.filter((e) => e == this.currentePage).length
    );

    if (groupPages.length) {
      this.groupPages = [...groupPages[0]];
    }
  }

  createGroupPages() {
    if (this.totalPages) {
      for (let i = 0; i < this.totalPages; i += 5) {
        const groupIndice = [];
        for (let j = i; j < i + 5; j++) {
          if (j < this.totalPages) {
            groupIndice.push(j);
          }
        }

        this.pages.push(groupIndice);
      }

      this.getGroupPage();
    }
  }

  changePage(page: number) {
    if (page >= 0 && this.currentePage != page && this.totalPages > page) {
      this.changeToPage.emit(page);
    }
  }

  pageToShow(page: number) {
    return page + 1;
  }
}
