import TodoCard from "./todoCard";
import Styles from '../styles/todoRender.module.css'
import { useState } from "react";

function TodoRender({ todosData, changePriority}) {

    const [page, setPage] = useState(0)

    function handlePage(e) {
        e.preventDefault()
        console.log(e.target.value)
        const maxPage = Math.floor(todosData.length  / 6)
        const event = e.target.value
        if (event === 'next' && page < maxPage) {
            setPage(prevValue => prevValue + 1)
        }
        if(event ==='last' && page > 0){
            setPage(prevValue => prevValue -1)
        }
       
    }

    return (
        <div className={Styles.mainContainer}>
            <button className={Styles.last} onClick={handlePage} value={'last'}></button>
            <div className={Styles.gridContainer}>
                {todosData?.map((todo, index) => {
                    return (
                        index >= page * 6 &&
                        index <= (page * 6) + 5 &&
                        <TodoCard key={todo.id} changePriority={changePriority} id={todo.id} nombre={todo.nombre} descripcion={todo.descripcion} prioridad={todo.prioridad} estado={todo.estado} />
                    )
                })}
            </div>
            <button className={Styles.next} value={'next'} onClick={handlePage}></button>
        </div>
    );
}

export default TodoRender;