import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNotFondComponent } from './page-not-fond.component';

describe('PageNotFondComponent', () => {
  let component: PageNotFondComponent;
  let fixture: ComponentFixture<PageNotFondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageNotFondComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageNotFondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
