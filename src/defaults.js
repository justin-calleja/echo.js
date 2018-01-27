function statusLine(req) {
    return req.method + ' ' + req.url + ' HTTP/' + req.httpVersion;
}

function headers(req) {
    return req.rawHeaders.map((val, i) => (i % 2 ? val + '\n' : val + ': ')).join('');
}

function closeCb() {}

module.exports = {
    statusLine,
    headers,
    closeCb,
};