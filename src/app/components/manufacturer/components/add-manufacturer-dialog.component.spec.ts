import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddManufacturerDialogComponent } from './add-manufacturer-dialog.component';

describe('AddManufacturerDialogComponent', () => {
  let component: AddManufacturerDialogComponent;
  let fixture: ComponentFixture<AddManufacturerDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AddManufacturerDialogComponent]
    });
    fixture = TestBed.createComponent(AddManufacturerDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
