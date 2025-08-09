import React from 'react';


export const Welcome = () => {

  

  return (
    <div className="welcome" >
      
        <h1>Welcome to WeBlog</h1>
        <p>CREATE . LIKE . SHARE</p>
        <p className="secp">Login in to create & read posts.....</p>        
          <div className="picture">
          <div className="box"><img src="/images/pic1.jpg" alt="" height="250px" width="300px"/></div>
          <div className="box"><img src="/images/pic2.jpg" alt="" height="250px" width="300px"/></div>
          <div className="box"><img src="/images/pic3.jpg" alt="" height="250px" width="300px"/></div>

    </div>

        <div className="about">
          <h1>About Us</h1>
          <div className="about-box">
            <div className="text"><p>Welcome to-WeBlog-your go-to-space for sharing
              ,discovering and engaging with thought-provoking blog posts on everything
              trending across social media.<br></br><br></br>
              We believe in the power of stories,opinions, and ideas.Whether it's about 
              lifestyle,tech,fashion,current events ,or culture-this is where ideas and
              thoughts meet and spark together.</p>
            </div>
            <div>
              <img src="/images/pic6.jpg" alt="" height="300px" width="300px"/></div>
            </div> 
          </div>
          <div className="about-box">
            
            <div className="text"><p>At WeBlog, we aim to:<ul>
               <li>Give creators and writers a platform to express freely</li> 
               <li>Help readers stay updated with what's buzzing online</li>
               <li>Encourage healthy dialogue and diverse perspectives</li></ul>
               Whether you're here to write, read, or just explore — you’re part of a
                growing digital community that values authenticity and creativity.
               Join us in making the digital space more connected, expressive, and fun!</p>
            </div>
            <div>
              <img src="/images/pic8.jpg" alt="" height="350px" width="350px"/></div>
            </div>
          </div>
          
          
             
  );
};

