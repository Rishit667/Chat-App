import './index.css'
import Chat from './components/chat/Chat.jsx'
import List from './components/list/List.jsx'
import Detail from './components/detail/Detail.jsx'
import './App.css'
import Login from './components/login/login.jsx'
import Notification from './components/notification/notification.jsx'
import { useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from "./lib/firebase";
import { useUserStore } from './lib/userStore';

function App() {

  const { currentUser, isLoading, fetchUserInfo } = useUserStore(); 

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      fetchUserInfo(user?.uid);
  })
  return () => {
    unsub();
  }
},[fetchUserInfo]);

console.log(currentUser);

if(isLoading){
  return <div className='loading'>Loading...</div>
}
  
  return (
    <div className='Container'> 
    {currentUser ? (<>
      <List></List>
      <Chat></Chat>
      <Detail></Detail>
    </>) : <Login></Login>}
    <Notification></Notification>
    </div>
  )
}

export default App
