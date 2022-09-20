import React from 'react';
import Newsletter from './Components/Newsletter';
import Banner from './Components/Banner';
import Serdetails from './Components/Serdetails';

function Servicedetail({id, Serviceimg, mainhding, pagepara, subtitle, Spara, Spara2, firstli, secondli, thirdli}) {
  return (
    <>
      <Banner home={"Home"} title={"Services"} liItem={"Serices"} />

      <Serdetails id={id} 

      Serviceimg={Serviceimg}

      mainhding={mainhding} 

      pagepara={pagepara} 

      subtitle={subtitle} 

      Spara={Spara} 

      Spara2={Spara2} 

      firstli={firstli} 

      secondli={secondli} 

      thirdli={thirdli}
      
      />

      <Newsletter />
    </>
  )
}
export default Servicedetail;
