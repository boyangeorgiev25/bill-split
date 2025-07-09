import React from 'react';
import './index.css';
import { useState } from 'react';



export default function App() {
  const [friends, setFriends] = useState([]);
  const [selectedFriend, setSelectedFriend] = useState(null);


 function handleSelect(id) {
  if (selectedFriend?.id === id) {
    setSelectedFriend(null);
    return;
  }
    setSelectedFriend(friends.find(friend => friend.id === id));
  }

  return (
    <div className="app">
     <FriendsSection friends={friends} selectedFriend={selectedFriend} handleSelect={handleSelect} />
     <Bill friends={friends} selectedFriend={selectedFriend}/>
     <AddFriend setFriends={setFriends} />
    </div>
  );
}


function FriendsSection({handleSelect , friends, selectedFriend}) {
    if(!friends) {return <h1>No Friends</h1>}
  return (
    <div className="sidebar">
      <ul>
        {friends.map((friend) => (
          <li key={friend.id}>
            <Friend selectedFriend={selectedFriend} handleSelect={handleSelect} id={friend.id} name={friend.name} imgName={friend.image} owed={friend.owed} />
          </li>
        ))}
      </ul>
    </div>
  );
}

function Friend({id, name, imgName ,selectedFriend, handleSelect , owed}) {
  return (
    <>
      <img src={imgName} alt={name} onError={(e)=> {e.target.onError = null; e.target.src="https://i.pravatar.cc/48?u=118836"}} />
      <h1>{name}</h1>
      <p>Own: {owed}</p>
      <button className="button" onClick={()=>handleSelect(id)} >{selectedFriend?.id === id ? "Cancel" : "Select"}</button>
    </>
  );
}


function AddFriend({setFriends}) {

function handleAddFriend(event) {
    event.preventDefault();
    const name = event.target.name.value;
    const image = event.target.image.value;
    const owed = 0;
    const newFriend = { id: Date.now(), name, image , owed };
    setFriends(friends => [...friends, newFriend]);
    event.target.reset();
  } 

  return (
    <>
      <form className="form-add-friend" onSubmit={handleAddFriend}>
        <h2>Add Friend</h2>
        <label>Friend name</label>
        <input id="name" type="text" required />
        <label>Image URL</label>
        <input id="image" type="text" required />
        <button className="button">Add</button>
      </form>
    </>
  );
}

function Bill({friends , selectedFriend}) {

 function handleSplitBill(event) {
  const form = event.target.form;
  const bill = Number(form.bill.value);
  const expense = Number(form.expence.value);

  if (!isNaN(bill) && !isNaN(expense)) {
    form.other.value = bill - expense;
  }
  
}

  return(
   <>
  <form className="form-split-bill" >
    <h2>Split Bill</h2>
     <p>Bill value</p>
        <input id="bill" type="text" required />
     <p>Your expence</p>
        <input id="expence" type="text" required onChange={handleSplitBill} />
      <p>{selectedFriend? selectedFriend?.name+"'s" : "Frend's"} expence</p>
        <input id="other" type="text" required onChange={handleSplitBill} />
      <p>Who is paying?</p>
      <select>
       {friends.map((friend) => (
          <option key={friend.id} value={friend.id}>
            {friend.name}
          </option>
        ))}
        <option value="you">You</option>
      </select>

        <button className="button">Split</button>
  </form>
  </>
  )
}

