import React, {useState} from 'react';
import './gallery.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faCircleChevronLeft,
    faCircleChevronRight,
    faCircleXmark
} from '@fortawesome/free-solid-svg-icons';
import { LazyLoadImage, trackWindowScroll } from 'react-lazy-load-image-component';






const Gallery = (scrollPosition) => {

    const galleryImages=[

        {img:require('../../images/galleryPage/0 (1).JPG')},
        {img:require('../../images/galleryPage/0 (2).JPG')},
        {img:require('../../images/galleryPage/0 (3).JPG')},
        {img:require('../../images/galleryPage/0 (4).JPG')},
        {img:require('../../images/galleryPage/0 (5).JPG')},
        {img:require('../../images/galleryPage/0 (6).JPG')},
        {img:require('../../images/galleryPage/0 (7).JPG')},
        {img:require('../../images/galleryPage/0 (8).JPG')},
        {img:require('../../images/galleryPage/0 (9).JPG')},
        {img:require('../../images/galleryPage/0 (10).JPG')},
        {img:require('../../images/galleryPage/0 (11).JPG')},
        {img:require('../../images/galleryPage/0 (12).JPG')},
        {img:require('../../images/galleryPage/0 (13).JPG')},
        {img:require('../../images/galleryPage/0 (14).JPG')},
        {img:require('../../images/galleryPage/0 (15).JPG')},
        {img:require('../../images/galleryPage/0 (16).JPG')},
        {img:require('../../images/galleryPage/0 (17).JPG')},
        {img:require('../../images/galleryPage/0 (18).JPG')},
        {img:require('../../images/galleryPage/0 (19).JPG')},
        {img:require('../../images/galleryPage/0 (20).JPG')},
        {img:require('../../images/galleryPage/0 (21).JPG')},
        {img:require('../../images/galleryPage/0 (22).JPG')},
        {img:require('../../images/galleryPage/0 (23).JPG')},
        {img:require('../../images/galleryPage/0 (24).JPG')},

        ]

        
        const [slideNumber, setSlideNumber]=useState(0);
        const [openModal, setOpenModal]=useState(false);
        const handleOpenModal=(index)=>{
setSlideNumber(index)
setOpenModal(true)

        }
        const handleCloseModal=()=>{
setOpenModal(false);

        }
    const prevSlide=()=>{
slideNumber===0
?setSlideNumber(galleryImages.length-1)
:setSlideNumber(slideNumber-1)
            
        }
        const nextSlide=()=>{
slideNumber+1===galleryImages.length?setSlideNumber(0):setSlideNumber(slideNumber+1)
            
        }
    
    return ( 
        <div>

            {openModal&&
            <div className='sliderWrap'>
<FontAwesomeIcon icon={faCircleXmark} className='btnClose' onClick={handleCloseModal}/>
<FontAwesomeIcon icon={faCircleChevronLeft} className='btnPrev' onClick={prevSlide}/>
<FontAwesomeIcon icon={faCircleChevronRight} className='btnNext' onClick={nextSlide}/>

<div className='fullScreenImage'>

    <img src={galleryImages[slideNumber].img}/> 
</div>
 
 

            </div>
            }
          
<div className='galleryWrap'>

{galleryImages&&galleryImages.map((slide, index) =>{
return(
<div 
className= {(index%1===0)?" single dwa":" single jeden"}
 key={index}
 onClick={()=>handleOpenModal(index)}
>
{/*<img src={slide.img} alt='' loading="lazy"/>*/}

<LazyLoadImage  
           
            src={slide.img} />

    </div>

)

})}


</div>
</div>
     );
}
 
export default Gallery;