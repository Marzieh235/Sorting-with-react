import React from 'react';
import Table from './table';
import { data } from './data';
import './style.css';

export default function App() {
  return (
    <div>
      <button>Sort by name</button>
      <button>Sort by birth date</button>
      <input type="text" placeholder="Search by name or email" />
      <Table data={data} />
    </div>
  );
}
