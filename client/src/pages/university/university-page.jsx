import Layout from "../../components/layout/layout.jsx";
import "../university/university-page.css"
import Course from "../../components/course/course.jsx";

function University() {
  return (
    <Layout>
      <div className="row">
        <div className="col-10 mt-4 offset-1">
          <h1>CS308</h1>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <hr className="comment-divider solid"></hr>
      </div>
      <div className="row homepage-margin">
        <div className="col">
          <div className="row mt-1">
            <div className="row">
              <div className="row">
                <div className="col-6">
                  {Course()}
                </div>
                <div className="col-6">
                  {Course()}
                </div>
              </div>
              <div className="row mt-2">
                <div className="col-6">
                  {Course()}
                </div>
                <div className="col-6">
                  {Course()}
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-1">
            <div className="row">
              <div className="row">
                <div className="col-6">
                  {Course()}
                </div>
                <div className="col-6">
                  {Course()}
                </div>
              </div>
              <div className="row mt-2">
                <div className="col-6">
                  {Course()}
                </div>
                <div className="col-6">
                  {Course()}
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-1">
            <div className="row">
              <div className="row">
                <div className="col-6">
                  {Course()}
                </div>
                <div className="col-6">
                  {Course()}
                </div>
              </div>
              <div className="row mt-2">
                <div className="col-6">
                  {Course()}
                </div>
                <div className="col-6">
                  {Course()}
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-1 mb-5">
            <div className="row">
              <div className="row">
                <div className="col-6">
                  {Course()}
                </div>
                <div className="col-6">
                  {Course()}
                </div>
              </div>
              <div className="row mt-2">
                <div className="col-6">
                  {Course()}
                </div>
                <div className="col-6">
                  {Course()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default University;
