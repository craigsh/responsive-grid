import { CommonModule } from "@angular/common";
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
	standalone: true,
	imports: [CommonModule],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResponsiveGridComponent implements OnInit {
	constructor() {}

	ngOnInit(): void {}
}
