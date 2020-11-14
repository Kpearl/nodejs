/*
https 모듈 : 웹 서버에 SSL 암호화 추가
암호화를 적용하려면 인증서를 인증 기관에서 구입해서 사용해야 함
*/
const https = require('https');
const fs = require('fs');

https.createServer({
    cert: fs.readFileSync('도메인 인증서 경로'),
    key: fs.readFileSync('도메인 비밀키 경로'),
    ca: [
        fs.readFileSync('상위 인증서 경로'),
        fs.readFileSync('상위 인증서 경로'),
    ],
}, (req, res) => {
    res.write('<h1>Hello Node!</h1>');
    res.end('<p>Hello Server!</p>');
}).listen(443, () => {
    console.log('443 포트에서 서버 대기중');
});