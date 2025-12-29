import { useEffect, useState } from 'react';
import './App.css';

function App() {
  // 1. 메시지를 담을 공간(변수) 만들기
  const [message, setMessage] = useState("서버랑 연결 시도 중...");

  // 2. 화면이 켜지면 딱 한 번 실행되는 함수
  useEffect(() => {
    // 👇 여기에 아까 Render에서 만든 [본인 서버 주소]를 넣으세요!
    // 뒤에 /hello 붙이는 것 잊지 마세요.
    fetch('/api/hello') 
      .then(response => response.text()) // 서버가 글자(text)를 준다고 가정
      .then(data => setMessage(data))    // 받은 글자를 message 변수에 넣기
      .catch(error => {
        console.error('에러:', error);
        setMessage("서버 연결 실패.. (EC2 서버가 깨어나고 있을 수도 있어요!)");
      });
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>🎬 영화 예매 사이트 (DevOps 실습)</h1>
      <h2>서버 테스트중입니다</h2>
      <h2>서버에서 온 메시지:</h2>
      {/* 3. 서버에서 받은 메시지를 화면에 보여주기 */}
      <h3 style={{ color: 'blue' }}>{message}</h3>
    </div>
  );
}

export default App;