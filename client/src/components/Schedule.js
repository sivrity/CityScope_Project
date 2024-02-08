import React from 'react';

export default function Schedule() {
  return (
   <>
     <section style={{backgroundColor: 'white'}}>
        <div className="container py-5">

        <button className="btn btn-lg text-center"><span><a href="/detail"><i className="fa fa-arrow-left fa-2x text-black"></i></a></span></button>

          <div className="row">
            <div className="col-lg-8">
              <div className="card mb-4">
                <div className="card-body text-center">
                  <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="avatar"
                    className="rounded-circle img-fluid"  style={{width: "150px", marginLeft: "40%"}} />
                    
                  <h5 className="my-3">John Smith</h5>
                  <h2 className="text-muted mb-1">React Js Job Switch : How to get a job call</h2>
                  <div className="d-flex justify-content-center mb-2 px-4">
                    <button type="button" className="btn btn-primary">Follow</button>
                    <button type="button" className="btn btn-outline-primary ms-1">Message</button>
                  </div>
                  <hr />

                  <div className="container ml-0">
                  <button type="button" className="btn btn-primary">
                    Profile <span className="badge badge-light">9</span>
                  
                  </button>
                  <button type="button" className="btn btn-primary">
                    Profile <span className="badge badge-light">9</span>
                    
                  </button>
                </div>

                <ol>
                    <li className="mt-4 mb-4">  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </li>

                    <li className="mt-4 mb-4">  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </li>

                    <li className="mt-4 mb-4">  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </li>
                  </ol>  
                </div>


                
              
             
              <div className="row d-flex justify-content-center">
      
                  <div className="col-md-6 text-center">
                      <h4 className="my-4 h4">More Offering</h4>
      
                        </div>
             
              </div>
      
              <div className="row">
                  <div className="col-lg-4 col-md-12 mb-4">
                      <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/11.jpg" className="img-fluid" alt="" />
                  </div>
      
                  <div className="col-lg-4 col-md-6 mb-4">
                      <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/12.jpg" className="img-fluid" alt="" />
                  </div>
      
                  <div className="col-lg-4 col-md-6 mb-4">
                      <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/13.jpg" className="img-fluid" alt="" />
                  </div>
              </div>
            </div>
            </div>
            <div className="col-lg-4">
              <div className="card mb-4">
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-6">
                      <p className="mb-0">Pick a Date</p>
                    </div>
                    <div className="col-sm-9">
                      

                            <form>
                                <div className="row form-group">
                                        <div className="input-group date" id="datepicker">
                                            <input type="text" className="form-control" />
                                            <span className="input-group-append">
                                                <span className="input-group-text d-block">
                                                    <i className="fa fa-calendar"></i>
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                
                            </form>
                 
                   
                        
                    </div>
                  </div>
                  {/* <hr /> */}
                  <div className="row mt-4">
                    <div className="col-sm-6">
                      <p className="mb-0">Pick A Time</p>
                    </div>
                    <form>
                        <div className="row form-group">
                                <div className="input-group date" id="datepicker">
                                    <input type="text" className="form-control" />
                                    <span className="input-group-append">
                                        <span className="input-group-text d-block">
                                            <i className="fa fa-clock-o"></i>
                                        </span>
                                    </span>
                                </div>
                            </div>
                        
                    </form>
                  </div>
                  {/* <hr /> */}
                  <button type="button" className="btn btn-outline-primary ms-1 mt-4"><a href="/checkout">conform Details</a></button>
                </div>
              </div>
            
            </div>
          </div>
        </div>
      </section>
   </>
  )
}
