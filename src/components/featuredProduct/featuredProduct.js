import './featuredProduct.css';

function FeaturedProject(props) {
    return (
        <div id='featured-project-modal-wrapper'>
        <h2>{props.project.name}</h2>
        <div className='center'>
        <div id='featured-project-modal-picture-wrapper' style={{backgroundImage: `url(${props.project.thumbnailImgUrl})`}}></div>
        </div>
        <p>{props.project.description}</p><br></br>
        <button onClick={() => {window.location.href = props.project.link}}>View {props.project.name}</button>
    </div>
    )
}

export default FeaturedProject