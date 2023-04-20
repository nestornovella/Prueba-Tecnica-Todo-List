import { useEffect } from 'react';
import Styles from '../styles/todoCard.module.css'

import axios from 'axios';
import { deleteTodo, getData, refresh, update } from '../hooks/useApi';
import { useAppContext } from './appProvider';

function TodoCard({ nombre, descripcion, prioridad, estado, id }) {

    const { dispatch } = useAppContext()

    async function handlePriority(e) {
        e.preventDefault()
        await update({id,[e.target.name]: e.target.value})
       
        dispatch({
            type: "ADD_DATA",
            payload:  await refresh()
        })
        console.log(e.target)

    }

   async function deleteCard (){
        console.log(id)
        const response = await axios.delete(`http://localhost:3001/?id=${id}`)
        dispatch({
            type:'ADD_DATA',
            payload:await refresh()
        })
    }

    return (
        <div className={Styles.mainContainer}>
            <div className={Styles.selectContainer}>
                <select name='prioridad' onChange={handlePriority} defaultValue={prioridad} id="prioritySelect">
                    <option name="alta" value="alta">Alta</option>
                    <option name="media" value="media">Media</option>
                    <option name="baja" value="baja">Baja</option>
                </select>
                <select name='estado' onChange={handlePriority} defaultValue={estado} id="stateSelect">
                    <option value="nueva">Nueva</option>
                    <option value="en proceso">En proceso</option>
                    <option value="finalizada">Finalizada</option>
                </select>
            </div>
            <div className={Styles.titleContainer}>
                <div className={Styles.title}><h5>Titulo:</h5><h4>{nombre}</h4></div>
                <button onClick={deleteCard}>🗑️</button>
            </div>
            <br />
            <div className={Styles.descContainer}>
                <h5>Decripcion:</h5>
                <p>
                    {descripcion}
                </p>
            </div>
        </div>
    );
}

export default TodoCard;