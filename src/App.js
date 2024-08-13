import React, {useState} from "react";
import ProfileCard from "./ProfileCard";
import './App.css'; // CSSファイルをインポート

function App(){
  const [users, setUsers] = useState([
    { name: 'John Doe', email: 'johndoe@example.com', avatar: 'https://via.placeholder.com/150' },
    { name: 'Jane Smith', email: 'janesmith@example.com', avatar: 'https://via.placeholder.com/150' },
    { name: 'Mike Johnson', email: 'mikejohnson@example.com', avatar: 'https://via.placeholder.com/150' },
  ])

  const [newUser, setNewUser] = useState({name: '', email: '', avatar:''});

  const addUser = () => {
    setUsers([...users, newUser]);
    setNewUser({name:'', email:'', avatar:''})
  };

  return (
    <div className="App">
      <h1>User Profiles</h1>
      {users.map((user, index)=>(
        <ProfileCard key={index} name={user.name} email={user.email} avatar={user.avatar} 
        onDelete = {()=> {
          setUsers(users.filter((_,i)=> i !== index));
        }}
        />
      ))}

      <div className="add-user">
        <input
          type="text"
          placeholder="Name"
          value={newUser.name}
          onChange={(e)=>setNewUser({...newUser, name: e.target.value})}
        />
        <input
          type="text"
          placeholder="Email"
          value={newUser.email}
          onChange={(e)=>setNewUser({...newUser, email: e.target.value})}
        />
        <input
          type="text"
          placeholder="Avatar URL"
          value={newUser.avatar}
          onChange={(e)=>setNewUser({...newUser, avatar: e.target.value})}
        />
        <button onClick={addUser}>Add User</button>
      </div>


    </div>
  );
}

export default App;