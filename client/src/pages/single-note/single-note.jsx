import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf/dist/esm/entry.webpack";
import { useNavigate, useParams } from "react-router";
import { useStore } from "../../store/store.js";


const { default: Layout } = require("../../components/layout/layout");

function SingleNote() {
  pdfjs.GlobalWorkerOptions.workerSrc =
`//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

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
            // for (let i = 0; i < currentUser.favouriteNotes.length; i++) {
            //   if (currentUser.favouriteNotes[i].university === res.data.university && 
            //     currentUser.favouriteNotes[i].courseCode === res.data.courseCode) {
            //     setIsFav(true);
            //   }
            // }
            // console.log(currentUser.favouriteCourses)
            console.log("got course")
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


  // const addToFav = async () => {
  //   if(isFav) {
  //     return;
  //   }
  //   await axios.post(`${process.env.REACT_APP_URL}/courses/addToFav`,
  //     { email:currentUser.email, university:course.university, courseCode:course.courseCode })
  //     .then(res => {
  //       console.log(res.data);

  //       setIsFav(true);
  //       dispatch(userLogin(res.data))

  //     })
  //     .catch(err => {
  //       console.log(err);
  //     })
  // }


  // const removeFromFav = async () => {
  //   await axios.post(`${process.env.REACT_APP_URL}/courses/removeFromFav`,
  //     { email:currentUser.email, university:course.university, courseCode:course.courseCode })
  //     .then(res => {
  //       console.log(res);
  //       setIsFav(false);
  //       dispatch(userLogin(res.data))

  //     })
  //     .catch(err => {
  //       console.log(err);
  //     })
  // }

  const toArray = (pdfBin) => {
    if (!pdfBin) { return new Uint8Array(0) }
    const len = pdfBin.length;
    const bytes = new Uint8Array(len);
    for (var i = 0; i < len; i++) {
      bytes[i] = pdfBin.charCodeAt(i);
    }
    
    return bytes
  }

  useEffect(() => {
    fetchNote();
    
  }, [fetchNote])


  return (
    <Layout>
      {note ? 
        <div className="row homepage-margin">
          <div className="col">
            <div className="row mt-4">
        
              {/* <div
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
              
              </div> */}
              <div
                className="col-8" 
              >
                <h1 >{note ? note.file.name : "Not not found"}
                </h1>
              </div>
            </div>
          

            {note ? 
              <div
                style={{
                  border: "1px solid rgba(0, 0, 0, 0.3)",
                  marginBottom: "10px",
                }}
              >
              
                <Document
                  className="pdf-document"
                  options={{
                    // outerWidth: "700",
                    // innerWidth: { 700 },
                    cMapUrl: `//cdn.jsdelivr.net/npm/pdfjs-dist@${pdfjs.version}/cmaps/`,
                    cMapPacked: true,
                  }}
                  //file={window.URL.createObjectURL(new Blob([course.files[0].file.data],  { type: "application/pdf" }))}
                  // file={{ data: toArray(course.files[0].file.data) }}
                  //file={testPdf}
                >
                  <Page
                    key={1}
                    pageNumber={1}
                  />  
                  {/* {Array.apply(null, Array(numPages))
                .map((x, i)=>i+1)
                .map(page => <Page
                      
                  key={page}
                  pageNumber={page}
                />  
                )} */}
                </Document>
              </div>          :
              <p></p>
            }

         
          </div>
        </div>     :
        <p>Loading...</p>
      }
    </Layout>
  )
}

export default SingleNote;
