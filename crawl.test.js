const { normalizeURL, getURLsFromHTML } = require("./crawl.js");
const {test, expect} = require("@jest/globals");

test('normalizeURL strip protocol', () => {
    const input = "https://blog.boot.dev/path";
    const actual = normalizeURL(input);
    const expected = "blog.boot.dev/path";
    expect(actual).toEqual(expected);
})

test('normalizeURL strip trailing /', () => {
    const input = "https://blog.boot.dev/path/";
    const actual = normalizeURL(input);
    const expected = "blog.boot.dev/path";
    expect(actual).toEqual(expected);
})

test('normalizeURL capitals', () => {
    const input = "https://BLOG.boot.dev/path/";
    const actual = normalizeURL(input);
    const expected = "blog.boot.dev/path";
    expect(actual).toEqual(expected);
})
test('normalizeURL strip http', () => {
    const input = "http://BLOG.boot.dev/path/";
    const actual = normalizeURL(input);
    const expected = "blog.boot.dev/path";
    expect(actual).toEqual(expected);
})

test('getURLsFromHTML absolute', () => {
    const inputHTMLBody =
    `<html>
        <body>
            <a href="https://blog.boot.dev/path/">link</a>
        </body>
    </html>`;
    const inputBaseURL = "https://blog.boot.dev/path/";
    const actual = getURLsFromHTML(inputHTMLBody, inputBaseURL);
    const expected = ["https://blog.boot.dev/path/"];
    expect(actual).toEqual(expected);
})
test('getURLsFromHTML relative', () => {
    const inputHTMLBody =
    `<html>
        <body>
            <a href="/path/">link</a>
        </body>
    </html>`;
    const inputBaseURL = "https://blog.boot.dev";
    const actual = getURLsFromHTML(inputHTMLBody, inputBaseURL);
    const expected = ["https://blog.boot.dev/path/"];
    expect(actual).toEqual(expected);
})

test('getURLsFromHTML both', () => {
    const inputHTMLBody =
    `<html>
        <body>
            <a href="https://blog.boot.dev/path1/">link 1</a>
            <a href="https://blog.boot.dev/path2/">link 2</a>
        </body>
    </html>`;
    const inputBaseURL = "https://blog.boot.dev";
    const actual = getURLsFromHTML(inputHTMLBody, inputBaseURL);
    const expected = ["https://blog.boot.dev/path1/", "https://blog.boot.dev/path2/"];
    expect(actual).toEqual(expected);
})

test('getURLsFromHTML invalid', () => {
    const inputHTMLBody =
    `<html>
        <body>
            <a href="invalid">invalid url</a>
        </body>
    </html>`;
    const inputBaseURL = "https://blog.boot.dev";
    const actual = getURLsFromHTML(inputHTMLBody, inputBaseURL);
    const expected = [];
    expect(actual).toEqual(expected);
})