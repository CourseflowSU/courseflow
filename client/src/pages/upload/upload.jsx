import React, { useState } from "react";
import { useStore } from "../../store/store";
import "./upload-page.css";
import Header from "../header/header.jsx";
import Footer from "../footer/footer.jsx";
import Button from "@material-ui/core/Button";
import { Viewer , Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import axios from "axios";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Document,Page } from "react-pdf/dist/esm/entry.webpack";
import { useForm } from "react-hook-form";

const fileUploadSchema = z
  .object({
    courseCode: z.string().nonempty(),
    courseName: z.string().nonempty(),
    university: z.string().nonempty(),
  });


function Upload() {

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(fileUploadSchema),
    mode: "all",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const [state] = useStore();
  const { user: currentUser } = state;
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  const [selectedFile, setSelectedFile] = useState(null);
  const [isSelected, setIsSelected] = useState(false);
  const [numPages, setNumPages] = useState(null);
  const [progress, setProgress] = useState(0); // progess bar
  const [pdfError, setPdfError] = useState("");

  const changeHandler = (event) => {
    if (event.target.files[0].type == "application/pdf") {
      setSelectedFile(event.target.files[0]);
      setIsSelected(true);
    }
    else {
      setPdfError("Please only upload PDF files.");
    }

  };

  const onSubmit = async (data) => {
    
    setProgress(0);
    const formData = new FormData();
    formData.append("file", selectedFile); // appending file
    formData.append("courseCode", data.courseCode.replace(" ", ""));
    formData.append("courseName", data.courseName.replace(" ", ""));
    formData.append("university", data.university.replace(" ", ""));
    formData.append("username", currentUser.username);
    await axios.post(`${process.env.REACT_APP_URL}/upload`, formData, {
      onUploadProgress: (ProgressEvent) => {
        let progress = Math.round(
          ProgressEvent.loaded / ProgressEvent.total * 100) + "%";
        setProgress(progress);
      }
    }).then(res => {
      console.log(res);
    }).catch(err => console.log(err))
    
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
          <div className='pdf-container'>
            {/* show pdf conditionally (if we have one)  */}
            
            {isSelected ? (
              <div
                style={{
                  border: "1px solid rgba(0, 0, 0, 0.3)",
                  height: "100%",
                }}
              >
                <Document
                  className="pdf-document"
                  file={selectedFile}
                  onLoadSuccess={({ numPages })=>setNumPages(numPages)}
                >
                  {Array.apply(null, Array(numPages))
                    .map((x, i)=>i+1)
                    .map(page => <Page
                      
                      key={page}
                      pageNumber={page}
                    />  
                    )}
                </Document>
                <p> {numPages} </p>
              </div>
            ) : (
              <div
                style={{
                  alignItems: "center",
                  border: "2px dashed rgba(0, 0, 0, .3)",
                  display: "flex",
                  fontSize: "2rem",
                  height: "100%",
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                {pdfError}
              </div>
            )}          
          </div>
          <div
            className="progessBar"
            style={{ width: progress }}
          >
            {progress}
          </div>

          {isSelected ? (
            <div className="card-body">
              <div className="mt-3 d-flex flex-column">
                <input
                  {...register("courseCode")}
                  className="btn-border input-style form-control"
                  placeholder="Course Code"
                  type="text"
                >
                </input>
                <small className="align-self-start error-text">
                  {errors.courseCode?.message}
                </small>
      
              </div>
              <div className="mt-3 d-flex flex-column">
                <input
                  {...register("courseName")}
                  className="btn-border input-style form-control"
                  placeholder="Course Name"
                  type="text"
                >
                </input>
                <small className="align-self-start error-text">
                  {errors.courseName?.message}
                </small>
      
              </div>
              <div className="mt-3 d-flex flex-column">
                <input
                  {...register("university")}
                  className="btn-border input-style form-control"
                  placeholder="University"
                  type="text"
                >
                </input>
                <small className="align-self-start error-text">
                  {errors.university?.message}
                </small>
              </div>                 
                
          
              <button
                className="btn uploadBtn"
                styles={{ display: "none" }}
                onClick={handleSubmit(onSubmit)}
              >
                <span className="uploadBtnText"> 
                    Upload 
                </span>
              </button> 
            </div>
          ) : "" }
          
        </div>
      </div>
      
      <Footer/>
    </div>
    
  );
}

export default Upload;
