import { useLocation } from "react-router-dom";
import Footer from "../footer/footer.jsx";
import Header from "../header/header.jsx";


function Homepage(){
    const location = useLocation();
    // const { currentUser } = state;
   console.log("useLocation:", location.state.user);
    const currentUser = location.state.user;
    // const {user } = params.user;

    return (
        <div>
          <Header/>
            <h1>Hi {currentUser ? currentUser.username: ""}, Welcome to your page</h1>
          <Footer/>
        </div>
    );
}
    
export default Homepage;
