import SignOut from "../Components/Authorization/SignOut/SignOut";
import "./profile.css"


const Profile = () => {

    const user = JSON.parse(localStorage.getItem('user'))  

    return (
        <div className={'Profile'}>
            <h4>Welcome to 365Dropship : 
                {user.firstName}
            </h4>
            <SignOut/>
        </div>
    )
}
export default Profile;