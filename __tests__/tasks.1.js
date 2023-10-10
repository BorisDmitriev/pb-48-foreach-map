const rewire = require("rewire");

beforeAll(() => (consoleSpy = jest.spyOn(console, "log")));

describe("1. forEach() and map()", () => {
    it("`doubleValues` function returns a new array with the values doubled", () => {
        const solution = rewire("../solution");
        const doubleValues = solution.__get__("doubleValues");
        expect(doubleValues([13, 21, 42, 99])).toEqual([26, 42, 84, 198]);
    })
})
describe("2. Only Even Values", () => {
    it("`onlyEvenValues` function returns only even values from passed array", () => {
        const solution = rewire("../solution");
        const onlyEvenValues = solution.__get__("onlyEvenValues");
        expect(onlyEvenValues([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toEqual([2, 4, 6, 8, 10]);
    })
})

describe("3. Show First and Last", () => {
    it("`showFirstAndLast` function returns array with first and last letter of each string in passed array", () => {
        const solution = rewire("../solution");
        const showFirstAndLast = solution.__get__("showFirstAndLast");
        expect(showFirstAndLast(["colt", "matt", "north", "south"])).toEqual(["ct", "mt", "nh", "sh"]);
    })
})

describe("4. Key and Values", () => {
    it("`addKeyAndValue` function returns array with passed key/value pair added to each object in passed array", () => {
        const solution = rewire("../solution");
        const addKeyAndValue = solution.__get__("addKeyAndValue");
        const array = [{ name: "Drogon" }, { name: "Viserys" }, { name: "Matt" }, { name: "Colt" }];
        expect(addKeyAndValue(array, "title", "Supervisors")).toEqual([
            { name: "Drogon", title: "Supervisors" },
            { name: "Viserys", title: "Supervisors" },
            { name: "Matt", title: "Supervisors" },
            { name: "Colt", title: "Supervisors" }
        ]);
    })
})

describe("5. Vowels Count", () => {
    it("`vowelCount` function returns object with vowels as keys and counts of occurence as values", () => {
        const solution = rewire("../solution");
        const vowelCount = solution.__get__("vowelCount");
        const string = "Elie";
        expect(vowelCount(string)).toEqual({ e: 2, i: 1 });
    })
})