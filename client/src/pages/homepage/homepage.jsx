import Footer from "../footer/footer.jsx";
import Header from "../header/header.jsx";
import { useStore } from "../../store/store";


function Homepage() {
  const [state] = useStore();
  const { user: currentUser } = state;

  return (
    <div>
      <Header/>
      <h1>Hi {currentUser ? currentUser.username: ""}, Welcome to your page</h1>
      <Footer/>
    </div>
  );
}

export default Homepage;
