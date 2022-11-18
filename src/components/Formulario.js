


export default function Formulario(props) {
const {tarea, handleSumbit,handleChange}=props

    return(
        <form onSubmit={handleSumbit}>
            <input
            type="text"
            placeholder="introduce la tarea"
            onChange={handleChange}
            value={tarea}/>

            <input  
            type="sumbit"
            className="btn"
            value="agregar"
            onClick={handleSumbit}/>


        </form>
    )
}
