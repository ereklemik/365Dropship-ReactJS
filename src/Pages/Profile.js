import Logout from "../Components/Authorization/Logout";
import "./profile.css"


const Profile = () => {

    const user = JSON.parse(localStorage.getItem('user'))  

    return (
        <div className={'Profile'}>
            <h4>Welcome to 365Dropship : 
                {user.firstName}
            </h4>
            < Logout/>
        </div>
    )
}
export default Profile;