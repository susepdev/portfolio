const Welcome = () => (
  <section className="welcome d-flex flex-wrap align-items-stretch">
    <div className="container">
      <div className="row">
        <div className="col-lg-7 col-12 d-flex align-items-center order-lg-1 order-2 welcome-left">
          <div data-aos="fade-up" data-aos-duration="1000">
            <h2>Welcome,</h2>
            <h1 className="m-0">Hi there! I'm <span className="text-warning">Susep Sp</span></h1>
            <h2 className="mt-3 mb-4">Software <i>Engineer</i></h2>
          </div>
        </div>
        <div className="col-lg-5 col-12 d-flex align-items-center order-lg-2 order-1 welcome-right">
          <div data-aos="fade-up" data-aos-duration="1200">
            <img src="https://abdisusep.cloud/img/welcome.png" className="w-50" alt="Welcome"/>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default Welcome;