import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MorcellementcfComponent } from './morcellementcf.component';

describe('MorcellementcfComponent', () => {
  let component: MorcellementcfComponent;
  let fixture: ComponentFixture<MorcellementcfComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MorcellementcfComponent]
    });
    fixture = TestBed.createComponent(MorcellementcfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
