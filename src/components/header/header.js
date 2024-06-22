import { Link, NavLink } from 'react-router-dom';
import './header.css';
import Modal from 'react-modal';
import { useState } from 'react';
import ContactForm from '../contactform/contactform';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

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

    return(
        <>
        <header>
            <nav>
                <Link><p>M<span className='merritt-span'>M</span></p></Link>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>Who We Are</NavLink>
                {/* <NavLink to='/about'>What We Do</NavLink> */}
                {/* <NavLink to='/about'>Link</NavLink> */}
                <button onClick={openModal}>Contact</button>
            </nav>
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