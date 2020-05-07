import { Component } from "@angular/core";
import { from } from "rxjs";
import { switchMap, mergeMap, exhaustMap, concatMap } from "rxjs/operators";
import { ApiService} from '../api.service'

@Component({
  selector: "app-switch",
  templateUrl: "./switch.component.html",
  styleUrls: ["./switch.component.css"]
})
export class SwitchComponent {
  constructor(private apiService: ApiService) {}
  isswitchChecked: boolean = false;

  switchSelect(event) {
    if (this.isswitchChecked === true) {
      console.log("Showing below a demo for switchMap");
      from(this.apiService.urls)
        .pipe(switchMap(url => this.apiService.apicall(1000, url)))
        .subscribe(response => console.log(response));
    }
  }
}
