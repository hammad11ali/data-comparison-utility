import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SameDataComponent } from './same-data.component';

describe('SameDataComponent', () => {
  let component: SameDataComponent;
  let fixture: ComponentFixture<SameDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SameDataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SameDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
