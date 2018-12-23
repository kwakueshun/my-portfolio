import React, { Component } from 'react';
import { Helmet } from 'react-helmet';


class About extends Component {

    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <title>Samuel Eshun | About</title>
                    <meta name="description" content="Software Developer based in Accra, Ghana."/>
                </Helmet>
                <AboutDetails />
                <br/>
                <TechStack />
                <br/>
               < RandomFacts />
               <br/>
            </React.Fragment>
        )
    }
}


function AboutDetails() {
    return (
        <div className="content animated bounceIn">
            <p><span role="img">👋🏻</span> Hi, I’m Sam.</p>
            <p>
                <span role="img">🇬🇭 </span>Software Developer living in Accra, Ghana
            </p>
            <p>📱When I’m not developing iOS apps, I build web and console apps for fun. I am passionate about soccer, music and programming(duh!!).</p>
            <p>🖥️ Currently I am available for freelance work, but I'd also love to get a drink and get to know you, so don’t hesitate to get in touch.</p>
            <p><i className="icon-link fab fa-github fa-lg"></i> My github page can be found <a href="https://github.com/kwakueshun" target="_blank">here</a></p><br></br>
        </div>
    )
}


function TechStack() {
    var _style = { color: "#0185BD" }
    return (
        <div class="content">
        <h4 style={_style }>Tech Stack</h4>
        <ul id="stack">
               <li> Objective-C &amp; Swift : iOS applications </li>
               <li>Python: Django &amp; Automating the boring stuff</li>
               <li>JavaScript : React</li>
               <li>PostgreSQL</li>
			</ul>
        </div>
    )
}

function RandomFacts() {
    var _style = { color: "#0185BD" }
    return (
        <div class="content">
        <h4 style={_style}>Random Facts</h4>
            <ul id="stack">
                <li>I am such a great fan of Swift &amp; Python</li>
                <li>These days I spend most of my after-work time on multiple slack channels including <a href="http://slack.devcongress.org/" target="_blank">DevCongress</a>, <a href="http://ios-developers.slack.com" target="_blank">iOS Developers</a>, &amp; <a href="http://pythondev.slack.com" target="_blank">Python Developers</a>
                </li>
            </ul>
        </div>
    )
}

export default About;