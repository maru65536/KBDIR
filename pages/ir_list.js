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
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Subtitle</th>
            <th>URL</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {irList.map((ir) => (
            <tr key={ir.id}>
              <td>{ir.title}</td>
              <td>{ir.subtitle}</td>
              <td><a href={ir.url}>{ir.url}</a></td>
              <td>{ir.ir_type}</td>
            </tr>
          ))}
        </tbody>
      </table>
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
