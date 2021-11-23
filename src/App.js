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
      <p>Made with <span role='img' aria-label='coffee'>☕</span> by Team 7</p>
      <small><i>Click <a href='https://sunjh96.github.io/Jitsi-with-WhiteBoard'>here</a> to go back.</i></small>
    </div>
  )
}

export default App