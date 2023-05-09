import { Component } from '@angular/core';
import { DialogService } from './dialog-shell-component/dialog.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private dialogService: DialogService) {}

  displaySearchModal(value: string) {
    this.dialogService.open(value);
  }
}
