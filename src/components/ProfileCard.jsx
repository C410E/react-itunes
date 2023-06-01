import { Component } from "react";
import PropTypes from "prop-types";
import "../styles/profile.css"

class CardProfile extends Component {
    render () {
        const { name, email, image, description } = this.props
        return(
            <div className="infos-user">
            <h1 className="name-user">{name || 'seu nome'}</h1>
            <p className="email-user">{ email || 'email@email.com'}</p>
            <img className="profile-image" width="200" alt="profile" src={ image || 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngwing.com%2Fen%2Fsearch%3Fq%3Dprofile&psig=AOvVaw3un6CBmLfmJa9BOFNe2iGb&ust=1685479529157000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCPD1utaym_8CFQAAAAAdAAAAABAE' } />
            <div className="description-box">
              <p className="description-user">{description || <p>descrição</p>}</p>
            </div>
          </div>
        )
    }
}

CardProfile.propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  };

export default CardProfile;

