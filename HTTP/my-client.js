// http 요청을 만들기 위해 http 모듈을 사용
const http = require("http")

// 응답 핸들러를 만듬
const handler = (response) => {
    const data = []

    // 응답이 오면 data 배열에 기록
    response.on("data", chunk => data.push(chunk.toString()))

    // 응답이 종료되면 내용을 쌓아둔 data 배열을 출력
    response.on("end", () => console.log(data.join("")))
}

// 서버 주소 http://localhost:3000으로 접속하는 url 객체 준비
const options = new URL("http://localhost:3000/")

// http 모듈의 request 함수로 서버에 요청을 보내는 request 객체를 구성
const request = http.request(options, handler)

// 서버에 요청 보내기
request.end()