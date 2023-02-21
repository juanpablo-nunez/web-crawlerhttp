const { sortPages } = require("./report.js");
const {test, expect} = require("@jest/globals");

test('sortTest 2 pages', () => {
    const input = {
        'https://blog.boot.dev/path/': 1,
        'https://blog.boot.dev': 3
    }
    const actual = sortPages(input);
    const expected = [
        ['https://blog.boot.dev', 3],
        ['https://blog.boot.dev/path/', 1]
    ]
    expect(actual).toEqual(expected);
})

test('sortTest 5 pages', () => {
    const input = {
        'https://blog.boot.dev/path/': 1,
        'https://blog.boot.dev': 3,
        'https://blog.boot.dev/path5': 5,
        'https://blog.boot.dev/path2': 2,
        'https://blog.boot.dev/path9': 9,
    }
    const actual = sortPages(input);
    const expected = [
        ['https://blog.boot.dev/path9', 9],
        ['https://blog.boot.dev/path5', 5],
        ['https://blog.boot.dev', 3],
        ['https://blog.boot.dev/path2', 2],
        ['https://blog.boot.dev/path/', 1]
    ]
    expect(actual).toEqual(expected);
})

