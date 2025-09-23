import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataFirestorageComponent } from './data-firestorage.component';

describe('DataFirestorageComponent', () => {
  let component: DataFirestorageComponent;
  let fixture: ComponentFixture<DataFirestorageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataFirestorageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataFirestorageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
