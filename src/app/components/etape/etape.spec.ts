import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Etape } from './etape';

describe('Etape', () => {
  let component: Etape;
  let fixture: ComponentFixture<Etape>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Etape]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Etape);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
