import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Felicitation } from './felicitation';

describe('Felicitation', () => {
  let component: Felicitation;
  let fixture: ComponentFixture<Felicitation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Felicitation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Felicitation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
