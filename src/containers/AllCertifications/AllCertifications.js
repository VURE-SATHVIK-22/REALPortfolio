import React from "react";
import "./AllCertifications.scss";
import AchievementCard from "../../components/achievementCard/AchievementCard";
import { StyleProvider } from "../../contexts/StyleContext";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { achievementSection } from "../../portfolio";

export default function AllCertifications() {
  const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
  const [isDark, setIsDark] = useLocalStorage("isDark", darkPref.matches);

  const changeTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={isDark ? "dark-mode" : null}>
      <StyleProvider value={{ isDark: isDark, changeTheme: changeTheme }}>
        <Header />
        <div className="main" id="all-certifications" style={{ paddingBottom: '50px' }}>
          <h1 className="project-title" style={{ marginTop: '50px', textAlign: 'center' }}>
            All Certifications
          </h1>
          <div className="achievement-cards-div" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', marginTop: '30px' }}>
            {achievementSection.achievementsCards.map((card, i) => (
              <AchievementCard
                key={i}
                isDark={isDark}
                cardInfo={{
                  title: card.title,
                  description: card.subtitle,
                  image: card.image,
                  imageAlt: card.imageAlt,
                  footer: card.footerLink
                }}
              />
            ))}
          </div>
        </div>
        <Footer />
      </StyleProvider>
    </div>
  );
}
