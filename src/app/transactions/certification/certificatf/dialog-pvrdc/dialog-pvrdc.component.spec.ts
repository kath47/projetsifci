import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogPvrdcComponent } from './dialog-pvrdc.component';

describe('DialogPvrdcComponent', () => {
  let component: DialogPvrdcComponent;
  let fixture: ComponentFixture<DialogPvrdcComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogPvrdcComponent]
    });
    fixture = TestBed.createComponent(DialogPvrdcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
