import React, { useContext} from 'react'
import { generalContext } from '../App';
import CarouselCard from './mini elements/CarouselCard'

const Carousel = () => {
  const { ward_data, polling_unit_data, states_data, lga_data, } = useContext(generalContext);

  return (
    <div className="carousel">
        <CarouselCard link={"/statistics/poll"} name={'Units'} value={polling_unit_data?.length}/>
        <CarouselCard link={"/statistics/poll"} name={'Wards'} value={ward_data?.length}/>
        <CarouselCard link={"/statistics/lga"} name={"LGAs"} value={lga_data?.length}/>
        <CarouselCard link={"/statistics/lga"} name={'states'} value={states_data?.length}/>
    </div>
  )
}

export default Carousel