// 노드 http 모듈로 웹서버 만들기
const http = require("http");
const path = require("path");
const fs = require("fs");

// 요청한 파일을 응답하는 함수
const static = (request, response) => {
    // 요청한 파일의 경로를 계산
    const filepath = path.join(__dirname, "public", request.url);
    
    // 요청한 파일을 읽기
    fs.readFile(filepath, (err, data) => {
        // 파일을 읽지 못한 경우
        if (err) return response.end("Not Found");

        // 파일을 읽고 내용을 응답
        response.end(data); 
    });
}

// static 함수를 요청할 처리할 핸들러 함수에 사용
const handler = (request, response) => static(request, response);

// 위 핸들러로 http 서버 객체를 하나 만듬
const server = http.createServer(handler);

server.listen(3000, () => console.log("server is running ::3000"))
