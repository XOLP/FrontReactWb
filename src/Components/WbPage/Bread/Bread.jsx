import React from "react";
import "./Bread.css"


// Breadcrumbs.js
import { Link, useLocation } from 'react-router-dom';
const Bread = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(x => x);

  return (
    <nav className="breadcrumb">
      <Link to="/">Главная - </Link>
      {pathnames.map((value, index) => {
        const isLast = index === pathnames.length - 1;
        const href = `/${pathnames.slice(0, index + 1).join('/')}`;

        return isLast ? (
          <span key={index} className="current">{decodeURIComponent(value)}</span>
        ) : (
          <span key={index}>
            <Link to={href}>{decodeURIComponent(value)}</Link>
            <span className="separator"> &gt; </span>
          </span>
        );
      })}
    </nav>
  );
};

export default Bread;

