import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TbCfComponent } from './tb-cf.component';

describe('TbCfComponent', () => {
  let component: TbCfComponent;
  let fixture: ComponentFixture<TbCfComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TbCfComponent]
    });
    fixture = TestBed.createComponent(TbCfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
