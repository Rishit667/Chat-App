import './addUser.css';
import { useState } from 'react';
import { collection, query, where, getDocs, setDoc, serverTimestamp } from "firebase/firestore";
import { db } from '../../../../lib/firebase';

const AddUser = () => {
  const [user, setUser] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const username = formData.get('username');
    try{


      const userRef = collection(db, "users");
      const q = query(userRef, where("username", "==", username));

      const querySnapshot = await getDocs(q);
      if(!querySnapshot.empty){
        setUser(querySnapshot.docs[0].data());
      }
    }catch(err){
      console.log(err);
    }
  }

  const handleAdd = async() => {
    const chatRef = collection(db, "chats");
    const userChatsRef = collection(db, "userchats");
    try{

      await setDoc(chatRef, {
        createdAt: serverTimestamp(),
        messages: [],
      })

    }catch(err){
      console.log(err);
    }
  }

  return (
    <div className='addUser'>
      <form onSubmit={handleSearch}>
        <input type="text" name="username" placeholder='username' />
        <button>Search</button>
      </form>
      {user && <div className='user3'>
        <div className='userdetail'>
          <img src={user.avatar || "./avatar.png"} alt="" />
          <span>{user.username}</span>
        </div>
        <button onClick={handleAdd}>Add User</button>
      </div>}
    </div>
  )
}

export default AddUser