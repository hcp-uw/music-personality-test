// import { createRoot } from 'react-dom/client'
import React from 'react';
import * as ReactDOM from 'react-dom';
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import App from './App'
import { HashRouter } from 'react-router-dom'

// const container = document.getElementById("root")
// const root = createRoot(container)
// root.render(<App/>)

// ReactDOM.render(
//     <React.StrictMode>
//         <HashRouter>
//             <Routes>
//                 <Route path="/" element={ <App /> } >
//                 </Route>
//             </Routes>
//         </HashRouter>
//     </React.StrictMode>,
//     document.getElementById('root')
// );

ReactDOM.render(
    <HashRouter>
      <App />
    </HashRouter>,
    document.getElementById("root")
  );