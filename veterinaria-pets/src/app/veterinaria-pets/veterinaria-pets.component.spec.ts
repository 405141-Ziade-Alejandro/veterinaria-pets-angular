import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeterinariaPetsComponent } from './veterinaria-pets.component';

describe('VeterinariaPetsComponent', () => {
  let component: VeterinariaPetsComponent;
  let fixture: ComponentFixture<VeterinariaPetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VeterinariaPetsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VeterinariaPetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
