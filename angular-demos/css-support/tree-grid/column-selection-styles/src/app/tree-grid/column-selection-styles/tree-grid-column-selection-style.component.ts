import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import { IgxTreeGridComponent } from "igniteui-angular";
import { FOODS_DATA } from "../data/foods";

@Component({
  selector: "app-tree-grid-column-selection-style",
  templateUrl: "./tree-grid-column-selection-style.component.html",
  styleUrls: ["./tree-grid-column-selection-style.component.css"]
})
export class TreeGridColumnSelectionStylesComponent implements OnInit, AfterViewInit {
  public data;

  public columnConfig = [
        { field: "ID",  selectable: true },
        { field: "Name", selectable: true },
        { field: "UnitPrice",  selectable: true },
        { field: "AddedDate",  selectable: false, formatter: this.formatDate },
        { field: "Discontinued", selectable: true }
    ];

  @ViewChild(IgxTreeGridComponent)
  public tGrid: IgxTreeGridComponent;

  public ngOnInit(): void {
    this.data = FOODS_DATA();
  }

  public ngAfterViewInit() {
    this.tGrid.selectColumns(["ID", "UnitPrice"]);
  }

  public formatDate(val: Date) {
    return new Intl.DateTimeFormat("en-US").format(val);
  }

}
