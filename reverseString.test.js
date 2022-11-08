const stringLength = require("./reverseString.js")

test("return need to reverse",()=>{
    expect(stringLength("abcdef")).toBe("fedcba")
})