import { TestBed } from "@angular/core/testing";
import { AppComponent } from "./app.component";

describe("AppComponent", () => {
	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [AppComponent],
		}).compileComponents();
	});

	it("should create the app", () => {
		const fixture = TestBed.createComponent(AppComponent);
		const app = fixture.componentInstance;
		expect(app).toBeTruthy();
	});

	it(`should have as title 'responsive-grid'`, () => {
		const fixture = TestBed.createComponent(AppComponent);
		const app = fixture.componentInstance;
		expect(app.title).toEqual("responsive-grid");
	});

	it("should render title", () => {
		const fixture = TestBed.createComponent(AppComponent);
		fixture.detectChanges();
		const compiled = fixture.nativeElement as HTMLElement;
		expect(compiled.querySelector(".content span")?.textContent).toContain(
			"responsive-grid app is running!"
		);
	});
});
