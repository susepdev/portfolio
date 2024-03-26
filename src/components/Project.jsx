const Project = () => {
  return (
    <section className="project">
      <div className="container">
        <div className="row">

          <div className="col-lg-12 mb-4">
            <h2>Projects</h2>
          </div>

          <div className="col-lg-12 mb-5">
            <button className="btn btn-dark px-5 me-2">All</button>
            <button className="btn btn-light border border-light px-5 me-2">Web</button>
            <button className="btn btn-light border border-light px-5 me-2">Mobile</button>
          </div>

          <div className="col-lg-12">
            <div className="row">

              <div className="col-sm-4">
                <div className="card card-project shadow-sm border-0">
                  <img src="https://img.freepik.com/free-vector/dashboard-business-user-panel_23-2148359900.jpg" class="card-img-top rounded" alt="img"/>
                  <div className="card-body">
                    <h5 className="card-title">Project 1</h5>
                    <p className="card-text">Some quick example text to build on ...</p>
                  </div>
                </div>
              </div>

              <div className="col-sm-4">
                <div className="card card-project shadow-sm border-0">
                  <img src="https://img.freepik.com/free-psd/landing-page-corporate-ad-template_23-2148788937.jpg" class="card-img-top rounded" alt="img"/>
                  <div className="card-body">
                    <h5 className="card-title">Project 2</h5>
                    <p className="card-text">Some quick example text to build on ...</p>
                  </div>
                </div>
              </div>

              <div className="col-sm-4">
                <div className="card card-project shadow-sm border-0">
                  <img src="https://img.freepik.com/free-psd/landing-page-minimal-style-art-gallery-with-man_23-2148821375.jpg" class="card-img-top rounded" alt="img"/>
                  <div className="card-body">
                    <h5 className="card-title">Project 3</h5>
                    <p className="card-text">Some quick example text to build on ...</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Project;
