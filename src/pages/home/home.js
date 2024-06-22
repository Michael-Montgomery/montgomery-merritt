import Header from '../../components/header/header';
import './home.css';
import welcomeBgVid from '../../assets/welcomebackgroundvideo.mp4';
import featuredProjects from '../../data/featuredProjects';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';
import Modal from 'react-modal';
import FeaturedProject from '../../components/featuredProduct/featuredProduct';
import { faXmark } from '@fortawesome/free-solid-svg-icons';


const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };


function Home() {

    // let subtitle;
    const [modalIsOpen, setIsOpen] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);
  
    function openModal() {
      setIsOpen(true);
    }
  
    function afterOpenModal() {
      // references are now sync'd and can be accessed.
    //   subtitle.style.color = '#f00';
    }
  
    function closeModal() {
      setIsOpen(false);
    }

    return (
        <>

            <div id='welcome-video-wrapper'>
                <video autoPlay muted loop id='welcome-background-video'>
                    <source src={welcomeBgVid} type="video/mp4" />
                </video>

                {/* <h2>lorem ipsum text text</h2> */}
            </div>
            <Header></Header>
            <div id='welcome-intro-two'>
                <h2>Montgomery-Merritt</h2>
                <p>
                    We are Montgomery-Merritt, a team of rockstars whose life work is deeply rooted in results and solutions. Results and solutions
                    for who? Well, that's where you come in. You need an ubelievably cool and efficient website or software solution? We've got you. Maybe
                    you need branding or SEO help. Yeah, we do that too. As a team of technical experts and creatives, we specialize in successfully tackling
                    just about anything you can throw at us.
                </p>
            </div>
            <div id='featured-projects-wrapper'>
                <h2>Featured Projects</h2>
                <ul id='featured-projects-list'>
                    {
                        featuredProjects.map((project, idx) => {
                            return (
                                <li key={idx} onClick={() => {
                                    setSelectedIndex(idx);
                                    openModal();
                                }}>
                                    <div className='featured-project-wrapper'>
                                        
                                        <div className='project-thumbnail-wrapper'>
                                            <div className='featured-project-name-wrapper'>
                                            <p className='project-title'>{project.name}</p>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
                {/* <div className='center'><button>View All Projects</button></div> */}
            </div>
            <div id='welcome-contact-wrapper'>
                <ul id='contact-social-icons-list'>
                    <li>
                        <div><a href='http://www.apple.com'><FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon></a></div>
                    </li>
                    <li>
                        <div><a href='http://www.apple.com'><FontAwesomeIcon icon={faXTwitter}></FontAwesomeIcon></a></div>
                    </li>
                    <li>
                        <div><a href='http://www.apple.com'><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></a></div>
                    </li>
                </ul>
                <div id='welcome-contact-text-wrapper'>
                    <h2>We would love to hear from you!</h2>
                    <p><a href='http://www.apple.com'>Hello@montgomery-merritt.com</a></p>
                </div>
            </div>
            <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <button onClick={closeModal} id='contact-modal-close-btn'><FontAwesomeIcon icon={faXmark}></FontAwesomeIcon></button><br></br>
       <FeaturedProject project={featuredProjects[selectedIndex]}></FeaturedProject>
        
      </Modal>
        </>
    )
}

export default Home;