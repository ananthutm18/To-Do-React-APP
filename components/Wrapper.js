
import Form from "./Form"
import {useState} from "react"
import Todo from "./Todo"
import Edit from "./Edit"
const Wrapper=()=>{

    const [tasks,setTAsks]=useState([])
   

     function addTask (toDo){
      
        setTAsks([...tasks,{id:Date.now(),task:toDo,completed:false,isEdit:false}])

       console.log(tasks);

    }

    const deletedata=(id)=>{

        console.log("helloooo");

        setTAsks(tasks.filter((x)=>(x.id!==id)))

    }
    const completedfn=(id)=>{

        //console.log("completed");

     

        setTAsks(tasks.map((x)=>{
           if((x.id==id)){
            return {...x,completed:!x.completed}
           }
           else{
            return x
           }
           }
        ))

    }

    const editdata=(id)=>{


        setTAsks(tasks.map((x)=>{
            if((x.id==id)){
             return {...x,isEdit:!x.isEdit}
            }
            else{
             return x
            }
            }
         ))


    }

    const edittask=(task,id)=>{

        setTAsks(tasks.map((x)=>{
            if(x.id==id){
                return{...x,task, isEdit:!x.isEdit}
            }
            else{
                return x
            }
        }))



    }


    

    return(

        <div className="from-container">
            <Form addTask={addTask} />
            {tasks.map((x,index)=>{
                if(x.isEdit){
                    return  <Edit edittask={edittask} id={x.id} datashow={x.task} />
                }
                else{
                    return  <Todo  task={x} key={index} deletedata={deletedata} completedfn={completedfn} editdata={editdata} /> 

                }
            })}
           


            
        </div>

        
    )
}

export default Wrapper