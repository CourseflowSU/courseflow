import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { FcLike } from "react-icons/fc";
import { Document, Page, pdfjs } from "react-pdf/dist/esm/entry.webpack";
import { useNavigate, useParams } from "react-router";
import { useStore } from "../../store/store.js";
import { userLogin } from "../../store/userReducer";
import "./single-note.scss";


const { default: Layout } = require("../../components/layout/layout");

function SingleNote() {
  pdfjs.GlobalWorkerOptions.workerSrc =
`//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

  const [numPages, setNumPages] = useState(null);


  const { university, courseCode, fileName } = useParams()

  const [note, setNote] = useState();

  const [state, dispatch] = useStore();
  const { user: currentUser } = state;

  const [isFav, setIsFav] = useState(false);

  const navigate = useNavigate()

  const fetchNote = useCallback(
    async () => {
      console.log("fetching");
      await axios
        .post(`${process.env.REACT_APP_URL}/notes/${university}/${courseCode}/${fileName}`)
        .then((res) => {
          console.log(res.data);
          if(res.data !== null){
            setNote(res.data)
            for (let i = 0; i < currentUser.favouriteDocuments.length; i++) {
              if (currentUser.favouriteDocuments[i].university === res.data.university && 
                currentUser.favouriteDocuments[i].courseCode === res.data.courseCode &&
                currentUser.favouriteDocuments[i].fileName === res.data.fileName) {
                setIsFav(true);
              }
            }
            console.log(currentUser.favouriteCourses)
            console.log("got note :", res.data)
          }
          else{
            navigate("/error");
          }
        })
        .catch((err) => {
          console.log("Error:", err);
          // setErrorMessage("Error! Please try again.");
        });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [university, courseCode, navigate],
  )


  const addToFav = async () => {
    if(isFav) {
      return;
    }
    await axios.post(`${process.env.REACT_APP_URL}/notes/addToFav`,
      { email:currentUser.email, university:university, courseCode:courseCode, fileName: fileName  })
      .then(res => {
        console.log(res.data);

        setIsFav(true);
        dispatch(userLogin(res.data))

      })
      .catch(err => {
        console.log(err);
      })
  }


  const removeFromFav = async () => {
    await axios.post(`${process.env.REACT_APP_URL}/courses/removeFromFav`,
      { email:currentUser.email, university:note.university, courseCode:note.courseCode, fileName: note.fileName  })
      .then(res => {
        console.log(res);
        setIsFav(false);
        dispatch(userLogin(res.data))

      })
      .catch(err => {
        console.log(err);
      })
  }


  const toPdfFileUrl = () => {
    var byteCharacters = atob(note.file.data);
    var byteNumbers = new Array(byteCharacters.length);
    for (var i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    var byteArray = new Uint8Array(byteNumbers);
    var file = new Blob([byteArray], { type: "application/pdf;base64" });
    var fileURL = URL.createObjectURL(file);
    return fileURL;
  }


  
  useEffect(() => {
    if (note) {
      let noteItem = {
        info: note.info,
        fileName: note.file.name
      };
      let recent_notes = localStorage.getItem("recentNotes");
      console.log(recent_notes);
      if (recent_notes) {
        let arr_recent_notes = JSON.parse(recent_notes);
        let flag = false;

        for (let i = 0; i < arr_recent_notes.length; i++) {
          if (arr_recent_notes[i].info.courseName === noteItem.info.courseName &&
            arr_recent_notes[i].info.university === noteItem.info.university &&
            arr_recent_notes[i].info.username === noteItem.info.username &&
            arr_recent_notes[i].info.courseCode === noteItem.info.courseCode &&
            arr_recent_notes[i].fileName === noteItem.fileName ) {
            flag = true;
            break;
          }
        }
        if (!flag) {
          arr_recent_notes.push(noteItem);
          if (arr_recent_notes.length == 6) {
            arr_recent_notes = arr_recent_notes.slice(1,6);
          }
        }
        localStorage.setItem("recentNotes", JSON.stringify(arr_recent_notes));
      }
      else {
        localStorage.setItem("recentNotes", JSON.stringify([noteItem]));
        console.log(JSON.stringify([noteItem]));
      }
    }
  }, [note]);

  useEffect(() => {
    fetchNote();
    
  }, [fetchNote])



  return (
    <Layout>
      {note ? 
        <div className="row homepage-margin">
          <div className="col">
            <div className="row mt-4">
        
              <div
                className="col-4" 
              >
                {isFav ? <FcLike 
                  onClick={removeFromFav}
                  className='favIcon'
                  size={32}
                />                      :
              
                  <AiOutlineHeart 
                    className='favIcon'
                    onClick={addToFav}
                    size={32}
                  />
                }
              
              </div>
              <div
                className="col-8" 
              >
                <h1 >{note ? note.file.name : "Not not found"}
                </h1>
              </div>
            </div>
          

            {note ? 
              <div
                className='documentContainer'
                style={{
                  border: "1px solid rgba(0, 0, 0, 0.3)",
                  marginBottom: "10px",
                  display: "flex",
	                justifyContent: "center",
                  // width:"10px",
                  // height:"20px",
                }}
              >
              
                <Document
                  // className="pdf-document"
                  options={{
                    // outerWidth: 600,
                    // innerWidth: 500 ,
                    cMapUrl: `//cdn.jsdelivr.net/npm/pdfjs-dist@${pdfjs.version}/cmaps/`,
                    cMapPacked: true,
                  }}
                  // file={window.URL.createObjectURL(new Blob([note.file.data],  { type: "application/pdf" }))}
                  // file={{ data: toArray(note.file.data) }}
                  file={toPdfFileUrl()}
                  onLoadSuccess={({ numPages })=>setNumPages(numPages)}
                >
                  {Array.apply(null, Array(numPages))
                    .map((x, i)=>i+1)
                    .map(page => <Page
                      
                      key={page}
                      pageNumber={page}
                      width={window.screen.width * 0.65}
                    />  
                    )}
                </Document>
              </div>          :
              <p>Error while loading, try again</p>
            }

         
          </div>
        </div>     :
        <p>Loading...</p>
      }
    </Layout>
  )
}

export default SingleNote;
