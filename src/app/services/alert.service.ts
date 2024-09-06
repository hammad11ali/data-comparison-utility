import { inject, Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AlertComponent } from '../components/alert/alert.component';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  readonly dialog = inject(MatDialog);

  openDialog(): void {
    this.dialog.open(AlertComponent, {
      width: '250px',
    });
  }
}
