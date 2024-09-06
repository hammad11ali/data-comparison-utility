import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeepRemoveKeyComponent } from './keep-remove-key.component';

describe('KeepRemoveKeyComponent', () => {
  let component: KeepRemoveKeyComponent;
  let fixture: ComponentFixture<KeepRemoveKeyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KeepRemoveKeyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KeepRemoveKeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
