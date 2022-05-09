import Contador from "./ItemCount"



const Hijo =({onClick})=>{

    const handleClick =(contador)=>{
        onClick({contador})
    }


    return(
        <Contador stock={10} init={0} onClick={handleClick}/>
        
    )
}

export default Hijo



