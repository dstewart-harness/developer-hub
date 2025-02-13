import React from "react";
import Link from "@docusaurus/Link";
import clsx from "clsx";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./styles.module.scss";
import TutorialCard, { TutorialCards } from "../LandingPage/TutorialCard";
// Define the cards in "***Data.ts"
import { featuredTutorials, docsCards } from "./data/cloudCostManagementData";

export default function CCM() {
  const { siteConfig: { baseUrl = "/" } = {} } = useDocusaurusContext();
  return (
    <div className="container">
      <div className={styles.topSection}>
        <div className={styles.spaceBetween}>
          <div className={styles.moduleTitle}>
            <img src={`${baseUrl}img/icon_ccm.svg`} />
            <h1>Cloud Cost Management</h1>
          </div>
          <div className={styles.btnContainer}>
            <Link href="/tutorials/cloud-costs">
              <button className={styles.btn}>  
                {/* <i className="fa-regular fa-file"></i> */}
                <img src={`${baseUrl}img/icon_tutorials.svg`} />
                Tutorials
              </button>
            </Link>
            <Link href="/release-notes/cloud-cost-management">
            <button className={styles.btn}>
                {/* <i className="fa-regular fa-file"></i> */}
                <img src={`${baseUrl}img/icon_release_notes.svg`} />
                Release Notes
              </button>
            </Link>
            </div>
        </div>
        <div className={styles.spaceBetween}>
          <div className={styles.content}>
          <p>
              Harness CCM is an intelligent cloud cost management solution for
              FinOps, Infrastructure, and Engineering teams that provides complete 
              cost transparency across teams with robust business intelligence (BI) and 
              helps reduce wasted cloud costs by up to 75% with intelligent cloud AutoStopping.
          </p>
          </div>
        </div>
      </div>
      <TutorialCards data={docsCards} sectionClass={styles.subSection} />
      <div className={styles.sectionDivider}></div>
      {/*<div className={styles.subSection}>*/}
        {/*<h3>Featured Tutorials</h3>*/}
        {/*<TutorialCard FeatureList={featuredTutorials} featuredCard={true} />*/}
      {/*</div>*/}
    </div>
    // </Layout>
  );
}






          