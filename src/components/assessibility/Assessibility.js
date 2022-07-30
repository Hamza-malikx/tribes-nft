import React from "react";
import styles from "./assessibility.module.css";
const Assessibility = () => {
  return (
    <div className={styles.assessibility}>
      <div className={styles.container}>
        <div className={`pInner`}>
          <h1>Accessibility Statement:</h1>
          <p>
            This Accessibility Statement is for Tribal Network Beta and
            Tribalnetwork.org Tribal III Inc. is committed to ensuring digital
            accessibility for people with disabilities. We are continually
            improving the user experience for everyone and applying the relevant
            accessibility standards
          </p>
          <h4>Conformance status</h4>
          <p>
            The{" "}
            <a href="https://www.w3.org/TR/WCAG21/">
              Web Content Accessibility Guidelines
            </a>{" "}
            (WCAG) defines requirements for designers and developers to improve
            accessibility for people with disabilities. It defines three levels
            of conformance: Level A, Level AA, and Level AAA. Tribal Network
            Beta is partially conformant with WCAG 2.1 level AA. Partially
            conformant means that some parts of the content do not fully conform
            to the accessibility standard.
          </p>
          <h4>There are no restrictions for:</h4>
          <ul>
            <li>Deaf users </li>
            <li>Limited hearing users.</li>
            <li>Non-verbal users</li>
            <li>Limited manipulation users</li>
            <li>Limited reach and strength users</li>
            <li>Cognitive user group</li>
          </ul>
          <h4>There are some restrictions for:</h4>
          <ul>
            <li>Users without vision</li>
            <li>Users with limited vision</li>
            <li>Users without perception of color</li>
          </ul>
          <h4>What we do about known issues:</h4>
          <p>
            We work to achieve and maintain Web Content Accessibility
            Guidelines(WCAG) 2.1 AA standards, but it is not always possible for
            all our content to be accessible. Where content is not accessible,
            we will state a reason, warn users and offer alternatives.
          </p>
          <h4>Reporting accessibility issues:</h4>
          <p>
            If you find any accessibility issues with the Imperial Mobile native
            app, please contact{" "}
            <a href="mailto:Heretohelp@tribaliii.org">
              Heretohelp@tribaliii.org
            </a>{" "}
            who will endeavour to respond to you within 72 hours.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Assessibility;
