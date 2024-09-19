import { Fragment, useReducer, useState } from "react";
import Table from "react-bootstrap/Table";
import "./todo.css"
import { useDispatch, useSelector } from "react-redux";
import { bookedTickets } from "../redux/action";



const reducer = (state, action) => {
  switch (action.type) {
    case "TODO":
      return { ...state, todos: [...state.todos, action.payload] };
    case "DELETE_TODO":
        return {...state,todos:state.todos.filter((value,index)=>index!==action.payload)}
  }
};
export const TODO = () => {
  const reduxStoreData=useSelector(state=>state)
  const DispatchData= useDispatch()
  console.log("reduxStoreData",reduxStoreData);
  const intialState = {
    todos: [],
  };
  const [currentState, dispatch] = useReducer(reducer, intialState);

  const [enteredTodo, setEnteredTodo] = useState([]);
  
  const todoHandler = (e) => {
    setEnteredTodo(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
    if (todoHandler) {
      dispatch({
        type: "TODO",
        payload: enteredTodo,
      });
    }
  };

  const deleteHandler=(val)=>{
    dispatch({
        type:'DELETE_TODO',
        payload:val
    })
  }
  return (
    <Fragment>
      <button onClick={()=>DispatchData( bookedTickets(3))}>Book tickets</button>
       <h5>Total tickets {reduxStoreData.totalTickets}</h5>
       <h5>bookedTicket{reduxStoreData.bookedTickets}</h5>
       <h5>available tickets{reduxStoreData.totalTickets-reduxStoreData.bookedTickets}</h5>
      <h1 style={{textAlign:'center'}}>TODO List</h1>
      <div style={{margin:"10px 0px 10px 10px",textAlign:"start" }}>
        <form onSubmit={submitTodoHandler}>
          <input
            type="text"
            value={enteredTodo}
            onChange={todoHandler}
          />
          <button type="submit">Add to</button>
        </form>
      </div>

      <Table striped bordered hover style={{textAlign:'center'}}>
        <thead>
          <tr>
            <th>S.NO</th>
            <th>Task</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          
            {
                currentState.todos.map((eachTodo,index)=>{
                    return <tr key={index}>
                        <td>{index+1}</td>
                        <td>{eachTodo}</td>
                        <td onClick={()=>{deleteHandler(index)}}>click here for remove</td>
                    </tr>
                })
            }

        </tbody>
      </Table>
    </Fragment>
  );
};

