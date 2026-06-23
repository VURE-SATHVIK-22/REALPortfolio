import React, { useState, useEffect } from "react";
import "./AllProjects.scss";

import { StyleProvider } from "../../contexts/StyleContext";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import Loading from "../loading/Loading";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

import "../StartupProjects/StartupProjects.scss";

export default function AllProjects() {
  function openUrlInNewTab(url) {
    if (!url) {
      return;
    }
    var win = window.open(url, "_blank");
    win.focus();
  }

  const [repo, setrepo] = useState([]);
  const [loading, setLoading] = useState(true);
  const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
  const [isDark, setIsDark] = useLocalStorage("isDark", darkPref.matches);

  const changeTheme = () => {
    setIsDark(!isDark);
  };

  useEffect(() => {
    const getRepoData = () => {
      fetch("https://api.github.com/users/VURE-SATHVIK-22/repos?per_page=100")
        .then(result => {
          if (result.ok) {
            return result.json();
          }
          throw result;
        })
        .then(response => {
          const impactfulProjects = [
            "Self-Healing-RAG-Pipeline",
            "CodeReview-AI",
            "DeepResearch_Pro",
            "Jarvis_AI",
            "langgraph-software-agency",
            "Nexus_Reach_B2B"
          ];
          const filteredResponse = response.filter(r => impactfulProjects.includes(r.name));
          const mappedRepos = filteredResponse.map(r => ({
            node: {
              id: r.id,
              name: r.name,
              description: r.description,
              url: r.html_url,
              forkCount: r.forks_count,
              stargazers: { totalCount: r.stargazers_count },
              diskUsage: r.size,
              primaryLanguage: r.language ? {
                name: r.language,
                color: "#6c63ff" 
              } : null
            }
          }));
          setrepo(mappedRepos);
          setLoading(false);
        })
        .catch(function (error) {
          console.error(error);
          setLoading(false);
        });
    };
    getRepoData();
  }, []);

  return (
    <div className={isDark ? "dark-mode" : null}>
      <StyleProvider value={{ isDark: isDark, changeTheme: changeTheme }}>
        <Header />
        <div className="main" id="all-projects">
          <h1 className="project-title" style={{marginTop: '20px'}}>Projects</h1>
          {loading ? (
            <Loading />
          ) : (
            <div className="projects-container">
              {repo.map((v, i) => {
                const project = v.node;
                return (
                  <div
                    key={project.id}
                    className={
                      isDark
                        ? "dark-mode project-card project-card-dark"
                        : "project-card project-card-light"
                    }
                  >
                    <div className="project-detail">
                      <h5
                        className={isDark ? "dark-mode card-title" : "card-title"}
                      >
                        {project.name}
                      </h5>
                      <p
                        className={
                          isDark ? "dark-mode card-subtitle" : "card-subtitle"
                        }
                      >
                        {project.description}
                      </p>
                      <div className="project-card-footer">
                        <span
                          className={
                            isDark ? "dark-mode project-tag" : "project-tag"
                          }
                          onClick={() => openUrlInNewTab(project.url)}
                        >
                          View Source
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
        <Footer />
      </StyleProvider>
    </div>
  );
}
