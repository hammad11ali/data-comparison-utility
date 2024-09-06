import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConflictingKeysComponent } from './conflicting-keys.component';

describe('ConflictingKeysComponent', () => {
  let component: ConflictingKeysComponent;
  let fixture: ComponentFixture<ConflictingKeysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConflictingKeysComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConflictingKeysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
