import React from 'react';
import Process from './Ourprocess';
import { useLocation } from 'react-router-dom'
import { ServiceDropdown } from '../../Layouts/Dropdowndata'

const ServiceDAta = (props) => {
    return (
        <>
            <div className="col-12">
                <div className="custome-container-with-sidebar d-flex flex-column-reverse flex-lg-row">
                    <div className="container-width-80">
                        <div className="default-text-content" key={props.id}>
                            <div className="default-content-hero-image">
                                <img className="img-fluid" src={props.Serviceimg} alt="" />
                            </div>
                            <h2 className="subtitle">{props.mainhding}</h2>
                            <p>{props.pagepara}</p>
                            <p><strong>  {props.subtitle} </strong></p>
                            <p> {props.Spara} </p>
                            <p> {props.Spara2} </p>
                            <ul>
                                <li> {props.firstli} </li>
                                <li> {props.secondli} </li>
                                <li> {props.thirdli} </li>
                            </ul>
                            <ul className="default-iconic-item">
                                <Process />
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

const Servicebox = () => {
    const location = useLocation();

    let ServiceDetailData = ServiceDropdown.find((item, i) => (item.path === `/${location.pathname.split("/")[2]}`))

    return (
        <ServiceDAta
            key={ServiceDetailData.id}
            id={ServiceDetailData.id}
            Serviceimg={ServiceDetailData.Serviceimg}
            mainhding={ServiceDetailData.mainhding}
            pagepara={ServiceDetailData.pagepara}
            subtitle={ServiceDetailData.subtitle}
            Spara={ServiceDetailData.Spara}
            Spara2={ServiceDetailData.Spara2}
            firstli={ServiceDetailData.firstli}
            thirdli={ServiceDetailData.thirdli}
        />
    )
}


function Serdetails() {
    //const location = useLocation();
    //let props = (location.state);
    return (
        <>
            <div className="service-details-section section-top-gap-150">
                <div className="box-wrapper">
                    <div className="service-details-wrapper">
                        <div className="container">
                            <div className="row justify-content-center">
                                <Servicebox />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Serdetails;