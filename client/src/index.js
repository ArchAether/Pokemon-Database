import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import TableComponent from './TableComponent/TableComponent'
import DetailPage from './DetailPage/DetailPage';
import { TypeChecker } from './TypeChecker/TypeChecker';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { TextEditor } from 'react-data-grid';

const columns = [
  { key: 'id', name: 'ID' },
  { key: 'name', name: 'name', editor: TextEditor },
  { key: 'type1', name: 'type 1', editor: TextEditor},
  { key: 'type2', name: 'type 2', editor: TextEditor}
];

function TestComponent() {
  return (
    <div>
      <h1>Welcome to the page!<br></br>Click the links above to check out the site!</h1>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} >
        <Route index element={<TestComponent />} />
        <Route path='tablecomponent' element={<TableComponent columns={columns} />} />
        <Route path='details' element={<DetailPage />} />
        <Route path='typeChecker' element={<TypeChecker />} />
      </Route>
      <Route path='*' element={<App />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
