import { unstable_batchedUpdates } from "react-dom";
import { SET_INDEX, ADD_INDEX } from "../constants/constants";

export const initState = {
    index: -1,
    checked: []
}

export const reducer = (state, action) => {
    switch(action.type) {
        case SET_INDEX: 
            return {...state, index: parseInt(action.payload.index)}
        case ADD_INDEX:
            let updated;
            if (updated.includes(parseInt(action.payload.index))) updated.filter(i => i !== parseInt(action.payload.index))
            else updated.push(parseInt(action.payload.index))
            return {
                ...state,
                updated
            }
    }
}

export default reducer