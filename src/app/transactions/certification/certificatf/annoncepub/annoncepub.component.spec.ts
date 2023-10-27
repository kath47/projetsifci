import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnoncepubComponent } from './annoncepub.component';

describe('AnnoncepubComponent', () => {
  let component: AnnoncepubComponent;
  let fixture: ComponentFixture<AnnoncepubComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnnoncepubComponent]
    });
    fixture = TestBed.createComponent(AnnoncepubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
