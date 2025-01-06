import Link from "next/link";
import React from "react";
import "@/app/urbanCommute/urbancommute.css";
const urbanCommute = () => {
  return (
    <div>
      {/* <!-- Abstract Section --> */}
      <section className="project-info">
        <div className="overlay">
          <h1>UrbanCommute</h1>
          <p>
            A real-time travel application providing smart transportation
            options.
          </p>
        </div>
      </section>
      <section className="abstract">
        <div className="container">
          <h2>Abstract</h2>
          <p>
            Transportation drives our economy, evolving with technological
            advancements to find innovative commuting solutions. In the
            data-driven era, transportation systems harness data to map routes,
            plan flights, and direct vehicles efficiently. Despite numerous apps
            and websites offering UI-focused journey aids, a globally
            generalized solution is yet to emerge. Our app aims to revolutionize
            transportation by providing a seamless method to travel between any
            pick-up and destination point. It evaluates routes based on budget
            and time, suggesting options like public transportation or private
            services while transparently informing users of travel costs. This
            ensures efficient, informed, and accessible commuting for all.
          </p>
        </div>
      </section>

      {/* <!-- Links Section --> */}
      <section className="links">
        {/* <div className="container"> */}
        <h2>Project Links</h2>
        {/* <!-- <p><Link href="https://urbancommute.example.com" target="_blank">Hosted Project</Link></p> --> */}
        <p>
          <Link
            href="https://github.com/Sampatil06/UrbanCommute"
            target="_blank"
          >
            GitHub Repository
          </Link>
        </p>
        <div className="downloads">
          {/* <!-- <Link href="files/urbancommute-result.pdf" download>View Result</Link> --> */}
          <Link href="files/urbancommute-ppt.pdf" download>
            View PPT
          </Link>
          <Link href="files/urbancommute-report.pdf" download>
            View Report
          </Link>
        </div>
      </section>
    </div>
  );
};

export default urbanCommute;
