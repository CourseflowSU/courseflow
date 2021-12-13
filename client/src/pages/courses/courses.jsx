import axios from "axios";
import { useEffect } from "react";
import Course from "../../components/course/course.jsx";
import Layout from "../../components/layout/layout.jsx";


function Courses() {

  const getCourses = async () => {
    await axios.get(`${process.env.REACT_APP_URL}/courses`)
      .then(res => {
        console.log(res);
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
          <div className="row mt-2">
            <div className="col-6">
              <Course
                name={"CS308"} 
                university={"Sabanci University"}
              >
              </Course>
            </div>
            <div className="col-6">
              <Course></Course>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-6">
              <Course></Course>

            </div>
            <div className="col-6">
              <Course></Course>

            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Courses;
