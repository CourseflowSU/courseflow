import Footer from "../footer/footer.jsx";
import Header from "../header/header.jsx";
import { useStore } from "../../store/store";
import "../notes/notes.css";
import Note from "../../components/note/note.jsx";

function Notes() {
  const [state] = useStore();
  const { user: currentUser } = state;
  return (
    <div>
      <Header/>
      {Note("Note Name", "Software Engineering", "Sabanci University")}
      {Note("Note Name", "Software Engineering", "Sabanci University")}
      {Note("Note Name", "Software Engineering", "Sabanci University")}
      {Note("Note Name", "Software Engineering", "Sabanci University")}
      {Note("Note Name", "Software Engineering", "Sabanci University")}
      <Footer/>
    </div>
  );
}

export default Notes;