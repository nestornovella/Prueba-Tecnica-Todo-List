import { useState } from 'react';
import { filterByPriority, filterByState } from '../filtredFunctions/filters';
import Styles from '../styles/navBar.module.css'
import { useAppContext } from './appProvider';
import TodoForm from './todoForm';


function NavBar() {

    const { dispatch } = useAppContext()
    const [forbiden, setForbiden] = useState(true)

    function forbidenForm(){
        setForbiden(!forbiden)
        console.log(forbiden)
    }

    async function handlePriority(e) {
        e.preventDefault()
        const event = e.target

        let data;

        if (event.name === 'estado') {
            data = await filterByState(event.value)
        } else {
            data = await filterByPriority(event.value)
        }
        dispatch({
            type: 'ADD_DATA',
            payload: data
        })

    }

    return (
        <div className={Styles.mainContainer} >
            <div className={Styles.selectContainer}>
                <select onChange={handlePriority} name="prioridad">
                    <option value="prioridad">Prioridad</option>
                    <option value="alta">Alta</option>
                    <option value="media">Media</option>
                    <option value="baja">Baja</option>
                </select>
                <select onChange={handlePriority} name="estado">
                    <option value="estado">Estado</option>
                    <option value="nueva">Nueva</option>
                    <option value="en proceso">En proceso</option>
                    <option value="finalizada">Finalizada</option>
                </select>
            </div>
            <div className={Styles.title}>
                <h1>Todo List</h1>
            </div>
            <div className={Styles.searchContainer}>
                <input placeholder='Buscar por titulo' type="text" />
                <button onClick={forbidenForm}></button>
            </div>
            <div className={forbiden ? Styles.forbiden : Styles.visible}>
                <TodoForm forbidenForm={forbidenForm}/>
            </div>
        </div>
    );
}

export default NavBar;