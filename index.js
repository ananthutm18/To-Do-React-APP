import react from 'react'
import recactDom from 'react-dom/client'

import Wrapper from './components/Wrapper'


const Container=()=>{
    return(
        <Wrapper/>
    )
}

const root=recactDom.createRoot(document.getElementById('root'))
root.render(<Container/>)