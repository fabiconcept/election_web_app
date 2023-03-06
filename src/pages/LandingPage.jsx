import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="landingPage">
        <div className="hero-section">
            <section>
                <div className="large-text">
                    <div>The Future is in your Hands, vote wisely</div>
                </div>
                <div className="p">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam.</div>

                <div className="btnxs">
                    <Link to={'/overview'} className="btnx">See Results</Link>
                </div>
            </section>
            <section>
                <div className="photo-grid">
                    <div className="line">
                        <div className="img"><img src="https://interview.sirv.com/photos/candidates/atiku.png" alt="" /></div>
                        <div className="img"><img src="https://interview.sirv.com/photos/candidates/tinubu.png" alt="" /></div>
                    </div>
                    <div className="line">
                        <div className="img"><img src="https://interview.sirv.com/photos/candidates/lady.png" alt="" /></div>
                        <div className="img"><img src="https://interview.sirv.com/photos/candidates/obi.png" alt="" /></div>
                    </div>
                    <div className="line">
                        <div className="img"><img src="https://interview.sirv.com/photos/candidates/firstlady.png" alt="" /></div>
                        <div className="img"><img src="https://interview.sirv.com/photos/candidates/kwankwaso.png" alt="" /></div>
                    </div>
                </div>
            </section>
        </div>
        <div className="mission">
            <div className="title">Our Mission</div>
            <div className="p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis dignissimos dolore cupiditate a id, reiciendis eaque? Aliquam, rem!</div>
            <div className="goal">
                <span className='active'>Goal N<sup>o</sup>1</span>
                <div className="line active"></div>
                <span>Goal N<sup>o</sup>2</span>
                <div className="line"></div>
                <span>Goal N<sup>o</sup>3</span>
            </div>
            <div className="goal-card">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui vero et rem adipisci eius fuga, nobis impedit voluptates asperiores quia!
            </div>
        </div>

        <div className="second-act">
            <div className="cover-div">
                <div className="img"><img src="https://interview.sirv.com/photos/ayoola-salako-CpHjfcAbNy0-unsplash.jpg" alt="" /></div>
                <div className="hover-text">
                    <span>
                        Vote wisely <br /> You are the future!    
                    </span>
                </div>
            </div>
        </div>

        <div className="contact-us">
            <div className="text">
                <div className="title">Contact Us</div>
                <div className="p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, cumque quasi. Nulla excepturi commodi veniam similique quaerat blanditiis laboriosam autem reprehenderit labore rerum accusamus, libero, vel eos deleniti repellat. Magnam. Kiloie.</div>
                <div className="p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis corporis quas necessitatibus aspernatur, eaque mollitia! Iure non atque a iusto nesciunt voluptatibus voluptas modi, error eum officia. Error, aperiam adipisci.</div>
            </div>
            <div className="form">
                <input type="text" name="" placeholder='Name' id="" className="inp" />
                <input type="text" name="" placeholder='Email' id="" className="inp" />
                <textarea cols="30" rows="8" className='inp' placeholder='Text' />
            </div>
            <div className="ico">
                <div className="img">
                    <img src="https://interview.sirv.com/photos/d0bf97c2-ded6-4394-9fce-ef1eea1f987d.png" alt="" />
                </div>
            </div>
        </div>
      </div>
  )
}

export default LandingPage;