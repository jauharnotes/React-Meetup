import React, { useState, useEffect } from "react";

export default function Effect(props) {
  const [count, setCount] = useState(0);

  // mirip dengan componentDidMount dan componentDidUpdate
  useEffect(() => {
    // Memperbarui judul dokumen menggunakan API browser
    document.title = `You clicked ${count} times`;
  });

  //   const [isOnline, setIsOnline] = useState(null);
  //   useEffect(() => {
  //     function handlesStatusChange(status) {
  //       setIsOnline(status.isOnline);
  //     }
  //     return function cleanUp() {
  //       ChatAPI.subcribeToFriendStatus(props.friend.id, handlesStatusChange);
  //     };
  //   });

  //   if (isOnline === null) {
  //     return "Loading...";
  //   }

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      {/* {isOnline ? "Online" : "Offline"}; */}
    </div>
  );
}

// Menggunakan class component
// import React, { Component } from "react";

// class Effect extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0,
//     };
//   }

//   componentDidMount() {
//     document.title = `You clicked ${this.state.count} times`;
//   }
//   componentDidUpdate() {
//     document.title = `You clicked ${this.state.count} times`;
//   }

//   render() {
//     return (
//       <div>
//         <p>you clicked ${this.state.count} times</p>
//         <button onClick={() => this.setState({ count: this.state.count + 1 })}>
//           Click me
//         </button>
//       </div>
//     );
//   }
// }

// export default Effect;
