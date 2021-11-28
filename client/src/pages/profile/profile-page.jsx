import Layout from "../../components/layout/layout.jsx";
import { useStore } from "../../store/store";
import "../profile/profile-page.css";

function Profile() {
  const [state] = useStore();
  const { user: currentUser } = state;

  return (
    <Layout>
      <div className="profile-info row align-items-center">
        <div className="col-2 ml-5 profileImgLocation mt-2">
          {<span className="profileImg">MT</span>}
        </div>
        <div className="col-3">
          <div className="mt-3" >
            <p>
              Username: {currentUser ? currentUser.username: ""}
            </p>
            <p>
              E-mail: {currentUser ? currentUser.email: ""}
            </p>
            <p>
              University: {currentUser ? currentUser.university: ""}
            </p>
          </div>
        </div>
        <div className="col-2 offset-3 mt-0">
          <button className="col-12 btn btn-block btn-danger">
            Edit Profile
          </button>
        </div>
      </div>
      <div className="row mt-5 mb-5 justify-content-center">
        <div className="document-container col-6">
          <div className="row">
            <h3 className="mt-2 mb-2 text-center">Your Documents</h3>
          </div>
          <div className="row">
            <div className="document-section col-4">
              <div className="document-section-in mr-0 pr-0">
                <h6 className="text-center mb-1 mt-3">Uploads</h6>
                <p className="text-center">0</p>
              </div>
            </div>
            <div className="document-section col-4">
              <div className="document-section-in">
                <h6 className="text-center mb-1 mt-3">Points</h6>
                <p className="text-center">0</p>
              </div>
            </div>
            <div className="document-section col-4">
              <div className="document-section-right">
                <h6 className="text-center mb-1 mt-3">Comments</h6>
                <p className="text-center">0</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Profile;
