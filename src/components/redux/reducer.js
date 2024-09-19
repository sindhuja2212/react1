import { BOOK_TICKETS } from "./action-types"

const initialState={
    totalTickets:100,
    bookedTickets:20,
    holdTickets:3,
}
export const ticketReducer=(state=initialState,action)=>{
    switch(action.type){
        case BOOK_TICKETS:
            return{...state,bookedTickets:state.bookedTickets+action.payload}
        default:
            return state;
    }
};