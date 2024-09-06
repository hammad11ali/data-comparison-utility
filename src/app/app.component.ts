import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UploadComponent } from './components/upload/upload.component';
import { AlertService } from './components/alert.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UploadComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'data-comparison-utility';
  constructor(private alertService:AlertService){

  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.alertService.openDialog();
  }
}
