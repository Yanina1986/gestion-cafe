import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaBanderaComponent } from './lista-bandera.component';

describe('ListaBanderaComponent', () => {
  let component: ListaBanderaComponent;
  let fixture: ComponentFixture<ListaBanderaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaBanderaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaBanderaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
