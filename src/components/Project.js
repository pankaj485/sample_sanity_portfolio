import React, { useEffect, useState } from "react";
import SanityClient from "../client";

const Project = () => {
  const [projects, setProjects] = useState(null);

  useEffect(() => {
    SanityClient.fetch(
      `*[_type == "project"]{
        date, 
        description,
        link, 
        place,
        projectType, 
        tags,
        title, 
}`
    )
      .then((data) => setProjects(data))
      .catch((err) => console.log(err));
  }, []);

  console.log(projects);

  return (
    <main>
      <section>
        <h1>Projects </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 mx-5 gap-5">
          {projects?.map((project, index) => {
            const { title, description, date, link, place, projectType, tags } =
              project;
            return (
              <div key={index} className="border-2 border-blue-400 p-4 ">
                <h2 className="text-xl font-bold">{title}</h2>
                <h3 className="text-lg">{description}</h3>
                <br />
                <p>category: {projectType}</p>
                <a href={link}>{link}</a>
                <p className="mb-2">
                  date: {date}, location: {place}
                </p>
                {tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-red-200 mr-2 text-sm px-4 py-1 rounded-full"
                  >
                    {tag + (index < tags.length - 1 ? ", " : "")}
                  </span>
                ))}
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default Project;
