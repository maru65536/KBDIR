// pages/ir_list.js
import { useEffect, useState } from 'react';

export default function IRList() {
  const [irList, setIrList] = useState([]);

  useEffect(() => {
    fetch('/api/ir')
      .then((res) => res.json())
      .then((data) => setIrList(data));
  }, []);

  return (
    <div>
      <h1>IR一覧</h1>
      <ul>
        {irList.map((ir) => (
          <li key={ir.id}>{ir.title}</li>
        ))}
      </ul>
    </div>
  );
}
