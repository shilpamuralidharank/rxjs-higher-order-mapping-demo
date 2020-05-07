import { Component } from "@angular/core";
import { from } from "rxjs";
import { switchMap, mergeMap, exhaustMap, concatMap } from "rxjs/operators";
import { ApiService} from '../api.service'

@Component({
  selector: "app-merge",
  templateUrl: "./merge.component.html",
  styleUrls: ["./merge.component.css"]
})
export class MergeComponent {
  constructor(private apiService: ApiService) {}
  ismergeChecked: boolean = false;

  mergeSelect(event) {
    if (this.ismergeChecked === true) {
      console.log("Showing below a demo for mergeMap");
      from(this.apiService.urls)
        .pipe(mergeMap(url => this.apiService.apicall(1000, url)))
        .subscribe(response => console.log(response));
    }
  }
}
