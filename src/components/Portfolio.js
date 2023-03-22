import React from 'react';
import Modal from './Modal';

export default function Porfolio(props) {

  const [selectedImage, setSelectedImage] = React.useState("")

  function handleClick(imageUrl) {
    console.log(imageUrl)
    // return (
    //   <Modal imageUrl={imageUrl}></Modal>
    // )
    setSelectedImage(imageUrl)
  }

  const portfolioData = props.resumeData.portfolio;

  return (
    <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Works.</h1>
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
            {
              portfolioData && portfolioData.map((item, index) => {
                return (
                  <div key={index} className="columns portfolio-item">
                    <div className="item-wrap">
                      <a href="#image-box" className='img-link'>
                      {/* <a href="#image-box" data-target="#image-box" data-toggle="modal" onClick={() => handleClick(item.imgurl)}> */}
                        <img src={`${item.imgurl}`} className="item-img" alt="Portfolio Item" />
                        <div className="overlay">
                          <div className="portfolio-item-meta">
                            <h5>{item.name}</h5>
                            <p>{item.description}</p>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
      {selectedImage && <Modal imageUrl={selectedImage}></Modal>}

    </section>
  );

}