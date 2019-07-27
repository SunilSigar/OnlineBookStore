import { Component, OnInit } from "@angular/core";
import { ThemeService } from "../services/theme.service";
import { Observable } from "rxjs";
import { DataService } from "../data.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.sass"]
})
export class HeaderComponent implements OnInit {
  isDarkTheme: Observable<boolean>;
  totalSelection = 0;
  constructor(private themeService: ThemeService, private data: DataService) {}

  ngOnInit() {
    this.isDarkTheme = this.themeService.isDarkTheme;
    this.data.currentMessage.subscribe(message => {
      this.getLength();
    });
  }
  getLength() {
    this.totalSelection = this.data.getArrLength();
    // const len = this.data.getArrLength();
    // this.totalSelection = len === 0 ? 0 : len + 1;
  }

  toggleDarkTheme(checked: boolean) {
    this.themeService.setDarkTheme(checked);
  }
}
