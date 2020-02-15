import React from 'react';
import icon from '../../assets/images/images.svg';
import imagem1 from '../../assets/images/100anos.jpg';
import imagem2 from '../../assets/images/timesete.png';
import imagem3 from '../../assets/images/sennin.jpeg';
import imagem4 from '../../assets/images/familia.jpg';
import imagem5 from '../../assets/images/narutovspain.jpg';
import imagem6 from '../../assets/images/narutovssasuke.png';

const WidgetImages = () => {
    return (
        <div className="widget images">
          <strong><img src={icon} alt="Images"/>266 Photos and videos</strong>
      
          <ul>
              <li><img src={imagem1} alt=""/></li>
              <li><img src={imagem2} alt=""/></li>
              <li><img src={imagem3} alt=""/></li>
              <li><img src={imagem4} alt=""/></li>
              <li><img src={imagem5} alt=""/></li>
              <li><img src={imagem6} alt=""/></li>
            </ul>
        </div>
    );
}

export default WidgetImages;