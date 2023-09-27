import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContratualisationComponent } from './contratualisation.component';

describe('ContratualisationComponent', () => {
  let component: ContratualisationComponent;
  let fixture: ComponentFixture<ContratualisationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContratualisationComponent]
    });
    fixture = TestBed.createComponent(ContratualisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
