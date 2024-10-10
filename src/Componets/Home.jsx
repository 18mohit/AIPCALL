import React from "react";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Home({ image, saved, setSaved }) {
  const saveImage = (img) => {
    let flag = true;
    if (saved !== null && saved.length > 0) {
      for (let i = 0; i < saved.length; i++) {
        if (saved[i].id === img.id) {
          flag = false;
          // react tostify
          console.log("img alrady in saved");
          toast.info("Image Alrady Saved !", {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
          });
          break;
        }
      }
    }
    if (flag) {
      setSaved([...saved, img]);
      console.log("Image is save...");
      toast.success("Image Saved.", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="conteiner-fluid " id="top">
        <div className="flex">
          {image.map((image) => (
            <div
              key={image.id}
              className="item"
              onClick={() => saveImage(image)}
            >
              <img src={image.src.medium} alt="some images" />
            </div>
          ))}
        </div>
      </div>
      {image.length != 0 && (
        <a href="#top" className="btn btn-primary my-5 btntop">
          Back to top
        </a>
      )}
    </>
  );
}

export default Home;
