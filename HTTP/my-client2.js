// http 요청을 만들기 위해 http 모듈을 사용
const http = require("http")

// 명령어 인자로 받은 url
// node에 전역 객체 중에 process 객체가 있다
// 커맨드라인 정보나 컴퓨터 자원 정보들이 있는데
// argv배열에는 node 프로그램을 실행할때 명령어들이 배열로 들어있다
// 그중 2번 index는 URL로 받을 문자다
const url = process.argv[2];

// url 인자가 없으면 오류를 출력하고 종료
if (!url) {
    console.log("Usage: node my-client.js <url>");
    process.exit();
}

// 인자로 접속하는 url 객체를 준비
const options = new URL(url);

// 응답 핸들러를 만듬
const handler = (response) => {
    const data = []

    // 응답이 오면 data 배열에 기록
    response.on("data", chunk => data.push(chunk.toString()))

    // 응답이 종료되면 내용을 쌓아둔 data 배열을 출력
    response.on("end", () => console.log(data.join("")))
}

// http 모듈의 request 함수로 서버에 요청을 보내는 request 객체 구성
const request = http.request(options, handler);

// 서버에 요청을 보냄
request.end();