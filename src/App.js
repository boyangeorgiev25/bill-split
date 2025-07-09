import React from 'react';
import './index.css';

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];



export default function App() {
  return (
    <div className="app">
     <FriendsSection />
     <Bill />
     <AddFriend />
    </div>
  );
}


function FriendsSection() {
  return (
    <div className="sidebar">
      <ul>
        {initialFriends.map((friend) => (
          <li key={friend.id}>
            <Friend name={friend.name} imgName={friend.image} />
          </li>
        ))}
      </ul>
    </div>
  );
}

function Friend({ name, imgName }) {
  return (
    <>
      <img src={imgName} alt={name} />
      <h1>{name}</h1>
      <p>Own: $0</p>
      <button className="button">Select</button>
    </>
  );
}


function AddFriend() {
  return (
    <>
      <form className="form-add-friend">
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

function Bill(){
  return(
   <>
  <form className="form-split-bill">
    <h2>Split Bill</h2>
     <p>Bill value</p>
        <input id="name" type="text" required />
     <p>Your expence</p>
        <input id="image" type="text" required />
      <p>X expence</p>
        <input id="image" type="text" required />
      <p>Who is paying?</p>
      <select>
        <option value="Clark">Clark</option>
        <option value="Sarah">Sarah</option>
        <option value="Anthony">Anthony</option>
      </select>
        <button className="button">Split</button>
  </form>
  </>
  )
}

