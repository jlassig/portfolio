import React, { useState } from "react"


const Lightbox = ({ images }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedImageIndex, setSelectedImageIndex] = useState(null)

  // opening the lightbox (when the user clicks an image)
  const openLightbox = (index) => {
    setSelectedImageIndex(index)
    setIsOpen(true)
  }
//closing the lightbox (when the user clicks "close" in the lightbox)
  const closeLightbox = () => {
    setSelectedImageIndex(null)
    setIsOpen(false)
  }

  //going either previous or next in the lightbox
  const navigate = (direction) => {
    const newIndex =
      (selectedImageIndex + direction + images.length) % images.length
    setSelectedImageIndex(newIndex)
  }

  return (

   //the lightbox itself: 
    <div className="lightbox-wrapper">
      <div
        className="lightbox-div"
        style={{ display: "flex", flexWrap: "wrap" }}
        >

        {/* first, go through the list */}
        {images.map((image, index) => (
          <div key={index} 
          className="lightbox-image-div"
          style={{ margin: "5px", position: "relative" }}
          >
          {/* if the image that you are currently on is a video then give it a video tag instead of an img tag */}
            {image.mediaStyle.toLowerCase().includes("video") ? (
              <video 
                className="media-style"
                key={index}
                src={image.mediaSource}
                alt={image.title}
                style={{
                  width: "200px",
                  height: "150px",
                  objectFit: "cover",
                  cursor: "pointer",
                }}
                onClick={() => openLightbox(index)}
                controls
                onEnded={() => closeLightbox()}>
                Your browser does not support the video tag.
              </video>
            ) : (
             //everything else is an image
              <img
                src={image.mediaSource}
                alt={image.title}
                className="media-style"
                style={{
                  width: "200px",
                  height: "150px",
                  objectFit: "cover",
                  cursor: "pointer",
                }}
                onClick={() => openLightbox(index)}
              />
            )}
          </div>
        ))}
      </div>
{/* this is for when the user has clicked on one of the images or videos above. Now the lightbox opens up */}
      {isOpen && selectedImageIndex !== null && (
        <div className="lightbox-fullscreen">
          <div className="lightbox-content">
            <div className="media-div">
            {/* First check if the image is video or an image*/}
              {images[selectedImageIndex].mediaStyle
                .toLowerCase()
                .includes("video") ? (
                <video
                  controls
                  width="100%"
                  height="300"
                  key={selectedImageIndex}>
                  <source
                    src={images[selectedImageIndex].mediaSource}
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              ) : (
               
                <img
                  src={images[selectedImageIndex].mediaSource}
                  alt={images[selectedImageIndex].title}
                  className="lightbox-image-style"
                  style={{
                    width: "100%",
                    height: "300px",
                    objectFit: "contain",
                  }}
                />
              )}
            </div>
             {/* now a description box with a title, subtitle, description and github link */}
            <div className="description-div">
              <p className="title">{images[selectedImageIndex].title}</p>
              <p className="subtitle">{images[selectedImageIndex].subtitle}</p>
              <p className="description">
                {images[selectedImageIndex].description}
                <a
                  href={images[selectedImageIndex].github}
                  target="blank"
                  className="github-link">
                  See source.{" "}
                </a>
              </p>
            </div>
              {/* these buttons are for going previous, next and closing the lightbox */}
            <div className="button-div">
              <button onClick={() => navigate(-1)}>Previous</button>
              <button onClick={() => navigate(1)}>Next</button>
              <button onClick={closeLightbox}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
export default Lightbox
