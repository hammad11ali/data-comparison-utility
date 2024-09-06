import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemovedKeysComponent } from './removed-keys.component';

describe('RemovedKeysComponent', () => {
  let component: RemovedKeysComponent;
  let fixture: ComponentFixture<RemovedKeysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RemovedKeysComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemovedKeysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
