import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCvEmbaucheComponent } from './list-cv-embauche.component';

describe('ListCvEmbaucheComponent', () => {
  let component: ListCvEmbaucheComponent;
  let fixture: ComponentFixture<ListCvEmbaucheComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListCvEmbaucheComponent]
    });
    fixture = TestBed.createComponent(ListCvEmbaucheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
