import "./list.css"
import UserInfo from "./userinfo/UserInfo.jsx"
import ChatList from "./chatlist/ChatList.jsx"

const List = () => {
  return (
    <div className="list">
      <UserInfo></UserInfo>
      <ChatList></ChatList>
    </div>
  )
}

export default List