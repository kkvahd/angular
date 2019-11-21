import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieCruiserComponent } from './movie-cruiser.component';

describe('MovieCruiserComponent', () => {
  let component: MovieCruiserComponent;
  let fixture: ComponentFixture<MovieCruiserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieCruiserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieCruiserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
