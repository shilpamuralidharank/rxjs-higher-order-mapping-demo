import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ExhaustComponent } from './exhaust/exhaust.component';
import { ConcatComponent} from './concat/concat.component';
import { SwitchComponent} from './switch/switch.component';
import { MergeComponent} from './merge/merge.component';
import { ApiService} from './api.service'

@NgModule({
  imports:      [ BrowserModule, FormsModule,HttpClientModule ],
  declarations: [ AppComponent,ConcatComponent, ExhaustComponent, SwitchComponent, MergeComponent],
  bootstrap:    [ AppComponent ],
    providers: [
  ApiService
  ]
})
export class AppModule { }
