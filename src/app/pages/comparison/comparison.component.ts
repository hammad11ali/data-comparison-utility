import { Component, OnInit } from '@angular/core';
import { ComparisonResultComponent } from "../../components/comparison-result/comparison-result.component";
import { DataComparisonService } from '../../services/data-comparison.service';

@Component({
  selector: 'app-comparison',
  standalone: true,
  imports: [ComparisonResultComponent],
  templateUrl: './comparison.component.html',
  styleUrl: './comparison.component.scss'
})
export class ComparisonComponent  implements OnInit {
  constructor(
    public dataComparisonService: DataComparisonService
  ) {}

  ngOnInit(): void {
    this.dataComparisonService.createComparisonObject();
  }
}
