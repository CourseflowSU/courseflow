import React, { useState } from "react";
import { useStore } from "../../store/store";
import "./upload-page.css";
import Header from "../header/header.jsx";
import Footer from "../footer/footer.jsx";
import Button from "@material-ui/core/Button";

function Upload() {
  const [state] = useStore();
  const { user: currentUser } = state;
  const [selectedFile, setSelectedFile] = useState();
  const [isSelected, setIsSelected] = useState(false);

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    setIsSelected(true);
  };

  const handleSubmission = () => {
    const formData = new FormData();

    formData.append("File", selectedFile);
    console.log(formData);
    console.log(selectedFile);
    
  };

  

  return (
    <div>
      <Header/>
      <div className="upload-info row align-items-center">
        <div className="upload-headInfo">
          <h2 className="">Upload  
            <span className="appearContentColor appearContentFont"> documents
              {/* <span className="appearContent1 appearContent2">mandatory documents</span> */}
            </span> to help other students
          </h2>
        </div>
      </div>
      <div className="dashedBorder mt-5">
        <div className="uploadContent">
          <input
            type="file"
            name="file"
            id="my-file"
            style={{ display: "none" }}
            onChange={changeHandler}
          />
          <label htmlFor="my-file">
            <Button
              variant="contained"
              component="span"
              className="browseBtn mb-2"
            >
              <span className="browseBtnText"> 
                    Browse my files 
              </span>
            </Button>
          </label>
          {isSelected ? (
            <div>
              <p>Filename: {selectedFile.name}</p>
              <p>Filetype: {selectedFile.type}</p>
              <p>Size in Mb: {(selectedFile.size / 1000000).toFixed(1)}</p>
              {/* <p>
                    lastModifiedDate:{" "}
              {selectedFile.lastModifiedDate.toLocaleDateString()}
            </p> */}
            </div>
          ) : (
            <p>Select a file to show details</p>
          )}
          
          {isSelected ? (
            <button
              className="btn uploadBtn"
              styles={{ display: "none" }}
              onClick={handleSubmission}
            >
              <span className="uploadBtnText"> 
                    Upload 
              </span>
            </button> 
          ) : "" }
          
        </div>
      </div>
      
      <Footer/>
    </div>
    
  );
}

export default Upload;
