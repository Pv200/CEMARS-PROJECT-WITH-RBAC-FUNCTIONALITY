import React, { memo } from 'react';
import { TopNav } from './common';


import "./LandingPage.css";

const navOptions = [
	{title: 'Login', path: '/login'},
	{title: 'Register', path: '/register'}
];
function LandingPage() {
  return (
    <div className="landing-page">
      {/* Top Navigation */}
      <TopNav routes={navOptions}/>

      {/* Hero Section */}
      <section className="hero-section">
        <h1 className="hero-title">
          CEMARS Dashboard with <span className="highlight">RBAC</span>
        </h1>
        <p className="hero-description">
			College Event Management And Rating System User/Admin Dashboard.
        </p>
        <button className="cta-button hero-button" href="https://github.com/Pv200">GITHUB LINK</button>
      </section>

	  <div className="w3-display-bottomleft w3-padding-large">
		Developed by <a href="https://github.com/Pv200" target="_blank">Prakhar Verma</a>
	  </div>
    </div>

  );
}

export default memo(LandingPage);

