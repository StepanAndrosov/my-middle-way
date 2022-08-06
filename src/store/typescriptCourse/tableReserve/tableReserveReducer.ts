import type { TableReservation } from '../../../features/TypescriptCourse/TableReservation/types';
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { errorMessage } from '../../../utils/messsage-utils';


const initialState = {
    reserve: {} as TableReservation,
}

export const slice = createSlice({
    name: "table-reserve",
    initialState,
    reducers: {
        addReseve(state, action: PayloadAction<{reserve: TableReservation}>) {
            
            const {payload: {reserve}} = action
            
            Object.keys(reserve).map(key => {
                if(!reserve[key as keyof typeof reserve]) {
                    errorMessage(`please fill in the ${key}`)
                }
            })
        }
    },

})