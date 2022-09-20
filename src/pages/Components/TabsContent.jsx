import React, { useState } from 'react';
import { TabsData } from './Tabs';
import CustomModal from './Modal';
import { useLocation } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import PortfolioItem from './PortfolioItem';

const TabsContent = () => {
   
    // Tabs State
    const [items, setItems] = useState(TabsData);
    const location = useLocation();
    let props = (location.state);

    const filteritem = (cateItem) => {
        const updatedItems = TabsData.filter((curElem) => {
            return curElem.category === cateItem;
        });

        setItems(updatedItems);
    }

    return (
        <>
            <div className="project-section section-top-gap-150">
                <div className="box-wrapper">
                    <div className="project-filter-wrapper section-fluid-170">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="projects-gallery-filter-nav">
                                        <button className="btn active" onClick={() => setItems(TabsData)}>All</button>
                                        <button className="btn" onClick={() => filteritem('Logo')} >Logo</button>
                                        <button className="btn" onClick={() => filteritem('App')}>Mobile Apps</button>
                                        <button className="btn" onClick={() => filteritem('Social')}>Social Media</button>
                                        <button className="btn" onClick={() => filteritem('Web')}>Website</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="project-item-wrapper">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="project-items mb-n25">
                                        <div className="row">
                                            {
                                                items.map((elem) => {
                                                    const { id, tabImage, tabLinks,modalhding, modalpara} = elem;
                                                    return (
                                                      <PortfolioItem id={id} tabImage={tabImage} tabLinks={tabLinks} modalhding={modalhding} modalpara={modalpara} />
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
        </>
    )
}

export default TabsContent;