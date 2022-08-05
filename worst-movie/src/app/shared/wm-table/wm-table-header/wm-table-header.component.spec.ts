import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WmTableHeaderComponent } from './wm-table-header.component';

describe('WmTableHeaderComponent', () => {
  let component: WmTableHeaderComponent;
  let fixture: ComponentFixture<WmTableHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WmTableHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WmTableHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
