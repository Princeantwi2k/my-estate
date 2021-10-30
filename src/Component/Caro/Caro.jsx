import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import img from "../../images/pic1.jpg";
import img1 from "../../images/pic2.jpg";
import img2 from "../../images/pic3.jpg";
import img3 from "../../images/image2.jpg";
import img4 from "../../images/image1.jpg";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import img5 from "../../images/b.jpg";
import img6 from "../../images/re.jpg";
import img7 from "../../images/kfj.jpg";
import img8 from "../../images/po.jpg";
import img9 from "../../images/j.jpg";
import "./Caro.css";

class Caro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      contact: "",
      email: "",
      message: "",
    };
  }

  handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.NewUser(this.state);
    this.setState({
      name: "",
      email: "",
      contact: "",
      message: "",
    });
  };
  render() {
    return (
      <>
        <div className=".container">
          <div className="row">
            <div className="col-md-8 ">
              <Carousel className="cal">
                <h5 className="prep">
                  Lifestyle Estate East Legon Hill, Katamanso, Near Police Land
                  Accra, Ghana / Developer: Swami India
                </h5>
                <Carousel.Item interval={1000}>
                  <img
                    className="d-block w-100"
                    src={img}
                    alt="First slide"
                    className="caro"
                  />
                  <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>
                      Nulla vitae elit libero, a pharetra augue mollis interdum.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                  <img
                    className="d-block w-100"
                    src={img1}
                    alt="Second slide"
                    className="caro"
                  />
                  <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={img2}
                    alt="Third slide"
                    className="caro"
                  />
                  <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                      Praesent commodo cursus magna, vel scelerisque nisl
                      consectetur.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={img3}
                    alt="Third slide"
                    className="caro"
                  />
                  <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                      Praesent commodo cursus magna, vel scelerisque nisl
                      consectetur.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={img4}
                    alt="Third slide"
                    className="caro"
                  />
                  <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                      Praesent commodo cursus magna, vel scelerisque nisl
                      consectetur.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>

              <h5 className="title">Property Details</h5>
              <p className="p">
                Paradise Estate is a gated community housing project comprising
                of 50,214 square meters (12.41acres) land located within East
                Legon Hills, Near the police land. It has 3 different Executive
                models Storey houses which are 4 Bedrooms (Type A), 3 Bedrooms
                (Type B) and 3 Bedrooms (Type D). Below are the descriptions of
                the Houses:
              </p>
              <p className="p">
                Paradise Estate is a gated community within a serene environment
                with amenities such;
              </p>
              <ol>
                <li>Multi- purpose club house</li>
                <li>Multi-purpose Restaurant/Bar/Café</li>
                <li>Swimming pool</li>
                <li> Gymnasium/Saloon/Spa</li>
                <li>Jogging Truck</li>
                <li>Community Park with Garden sit out</li>
                <li>Tennis/Basketball Courts/Kid Play Area</li>
                <li>24/7 security/CCTV System</li>
                <li>Fish Pond/Artificial lake</li>
              </ol>
              <h5 className="title">type A</h5>
              <ol>
                <li>1. 4 Bedroom Price: $289,500 </li>
                <li>2. Beautiful en-suite bedrooms </li>
                <li>3. Spacious Living Room & a Dining Area</li>
                <li>4. Stunning Kitchen with fitted cabinets</li>
                <li>5. All Rooms with Air-conditioners </li>
                <li>6. Store Room</li>
                <li>7. Instant water heater in all rooms.</li>
                <li>8. Guest Wash Room</li>
                <li>9. A Balcony</li>
                <li>10.Water Reservoir & Electric Bump Machine</li>
                <li>11. Land Size: 450sqm & Built area is 290sqm </li>
              </ol>
              <h5 className="title">type B</h5>
              <ol>
                <li>1. 3 Bedroom Price: $210,000</li>
                <li>2. Beautiful en-suite bedrooms </li>
                <li>3. Spacious Living Room & a Dining Area</li>
                <li>4. Stunning Kitchen with fitted cabinets</li>
                <li>5. All Rooms with Air-conditioners </li>
                <li>6. Store Room</li>
                <li>7. Instant water heater in all rooms</li>
                <li>8. Guest Wash Room</li>
                <li>9. A Balcony & Terrace</li>
                <li>10.Water Reservoir & Electric Bump Machine</li>
                <li>11. Land Size: 300sqm & Built area is 230sqm</li>
              </ol>
              <h5 className="title">type C</h5>
              <ol>
                <li>1. 3 Bedroom Price: $160,000</li>
                <li>2. Beautiful en-suit Bedrooms</li>
                <li>3. Spacious Living Room & a Dining Area</li>
                <li>4. Stunning Kitchen with fitted cabinets</li>
                <li>5. All Rooms with Air-conditioners </li>
                <li>6. Store Room</li>
                <li>7. Instant water heater in all rooms.</li>
                <li>8. Guest Wash Room</li>
                <li>9. 2 Balconies</li>
                <li>10.Water Reservoir & Electric Bump Machine</li>
                <li>11. Land Size: 235sqm & Built area is148sqm</li>
              </ol>
              <h5 className="title">Flexible Payment Terms</h5>
              <ol>
                <li>10% Booking Deposit.</li>
                <li>20% within 30days from booking date.</li>
                <li>70% within 12-16months from date of booking deposit</li>
              </ol>
              <h5 className="titles"> Amenities await your presence</h5>
              <ol>
                <li>Peaceful and pollution free environment</li>
                <li>Community park with garden sit outs and jogging track</li>
                <li>Club house – Restaurant, Pool and gymnasium</li>
                <li>Tennnis court/volleyball court</li>
                <li>Lease land with flexible payments plans</li>
                <li>Internal paved roads with street lights</li>
                <li>Magnificient entrance with security cabin</li>
                <li>Ample parking and plantation</li>
                <li>Rain water harvesting</li>
                <li>Estate management – trash collection and many more</li>
              </ol>
              <h5 className="titles"> Objectives of the Project </h5>
              <ol>
                <li>to provide better housing to the consumers</li>
                <li>
                  to improve the housing sector and modernize standards in the
                  Ghana
                </li>
                <li>to promote real estate development in Ghana</li>
                <li>
                  to enable middle and high income groups of customer by
                  providing long term payment plan
                </li>
                <li>
                  to enable middle and high income groups of customer by
                  providing long term payment plan
                </li>
                <li>
                  to encourage the tourists for investing in housing in the
                  Ghana
                </li>
                <li>to cater for the real needs of a growing population</li>
                <li>to set standards and improve our environment</li>
                <li>
                  offer a wide portfolio of international quality products that
                  cater to different markets and segments
                </li>
                <li>
                  take customer relationships and customer satisfaction to new
                  levels
                </li>
                <li>to focus on strategic growths</li>
              </ol>
              <p className="page">
                {" "}
                <span style={{ fontWeight: `bolder` }}>Listing Number:</span>-
                9906
              </p>
              <p className="page">
                <span style={{ fontWeight: `bolder` }}>Call us </span> - (+233)
                550300103(whatsApp) / +233572211378 / +233579781446 /
                +233206704123{" "}
              </p>
              <p className="page">
                {" "}
                <span style={{ fontWeight: `bolder` }}>Price:</span>- 160000
              </p>
              <p className="page">
                {" "}
                <span style={{ fontWeight: `bolder` }}>Area:</span>- East Legon
                Hill
              </p>
              <p className="page">
                {" "}
                <span style={{ fontWeight: `bolder` }}>Status:</span>- Prices
                from
              </p>
              <div className="iframe">
                <h5 className="titles"> Development Video </h5>
                <iframe
                  width="700"
                  height="315"
                  src="https://www.youtube.com/embed/3mr2nSUqckM"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>

            <div className="col-md-4 ">
              <form className="class-form" onSubmit={this.handleSubmit}>
                <h4 className="social">SHARE ON SOCIAL MEDIA</h4>
                <FaFacebook
                  style={{ color: "blue", fontSize: "50px", padding: `10px` }}
                />{" "}
                <FaTwitter
                  style={{
                    color: "lightblue",
                    fontSize: "50px",
                    padding: `10px`,
                  }}
                />
                <FaInstagram
                  style={{ color: "red", fontSize: "50px", padding: `10px` }}
                />
                <FaLinkedinIn
                  style={{ color: "blue", fontSize: "50px", padding: `10px` }}
                />
                <h5 className="social">GET IN TOUCH WITH US</h5>
                Name: <br />
                <input
                  className="form_input"
                  name="name"
                  type="text"
                  value={this.state.name}
                  onChange={this.handleChange}
                  placeholder={this.props.name}
                  required
                />
                <br />
                Email: <br />
                <input
                  className="form_input"
                  name="email"
                  type="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                  placeholder={this.props.email}
                  required
                />
                <br />
                Contact: <br />
                <input
                  className="form_input"
                  type="number"
                  name="contact"
                  value={this.state.contact}
                  onChange={this.handleChange}
                  required
                />
                <br />
                Message: <br />
                <input
                  className="form_inputs"
                  name="message"
                  type="text"
                  value={this.state.message}
                  onChange={this.handleChange}
                  placeholder={this.props.massage}
                  required
                />
                <br />
                <input className="form_button" type="submit" value="Submit" />
              </form>
              <div className="contact">
                <p>
                  <span style={{ fontWeight: `bolder` }}>Call us </span> -
                  (+233) 550300103(whatsApp) / +233572211378 / +233579781446 /
                  +233206704123{" "}
                </p>
              </div>
              <img src={img5} alt="pic" className="picture" />
              <img src={img6} alt="pic" className="picture" />
              <img src={img7} alt="pic" className="picture" />
              <img src={img8} alt="pic" className="picture" />
              <img src={img9} alt="pic" className="picture" />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Caro;
