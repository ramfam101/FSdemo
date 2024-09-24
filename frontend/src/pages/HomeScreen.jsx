import React from "react"
import logo from "../logo.svg";
import { useNavigate } from "react-router-dom";


export default function HomeScreen(){

    const navigate = useNavigate();

    return(
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={() => navigate("/second")}>Go to Second</button>
      </header>
      {/* <div className={styles.mydiv}>whadddup</div> */}
    </div>
    )
}
// import React from "react"
// import logo from "../logo.svg";
// import { useNavigate } from "react-router-dom";
// import { useState, useEffect } from "react";


// export default function HomeScreen(){

//     const navigate = useNavigate();
//     const [users, setUsers] = useState([]);

//     // Fetch users when the component mounts
//     useEffect(() => {
//         const fetchUsers = async () => {
//             try {
//                 const response = await fetch("/users"); // This will be proxied to your Express server
//                 const data = await response.json();
//                 setUsers(data); // Update state with the user data
//             } catch (error) {
//                 console.error("Error fetching users:", error);
//             }
//         };

//         fetchUsers();
//     }, []);

//     return (
//       <div className="App">
//           <header className="App-header">
//               <img src={logo} className="App-logo" alt="logo" />
//               <p>
//                   Edit <code>src/App.js</code> and save to reload.
//               </p>
//               <a
//                   className="App-link"
//                   href="https://reactjs.org"
//                   target="_blank"
//                   rel="noopener noreferrer"
//               >
//                   Learn React
//               </a>
//               <button onClick={() => navigate("/second")}>Go to Second</button>
//           </header>
//           <div>
//               <h2>User List:</h2>
//               <ul>
//                   {users.map(user => (
//                       <li key={user._id}>{user.name} - {user.email}</li>
//                   ))}
//               </ul>
//           </div>
//       </div>
//   );
// }