import { Component, AfterViewInit } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'angular-material-gridlist';

  private tableWidth1500: { width: string; txt: string } = {
    width: '1500px',
    txt: 'This table is having a fixed width of 1500px'
  };
  private tableWidth100: { width: string; txt: string } = {
    width: '100%',
    txt: 'This table is having a width of 100%'
  };
  tableWidth: { width: string; txt: string } = this.tableWidth1500;

  // Variable that controls the number of columns for the Material Grid Lists
  cols: number;
  numbers: number[] = [];

  tiles: Tile[] = [
    { text: 'One', cols: 2, rows: 1, color: 'lightblue' },
    { text: 'Two', cols: 2, rows: 1, color: 'lightgreen' },
    { text: 'Three', cols: 2, rows: 1, color: 'lightpink' },
    { text: 'Four', cols: 2, rows: 1, color: '#DDBDF1' },
    { text: 'Five', cols: 2, rows: 1, color: 'lightblue' },
    { text: 'Six', cols: 2, rows: 1, color: 'lightgreen' },
    { text: 'Seven', cols: 2, rows: 1, color: 'lightpink' }
  ];

  // Method to get current height and width of window
  getCurrentHeightWidth = () => {
    console.debug(
      `getCurrentHeightWidth() called -> height: ${window.innerHeight} width: ${
        window.innerWidth
      }`
    );
    this.calculateCols(window.innerWidth);
  };

  // Method to calculate the number of columns for the Material Grid Lists
  calculateCols = (width: number) => {
    this.cols = Math.floor(width / 220);
    this.numbers = [];
    for (let i = 0; i < 2 * this.cols; i++) {
      this.numbers.push(i + 1);
    }
    console.debug(`new value of cols: ${this.cols}`);
  };

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called');
    console.log(window);
    this.getCurrentHeightWidth();
    window.onresize = this.getCurrentHeightWidth;
  }

  changeTableWidth = (): void => {
    if (this.tableWidth === this.tableWidth1500)
      this.tableWidth = this.tableWidth100;
    else this.tableWidth = this.tableWidth1500;
  };
}
