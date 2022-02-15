import { getFullYear, getFooterCopy, getLatestNotification } from "./utils";

describe("utilsTests", function() {
	describe("getFullYear", function () {
		it("Return the correct year", function () {
			const year = getFullYear();
			expect(year).toEqual(new Date().getFullYear());
		});
	});

	describe("getFooterCopy", function () {
		it("get the true footer", function() {
			expect(getFooterCopy(true)).toEqual("Holberton School");
		});

		it("get the false footer", function() {
			expect(getFooterCopy(false)).toEqual("Holberton School main dashboard");
		})
	});

	describe("getLatestNotification", function () {
	})
})
