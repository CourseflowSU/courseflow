import Layout from "../../components/layout/layout.jsx";
import "../single-university/university-page.css"
import Course from "../../components/course/course.jsx";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { FcLike } from "react-icons/fc";
import { Document, Page, pdfjs } from "react-pdf/dist/esm/entry.webpack";
import { useNavigate, useParams } from "react-router";
import Comments from "../../components/comments/comments.jsx";
import { useStore } from "../../store/store.js";
import { userLogin } from "../../store/userReducer";

function University() {

  const { university } = useParams()
  const [list, setList] = useState();

  const getCourses = async () => {
    await axios.get(`${process.env.REACT_APP_URL}/courses/${university}`)
      .then(res => {
        console.log(res.data);
        const data = res.data;
        let courseList = [];
        data.forEach(uni => {
          courseList = courseList.concat(...uni.courses)
        });
        console.log(courseList);

        setList(courseList);
      }).catch(err => console.log(err))
  }
  useEffect(() => {
    getCourses();
  }, [])

  return (
    <Layout>
      <div className="row m-4">
        <h4>Courses</h4>
        <div className="row mt-2">

          { list ?
            (list.length > 0 ?
              list.map((item) => {

                return(
                  <div
                    key={item.courseCode}
                    className="row mt-4"
                  >
                    <div
                      className="col-12"
                    >
                      <Course
                        courseCode={item.courseCode}
                        university={item.university}
                        name={item.courseName}
                      >
                      </Course>
                    </div>
                  </div>

                );
              }) :<p>No course yet !!!</p>)            :
            <p>Loading...</p>

          }
        </div>
      </div>
    </Layout>
  );
}

export default University;

