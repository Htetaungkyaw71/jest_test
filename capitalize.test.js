const capitalize = require("./capitalize.js")

test("returns that string with the first character capitalized",()=>{
    expect(capitalize("abc")).toBe("Abc");
    expect(capitalize(123)).toBeNull();
})