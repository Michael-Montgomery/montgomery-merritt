import { Link, NavLink } from 'react-router-dom';
import './header.css';
import Modal from 'react-modal';
import { useState } from 'react';
import ContactForm from '../contactform/contactform';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faClose, faXmark } from '@fortawesome/free-solid-svg-icons';

// styles for modal
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

function Header() {

    // let subtitle;
    const [modalIsOpen, setIsOpen] = useState(false);
    const [responsiveMenuExpanded, setResponsiveMenuExpanded] = useState(false)
  
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

    const handleResponsiveMenuClick = () => {
      setResponsiveMenuExpanded(!responsiveMenuExpanded)
    }

    return(
        <>
        <header style={{height: responsiveMenuExpanded ? '300px' : '75px'}}>
            <nav>
                <Link to='/'><img alt='logo' src='https://i.postimg.cc/Vk7qmtDw/logo.png' id='header-logo'></img></Link>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>Who We Are</NavLink>
                {/* <NavLink to='/about'>What We Do</NavLink> */}
                {/* <NavLink to='/about'>Link</NavLink> */}
                <button onClick={openModal} id='header-contact-btn'>Contact</button>
                {
                  responsiveMenuExpanded ? <button className='responsive-open-btn' onClick={handleResponsiveMenuClick}><FontAwesomeIcon icon={faClose}></FontAwesomeIcon></button> : <button className='responsive-open-btn' onClick={handleResponsiveMenuClick}><FontAwesomeIcon icon={faBars}></FontAwesomeIcon></button>
                }
            </nav>
            {
              responsiveMenuExpanded ? <div id='responsive-list-wrapper'>
                <ul id='responsive-list'>
                  <li>
                    <Link to='/'>Home</Link>
                  </li>
                  <li>
                    <Link to='/about'>Who We Are</Link>
                  </li>
                  <li>
                    <button onClick={openModal}>Contact</button>
                  </li>
                </ul>
              </div> : <></>
            }
        </header>
        <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        
        <button onClick={closeModal} id='contact-modal-close-btn'><FontAwesomeIcon icon={faXmark}></FontAwesomeIcon></button><br></br>
       <ContactForm></ContactForm>
      </Modal>
        </>
    )
}

export default Header;