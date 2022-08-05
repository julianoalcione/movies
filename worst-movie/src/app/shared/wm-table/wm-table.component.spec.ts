import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WmTableComponent } from './wm-table.component';

describe('WmTableComponent', () => {
  let component: WmTableComponent;
  let fixture: ComponentFixture<WmTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WmTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WmTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
