import { IoMdSchool } from "react-icons/io";
import { HiDocumentText } from "react-icons/hi";
import { RiNumbersFill } from "react-icons/ri";
import axios from "axios";
import React, { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Footer from "../footer/footer.jsx";
import Header from "../header/header.jsx";
import "./contact-us.css";
import { useStore } from "../../store/store";

function ContactUs() {

  const [state] = useStore();
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

  const sendEmail = async (data) => {
    const { message } = data;
    console.log(data);
    console.log(message);
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_URL}/contactMessage`,
        {
          message,
          currentUser
        },
      );

      console.log(response.data);
      if (response.data === "recovery email sent") {
        setShowError(false);
        setMessageFromServer("recovery email sent");
      }
    } 
    catch (error) {
        
      if (error.response.data === "email not in db") {
        setShowError(true);
        setMessageFromServer("");
      }
    }
  };

  return (
    <div>
      <Header />
      <div className="contact_box">
        <div><h2 className="h2_contact ">Contact Us</h2>
          <form
            onSubmit={handleSubmit(sendEmail)}
          >
            <div className="col-md-6">
              <div className="form-group">
                <div className="form-group">
                  <label htmlFor="textarea-message">Message</label>
                  <textarea
                    {...register("message")}
                    placeholder="Message"
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
                className="contact_button"
              >
                <span>Send</span>
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ContactUs;