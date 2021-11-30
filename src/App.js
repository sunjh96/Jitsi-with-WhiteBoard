import React, { useState } from 'react'
import { Jutsu } from 'react-jutsu'

const App = () => {
  const [room, setRoom] = useState('')
  const [name, setName] = useState('')
  const [call, setCall] = useState(false)
  const [password, setPassword] = useState('')

  const handleClick = event => {
    event.preventDefault()
    if (room && name) setCall(true)
  }


  return (
    <div>
      <h2>Jitsi with WhiteBoard</h2>
      <blockquote>Follow this link <a href='https://webwhiteboard.com' target='_blank'>WhiteBoard</a> to use WhiteBoard</blockquote>
      {call ? (<Jutsu
        domain='jitsimeet.knu.r-e.kr'
        roomName={room}
        password={password}
        displayName={name}
        onMeetingEnd={() => console.log('Meeting has ended')}
        loadingComponent={<p>ʕ •ᴥ•ʔ jitsi is loading ...</p>} />)
        : (
          <form>
            <input id='room' type='text' placeholder='Room' value={room} onChange={(e) => setRoom(e.target.value)} />
            <input id='name' type='text' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
            <input id='password' type='text' placeholder='Password (optional)' value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleClick} type='submit'>
              Start / Join
            </button>
          </form>
        )}
      
      <div><h4>JITSI with WHITEBOARD 사용 방법</h4>
        <details>
          <summary>단축키 보기</summary>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;T: 텍스트<br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;P: 펜툴<br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;V: 이동, 선택<br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;N: 스티커노트<br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;E: 지우개<br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;ctrl + 휠: 확대/축소<br></br>
          </p>
        </details>
        <details>
          <summary>JITSI - 화이트보드 연결 방법</summary>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;1. 회의 방 이름과 사용자 이름을 정하고 회의 방을 개설한다.<br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;2. 화이트보드 링크를 타고 화이트보드 페이지를 개설한다.<br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;3. 오른쪽 상단의 share board를 누르고 JITSI 회의 채팅에 개설한 화이트보드 링크를 공유한다.
          </p>
        </details>
        <details>
          <summary>첫 회의 시 여러 아이디어가 필요할 때</summary>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;스티커 기능을 통해 팀원 모두의 다양한 아이디어들을 들을 수 있습니다!!<br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;· 왼쪽 바의 sticky note(단축키 N)로 메모지/포스트잇을 불러와 내용을 작성해 보세요.<br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;· sticky note 안에서도 글꼴, 정렬, 색 등 다양한 스타일의 연출이 가능합니다!<br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;tip. 메모지에 각자의 이름을 붙여 적당한 시간을 정해두고 내용을 정리한 후 각자 의견을 말해보세요!
          </p>
        </details>
        <details>
          <summary>실시간으로 내용 수정, 피드백, 스케치할 때</summary>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;말로만 설명할 때 답답하신가요? 스케치 기능을 사용해 자료를 보여주며 말하면 훨씬 소통이 편해요!!<br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;· 다 같이 보면서 회의할 자료를 붙여넣기(ctrl + c/v)해 주세요.<br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;· Pen(단축키 P)을 이용해 아이디어를 스케치해 보세요! 글자는 Text(단축키 T)를 이용하면 좋아요!<br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;tip. 스케치할 때 단축키를 이용하면 훨씬 빠르게 작업할 수 있어요!
          </p>
        </details>
        <details>
          <summary>발표 자료/내용/흐름을 짤 때</summary>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;전체적인 발표 흐름을 짤 때 모든 페이지를 한 눈에 보면서 정리하면 발표를 더욱 자연스럽게 구성할 수 있어요!!<br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;· 왼쪽 바의 sticky note(단축키 N)로 메모지/포스트잇을 불러와 내용을 작성해 보세요.<br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;· sticky note 안에서도 글꼴, 정렬, 색 등 다양한 스타일의 연출이 가능합니다!<br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;tip. 각각의 페이지별로 핵심적인 내용과 자료들을 정리해두면 방향성을 잃지 않고 빠르게 발표 구성이 가능합니다!
          </p>
        </details>
        <details>
          <summary>화이트보드 이미지 저장 방법</summary>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;1. 왼쪽 상단 export 버튼 클릭<br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;2. 아래 image or PDF 중 선택<br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;3. image 선택이면 구역 선택
          </p>
        </details>
      </div>
      <p>Made with <span role='img' aria-label='coffee'>☕</span> by Team 7</p>
      <small><i>Click <a href='https://sunjh96.github.io/Jitsi-with-WhiteBoard'>here</a> to go back.</i></small>
    </div>
  )
}

export default App