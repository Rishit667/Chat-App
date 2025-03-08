import { toast } from "react-toastify";
import "./login.css";
import { useState } from "react";
import { createUserWithEmailAndPassword ,signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../lib/firebase"; // Correct import path
import { doc, setDoc } from "firebase/firestore";
import upload from "../../lib/upload"; // Correct import path

const Login = () => {
  const [avatar, setAvatar] = useState({
    file: null,
    url: ""
  });

  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.target);
    const { email, password } = Object.fromEntries(formData);
    try{
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("Logged in successfully");
    }catch(error){
      toast.error(error.message);
    }finally{
      setLoading(false);
    }
    
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.target);
    const { username, email, password } = Object.fromEntries(formData);

    console.log(username);

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);

      const imgURL = await upload(avatar.file);

      await setDoc(doc(db, "users", res.user.uid), {
        username,
        email,
        avatar: imgURL,
        id: res.user.uid,
        blocked: [],
      });

      await setDoc(doc(db, "userchats", res.user.uid), {
        chats: []
      });

      toast.success("Account created successfully");

    } catch (error) {
      toast.error(error.message);
    }finally{
      setLoading(false);
    }
  };

  const handleAvatar = (e) => {
    if (e.target.files[0]) {
      setAvatar({
        file: e.target.files[0],
        url: URL.createObjectURL(e.target.files[0])
      });
    }
  };

  return (
    <div className="login">
      <div className="item">
        <h2>Welcome back,</h2>
        <form onSubmit={handleLogin}>
          <input type="text" name="email" placeholder="email" />
          <input type="text" name="password" placeholder="password" />
          <button disabled={loading}>{loading ? "Loading" : "Sign in"}</button>
        </form>
      </div>
      <div className="separator"></div>
      <div className="item">
        <h2>Create an Account</h2>
        <form onSubmit={handleRegister}>
          <label htmlFor="file">
            Upload an Image
            <img src={avatar.url || "./avatar.png"} alt="Avatar Preview" />
          </label>
          <input type="file" id="file" style={{ display: "none" }} onChange={handleAvatar} />
          <input type="text" name="username" placeholder="username" />
          <input type="text" name="email" placeholder="email" />
          <input type="text" name="password" placeholder="password" />
          <button disabled= {loading}>{loading ? "Loading" : "Sign up"}</button>
        </form>
      </div>
    </div>
  );
};

export default Login;