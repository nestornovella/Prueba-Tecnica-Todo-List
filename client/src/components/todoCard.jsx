import { useEffect } from 'react';
import Styles from '../styles/todoCard.module.css'

function TodoCard({nombre, descripcion, prioridad, estado}) {

    useEffect(()=>{

       
    })

    return (
        <div className={Styles.mainContainer}>
            <div className={Styles.selectContainer}>
            <select defaultValue={prioridad} id="prioritySelect">
                    <option name="alta" value="alta">Alta</option>
                    <option name="media" value="media">Media</option>
                    <option name="baja" value="baja">Baja</option>
                </select>
                <select defaultValue={estado} name="" id="stateSelect">
                    <option value="nueva">Nueva</option>
                    <option value="en proceso">En proceso</option>
                    <option value="finalizada">Finalizada</option>
                </select>
            </div>
            <div className={Styles.titleContainer}>
               <div className={Styles.title}><p>Titulo:</p><h4>{nombre}</h4></div> 
                <button>🗑️</button>
            </div>
            <br />
            <h4>Decripcion:</h4>
            <p>
                {descripcion}
            </p>
        </div>
    );
}

export default TodoCard;