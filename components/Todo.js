
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { TiTick } from "react-icons/ti";

const Todo=(props)=>{

   console.log(props);
    


    return(
        <div className="todoList">

        <div className="conte">

            <p className={`${(props.task.completed)?"completed":"incompleted"}`}>{props.task.task}</p>
           
            <div className="icons">
                
                
                <button onClick={()=>{

                    props.editdata(props.task.id)
                }}><FaRegEdit id="edit" title="Edit" /> </button>      
           



            <button onClick={()=>{
                props.deletedata(props.task.id)}} ><MdDelete id="delete" title="Delete" /></button> 
            
            
             <button  onClick={()=>{
                props.completedfn(props.task.id)
                
             }}><TiTick id="complete" title="Complete" /> </button>  </div>
           

            
            </div>

        </div>
    )
}
export default Todo