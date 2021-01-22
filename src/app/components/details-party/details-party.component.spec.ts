import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsPartyComponent } from './details-party.component';

describe('DetailsPartyComponent', () => {
  let component: DetailsPartyComponent;
  let fixture: ComponentFixture<DetailsPartyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsPartyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsPartyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
