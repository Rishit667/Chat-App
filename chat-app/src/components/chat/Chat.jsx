import React,{useState, useEffect , useRef} from 'react'
import "./chat.css"
import EmojiPicker from 'emoji-picker-react';

const Chat = () => {

  const [emoji,setEmoji] = useState(false);
  const [text,setText] = useState("");

  const EndRef = useRef(null);
  useEffect(() => {
    EndRef.current?.scrollIntoView({ behavior: "smooth" });
  },[])

  function handleEmoji(e){
    setText(t => t + e.emoji);
    setEmoji(false);
  }

  return (
    <div className="chat">
      <div className="top">
        <div className="users">
          <img src="./avatar.png"  />
          <div className="texts">
            <span>Jane Doe</span>
            <p>Lorem ipsum dolor sit amet </p>
          </div>
        </div>
        <div className="icon">
          <img src="./phone.png"/>
          <img src="./video.png"/>
          <img src="./info.png"/>
        </div>
      </div>
      <div className="center">
        
      <div className='message'>
          <img src="./avatar.png" alt="" />
          <div className='texts2'>
            <p>Lorem ipsum dolor, sit amet consectetur adipi</p>
            <span>1 minute ago</span>
          </div>
        </div>

        <div className='message own'>
          <div className='texts2'>
            <p>Lorem ipsum dolor, sit amet consectetur adipi</p>
            <span>1 minute ago</span>
          </div>
        </div>

        <div className='message'>
          <img src="./avatar.png" alt="" />
          <div className='texts2'>
            <p>Lorem ipsum dolor, sit amet consectetur adipi</p>
            <span>1 minute ago</span>
          </div>
        </div>

        <div className='message own'>
          <div className='texts2'>
            <p>Lorem ipsum dolor, sit amet consectetur adipi</p>
            <span>1 minute ago</span>
          </div>
        </div>

        <div className='message'>
          <img src="./avatar.png" alt="" />
          <div className='texts2'>
            <p>Lorem ipsum dolor, sit amet consectetur adipi</p>
            <span>1 minute ago</span>
          </div>
        </div>

        <div className='message own'>
          <div className='texts2'>
            <img src="https://elements-resized.envatousercontent.com/envato-shoebox/0df5/7605-a31e-4540-a2e6-2f9da7971639/2316774.jpg?w=1600&cf_fit=scale-down&mark-alpha=18&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark4.png&q=85&format=auto&s=f49a8a8dba9e51dcbb479f8335a3b5b10388dce31a2c75de3ad6c1fc141ae66b" alt="" />
            <p>Lorem ipsum dolor, sit amet consectetur adipi</p>
            <span>1 minute ago</span>
          </div>
        </div>
        <div ref={EndRef}>

        </div>
      </div>
      <div className="bottom">
        <div className="icons2">
          <img src="./img.png"/>
          <img src="./camera.png"/>
          <img src="./mic.png"/>
        </div>
          <input type="text"  placeholder="Enter a Message"  
          onChange={(e) => setText(e.target.value)} value={text}/>
          <div className="emoji" >
            <img src="./emoji.png" onClick={() => setEmoji(e=>!e)} />
            <div className="picker">
               <EmojiPicker open={emoji} onEmojiClick={handleEmoji} />
            </div>
          </div>
          <button className="sendButton" onClick={() => setText("")}>Send</button>
      </div>
    </div>
  )
}

export default Chat