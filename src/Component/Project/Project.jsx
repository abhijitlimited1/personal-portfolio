import React, { useState, useEffect } from "react";
import styles from "./Project.module.css";
import { data } from "../../data/data";
import { FaGithub, FaExternalLinkAlt, FaSearch } from "react-icons/fa";

function Project() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [filteredProjects, setFilteredProjects] = useState(data);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  // Simulate loading state
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Filter projects based on search term
  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredProjects(data);
    } else {
      const filtered = data.filter(
        (project) =>
          project.projectName
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          project.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProjects(filtered);
    }
  }, [searchTerm]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <section id="project" className={styles.container}>
      <div className={styles.projectHeader}>
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>Featured Projects</h1>
          <div className={styles.titleUnderline}></div>
        </div>
        <p className={styles.info}>
          I have worked on many projects over the course of being a Web
          Developer. Here are a few of my featured projects.
        </p>

        <div className={styles.searchContainer}>
          <FaSearch className={styles.searchIcon} />
          <input
            type="text"
            placeholder="Search projects..."
            className={styles.searchInput}
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
      </div>

      <div className={styles.projects}>
        {isLoading ? (
          <div className={styles.loadingContainer}>
            <div className={styles.loader}></div>
            <p>Loading projects...</p>
          </div>
        ) : filteredProjects.length === 0 ? (
          <div className={styles.noProjects}>
            <h2>No projects found</h2>
            <p>
              Try a different search term or check back later for new projects.
            </p>
          </div>
        ) : (
          filteredProjects.map((project, index) => {
            return (
              <div
                className={styles.project}
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className={styles.projectImageContainer}>
                  <img
                    src={project.projectImg}
                    alt={project.projectName}
                    className={styles.image}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src =
                        "https://via.placeholder.com/300x150?text=Project+Image";
                    }}
                  />
                  <div className={styles.projectOverlay}>
                    <div className={styles.projectLinks}>
                      <a
                        className={styles.projectLink}
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${project.projectName} live`}
                      >
                        <FaExternalLinkAlt />
                      </a>
                      <a
                        className={styles.projectLink}
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${project.projectName} GitHub repository`}
                      >
                        <FaGithub />
                      </a>
                    </div>
                  </div>
                </div>

                <div className={styles.projectContent}>
                  <h2 className={styles.projectTitle}>{project.projectName}</h2>
                  <p className={styles.description}>{project.description}</p>

                  {project.technologies && (
                    <div className={styles.techStack}>
                      {project.technologies.map((tech, idx) => (
                        <span key={idx} className={styles.techBadge}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className={styles.projectButtons}>
                    <a
                      className={styles.view}
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Live <FaExternalLinkAlt className={styles.btnIcon} />
                    </a>
                    <a
                      className={styles.source}
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub <FaGithub className={styles.btnIcon} />
                    </a>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </section>
  );
}

export default Project;
