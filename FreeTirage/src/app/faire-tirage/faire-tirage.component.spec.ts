import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaireTirageComponent } from './faire-tirage.component';

describe('FaireTirageComponent', () => {
  let component: FaireTirageComponent;
  let fixture: ComponentFixture<FaireTirageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaireTirageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FaireTirageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
