import {Component, OnInit, ViewChild, OnDestroy} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

import { BackendService } from '../../../services/backend.service';
import { moveIn, fallIn } from 'src/app/utilities/router.animation';

export interface UserData {
  id: string;
  category: string;
  scategory: string;
  name: string;
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
  styleUrls: ['./create-product.component.css'],
  animations: [moveIn(), fallIn()],
  host: { '[@moveIn]': '' }
})
export class CreateProductComponent implements OnInit, OnDestroy {

  toggleField: string;
  dataSource: MatTableDataSource<any>;
  members: any[];
  myDocData: any;

  savedChanges = false;
  error: boolean = false;
  errorMessage: String = "";
  dataLoading: boolean = false;
  private querySubscription;
  
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  displayedColumns = ['category', 'scategory', 'name', 'price', '_id'];

  constructor(
    private _backendService: BackendService
  ) { }

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
        this.dataLoading = false;
      },
        (error) => {
          this.error = true;
          this.errorMessage = error.message;
          this.dataLoading = false;
        },
        () => {this.error = false; this.dataLoading = false;});
  }

  getFilterData(filters) {
    this.dataLoading = true;
    this.querySubscription = this._backendService.getFilterProducts('product', filters)
      .subscribe(members => {
        this.members = members;
        this.dataSource = new MatTableDataSource(members);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.dataLoading = false;
      },
        (error) => {
          this.error = true;
          this.errorMessage = error.message;
          this.dataLoading = false;
        },
        () => {this.error = false; this.dataLoading = false;});
  }

  setData(formData) {
    this.dataLoading = true;
    this.querySubscription = this._backendService.setProducts('product', formData)
      .subscribe(members => {
         if(members) {
           this.savedChanges = true;
           this.dataLoading = false;
         } 
      },
        (error) => {
          this.error = true;
          this.errorMessage = error.message;
          this.dataLoading = false;
        },
        () => {this.error = false; this.dataLoading = false;});
  }

  updateData(formData) {
    this.dataLoading = true;
    this.querySubscription = this._backendService.updateProducts('product', formData)
      .subscribe(members => {
         if(members) {
           this.savedChanges = true;
           this.dataLoading = false;
         } 
      },
        (error) => {
          this.error = true;
          this.errorMessage = error.message;
          this.dataLoading = false;
        },
        () => {this.error = false; this.dataLoading = false;});
  }
//   updateData(formData) {
//     formData.tags = formData.tags.split(',');
//     if (confirm("Are you sure want to update this record ?")) {
//         this.dataLoading = true;
//         this._backendService.updateProduct('product', formData).then((res) => {
//             this.error = false;
//             this.errorMessage = "";
//             this.dataLoading = false;
//             this.savedChanges = true;
//         }).catch(error => {
//             this.error = true;
//             this.errorMessage = error.message;
//             this.dataLoading = false;
//         });
//     }
// }

  getDoc(docId) {
    this.dataLoading = true;
    this.querySubscription = this._backendService.getOneProductDoc('product', docId)
      .subscribe(res => {
         if(res) {
           this.myDocData = res;
           this.toggle('editMode');
           this.dataLoading = false;
         } 
      },
        (error) => {
          this.error = true;
          this.errorMessage = error.message;
          this.dataLoading = false;
        },
        () => {this.error = false; this.dataLoading = false;});
  }

  deleteDoc(docId) {
    if (confirm("Are you sure you want to delete this product?")) {
    this.dataLoading = true;
    this.querySubscription = this._backendService.delOneProductDoc('product', docId)
      .subscribe(res => {
         if(res) {
           this.toggle('searchMode');
           this.dataLoading = false;
         } 
      },
        (error) => {
          this.error = true;
          this.errorMessage = error.message;
          this.dataLoading = false;
        },
        () => {this.error = false; this.dataLoading = false;});
    }
  }


// function for data table --result view
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    if(this.querySubscription) {
      this.querySubscription.unsubscribed();
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
