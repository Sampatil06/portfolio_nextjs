import React from "react";
import "@/app/adaptLearnHub/adaptlearn.css";
import Link from "next/link";

const AdaptLearnhub = () => {
  return (
    <div>
      {/* <!-- Project Info Section --> */}
      <section className="project-info">
        <div className="overlay">
          <h1>AdaptLearn Hub</h1>
          <p>An AI-based learning platform for kids.</p>
        </div>
      </section>

      {/* <!-- Abstract Section --> */}
      <section className="abstract">
        <div className="container">
          <h2>Abstract</h2>
          <p>
            The AdaptLearn Hub is an AI-powered educational platform designed to
            support students with learning difficulties. Utilizing object
            detection, semantic segmentation, and Text-to-Speech technology, it
            creates tailored learning experiences with adaptive algorithms for
            customizable learning paths. Featuring interactive modules,
            multimodal engagement, progress tracking, and mobile accessibility,
            it fosters inclusivity and engagement. A user-friendly interface,
            collaboration with educators, and iterative testing ensure the
            platform evolves to make education more accessible and effective for
            all learners.
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
              href="https://github.com/Sampatil06/Adaptlearn-hub"
              target="_blank"
            >
              GitHub Repository
            </Link>
          </p>
          <div className="downloads">
            {/* < <Link href="files/urbancommute-result.pdf" download>View Result</Link> --> */}
            <Link href="files/Adapt-learn-hub_ppt.pdf" download>
              View PPT
            </Link>
            <Link href="files/Adapt-learn-hub_report.pdf" download>
              View Report
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdaptLearnhub;
