import TodoCard from "./todoCard";
import Styles from '../styles/todoRender.module.css'

function TodoRender({ todosData }) {
    return (
        <div className={Styles.mainContainer}>
            <button>algo</button>
            <div className={Styles.gridContainer}>
                {todosData?.map(todo => {
                    return <TodoCard key={todo.id} nombre={todo.nombre} descripcion={todo.descripcion} prioridad={todo.prioridad} estado={todo.estado} />
                })}
            </div>
            <button>algo</button>
        </div>
    );
}

export default TodoRender;