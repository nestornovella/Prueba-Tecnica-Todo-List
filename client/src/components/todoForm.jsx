import { useState } from 'react';
import Styles from '../styles/todoForm.module.css'
import { createTodo, deleteTodo, refresh } from '../hooks/useApi'
import { useAppContext } from '../components/appProvider'

function TodoForm({forbidenForm}) {


    const [input, setInput] = useState({
        estado: "nueva",
        prioridad: "media",
        nombre: "",
        descripcion: ""
    })
    const [errors, setErrors] = useState({error:"block"})

    const { dispatch } = useAppContext()

    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
        setErrors(validate({...input,  [e.target.name]: e.target.value}))
    }

    function validate(input){
        const errors = {}
        if(input.nombre && input.descripcion){
            return errors
        }else return {sendError:"necesitas ingresar titulo y descripción!⚠️"}
    }

    async function submit(e) {
        console.log("se ejecuta")
        e.preventDefault()


        Object.keys(errors).length && setErrors({sendError:"necesitas ingresar titulo y descripción!⚠️"})
        
        if(!Object.keys(errors).length){
            createTodo(input).then(response =>{
                setInput({
                    nombre: "",
                    estado: "nueva",
                    prioridad: "media",
                    descripcion: ""
                })
            })        
            dispatch({
                type: 'ADD_DATA',
                payload: await refresh()
            })
            forbidenForm()
            setErrors({error:"block"})
        }
        

    }

    async function deleteAll(){
        await deleteTodo(0, true)
        dispatch({
            type:'ADD_DATA',
            payload: await refresh()
        })
        forbidenForm()
    }


    return (
        <div className={Styles.mainContainer}>
            <div className={Styles.firstContainer}>
                <div>
                    <select defaultValue={"def"} onChange={handleChange} name="prioridad" id="">
                        <option name={"def"}>Prioridad</option>
                        <option value="alta">Alta</option>
                        <option value="media">Media</option>
                        <option value="baja">Baja</option>
                    </select>
                    <select defaultValue={"def"} onChange={handleChange} name="estado" id="">
                        <option name={"def"}>Estado</option>
                        <option value="nueva">Nueva</option>
                        <option value="en proceso">En proceso</option>
                        <option value="finalizada">Finalizada</option>
                    </select>
                </div>
                <div>
                    <input value={input.nombre} name='nombre' onChange={handleChange} placeholder='ingrese titulo de la tarea' type="text" />
                </div>

                <textarea value={input.descripcion} name='descripcion' onChange={handleChange} placeholder="ingrese una corta descripcion" id="" cols="26" rows="6"></textarea>
                <br />
                <button onClick={submit}></button>
                <span>{errors.sendError? errors.sendError: ""}</span>
            </div>
            <div className={Styles.secondContainer}>
                <button onClick={deleteAll}></button>
            </div>
        </div>

    );
}

export default TodoForm;