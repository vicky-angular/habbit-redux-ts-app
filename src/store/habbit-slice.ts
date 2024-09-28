import { createSlice, PayloadAction } from "@reduxjs/toolkit";


export interface Habit{
    id: string;
    name: string;
    frequency: "daily" | "weekly";
    completedDates?: string[];
    createdAt?: string;
}

interface HabitState {
    habits: Habit[];
}

const initialState: HabitState = {
    habits: [],
};
const habitSlice = createSlice(
    {
        name: "habits",
        initialState,
        reducers: {
            addHabit: (state, action:PayloadAction<{name:string,frequency: "daily" | "weekly"}>) => { 
                console.log('p;', action);
                const newHabbit:Habit = {
                    id: Date.now().toString(),
                    name: action.payload.name,
                    frequency: action.payload.frequency as "daily" | "weekly",
                };
                state.habits.push(newHabbit);
            },
        },
    }
);

export const {addHabit} = habitSlice.actions;
export default habitSlice.reducer;
