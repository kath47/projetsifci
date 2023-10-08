import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TbDtvComponent } from './tb-dtv.component';

describe('TbDtvComponent', () => {
  let component: TbDtvComponent;
  let fixture: ComponentFixture<TbDtvComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TbDtvComponent]
    });
    fixture = TestBed.createComponent(TbDtvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
