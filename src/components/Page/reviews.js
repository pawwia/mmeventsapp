import React, {useState, useEffect} from 'react';
import './reviews.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
const reqURL='http://localhost/db/getreviews.php';
const getreviews=async(url)=>{
    const resp=await fetch(url,{
    headers:{
      'Content-Type': 'application/json'
    
    }  
    
        });
     
    
    
        const json = await resp.json();
        return json;
    }

const Reviews = () => {
    const [reviews,setReviews]=useState(null);
    useEffect(()=>{
        const allreviews=getreviews(reqURL);
        if (allreviews)
        {

            allreviews.then( function(result) {
setReviews(result)
console.log(result);

            })

        }


       



    },[])
  
        

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: {}
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
      

        
      
      

    return ( 
<div className='Reviews'>
    <h2> Co o nas mówią nasi klienci?</h2>
    {reviews?
    <div>

<Carousel responsive={responsive}>

{reviews.map((oneRev)=>
<div className='reviewName'>

<div className='reviewText'>{oneRev.review}</div>
<div className='reviewText'> opinia od {oneRev.name}</div>
<div className='reviewText'>Ocena {oneRev.rate}/ 5 </div>
<div className='reviewText'> {oneRev.date} </div>


</div>
)}


    
 
</Carousel>
</div>:null}
</div>


    );
}
 
export default Reviews;