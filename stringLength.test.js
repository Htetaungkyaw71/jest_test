const stringLength = require("./stringLength.js")

test("at least 1 character long and not longer than 10 characters",()=>{
    expect(stringLength("aaaaa")).toBeLessThanOrEqual(10);
    expect(stringLength("aa")).toBeGreaterThanOrEqual(1);
    expect(stringLength("aa")).toBe(2);
})