import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificatfComponent } from './certificatf.component';

describe('CertificatfComponent', () => {
  let component: CertificatfComponent;
  let fixture: ComponentFixture<CertificatfComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CertificatfComponent]
    });
    fixture = TestBed.createComponent(CertificatfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
