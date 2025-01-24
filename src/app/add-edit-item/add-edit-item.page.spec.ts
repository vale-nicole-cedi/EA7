import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddEditItemPage } from './add-edit-item.page';

describe('AddEditItemPage', () => {
  let component: AddEditItemPage;
  let fixture: ComponentFixture<AddEditItemPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditItemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
