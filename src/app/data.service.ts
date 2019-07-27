import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
@Injectable({
  providedIn: "root"
})
export class DataService {
  private messageSource = new BehaviorSubject([
    {
      bookID: 3782,
      title: "Theater Shoes (Shoes  #4)",
      authors: "Noel Streatfeild-Diane Goode",
      average_rating: 4.02,
      isbn: 679854347,
      language_code: "en-US",
      ratings_count: 4388,
      price: 842
    }
  ]);
  currentMessage = this.messageSource.asObservable();
  arrValue = [];
  constructor() {}

  changeMessage(data) {
    this.arrValue.push(data);
    this.messageSource.next(data);
    console.log(this.arrValue);
  }

  getArr() {
    return this.arrValue;
  }
  getArrLength() {
    return this.arrValue.length;
  }
}
