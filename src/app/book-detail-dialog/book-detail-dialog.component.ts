import { Component, OnInit, Inject } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material";
import { DataService } from "../data.service";
@Component({
  selector: "app-book-detail-dialog",
  templateUrl: "./book-detail-dialog.component.html",
  styleUrls: ["./book-detail-dialog.component.sass"]
})
export class BookDetailDialogComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private serviceData: DataService
  ) {}

  ngOnInit() {
    this.serviceData.currentMessage.subscribe(message => console.log(message));
  }

  addToCart(data) {
    this.serviceData.changeMessage(data);
  }
}
