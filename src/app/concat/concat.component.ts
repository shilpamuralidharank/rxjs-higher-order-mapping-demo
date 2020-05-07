import { Component } from "@angular/core";
import { from } from "rxjs";
import { switchMap, mergeMap, exhaustMap, concatMap } from "rxjs/operators";
import { ApiService } from "../api.service";

@Component({
  selector: "app-concat",
  templateUrl: "./concat.component.html",
  styleUrls: ["./concat.component.css"]
})
export class ConcatComponent {
  constructor(private apiService: ApiService) {}
  isConcatChecked: boolean = false;

  concatSelect(event) {
    if (this.isConcatChecked === true) {
      console.log("Showing below a demo for concatMap");
      from(this.apiService.urls)
        .pipe(concatMap(url => this.apiService.apicall(1000, url)))
        .subscribe(response => console.log(response));
    }
  }
}
