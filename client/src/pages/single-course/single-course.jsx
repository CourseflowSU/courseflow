import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { FcLike } from "react-icons/fc";
import { pdfjs } from "react-pdf/dist/esm/entry.webpack";
import { useNavigate, useParams } from "react-router";
import Comments from "../../components/comments/comments.jsx";
import Note from "../../components/note/note.jsx";
import { useStore } from "../../store/store.js";
import { userLogin } from "../../store/userReducer";
import "./single-course.scss";



const { default: Layout } = require("../../components/layout/layout");

function SingleCourse() {

  const [list, setList] = useState();

  const getNotes = async () => {
    await axios.get(`${process.env.REACT_APP_URL}/comments`)
      .then(res => {
        console.log(res.data);
        const data = res.data;
        let commentList = [];
        data.forEach(uni => {
          uni.courses.forEach(course => {
            commentList = commentList.concat(...course.comments)
          })
        });
        console.log(commentList);
        setList(commentList);
      }).catch(err => console.log(err))
  }

  useEffect(() => {
    getNotes();
  }, [])

  const [state, dispatch] = useStore();
  const { user: currentUser } = state;


  const messageSchema = z
    .object({
      message: z.string().nonempty("Please enter a message."),
    });


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(messageSchema),
    mode: "all",
  });


  pdfjs.GlobalWorkerOptions.workerSrc =
`//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

  const { university, courseCode } = useParams()

  const [course, setCourse] = useState();
  const [isFav, setIsFav] = useState(false);

  const navigate = useNavigate()

  const postComment = async (data) => {
    const comment =  { userName: currentUser.username, text: data.message, points: 0 }
    const request = { university, courseCode, comment };
    console.log(comment);
    await axios
      .post(`${process.env.REACT_APP_URL}/comments`, request)
      .then((res) => {
        console.log(res);
        navigate(`/courses/${university}/${courseCode}`)
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
      { email:currentUser.email, university:university, courseCode:courseCode, courseName:course.courseName })
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
      { email:currentUser.email, university:university, courseCode:courseCode })
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
    if (course) {
      console.log("aa");
      let courseItem = {
        courseCode: course.courseCode,
        name: course.courseName,
        university: course.university
      };
      let recent_courses = localStorage.getItem("recentCourses");

      if (recent_courses) {
        console.log("bb");
        let arr_recent_courses = JSON.parse(recent_courses);
        let flag = false;
        for (let i = 0; i < arr_recent_courses.length; i++) {
          if (arr_recent_courses[i].courseCode === courseItem.courseCode &&
            arr_recent_courses[i].university === courseItem.university &&
            arr_recent_courses[i].name === courseItem.name) {
            flag = true;
            break;
          }
        }
        if (!flag) {
          arr_recent_courses.push(courseItem);
          if (arr_recent_courses.length == 5) {
            arr_recent_courses = arr_recent_courses.slice(1,5);
          }
        }
        localStorage.setItem("recentCourses", JSON.stringify(arr_recent_courses));
      }
      else {
        console.log("cc");
        localStorage.setItem("recentCourses", JSON.stringify([courseItem]));
        console.log(JSON.stringify([courseItem]));
      }
    }
  }, [course]);


  useEffect(() => {
    fetchCourse();

  }, [fetchCourse])


  const goToNote = (e) => {
    if(courseCode !== "unknown" && university !== "unknown"){
      e.preventDefault();
      e.stopPropagation();
      navigate(`/notes/${university}/${courseCode}/Software Engineering`)
    }

  }

  return (
    <Layout>
      {course ?
        <div className="row homepage-margin">
          <div className="col">
            <div className="row mt-4">

              <div
                className="col-1"
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
                className="col-9 align-self-center"
              >
                <h1 className="text-center">{course ? course.courseName : ""}
                </h1>
              </div>
            </div>

            <div className="row mt-4">
              <h4>Course Notes</h4>
              {course ?
                course.files.map((item,index) => {
                  return (
                    <div
                      key={index}
                      className="row"
                    >
                      <Note
                        courseCode={item.info.courseCode}
                        university={item.info.university}
                        courseName={item.info.courseName}
                        fileName={item.file.name}
                      >
                      </Note>

                    </div>
                  );
                })              :
                <p>No file found for this course</p>
              }

            </div>
            <div className="row mt-4 mb-5">
              <h4>Comments</h4>
              <div className="row mt-2">

                { course ?
                  (course.comments.length > 0 ?
                    course.comments.map((item, index) => {
                      return(
                        <div
                          key={index}
                          className="row mt-4"
                        >
                          <Comments
                            points = {item.points}
                            university = {university}
                            courseCode = {courseCode}
                            text = {item.text}
                            userName = {item.userName}
                          >
                          </Comments>
                        </div>
                      );
                    }) :<p>No comment</p>)            :
                  <p>Loading...</p>
                }
              </div>
            </div>
            <div className="row">
              <div>
                <form
                  onSubmit={handleSubmit(postComment)}
                >
                  <div className="col-10">
                    <div className="form-group">
                      <div className="form-group">

                        <textarea
                          {...register("message")}
                          placeholder="Your Comment"
                          id="textarea-message"
                          className="form-control"
                          name="message"
                          rows="5"
                        >
                        </textarea>
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="col-4 btn btn-block btn-success mt-2 mb-5"
                    >
                      <span>Send</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>     :
        <p>Loading...</p>
      }
    </Layout>
  )
}

export default SingleCourse;
