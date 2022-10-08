function Home(){
    return (
        <>
      <div className="home">
  <header id="header" className="fixed-top ">
    <div className="container d-flex align-items-center">
      {/* Uncomment below if you prefer to use an image logo */}
      {/* <a href="index.html" class="logo me-auto"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>*/}
      <nav id="navbar" className="navbar">
        <ul>
          <li><a className="nav-link scrollto active" href="/">Home</a></li>
          <li><a className="nav-link scrollto" href="/addUser">Add User</a></li>
          <li><a className="nav-link scrollto" href="/users">All Users</a></li>
        </ul>
        <i className="bi bi-list mobile-nav-toggle" />
      </nav>{/* .navbar */}
    </div>
  </header>{/* End Header */}
  {/* ======= Hero Section ======= */}
  <section id="hero" className="d-flex align-items-center">
    <div className="container">
      <div className="row">
        <div className="paragraph" data-aos="fade-up" data-aos-delay={200}>
          <h1>Mern Developer Intern Assignment</h1>
          <h2>to build a full stack web application using Node,Express,MongoDB and Express</h2>
          <div className="d-flex justify-content-center justify-content-lg-start">
            <a href="/addUser" className="btn-get-started scrollto">All users</a>
            <p> </p>
            <p> </p>
            <a href="/users" className="btn-get-started scrollto">Create User</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>


            </>
    )
}

export default Home;