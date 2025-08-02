function Header() {
  return (
    <header className="bg-dark text-white py-4">
      <div className="container text-center">
        <h1 className="display-5">Nguyễn Đức Anh</h1>
        <nav className="nav justify-content-center mt-3">
          <a href="#about" className="nav-link text-white">Giới thiệu</a>
          <a href="#projects" className="nav-link text-white">Dự án</a>
          <a href="#contact" className="nav-link text-white">Liên hệ</a>
        </nav>
      </div>
    </header>
  );
}
export default Header;