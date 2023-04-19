import Styles from '../styles/navBar.module.css'


function NavBar() {

    return (
        <div className={Styles.mainContainer} >
            <div className={Styles.selectContainer}>
                <select name="" id="">
                    <option value="">Alta</option>
                    <option value="">Media</option>
                    <option value="">Baja</option>
                </select>
                <select name="" id="">
                    <option value="">Nueva</option>
                    <option value="">En proceso</option>
                    <option value="">Finalizada</option>
                </select>
            </div>
            <div className={Styles.title}>
                <h1>Todo List</h1>
            </div>
            <div className={Styles.searchContainer}>
                <input placeholder='Buscar por titulo' type="text" />
                <button></button>
            </div>
        </div>
    );
}

export default NavBar;