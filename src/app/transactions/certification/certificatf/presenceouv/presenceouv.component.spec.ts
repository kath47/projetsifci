import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresenceouvComponent } from './presenceouv.component';

describe('PresenceouvComponent', () => {
  let component: PresenceouvComponent;
  let fixture: ComponentFixture<PresenceouvComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PresenceouvComponent]
    });
    fixture = TestBed.createComponent(PresenceouvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
