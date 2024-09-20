import { Component } from '@angular/core';
import { SelectComponent } from "../../components/select/select.component";
import { ContentSource, DataComparisonService } from '../../services/data-comparison.service';
import { DataInputComponent } from '../../components/data-input/data-input.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AlertService } from '../../services/alert.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-input-page',
  standalone: true,
  imports: [SelectComponent, DataInputComponent, MatIconModule,MatButtonModule],
  templateUrl: './input-page.component.html',
  styleUrl: './input-page.component.scss'
})
export class InputComponent {
  ContentSource = ContentSource;
  constructor(
    public dataComparisonService: DataComparisonService,
    private alertService: AlertService,
    private router:Router
  ) {
  }
  next(){
    if(this.dataComparisonService.sourceContent && this.dataComparisonService.targetContent){
      console.log('Next');
      this.dataComparisonService.saveContent();
      this.router.navigate(['/comparison']);
    }
    else{
      this.alertService.openDialog('Error','Please provide both source and target content');
    }
  }
}
