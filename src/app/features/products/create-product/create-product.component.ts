import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

import { BackendService } from '../../../services/backend.service';

export interface UserData {
  id: string;
  name: string;
  progress: string;
  color: string;
  plan: string;
  price: string;
}

/** Constants used to fill up our data base. */
const COLORS: string[] = [
  'maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple', 'fuchsia', 'lime', 'teal',
  'aqua', 'blue', 'navy', 'black', 'gray'
];
const NAMES: string[] = [
  'Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack', 'Charlotte', 'Theodore', 'Isla', 'Oliver',
  'Isabella', 'Jasper', 'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'
];

/**
 * @title Data table with sorting, pagination, and filtering.
 */

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  toggleField: string;
  members: any[];

  savedChanges = false;
  error: boolean = false;
  errorMessage: String = "";
  dataLoading: boolean = false;
  private querySubscription;

  displayedColumns: string[] = ['name', 'plan', 'price'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort

  constructor(
    private _backendService: BackendService
  ) {     
    // Create 100 users
   // const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(this.members);
   }

  ngOnInit() {
    this.toggleField = "searchMode";
    this.dataSource = new MatTableDataSource(this.members);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    
  }

  toggle(filter?) {
    if(!filter) { filter = "searchMode"}
    else { filter = filter;}
    this.toggleField = filter;
  }

  getData() {
    this.dataLoading = true;
    this.querySubscription = this._backendService.getProducts('product')
      .subscribe(members => {
        this.members = members;
        this.dataSource = new MatTableDataSource(members);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
        (error) => {
          this.error = true;
          this.errorMessage = error.message;
          this.dataLoading = false;
        },
        () => {this.error = false; this.dataLoading = false;});
  }

// function for data table --result view
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  // /** Builds and returns a new User. */
  // function createNewUser(id: number): UserData {
  //   const name = NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
  //       NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';
  
  //   return {
  //     id: id.toString(),
  //     name: name,
  //     progress: Math.round(Math.random() * 100).toString(),
  //     color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
  //   };
  // }
}
