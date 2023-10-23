import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListepresenceComponent } from './listepresence.component';

describe('ListepresenceComponent', () => {
  let component: ListepresenceComponent;
  let fixture: ComponentFixture<ListepresenceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListepresenceComponent]
    });
    fixture = TestBed.createComponent(ListepresenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
