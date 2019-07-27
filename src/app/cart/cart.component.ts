import { Component, OnInit, ViewChild } from "@angular/core";
import {
  MatPaginator,
  MatSort,
  MatTableDataSource,
  MatDialog
} from "@angular/material";
import { DataService } from "../data.service";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: "snack-bar-component-example",
  templateUrl: "./bar.component.html",
  styleUrls: ["./bar.component.css"]
})
export class SnackBarComponentExample {}

export interface PeriodicElement {
  title: string;
  price: string;
}

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.sass"]
})
export class CartComponent implements OnInit {
  durationInSeconds = 3;
  displayedColumns: string[] = ["title", "price"];
  bookData: PeriodicElement[];
  dataSource = new MatTableDataSource(this.bookData);
  totalPrice = 0;
  constructor(private data: DataService, private _snackBar: MatSnackBar) {}
  ngOnInit() {
    this.data.currentMessage.subscribe(message => console.log(message));
    this.mapBookData(this.data.getArr());
  }

  mapBookData(data) {
    this.bookData = data;
    this.dataSource = new MatTableDataSource(this.bookData);
    data.forEach(element => {
      this.totalPrice += element.price;
    });
  }

  openSnackBar() {
    this._snackBar.openFromComponent(SnackBarComponentExample, {
      duration: this.durationInSeconds * 1000
    });
  }
}
