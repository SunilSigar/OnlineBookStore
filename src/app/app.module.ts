import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { MaterialModule } from "./material.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BookDetailDialogComponent } from "./book-detail-dialog/book-detail-dialog.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { CartComponent } from "./cart/cart.component";
import { SnackBarComponentExample } from "./cart/cart.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BookDetailDialogComponent,
    HeaderComponent,
    FooterComponent,
    CartComponent,
    SnackBarComponentExample
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule
  ],
  entryComponents: [BookDetailDialogComponent, SnackBarComponentExample],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
