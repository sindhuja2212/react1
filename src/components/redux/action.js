import { BOOK_TICKETS } from "./action-types"


export const bookedTickets=(qty)=>{
    return{
        type:BOOK_TICKETS,
        payload:qty
    };

};