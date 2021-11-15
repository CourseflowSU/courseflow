import { useLocation } from "react-router-dom";
import { useStore } from '../../store/store';


function Homepage(){
    const location = useLocation();
    // const { currentUser } = state;
   console.log("useLocation:", location.state.user);
    const currentUser = location.state.user;
    // const {user } = params.user;

    const {val} = useStore()
    return (
        <div>
            <h1>Hi {currentUser ? currentUser.username: ""}, Welcome to your page</h1>
            <p>{val}</p>
        </div>
    );
}
    
export default Homepage;
