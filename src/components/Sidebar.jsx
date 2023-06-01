import { Component } from "react";
import "../styles/Sidebar.css";
import { Link } from "react-router-dom";
import { UilSearch,
    UilMultiply,
    UilBars,
    UilUser,
    UilFavorite } from "@iconscout/react-unicons";
import { getUser } from "../services/UserApi";


const menuItems = [
    {
        path: "/search",
        name: "Search",
        icon: <UilSearch className="icon" />,
    },
    {
        path: "/profile",
        name: "Profile",
        icon: <UilUser className="icon" />,  
    },
    {
        path: "/favorites",
        name: "Favorites",
        icon: <UilFavorite className="icon" />,
    }
];

const SMALL_SIZE_WINDOW = 992

class Sidebar extends Component {
    constructor() {
        super() 

        this.state = {
            user: "",
            image: "",
            showingMenu: false,
        };

        this.toggleMenu = this.toggleMenu.bind(this);
    }

    componentDidMount() {
        this.getUserName()
    }

    async  getUserName() {
        const user = await getUser()

        this.setState({ user: user.name, image: user.image }); 
    }

    toggleMenu() {
        if (window.innerWidth < SMALL_SIZE_WINDOW) {
         const { showingMenu } = this.state
         if (showingMenu) {
            this.setState({ showingMenu: false});
         }else {
            this.setState({ showingMenu: true });
         }
        }
    } 

    render() {
        const { user, image, showingMenu } = this.state
        return(
            <div className="menus">
            <h1 className="logo-title-sidebar">
                <span className="span">React</span>
                <span className="span1">Tunes</span>
            </h1>
            <section className="nav-menu-and-user-info">
               <UilMultiply 
                size={50}
                className="toggle-close-menu"
                style={ { display: showingMenu ? 'block' : 'none' } }
                onClick={this.toggleMenu}
               />
               <UilBars 
                size={50}
                className="toggle-menu"
                style={ { display: showingMenu ? 'none' : 'block' } }
                onClick={ this.toggleMenu }
               />
               <div  className="userimage-username">
               <img
              className="nav-user-profile-image"
              width="60px"
              src={ image || 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngwing.com%2Fen%2Fsearch%3Fq%3Dprofile&psig=AOvVaw3un6CBmLfmJa9BOFNe2iGb&ust=1685479529157000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCPD1utaym_8CFQAAAAAdAAAAABAE' }
              alt="profile"
               />
               <p className="">{user || "..." }</p>
               </div>
            </section>
            <nav className={ showingMenu ? 'sidebar showing' : 'sidebar' }>

            <section
            className="links"
            style={ { display: showingMenu ? 'block' : 'none' } }
              >
            {
              menuItems.map((item, index) => (
                <section className="section-with-links" key={ index }>
                  <Link className="link" to={ item.path } onClick={ this.toggleMenu }>
                    {item.icon}
                    <p className="link-text">{item.name}</p>
                  </Link>
                </section>
              ))
            }
            </section>
            </nav>
            </div>
        )
    };
};

export default Sidebar;