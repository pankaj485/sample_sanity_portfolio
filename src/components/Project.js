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
    <main className="bg-green-100 min-h-screen p-12">
      <section className="container mx-auto">
        <h1 className="text-5xl flex justify-center cursive">My projects</h1>
        <h2 className="text-lg text-gray-600 flex justify-center mb-12">
          welcome to my projects page
        </h2>
        <section className="grid md:grid-cols-2 gap-8 sm:mx-10">
          {projects?.map((project, index) => {
            const { date, description, link, place, projectType, tags, title } =
              project;

            return (
              <article className="relative rounded-lg shadow-xl bg-white p-16">
                <h3 className="text-gray-800 text-3xl font-bold mb-2 hover:text-red-700">
                  <a href={link} alt={title} rel="noopener noopener">
                    {title}
                  </a>
                </h3>
                <div className="text-gray-500 text-xs ">
                  <span>
                    <strong className="font-bold">Finished on</strong>
                    {new Date(date).toLocaleDateString()}
                  </span>
                  <span>
                    <strong className="font-bold">Company</strong>
                    {place}
                  </span>
                  <span>
                    <strong className="font-bold">Type</strong>:{projectType}
                  </span>
                  <p className="my-6 text-lg text-gray-700 leading-relaxed ">
                    {" "}
                    {description}{" "}
                  </p>
                  <a
                    href={link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-red-500 font-bold hover:underline hover:text-red-400 text-lg"
                  >
                    View Project
                    <span role="img" aria-label="right pointer">
                      {"   "}
                      👉
                    </span>
                  </a>
                </div>
              </article>
            );
          })}
        </section>
      </section>
    </main>
  );
};

export default Project;
