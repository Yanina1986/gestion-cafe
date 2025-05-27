import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BanderaComponent } from './bandera.component';

describe('BanderaComponent', () => {
  let component: BanderaComponent;
  let fixture: ComponentFixture<BanderaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BanderaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BanderaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
