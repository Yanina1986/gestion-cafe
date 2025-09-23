import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GmailauthComponent } from './gmailauth.component';

describe('GmailauthComponent', () => {
  let component: GmailauthComponent;
  let fixture: ComponentFixture<GmailauthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GmailauthComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GmailauthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
