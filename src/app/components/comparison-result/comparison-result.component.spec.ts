import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparisonResultComponent } from './comparison-result.component';

describe('ComparisonResultComponent', () => {
  let component: ComparisonResultComponent;
  let fixture: ComponentFixture<ComparisonResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComparisonResultComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComparisonResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
