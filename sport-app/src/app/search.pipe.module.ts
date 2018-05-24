import {NgModule} from "@angular/core";
import {SearchPipe} from "./search.pipe";
import {SearchPipeForThings} from "./search.pipe.for.things";

@NgModule({
  declarations:[
    SearchPipe,
    SearchPipeForThings
  ],
  exports: [
    SearchPipe,
    SearchPipeForThings
  ]
})

export class SearchPipeModule {
}
