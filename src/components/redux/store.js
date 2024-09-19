import {legacy_createStore as createStore} from "redux";
import { ticketReducer } from "./reducer";






export const reduxData=createStore(ticketReducer)