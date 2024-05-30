import {useState,useEffect,useRef} from 'react'

const Form=(props)=>{
    const refdata=useRef()

    const[data,setData]=useState(null)
    useEffect(()=>{

        refdata.current.focus()

    },[])



    return(
        <div>
           <form onSubmit={(e)=>{
            e.preventDefault()
            console.log(data);
           props.addTask(data)
           setData("")
           }}>
  <div className="form-group">
   
    <input type="text" className="form-control" ref={refdata} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your task"
    value={data} onChange={(e)=>{
        setData(e.target.value)
       // console.log(data);
    }} />
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
        </div>
        
    )
}
export default Form