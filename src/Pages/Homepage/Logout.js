import { useHistory } from "react-router-dom"


export const Logout = () => {

    const history = useHistory()

    const performlogut = () => {
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        history.push('/')
    }
    return (
        <div>
            <input type='button' value='Log Out' onClick={performlogut}/>
        </div>
    )
}

export default Logout
