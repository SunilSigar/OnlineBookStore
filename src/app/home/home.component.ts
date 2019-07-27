import { Component, OnInit, ViewChild } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {
  MatPaginator,
  MatSort,
  MatTableDataSource,
  MatDialog
} from "@angular/material";
import { BookDetailDialogComponent } from "../book-detail-dialog/book-detail-dialog.component";
import { resData } from "../home/constdata";

export interface PeriodicElement {
  bookID: string;
  title: string;
  authors: string;
  average_rating: string;
  isbn: string;
  language_code: string;
  ratings_count: string;
  price: string;
}
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.sass"]
})
export class HomeComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns: string[] = [
    "bookID",
    "title",
    "authors",
    "average_rating",
    "language_code",
    "price"
  ];
  bookData: PeriodicElement[];
  dataSource = new MatTableDataSource(this.bookData);
  constructor(private httpClient: HttpClient, public dialog: MatDialog) {
    // this.mapBookData([...resData]);
  }
  loading = true;
  ngOnInit() {
    this.httpClient
      .get(
        "https://cors-anywhere.herokuapp.com/http://starlord.hackerearth.com/books"
      )
      .subscribe(data => {
        this.mapBookData(data);
      });
  }

  mapBookData(data) {
    this.loading = false;
    this.bookData = data;
    this.dataSource = new MatTableDataSource(this.bookData);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openDialog(bookDetails) {
    this.dialog.open(BookDetailDialogComponent, {
      data: bookDetails
    });
  }
}
