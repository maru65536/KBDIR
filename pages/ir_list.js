// pages/ir_list.js
import React from 'react';

const IrList = ({ irList, error }) => {
  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!Array.isArray(irList)) {
    return <div>Error: Data is not in the expected format.</div>;
  }

  return (
    <div>
      <h1>IR List</h1>
      <ul>
        {irList.map((ir) => (
          <li key={ir.id}>
            {ir.name} - {ir.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export async function getServerSideProps() {
  try {
    const res = await fetch('http://localhost:3000/api/ir_list');
    if (!res.ok) {
      throw new Error(`Failed to fetch data: ${res.status} ${res.statusText}`);
    }
    const irList = await res.json();
    return {
      props: {
        irList,
      },
    };
  } catch (error) {
    console.error('Error fetching IR list:', error);
    return {
      props: {
        irList: [],
        error: error.message,
      },
    };
  }
}

export default IrList;
