import Image from "next/image";
import Link from "next/link";
import "@/app/main.css";

export default function Home() {
  return (
    <div>
      {/* <!-- Hero Section --> */}
      <section className="hero">
        <div className="container">
          <h1>Welcome to My Portfolio</h1>
          <p>
            I'm a software developer passionate about Web Development, AI/ML &
            Data Science.
          </p>
        </div>
      </section>

      {/* <!-- About Section --> */}
      <section id="about">
        <div className="about-container">
          <div className="profile-photo">
            <Image
              src="/images/profile.jpg"
              alt="Samarth Patil"
              width={200}
              height={300}
            />
          </div>
          <div className="about-text">
            <h2>About Me</h2>
            <p>
              Hello! I'm Samarth Patil, a B.Tech student specializing in
              software development. I am passionate about web development, AI,
              and machine learning. I enjoy solving problems, creating
              innovative solutions, and continuously learning new technologies.
              I aim to leverage my technical skills to contribute to impactful
              projects.
            </p>
          </div>
        </div>
      </section>

      {/* <!-- Projects Section --> */}
      <section id="projects">
        <h2 className="text-2xl pl-28 pb-5">Projects</h2>
        <div className="project-list">
          <div className="project-card">
            <Image
              src="/images/Adaptlearn.png"
              alt="AdaptLearn Hub"
              className="h-52 w-72"
              width={200}
              height={300}
            />
            <h3>AdaptLearn Hub</h3>
            <p>An AI-based learning platform for kids.</p>
            <Link href="/adaptLearnHub">View Details</Link>
          </div>
          <div className="project-card">
            <Image
              src="/images/diet-prediction.jpg"
              alt="Diet Prediction Project"
              className="h-52 w-72"
              width={200}
              height={300}
            />
            <h3>Diet Prediction Website</h3>
            <p>
              A machine learning-based platform for personalized diet plans.
            </p>
            <Link href="/dietPrediction">View Details</Link>
          </div>
          <div className="project-card">
            <Image
              src="/images/digilib.jpg"
              alt="Digilib Project"
              className="h-52 w-72"
              width={200}
              height={300}
            />
            <h3>Digilib</h3>
            <p>A digital library with personalized book recommendations.</p>
            <Link href="/digiLib">View Details</Link>
          </div>
          <div className="project-card">
            <Image
              src="/images/urbancommute.jpg"
              alt="UrbanCommute Project"
              className="h-52 w-72"
              width={200}
              height={300}
            />
            <h3>UrbanCommute</h3>
            <p>A travel app with real-time transportation info.</p>
            <Link href="/urbanCommute">View Details</Link>
          </div>
        </div>
      </section>

      {/* <!-- Skills Section --> */}
      <section id="skills">
        <h2>Skills</h2>
        <div className="skills-container">
          <div className="skills-list">
            <h3>Programming Languages</h3>
            <ul>
              <li>Java - Intermediate</li>
              <li>Python - Intermediate</li>
              <li>C/C++ - Intermediate</li>
              <li>MySQL, MongoDB - Beginner</li>
            </ul>
          </div>
          <div className="skills-list">
            <h3>Other Technologies Known</h3>
            <ul>
              <li>HTML, CSS - Intermediate</li>
              <li>NodeJs - Beginner</li>
              <li>Django - Beginner</li>
              <li>PowerBI, Tableau - Intermediate</li>
              <li>
                OOPS, Artificial Intelligence, Machine Learning, JavaScript,
                PHP, ChatGPT
              </li>
            </ul>
          </div>
          <div className="skills-list">
            <h3>Soft Skills</h3>
            <ul>
              <li>Software Development</li>
              <li>Project Management</li>
              <li>Communication</li>
              <li>Leadership</li>
              <li>Reporting</li>
              <li>Quick Learner</li>
            </ul>
          </div>
        </div>
      </section>

      {/* <!-- Resume Section --> */}
      <section id="resume">
        <h2>Resume</h2>
        <Link href="files/Samarth Patil_Resume.pdf" download>
          Download Resume
        </Link>
      </section>

      {/* <!-- Contact Section --> */}
      <section id="contact">
        <h2>Contact</h2>
        <p>
          Email:{" "}
          <Link href="mailto:patilsamarth1947@gmail.com">
            patilsamarth1947@gmail.com
          </Link>
        </p>
        <p>
          LinkedIn:{" "}
          <Link
            href="https://www.linkedin.com/in/samarthpatill/"
            target="_blank"
          >
            Samarth Patil
          </Link>
        </p>
      </section>
    </div>
  );
}
