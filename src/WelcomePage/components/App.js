
// import './App.css';
// import { NavLink } from 'react-bootstrap';
// import Header from "./header/header";

// import {
//   BrowserRouter as Router,
//   Routes, Route,
//   Link
// } from 'react-router-dom';

// function App() {
//   return (
//     <div id='body'>
//     <Header/>
//     {/* <Router>
//             <div className="container">
//                 <nav>
//                     <ul>
//                         <li>
//                             <Link to="/">
//                                 Home
//                             </Link>
//                         </li>
//                         <li>
//                             <Link to="/about">
//                                 About
//                             </Link>
//                         </li>
//                     </ul>
//                 </nav>

//                 <Routes>
//                     <Route path="/"
//                         element={<ab /> }/>
//                     <Route path="/about"
//                         element={<login />} />
//                 </Routes>
//             </div>
//         </Router> */}
//         </div>
//   );
// }

// export default App;
import React from "react";
import Header from "./Header";
import Body from "./Body";

const App = () => {
  return (
    <div className="relative">
      <Header />
      <Body />
    </div>
  );
};

export default App;