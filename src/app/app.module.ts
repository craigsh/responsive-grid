import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { ResponsiveGridComponent } from './responsive-grid.component';

@NgModule({
	declarations: [AppComponent, ResponsiveGridComponent],
	imports: [BrowserModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
