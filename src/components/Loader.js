import React from 'react';
import './Loader.css';
import loaderWos from '../images/loader/loaderWos.svg'
import loaderWs from '../images/loader/loaderWs.svg'

const Loader = () => {
    return (

        <div className="Loaderbg">
<div className="Loaderimg">
<img src={loaderWos}  alt='tekst'/>
<img src={loaderWs}  alt='tekst2'/>
</div>
            </div>
      );
}
 
export default Loader;