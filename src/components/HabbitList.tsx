import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../store/store';

const HabbitList: React.FC = () => {
    const {habits} = useSelector((state: RootState) => {
       return state.habits;
    });
    console.log('the selector-', habits)
  return (
    <>
    <div>HabbitList</div>
    <div className="HabbitList">
     {habits.map((data) => <div key={data.id}><div>{data.name}</div><div>{data.frequency}</div></div>)}
    </div>
    </>
  )
}

export default HabbitList