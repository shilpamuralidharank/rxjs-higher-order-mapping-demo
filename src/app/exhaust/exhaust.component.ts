import { Component } from "@angular/core";
import { from } from "rxjs";
import { switchMap, mergeMap, exhaustMap, concatMap } from "rxjs/operators";
import { ApiService} from '../api.service'

@Component({
  selector: "app-exhaust",
  templateUrl: "./exhaust.component.html",
  styleUrls: ["./exhaust.component.css"]
})
export class ExhaustComponent {
  constructor(private apiService: ApiService) {}
  isexhaustChecked: boolean = false;

  exhaustSelect(event) {
    if (this.isexhaustChecked === true) {
      console.log("Showing below a demo for exhaustMap");
      from(this.apiService.urls)
        .pipe(exhaustMap(url => this.apiService.apicall(1000, url)))
        .subscribe(response => console.log(response));
    }
  }
}
