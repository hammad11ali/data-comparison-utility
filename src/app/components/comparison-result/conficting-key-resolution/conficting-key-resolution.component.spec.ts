import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfictingKeyResolutionComponent } from './conficting-key-resolution.component';

describe('ConfictingKeyResolutionComponent', () => {
  let component: ConfictingKeyResolutionComponent;
  let fixture: ComponentFixture<ConfictingKeyResolutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfictingKeyResolutionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfictingKeyResolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
