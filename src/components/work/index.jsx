import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

const APP_STORE_STYLE = {
    display: 'inline-block',
    overflow: 'hidden',
    background: 'url(https://linkmaker.itunes.apple.com/assets/shared/badges/en-us/appstore-lrg.svg) no-repeat',
    width: '135px',
    height:'40px',
    backgroundsize: 'contain',
    borderBottom: 'none'
}

class Work extends Component {

    constructor(){
        super();
        this.state = {
            projects: []
        };

        this.fetchProjects = this.fetchProjects.bind(this);
    }

    componentDidMount() {
        const p = this.fetchProjects();
        this.setState({
            projects: p
        })
    }

    fetchProjects() {
        const projects = [
            {
                title: 'Hubtel.me',
                description:'A loyalty app that gives you free rewards, discounts and offers, as you pay for everyday services.',
                technologies: 'Swift, Objective C, Animations, Push Notifications, Fabric, Core Data',
                appstoreLink: "https://itunes.apple.com/us/app/hubtel-me/id1276144206?mt=8",
            },
            {
                title: 'EnRout',
                description:'Enrout is an on-demand dispatch platform that ensures a safe - stress free, time saving and affordable receipt/delivery of parcels.',
                technologies: 'Swift, Objective C, Animations, Firebase, Fabric, Google Maps, ExpressPay',
                appstoreLink: "https://itunes.apple.com/us/app/enrout/id1382730354?mt=8",
            },
            {
                title: 'MTN Pulse',
                description:'Make your Mashup bundles, chat, be social, earn rewards and be more! Choose more or less data and voice in your mashup bundle configurations, you get push notifications on the status and balance of your mashups and you manage your mashup all from within this app..',
                technologies: 'Swift, JavaScript, Push Notifications, .Net Core',
                appstoreLink: "https://itunes.apple.com/gh/app/mtn-pulse/id1263871864?mt=8"
            },
            {
                title: 'S-expression calculator',
                description:'Command line program that acts as a simple calculator: it takes a single argument as an expression and prints out the integer result of evaluating it.',
                technologies: 'Swift, Python',
                appstoreLink: null,
                githubLink: "https://github.com/kwakueshun/S-expression-calculator"
            },
            {
                title: 'Json Response Parse Helper',
                description:'Simple and Clean Library for parsing JSON response data in .Net Core.',
                technologies: 'C# / .NET Core',
                appstoreLink: null,
                githubLink: "https://github.com/kwakueshun/JsonParseHelper"
            }
        ]

        return projects
    }

    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <title>Samuel Eshun | Work</title>
                    <meta name="description" content="Software Developer based in Accra, Ghana."/>
                </Helmet>
                <div className="content animated bounceIn">
                    <p>Here’s an overview of a few of the projects I’ve worked on.</p>
                </div>
                <br/>
                <div>
                    {this.state.projects.map((p) => (
                          <ProjectDetails key={p.title} title={p.title} description={p.description} technologies={p.technologies} appstoreLink={p.appstoreLink}
                          githubLink={p.githubLink}/>
                    ))}
                </div>
            </React.Fragment>
        )
    }
}


function ProjectDetails(props) {
    const _style = {color: "#0185BD"}
    return (
        <div className="content">
            <h3 style={_style}>{props.title}</h3>
            <p>{props.description}</p>
            <br/>
            <h6 style={_style}>Technologies</h6>
            <p>{props.technologies}</p>
            <br/>
            { props.appstoreLink &&
                <a href={`${props.appstoreLink}`}  style={APP_STORE_STYLE}  target="_blank"></a>
            }
            { props. githubLink &&
               <p><a href={`${props.githubLink}`} target="_blank">View source on GitHub</a></p>
            }
            <hr style={ {borderTop: 'dotted 1px'} } />
        </div>
    )
}

export default Work;