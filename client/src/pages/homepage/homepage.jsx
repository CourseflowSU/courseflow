import { useLocation } from "react-router-dom";


function Homepage(){
    const {currentUser} = useLocation();
    // const { currentUser } = state;
   console.log("useLocation:", currentUser);

    // const {user } = params.user;

    return (
        <div>
            <h1>Hi {currentUser ? currentUser.username: ""}, Welcome to your page</h1>

        </div>
    );
}
    
export default Homepage;
