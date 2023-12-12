import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManufacturerComponent } from './manufacturer.component';

describe('ManufacturersComponent', () => {
  let component: ManufacturerComponent;
  let fixture: ComponentFixture<ManufacturerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ManufacturerComponent]
    });
    fixture = TestBed.createComponent(ManufacturerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
