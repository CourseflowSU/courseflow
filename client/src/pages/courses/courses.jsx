import axios from "axios";
import { useEffect, useState } from "react";
import Course from "../../components/course/course.jsx";
import Layout from "../../components/layout/layout.jsx";
import { useStore } from "../../store/store.js";


function Courses() {

  const [list, setList] = useState();



  const getCourses = async () => {
    await axios.get(`${process.env.REACT_APP_URL}/api/courses`)
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
                      className="col-6"
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

export default Courses;
