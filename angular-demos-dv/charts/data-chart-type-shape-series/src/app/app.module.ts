import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		DataChartTypeScatterShapeSeriesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxDataChartCoreModule,
		IgxDataChartShapeModule,
		IgxDataChartShapeCoreModule,
		DataChartTypeScatterPolylineSeriesComponent,
		IgxDataChartScatterModule
  ],
  providers: [SampleShapeData],
  entryComponents: []
})
export class AppModule {}
