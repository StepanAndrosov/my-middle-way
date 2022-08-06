import type { TableReservation } from '../../../features/TypescriptCourse/TableReservation/types';
import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    reserve: {} as TableReservation,
}

export const slice = createSlice({
    name: "table-reserve",
    initialState,
    reducers: {
        
    },

})