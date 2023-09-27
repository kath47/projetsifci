import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FusioncfComponent } from './fusioncf.component';

describe('FusioncfComponent', () => {
  let component: FusioncfComponent;
  let fixture: ComponentFixture<FusioncfComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FusioncfComponent]
    });
    fixture = TestBed.createComponent(FusioncfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
