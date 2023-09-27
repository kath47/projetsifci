import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCfopComponent } from './dialog-cfop.component';

describe('DialogCfopComponent', () => {
  let component: DialogCfopComponent;
  let fixture: ComponentFixture<DialogCfopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogCfopComponent]
    });
    fixture = TestBed.createComponent(DialogCfopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
