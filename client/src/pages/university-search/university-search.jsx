import axios from "axios";
import { useEffect, useState } from "react";
import Layout from "../../components/layout/layout.jsx";
import { useStore } from "../../store/store.js";
import { useLocation } from "react-router-dom";
import University from "../../components/university/university.jsx";

function UniversitySearch(props) {
  
  const { state } = useLocation();
  const { id, searchQuery } = state;

  const [list, setList] = useState();


  console.log(searchQuery);

  const getUniversities = async () => {
    if (searchQuery && searchQuery !== "") {
      await axios.post(`${process.env.REACT_APP_URL}/search`, { searchQuery }).then(res => {
        const data = res.data;
        console.log(typeof(data));
        let universityList = [];
        data.forEach(uni => {
          universityList.push(uni)
        });
        
        setList(universityList);
      }).catch(err => console.log(err))
    }
    else {
      setList([]);
    }
  }

  // when we try to search again in the university result page, it gives error due to duplication I guess
  // ask senior Mizbah ...
  useEffect(() => {
    getUniversities();
  }, [searchQuery]);

  return (
    <Layout>
      <div className="row m-4">
        <h4>University Search Result</h4>
        <div className="row mt-2">

          { list ?
            (list.length > 0 ?
              list.map((item) => {

                return(
                  <div
                    key={item.universityName}
                    className="row mt-4"
                  >
                    <div
                      className="col-12"
                    >
                      <University
                        universityName={item.universityName}
                        courseNumber={item.courses.length}
                      >
                      </University>
                    </div>
                  </div>
                  
                );
              }) :<p>No University found !!!</p>)            :
            <p>Loading...</p>

          }



        </div>
      </div>
    </Layout>
  );
}

export default UniversitySearch;
