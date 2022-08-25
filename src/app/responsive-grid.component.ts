import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";

@Component({
	selector: "rg-responsive-grid",
	template: ` <p>responsive-grid works!</p> `,
	styles: [
		`
			:host {
				display: block;
			}
		`,
	],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResponsiveGridComponent implements OnInit {
	constructor() {}

	ngOnInit(): void {}
}
