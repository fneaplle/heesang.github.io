let a = 1

// 1. child-process모듈의 spawn 취득
const spawn = require('child_process').spawn;

// 2. spawn을 통해 "python 파이썬파일.py" 명령어 실행
const result = spawn('python', ['./python/zero.py', '1'],);

// 3. stdout의 'data'이벤트리스너로 실행결과를 받는다.
result.stdout.on('data', (data) => {
    console.log(data.toString());
});

// 4. 에러 발생 시, stderr의 'data'이벤트리스너로 실행결과를 받는다.
result.stderr.on('data', (data) => {
    console.log("22", data.toString());
});