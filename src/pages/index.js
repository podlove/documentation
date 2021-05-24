import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

const projects = [
  {
    title: "Podlove Publisher",
    imageUrl: "img/podlove-publisher-icon.svg",
    link: "/podlove-publisher",
    description: <>Podcast Publishing for WordPress</>,
  },
  {
    title: "Podlove Web Player",
    imageUrl: "img/podlove-player-icon.svg",
    link: "/podlove-web-player",
    description: <>The fast, flexible and responsive podcast player powered by podlove meta data.</>,
  },
  {
    title: "Podlove Subscribe Button",
    imageUrl: "img/podlove-subscribe-icon.svg",
    link: "https://subscribe-button.podlove.org",
    description: (
      <>A universal and easy-to-use button, to subscribe to podcasts with player clients or website players.</>
    ),
  },
];

const sponsors = [
  {
    title: "Norddeutscher Rundfunk",
    imageUrl: "https://images.opencollective.com/norddeutscher-rundfunk/7a89270/logo/256.png",
    link: "https://www.ndr.de/",
  },
  {
    title: "Lage der Nation Media GmbH & Co. KG",
    imageUrl: "https://images.opencollective.com/lagenation/228ddfb/logo/256.png",
    link: "https://lagedernation.org/",
  },
];

function Project({ imageUrl, title, link, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <Link to={link} className={clsx("col col--4", styles.project)}>
      {imgUrl && (
        <div className="text--center" style={{ marginBottom: '1rem' }}>
          <img className={styles.projectImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3 style={{ fontSize: '1.5rem' }}>{title}</h3>
      <p>{description}</p>
    </Link>
  );
}

function Sponsor({ imageUrl, title, link }) {
  return (
    <Link to={link} className={clsx("col", styles.sponsor)}>
      {imageUrl && <img className={styles.sponsorImage} src={imageUrl} alt={title} />}
    </Link>
  );
}

export default function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout title={`${siteConfig.title}`} description="Open Source Technology for Independent Podcasting">
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
        </div>
      </header>
      <main>
        <section className={styles.projectList}>
          <div className="container">
            <div className="row">
              {projects.map((props, idx) => (
                <Project key={idx} {...props} />
              ))}
            </div>
          </div>
        </section>

        <section className={clsx("hero", styles.sponsorsBanner)}>
          <div className={clsx("container")}>
            <h2 className={clsx("hero__title", styles.sponsorsTitle)}>Sponsors</h2>
            <div className={styles.sponsorsList}>
              {sponsors.map((props, idx) => (
                <Sponsor key={idx} {...props} />
              ))}
            </div>

            <a
              href="https://opencollective.com/podlove"
              className="button button--info button--lg"
            >
              Become a Sponsor
            </a>
          </div>
        </section>
      </main>
    </Layout>
  );
}
