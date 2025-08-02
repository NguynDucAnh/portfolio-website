function Projects() {
  return (
    <section id="projects" className="py-5">
      <div className="container">
        <h2 className="mb-4">Dự án</h2>
        <div className="row">
          <div className="col-md-6 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h3 className="card-title">Ứng dụng Web với React</h3>
                <p className="card-text">
                  Ứng dụng quản lý công việc sử dụng React và Vite, có giao diện responsive.
                </p>
                <a
                  href="https://github.com/NguynDucAnh/my-react-app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Xem mã nguồn
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h3 className="card-title">Ứng dụng Java Servlet</h3>
                <p className="card-text">
                  Ứng dụng web quản lý người dùng sử dụng Java Servlet và SQL Server.
                </p>
                <a
                  href="https://github.com/NguynDucAnh/PRJ301/tree/main/ExamManagementSystem"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Xem mã nguồn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Projects;