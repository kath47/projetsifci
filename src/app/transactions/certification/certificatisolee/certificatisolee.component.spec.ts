import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificatisoleeComponent } from './certificatisolee.component';

describe('CertificatisoleeComponent', () => {
  let component: CertificatisoleeComponent;
  let fixture: ComponentFixture<CertificatisoleeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CertificatisoleeComponent]
    });
    fixture = TestBed.createComponent(CertificatisoleeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
