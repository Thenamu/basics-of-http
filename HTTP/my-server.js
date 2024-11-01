// 노드 http 모듈로 웹서버 만들기
const http = require("http");

// 서버가 제공할 콘텐츠
const content = `HTTP Lecture

1. Basic
    1.1 HTTP Start
    1.2 HTTP Message
2. Web Browser
    2.1 Content Negotiation
    2.2 Cookie
`

// 이 콘텐츠로 요청을 처리할 핸들러 함수 정의
// 이 핸들러 함수는 request 객체와 response 객체를 인자로 받는데
// response 객체의 end함수를 호출하면 요청을 보낸 클라이언트로 응답해주는 역할을 한다
const handler = (request, response) => response.end(content);

// 위 핸들러로 http 서버 객체를 하나 만듬
// http 모듈의 createServer함수는 서버를 만드는 함수
const server = http.createServer(handler);

// 서버는 3000번 포트에서 요청을 기다리게 된다
server.listen(3000, () => console.log("server is running ::3000"))