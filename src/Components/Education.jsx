import React from "react";

/**
 * Education
 *
 * Below is a sample education section. Update to reflect your education
 * and any courses you've completed.
 */
const Education = () => {
  return (
    <section className="padding" id="education">
      <h2 style={{ textAlign: "center" }}>Education</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src="../images/notebook-2178656_1280.jpg"
            style={{
              height: "90%",
              width: "100%",
              borderRadius: "1rem",
            }}
            alt="desk with computer and books"
          />
        </div>
        <div style={{ maxWidth: "60%", padding: "0 2rem", alignSelf: "center" }}>
          <h3>Microsoft Learn Student Ambassador</h3>
          <p>
            Microsoft Learn Student Ambassador is a global program that supports students in
            technical education. I am part of the program and have contributed to various projects
            including the following:
          </p>
          <ul>
            <li>
              <b>Web Development for Beginners:</b> Contributed sketch note imagery to accompany
              each lesson. These help provide visual representation of what is being taught.
            </li>
            <li>
              <b>My Resume Site:</b> Created from Microsoft&apos;s resume workshop and deployed to GitHub
              pages. Includes my experience and design abilities.
            </li>
            <li>
              <b>Github codespaces:</b> A tutorial on how to use Github codespaces to develop in the
              cloud.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Education;
