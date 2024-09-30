import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addHabit } from '../store/habbit-slice';
import HabbitList from './HabbitList';

const AddHabitFrom:React.FC = () => {
    const [name, setName] = useState<string>("");
    const [frequency, setFrequency] = useState<"daily" | "weekly">("daily");
    const dispatch = useDispatch();

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      console.log(e);
      if(name.trim()){
     dispatch(addHabit({
      name,
      frequency
     }));
     setName('');
      }
    }

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div>
          <input type='text' 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        placeholder='Enter habit name'
        />
        </div>
        <div><input type='text' 
        value={frequency} 
        onChange={(e) => setFrequency(e.target.value as "daily" | "weekly")} 
        placeholder='Enter habit name'
        />
        </div>
        <input type="submit" />
        </form>
        <HabbitList />
    </div>
  )
}

export default AddHabitFrom;