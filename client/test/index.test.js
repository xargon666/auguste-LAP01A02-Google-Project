/**
 * @jest-environment jsdom
 */
const fs = require("fs");
const path = require("path");
const html = fs.readFileSync(path.resolve(__dirname, "../index.html"), "utf8");

describe("Testing Client-Side index.html...", () => {
  beforeAll(() => {
    document.documentElement.innerHTML = html.toString();
    console.log("Testing is running");
  });

  it("check title has value", () => {
    let docTitle = document.title;
    expect(docTitle).not.toBe("");
  });

  describe("header", () => {
    describe.each(Array.from(document.querySelectorAll('header>a'))
    )("anchor tag #%#", a => {
        test("has a href attribute", () => {
            expect(a.hasAttribute("href")).toBe(true);
        });
        
        test("has text content", () => {
            expect(a.textContent).toBeTruthy();
        });
    });
});

}); // END OF MAIN DESCRIBE
