import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyValueResolutionComponent } from './key-value-resolution.component';

describe('KeyValueResolutionComponent', () => {
  let component: KeyValueResolutionComponent;
  let fixture: ComponentFixture<KeyValueResolutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KeyValueResolutionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KeyValueResolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
