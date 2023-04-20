import { useState } from 'react';
import Styles from '../styles/todoForm.module.css'
import { createTodo, refresh } from '../hooks/useApi'
import { useAppContext } from '../components/appProvider'

function TodoForm({forbidenForm}) {


    const [input, setInput] = useState({
        nombre: "",
        estado: "",
        prioridad: "",
        descripcion: ""
    })

    const { dispatch } = useAppContext()

    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    async function submit(e) {
        console.log("se ejecuta")
        e.preventDefault()
        await createTodo(input)
        dispatch({
            type: 'ADD_DATA',
            payload: await refresh()
        })
        setInput({
            nombre: "",
            estado: "",
            prioridad: "",
            descripcion: ""
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
            </div>
            <div className={Styles.secondContainer}>
                <button></button>

            </div>
        </div>

    );
}

export default TodoForm;