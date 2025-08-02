import profileImage from '../assets/profile.jpg'; 

function About() {
  return (
    <section id="about" className="py-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Giới thiệu</h2>
      <div className="flex flex-col items-center md:flex-row md:items-start">
        <img
          src={profileImage}
          alt="Nguyễn Đức Anh"
          className="w-32 h-32 rounded-full mb-4 md:mr-6"
        />
        <p className="text-lg">
          Tôi là Nguyễn Đức Anh, sinh viên năm 4 chuyên ngành Kỹ thuật Phần mềm tại Đại học FPT. Tôi có kiến thức về JavaScript, HTML, CSS, React, Java Servlet, và SQL Server. Đam mê phát triển web và đang tìm cơ hội thực tập tại InterData.
        </p>
      </div>
    </section>
  );
}
export default About;