import React, { useState } from 'react';

interface IStudent {
  name: string;
  address: string;
}

const TypeScriptCode = () => {
  const a = "ok";
  const [data, setData] = useState<(number | string)[]>([1, 2, 3, 4, "first"]);
  console.log('the data', data);
const dem = [{
    name: 'ok',
    address: 'p'
  }];
  const [student, setStudent] = useState<IStudent[]>([]); // Initialize student with an array of IStudent objects
  console.log('student', student);

  return (
    <>
      <div>TypeScriptCode {a}</div>
      {student.map((data: IStudent) => (
        <div key={data.name}>{data.name}</div>
      ))}
    </>
  );
};

export default TypeScriptCode;