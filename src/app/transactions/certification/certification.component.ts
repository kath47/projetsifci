
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from "@angular/material/dialog";
import { DialogCfopComponent } from './dialog-cfop/dialog-cfop.component';

@Component({
  selector: 'app-certification',
  styleUrls: ['./certification.component.scss'],
  templateUrl: './certification.component.html',
})
export class CertificationComponent implements AfterViewInit {
  displayedColumns: string[] = ['position', 'depart', 'sprefecture'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(public dialog: MatDialog) {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  openDialog() {
    this.dialog.open(DialogCfopComponent, {
      width: '400px', // Set the width as per your requirement
      // Add any other configuration options here
    });
  }
}

export interface PeriodicElement {
  position: number;
  depart: string;
  sprefecture: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  // Your data
  {position: 1, depart:'Toumodi', sprefecture:'Toumodi'},
  {position: 3, depart:'Toumodi', sprefecture:'Toumodi'},
  {position: 4, depart:'Toumodi', sprefecture:'Toumodi'},
  {position: 5, depart:'Toumodi', sprefecture:'Toumodi'},
  {position: 6, depart:'Toumodi', sprefecture:'Toumodi'},
  {position: 7, depart:'Toumodi', sprefecture:'Toumodi'},
  {position: 8, depart:'Toumodi', sprefecture:'Toumodi'},
  {position: 9, depart:'Toumodi', sprefecture:'Toumodi'},
  {position: 10, depart:'Toumodi', sprefecture:'Toumodi'},
  {position: 11, depart:'Toumodi', sprefecture:'Toumodi'},
  {position: 12, depart:'Toumodi', sprefecture:'Toumodi'},
  {position: 13, depart:'Toumodi', sprefecture:'Toumodi'},
  {position: 14, depart:'Toumodi', sprefecture:'Toumodi'},
  {position: 15, depart:'Toumodi', sprefecture:'Toumodi'},
  {position: 16, depart:'Toumodi', sprefecture:'Toumodi'},
  {position: 17, depart:'Toumodi', sprefecture:'Toumodi'},
  {position: 18, depart:'Toumodi', sprefecture:'Toumodi'},
  {position: 19, depart:'Toumodi', sprefecture:'Toumodi'},
  {position: 20, depart:'Toumodi', sprefecture:'Toumodi'},
];
