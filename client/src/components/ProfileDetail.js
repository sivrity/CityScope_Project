import React from 'react'

export default function ProfileDetail() {
  return (
  <> 
        <div className="container py-5">
        
            <button className="btn btn-lg text-center"><span><a href="/"><i className="fa fa-arrow-left fa-2x text-black"></i></a></span></button>
          <div className="row">
            <div className="col-lg-4">
              <div className="card mb-4">
                <div className="card-body text-center">
                  <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="avatar"
                    className="rounded-circle img-fluid text-center"/>
                  <h5 className="my-3"><a href="/Payment_page.html">John Smith</a></h5>
                  <p className="text-muted mb-1">Full Stack Developer</p>
                  <p className="text-muted mb-4">Bay Area, San Francisco, CA</p>
                  <div className="d-flex justify-content-center mb-2">
                    <button type="button" className="btn btn-primary">Follow</button>
                    <button type="button" className="btn btn-outline-primary ms-1">Message</button>
                  </div>
                </div>
              </div>
            
            </div>
            <div className="col-lg-8">
              <div className="card mb-4">
                <div className="card-body">
                    <ul className="nav nav-pills">
                        <li className="nav-item">
                          <a className="nav-link btn btn-outline-success px-4 " aria-current="page" href="#">Active</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link btn btn-outline-primary px-4" href="#">Link</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link btn btn-outline-primary px-4" href="#">Link</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link btn btn-outline-secondary px-4" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                        </li>
                      </ul>
                      <hr/>
            <div className="container mt-4 mb-4">
                      <div className="row">
                        <div className="col-sm-6">
                          <div className="card">
                            <div className="card-body">
                              <h5 className="card-title">Special title treatment</h5>
                              <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                              <a href="/schedule" className="btn btn-primary" data-mdb-ripple-init>Go somewhere</a>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="card">
                            <div className="card-body">
                              <h5 className="card-title">Special title treatment</h5>
                              <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                              <a href="#" className="btn btn-primary" data-mdb-ripple-init>Go somewhere</a>
                            </div>
                          </div>
                        </div>
                      </div>

                      
                    </div>

                    <div className="container mt-4 mb-4">
                        <div className="row">
                            <div className="col-sm-6">
                              <div className="card">
                                <div className="card-body">
                                  <h5 className="card-title">Special title treatment</h5>
                                  <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                  <a href="#" className="btn btn-primary" data-mdb-ripple-init>Go somewhere</a>
                                </div>
                              </div>
                            </div>
                            <div className="col-sm-6">
                              <div className="card">
                                <div className="card-body">
                                  <h5 className="card-title">Special title treatment</h5>
                                  <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                  <a href="#" className="btn btn-primary" data-mdb-ripple-init>Go somewhere</a>
                                </div>
                              </div>
                            </div>
                          </div>
                    </div>
                  
                  <hr/>
              <h3>About Us</h3>
              <div className="container py-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16">
                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15"/>
              </svg>

                </div>
              </div>

              <div className="container">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et egestas quis ipsum suspendisse ultrices. Ornare arcu dui vivamus arcu. Aliquam sem fringilla ut morbi. Faucibus interdum posuere lorem ipsum dolor sit amet consectetur adipiscing. A condimentum vitae sapien pellentesque habitant morbi tristique senectus et. Vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor posuere. Consectetur purus ut faucibus pulvinar elementum. Quisque non tellus orci ac. Aliquam ut porttitor leo a diam sollicitudin tempor id eu. Auctor augue mauris augue neque gravida in. Est velit egestas dui id ornare arcu. Vel fringilla est ullamcorper eget nulla facilisi etiam dignissim. Tellus molestie nunc non blandit massa.

Eget mauris pharetra et ultrices. Rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt. Id donec ultrices tincidunt arcu. At ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget. Egestas maecenas pharetra convallis posuere morbi leo urna molestie at. Nisl nisi scelerisque eu ultrices vitae auctor eu augue. Et malesuada fames ac turpis egestas integer eget aliquet nibh. Metus aliquam eleifend mi in nulla posuere. Et tortor at risus viverra adipiscing. Nunc scelerisque viverra mauris in aliquam. Rhoncus mattis rhoncus urna neque viverra justo nec. Senectus et netus et malesuada fames ac turpis. Aenean pharetra magna ac placerat vestibulum lectus mauris ultrices. Sapien et ligula ullamcorper malesuada proin libero nunc consequat interdum. Eu mi bibendum neque egestas congue quisque egestas. In vitae turpis massa sed elementum.

Velit ut tortor pretium viverra suspendisse potenti nullam ac. Ornare suspendisse sed nisi lacus sed viverra tellus in. Nibh tortor id aliquet lectus proin nibh. Nisl rhoncus mattis rhoncus urna neque viverra justo. Donec et odio pellentesque diam volutpat commodo sed egestas egestas. Facilisis magna etiam tempor orci eu lobortis elementum nibh tellus. Mattis aliquam faucibus purus in massa tempor nec feugiat. Vitae purus faucibus ornare suspendisse sed nisi lacus sed viverra. Id porta nibh venenatis cras sed felis eget velit aliquet. Rutrum quisque non tellus orci ac auctor augue. In ante metus dictum at tempor commodo. Nunc lobortis mattis aliquam faucibus purus in massa tempor nec. Pellentesque sit amet porttitor eget. Quis viverra nibh cras pulvinar mattis nunc sed blandit libero. Pulvinar pellentesque habitant morbi tristique senectus et netus et.
</p>

              </div>
            
            </div>
          </div>
        </div>
        </div>
 
    </>

  )
}
