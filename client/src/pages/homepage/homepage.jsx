import { useLocation } from "react-router-dom";
import Footer from "../footer/footer.jsx";
import { useStore } from "../../store/store";


function Homepage() {
  const [state] = useStore();
  const { user: currentUser } = state;

    return (
        <div>
            <h1>Hi {currentUser ? currentUser.username: ""}, Welcome to your page</h1>


            <Footer></Footer>
        </div>
    );
}

export default Homepage;
