import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRapportComponent } from './new-rapport.component';

describe('NewRapportComponent', () => {
  let component: NewRapportComponent;
  let fixture: ComponentFixture<NewRapportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewRapportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewRapportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
