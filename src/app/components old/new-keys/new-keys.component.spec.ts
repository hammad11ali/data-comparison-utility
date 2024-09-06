import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewKeysComponent } from './new-keys.component';

describe('NewKeysComponent', () => {
  let component: NewKeysComponent;
  let fixture: ComponentFixture<NewKeysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewKeysComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewKeysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
