import Link from "next/link";
import React from "react";
import "@/app/dietPrediction/diet-prediction.css";

const dietPrediction = () => {
  return (
    <div>
      <section className="project-info">
        <div className="overlay">
          <h1>Diet Prediction Website</h1>
          <p>A machine learning-based platform for personalized diet plans.</p>
        </div>
      </section>

      {/* <!-- Abstract Section --> */}
      <section className="abstract">
        <div className="container">
          <h2>Abstract</h2>
          <p>
            Our precision nutrition website offers a groundbreaking,
            knowledge-based approach to personalized meal planning tailored to
            individual needs and body composition. While the foundational
            four-part research initially excluded gym and fitness enthusiasts,
            we’ve now developed strategies to cater specifically to their active
            lifestyles. By combining ingredient insights with their nutritional
            benefits, the platform bridges the gap between fitness and
            nutrition, providing customized diets that align with health and
            performance goals. Experience personalized health where science
            meets individualization.{" "}
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
              href="https://github.com/Sampatil06/Mini_project"
              target="_blank"
            >
              GitHub Repository
            </Link>
          </p>
          <div className="downloads">
            <Link href="files/GYM_Result.pdf" download>
              View Result
            </Link>
            <Link href="files/GYM_PPT.pdf" download>
              View PPT
            </Link>
            <Link href="files/GYM_Report.pdf" download>
              View Report
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default dietPrediction;
