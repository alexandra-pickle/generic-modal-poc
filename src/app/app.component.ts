import { Component } from '@angular/core';
import { SearchDialogService } from './search-dialog/search-dialog-service/search-dialog.service';
import { Store } from './config/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private searchDialogService: SearchDialogService) {}

  store = Store;

  displaySearchModal() {
    this.searchDialogService.open();
  }
}
