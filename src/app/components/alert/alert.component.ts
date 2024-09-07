import { Component, Inject, inject, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogActions, MatDialogClose, MatDialogTitle, MatDialogContent, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [MatButtonModule, MatDialogActions, MatDialogClose, MatDialogTitle, MatDialogContent],
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.scss'
})
export class AlertComponent {
  readonly dialogRef = inject(MatDialogRef<AlertComponent>);
  @Input() title = '';
  @Input() message = '';
  constructor(@Inject(MAT_DIALOG_DATA) public data: { title: string; message: string }) {
    this.title = data.title;
    this.message = data.message;
  }
}
