import { Component } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-material-gridlist';

  private tableWidth1500: { width: string; txt: string } = {
    width: '1500px',
    txt: 'This table is having a fixed width of 1500px',
  };
  private tableWidth100: { width: string; txt: string } = {
    width: '100%',
    txt: 'This table is having a width of 100%',
  };
  tableWidth: { width: string; txt: string } = this.tableWidth1500;

  tiles: Tile[] = [
    { text: 'One', cols: 2, rows: 1, color: 'lightblue' },
    { text: 'Two', cols: 2, rows: 1, color: 'lightgreen' },
    { text: 'Three', cols: 2, rows: 1, color: 'lightpink' },
    { text: 'Four', cols: 2, rows: 1, color: '#DDBDF1' },
    { text: 'Five', cols: 2, rows: 1, color: 'lightblue' },
    { text: 'Six', cols: 2, rows: 1, color: 'lightgreen' },
    { text: 'Seven', cols: 2, rows: 1, color: 'lightpink' },
  ];

  changeTableWidth = (): void => {
    if (this.tableWidth === this.tableWidth1500)
      this.tableWidth = this.tableWidth100;
    else this.tableWidth = this.tableWidth1500;
  };
}
