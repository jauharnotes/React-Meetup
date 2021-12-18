import React, { useState } from "react";

function State() {
  const [count, setCount] = useState(0);
  const [fruit, setFruit] = useState("banana");
  const [todos, setTodos] = useState([
    {
      text: "Learn Hooks",
    },
  ]);

  const handlefruitClick = () => {
    setFruit("Melon");
  };

  const handleTodos = () => {
    setTodos({ text: "Belajar useState Hooks" });
  };

  return (
    <div>
      <h3>{todos.text}</h3>
      <h1>Saya suka buah {fruit}</h1>
      <p>Anda menekan sebanyak {count} kali</p>
      <button onClick={() => setCount(count + 1)}>Klik Saya</button>
      <button onClick={handlefruitClick}>Ubah Fruit</button>
      <button onClick={handleTodos}>Materi</button>
    </div>
  );
}

export default State;

// with class component
// import React, { Component } from "react";

// class State extends Component {
//   constructor() {
//     super();
//     this.state = {
//       count: 0,
//     };
//   }
//   render() {
//     return (
//       <>
//         <p>Anda menekan sebanyak {this.state.count} kali</p>
//         <button onClick={() => this.setState({ count: this.state.count + 1 })}>
//           Klik Saya
//         </button>
//       </>
//     );
//   }
// }

// export default State;
