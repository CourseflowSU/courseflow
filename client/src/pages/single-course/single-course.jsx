import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { FcLike } from "react-icons/fc";
import { Document, Page, pdfjs } from "react-pdf/dist/esm/entry.webpack";
import { useNavigate, useParams } from "react-router";
import Comments from "../../components/comments/comments.jsx";
import { useStore } from "../../store/store.js";
import { userLogin } from "../../store/userReducer";
import "./single-course.scss";



const { default: Layout } = require("../../components/layout/layout");

function SingleCourse() {
  pdfjs.GlobalWorkerOptions.workerSrc =
`//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

  const { university, courseCode } = useParams()

  const [course, setCourse] = useState();

  const [state, dispatch] = useStore();
  const { user: currentUser } = state;

  const [isFav, setIsFav] = useState(false);

  const [comment, setComment] = useState({ userName: "kerem", text: "deneme deneme deneme deneme deneme", points: 5 });
  const request = { university, courseCode, comment };
  const navigate = useNavigate()

  const postComment = async () => {
    await axios
      .post(`${process.env.REACT_APP_URL}/comments`, request)
      .then((res) => {
        console.log(res);
      })
  }



  const fetchCourse = useCallback(
    async () => {
      console.log("fetching");
      await axios
        .post(`${process.env.REACT_APP_URL}/courses/${university}/${courseCode}`)
        .then((res) => {
          console.log(res.data);
          if(res.data !== null){
            setCourse(res.data)
            for (let i = 0; i < currentUser.favouriteCourses.length; i++) {
              if (currentUser.favouriteCourses[i].university === res.data.university && 
                currentUser.favouriteCourses[i].courseCode === res.data.courseCode) {
                setIsFav(true);
              }
            }
            console.log(currentUser.favouriteCourses)
            console.log("got course")
          }
          else{
            navigate("/error");
          }
          // if (res.status === 200 && res.data.message) {
          //   setErrorMessage(res.data.message);
          // } else if (res.status === 200) {
          //   setErrorMessage("You logged in succesfully");
          //   const dbUser = res.data;
          //   console.log("login user:", dbUser);
          //   dispatch(userLogin(dbUser));
          //   navigate("/home");
          // } else {
          //   setErrorMessage("Error! Please try again.");
          // }
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
    await axios.post(`${process.env.REACT_APP_URL}/courses/addToFav`,
      { email:currentUser.email, university:course.university, courseCode:course.courseCode })
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
      { email:currentUser.email, university:course.university, courseCode:course.courseCode })
      .then(res => {
        console.log(res);
        setIsFav(false);
        dispatch(userLogin(res.data))

      })
      .catch(err => {
        console.log(err);
      })
  }

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
    fetchCourse();
    
  }, [fetchCourse])


  return (
    <Layout>
      {course ? 
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
                <h1 >{course ? course.courseName : ""}
                </h1>
              </div>
            </div>
            <div className="row mt-4 justify-content-center">
              <button onClick={postComment} > BAS LAN BAN</button>
              {/* <div className="row mt-2">
              <div className="row mt-2">
                <div className="col-6">
                  <Course />
                </div>
                <div className="col-6">
                  <Course />
                </div>
              </div>
              <div className="row mt-2">
                <div className="col-6">
                  <Course />
                </div>
                <div className="col-6">
                  <Course />
                </div>
              </div>
            </div> */}
            </div>
          
            <div className="row mt-4">
              <h4>Course Notes</h4>
              {course ?
                course.files.map((file,index) => {
                  return (
                    <div
                      key={index}
                      className="row"
                    >
                  
                      <p>{file.info.courseName}</p>

                      {/* <div className="col-12">
                      {Note("Note Name", "Software Engineering", "Sabanci University")}
                    </div>
                    <div className="col-12">
                      {Note("Note Name", "Software Engineering", "Sabanci University")}
                    </div> */}
                    </div>
                  );
                })              :
                <p>No file found for this course</p>
              }
              <div className="row">

                {/* <div className="col-12">
                {Note("Note Name", "Software Engineering", "Sabanci University")}
              </div>
              <div className="col-12">
                {Note("Note Name", "Software Engineering", "Sabanci University")}
              </div> */}
              </div>
            </div>
            <div className="row mt-4 mb-5">
              <h4>Comments</h4>
              <div className="row mt-2">
                <Comments
                  userName="keremkor228"
                  text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
                >
                </Comments>
                <div className="col-12">
                  <Comments
                    userName={comment.userName}
                    text={comment.text}
                    points={comment.points}
                  >
                  </Comments>
                  {console.log(comment.points)}
                </div>
              </div>
            </div>

            {course ? 
              <div
                style={{
                  border: "1px solid rgba(0, 0, 0, 0.3)",
                  height: "100%",
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

export default SingleCourse;
