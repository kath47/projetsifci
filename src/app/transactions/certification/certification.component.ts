
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from "@angular/material/dialog";
import { DialogCfopComponent } from './dialog-cfop/dialog-cfop.component';
import { SelectionModel } from '@angular/cdk/collections';



@Component({
  selector: 'app-certification',
  styleUrls: ['./certification.component.scss'],
  templateUrl: './certification.component.html',
})
export class CertificationComponent implements AfterViewInit {
  
  
  
  displayedColumns: string[] = ['select', 'position', 'name', 'weight', 'symbol', 'village','demandeur'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);


  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: PeriodicElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }





  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(public dialog: MatDialog) {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  openDialog() {
    this.dialog.open(DialogCfopComponent, {
      width: '600px', // Set the width as per your requirement
      height:'580px',// Add any other configuration options here
    });
  }
}


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  village: string;
  demandeur: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', village: 'H',demandeur: 'H'} ,
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', village: 'H' ,demandeur: 'H'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', village: 'H' ,demandeur: 'H'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be', village: 'H' ,demandeur: 'H'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B', village: 'H' ,demandeur: 'H'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C', village: 'H' ,demandeur: 'H'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N', village: 'H' ,demandeur: 'H'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O', village: 'H' ,demandeur: 'H'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F', village: 'H' ,demandeur: 'H'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne', village: 'H' ,demandeur: 'H'},
];
