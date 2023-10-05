import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogVisaComponent } from './dialog-visa.component';

describe('DialogVisaComponent', () => {
  let component: DialogVisaComponent;
  let fixture: ComponentFixture<DialogVisaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogVisaComponent]
    });
    fixture = TestBed.createComponent(DialogVisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
