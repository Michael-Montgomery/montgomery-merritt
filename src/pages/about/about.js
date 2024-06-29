import Header from '../../components/header/header';
import './about.css';

function About() {
    return (
        <>
            <Header></Header>
            <h2>Who We Are</h2>
            <p>Montgomery-Merritt was founded on the belief that personal and custom software solutions drive real results and genuine engagement. Websites and software
                are part of every facet of our lives. We believe that great Software invokes emotion, thought and ultimately action. We pride ourselves on the ordinary, 
                done extraordinarily. From design to deployment and thereafter, we will be with you every step of the way providing insight, feedback and results you can
                see and feel. Let's build something amazing together!
            </p>
            <h2>What We do</h2>
            <details>
                <summary>UI/UXDesign</summary>
                <p>
                    At Montgomery-Merritt, we can bring your vision to life. We design intuitive web applications with an emphasis on efficiency, functionality, aesthetic excellence. Every pixel. Perfect.
                </p>
            </details>
            <details>
                <summary>Web Development</summary>
                <p>
                    AI integration? We can do that. Building a custom robust platform from scratch? We can do that too. Making your existing application considerably better. Piece of cake. We love writing code and building incredible software solutions.
                </p>
            </details>
            <details>
                <summary>SEO (Search Engine Optimization)</summary>
                <p>
                    Even the coolest website in the world is only effective if it is able reach the right people. We can ensure that your website is amongst the top results when your customers search for what you do. 
                </p>
            </details>
            <details>
                <summary>Marketing</summary>
                <p>
                    Let Montgomery-Merritt help you launch a winning digital campaign. We specialize in the following marketing areas:
                </p>
                <ul>
                    <li>Email</li>
                    <li>Social Media</li>
                </ul>
            </details>
            <details>
                <summary>Consulting</summary>
                <p>
                    Some text here
                </p>
            </details>
        </>
    )
}

export default About;