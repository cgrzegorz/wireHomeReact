// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import PageTitleBackground from "../assets/images/roz1.webp";

function PageTitles({ title, breadcrumb = [] }) {
  return (
    <>
      <section
        className=" mt-5 page-title"
        style={{ backgroundImage: `url(${PageTitleBackground})` }}
      >
        <div className="auto-container">
          <div className="title-outer text-center">
            <h1 className="title">{title}</h1>
            <ul className="page-breadcrumb">
              {breadcrumb.map((value, index) => (
                <li key={index}>
                  <Link to={value.link}>{value.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default PageTitles;
