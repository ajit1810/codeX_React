import img1 from "../assets/images/img-1.jpg";
import img2 from "../assets/images/img-2.jpg";
import img3 from "../assets/images/img-3.jpg";

import "../assets/style/Testimonials.css";
function Testimonials() {
  return (
    <div className="testimonials-text">
      <p>TESTIMONIAL</p>
      <h1>What Client Say's</h1>
      <div className="testimonials-row">
        <div className="testimonials-column">
          <div className="user">
            <img src={img1}></img>
            <div className="user-info">
              <h4>
                KEN NORMAN <i class="fab fa-twitter"></i>
              </h4>
              <small>@kennorman</small>
            </div>
          </div>
          <p>
            
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            totam, ut, error blanditiis reprehenderit adipisci voluptatum,
            ducimus fuga quae consequatur sit! Eaque voluptates explicabo, nulla
            ut eius dignissimos possimus libero labore quo, necessitatibus
            totam.
          </p>
        </div>

        <div className="testimonials-column">
          <div className="user">
            <img src={img2}></img>
            <div className="user-info">
              <h4>
              ALIS MARTIN <i class="fab fa-twitter"></i>
              </h4>
              <small>@alismartin</small>
            </div>
          </div>
          <p>
            
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            totam, ut, error blanditiis reprehenderit adipisci voluptatum,
            ducimus fuga quae consequatur sit! Eaque voluptates explicabo
          </p>
        </div>

        <div className="testimonials-column">
          <div className="user">
            <img src={img3}></img>
            <div className="user-info">
              <h4>
              JACK SPARROW  <i class="fab fa-twitter"></i>
              </h4>
              <small>@jacksparrow</small>
            </div>
          </div>
          <p>
            
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            totam, ut, error blanditiis reprehenderit adipisci voluptatum,
            ducimus fuga quae consequatur sit! Eaque voluptates explicabo, nulla
            ut eius dignissimos possimus libero labore quo, necessitatibus
            totam.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
