import React, { useState , useEffect} from "react";
import "./chatlist.css";
import AddUser from "./addUser/addUser.jsx";
import { useUserStore } from "../../../lib/userStore";
import { doc, getDoc, onSnapshot } from "firebase/firestore";
import { db } from "../../../lib/firebase";


const ChatList = () => {
  const [chats, setChats] = useState([]);
  const [addMode, setAddMode] = useState(false);
  const {currentUser} = useUserStore();

  useEffect(() => {
    const unSub = onSnapshot(doc(db, "userchats", currentUser.id), async(res) => {
      
      const items = res.data().chats;

      const promises = items.map(async (item) => {
        const userdocRef = doc(db, "users", item.receiverId);
        const userdocSnap = await getDoc(userdocRef);
        const user = userdocSnap.data();

        return {
          ...item,
          user,
        };
      })
      const chatData = await Promise.all(promises);
      setChats(chatData.sort((a, b) => b.updatedAt - a.updatedAt));
  });
    return () => {
      unSub();
    };
  },[currentUser.id]);
  console.log(chats);

  return (
    <div className="chat-list">
      <div className="search">
        <div className="searchBar">
          <img src="./search.png" className="se" alt="Search Icon" />
          <input type="text" placeholder="Search" />
        </div>
        <img
          src={addMode ? "./minus.png" : "./plus.png"}
          className="plus"
          alt={addMode ? "Minus Icon" : "Plus Icon"}
          onClick={() => setAddMode((prev) => !prev)}
        />
      </div>
      <div className="scrollable-content">
        {chats.map((chat) =>
        <div className="item" key={chat.chatId}>
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <span>Jane Doe</span>
            <p>{chat.lastMessage}</p>
          </div>
        </div>
        )}
      </div>
      {addMode && <AddUser></AddUser>}
    </div>
  );
};

export default ChatList;