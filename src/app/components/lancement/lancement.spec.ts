import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lancement } from './lancement';

describe('Lancement', () => {
  let component: Lancement;
  let fixture: ComponentFixture<Lancement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lancement]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lancement);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
