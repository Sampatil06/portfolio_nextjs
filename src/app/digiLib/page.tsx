import Link from "next/link";
import React from "react";
import "@/app/digiLib/digilib.css";

const digiLib = () => {
  return (
    <div>
      <section className="project-info">
        <div className="overlay">
          <h1>Digilib</h1>
          <p>A digital library with personalized book recommendations.</p>
        </div>
      </section>

      {/* <!-- Abstract Section --> */}
      <section className="abstract">
        <div className="container">
          <h2>Abstract</h2>
          <p>
            In today&apos;s digital age, traditional libraries are evolving into
            digital libraries—vast online book collections accessible from
            anywhere. These libraries leverage technology to organize and share
            books, making them easy to find on computers and phones.
            Complementing this transformation are smart recommendation systems
            that suggest books tailored to users&apos; interests using advanced
            algorithms. This paper explores the synergy between digital
            libraries and recommendation systems, examining their structure,
            functionality, and challenges. Together, they revolutionize how we
            discover and enjoy books, offering a seamless and personalized
            reading experience from the comfort of our homes.
          </p>
        </div>
      </section>

      {/* <!-- Links Section --> */}
      <section className="links">
        <div className="container">
          <h2>Project Links</h2>
          {/* <!-- <p><Link href="https://urbancommute.example.com" target="_blank">Hosted Project</Link></p> --> */}
          <p>
            <Link
              href="https://github.com/Sampatil06/LibraryManagmentSystem"
              target="_blank"
            >
              GitHub Repository
            </Link>
          </p>
          <div className="downloads">
            {/* <!-- <Link href="files/urbancommute-result.pdf" download>View Result</Link> --> */}
            {/* <!-- <Link href="files/urbancommute-ppt.pdf" download>View PPT</Link> --> */}
            <Link href="files/Digilib_report.pdf" download>
              View Report
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
export default digiLib;
