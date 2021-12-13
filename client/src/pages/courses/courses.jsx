import axios from "axios";
import { useEffect, useState } from "react";
import Course from "../../components/course/course.jsx";
import Layout from "../../components/layout/layout.jsx";


function Courses() {

  const [list, setList] = useState([]);

  const getCourses = async () => {
    await axios.get(`${process.env.REACT_APP_URL}/courses`)
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
          
          {
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
                      name={`${item.courseCode} - ${item.courseName}`} 
                      university={item.university}
                    >
                    </Course>
                  </div>
                </div>
              );
            })
          }
    
      
        
        </div>
      </div>
    </Layout>
  );
}

export default Courses;
