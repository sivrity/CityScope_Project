import React from 'react';
import styles from '../styles/Category.module.css'

export default function Category() {
  return (
    <>
        <div className="container">
  <div className="row row-cols-4 g-3">
    <div className="col">
      <div className="card">
        <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/042.webp" style={{width: "60%", borderRadius: "50%", margin: "0 auto", boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)", padding: "10px"}} />
          <div className="card-body">
            <h5 className={`${styles.card_title}`}>Coding Yaar</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="/detail" className="btn btn-primary">Know More</a>
          </div>
      </div>
    </div>
    <div className="col">
      <div className="card">
        <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/042.webp" style={{width: "60%", borderRadius: "50%", margin: "0 auto", boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)", padding: "10px"}} 
          alt="Palm Springs Road" />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            This is a longer card with supporting text below as a natural lead-in to
            additional content. This content is a little bit longer.
          </p>
          <a href="#" className="btn btn-primary">Know More</a>
        </div>
      </div>
    </div>
    <div className="col">
      <div className="card">
        <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/043.webp" style={{width: "60%", borderRadius: "50%", margin: "0 auto", boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)", padding: "10px"}}
          alt="Los Angeles Skyscrapers" />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">This is a longer card with supporting text below as a natural lead-in to
            additional content.</p>
            <a href="#" className="btn btn-primary">Know More</a>
        </div>
      </div>
    </div>
    <div className="col">
      <div className="card">
        <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/044.webp" style={{width: "60%", borderRadius: "50%", margin: "0 auto", boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)", padding: "10px"}}
          alt="Skyscrapers" />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            This is a longer card with supporting text below as a natural lead-in to
            additional content.
          </p>
          <a href="#" className="btn btn-primary">Know More</a>
        </div>
      </div>
    </div>

  </div>
</div>
    </>
  )
}
