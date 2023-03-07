import React from 'react';

export default function Table({ data }) {
  return (
    <table>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Birth Date</th>
      </tr>
      <tr>
        <td>Alfred</td>
        <td>Alfred@gmail.com</td>
        <td>2020-10-12</td>
      </tr>
      <tr>
        <td>John</td>
        <td>John@gmail.com</td>
        <td>2018-05-22</td>
      </tr>
    </table>
  );
}
