import React from 'react';

const Processdata = ({ id, processimg, Processphding, Processpara }) => {
    return (
        <>
            <li >
                <div className="icon" >
                    <img src={processimg} alt="" />
                </div>
                <div className="content">
                    <h4 className="smalltitle"> {Processphding} </h4>
                    <p> {Processpara} </p>
                </div>
            </li>
        </>
    )
}

function Process() {
    const OurProcess = [
        {
            id: "1",
            processimg: "/assets/images/icons/promo/sericon-1.png",
            Processphding: "Consult",
            Processpara: "Hit Digitally proudly provides full-time consultancy to its valuable customers."
        },
        {
            id: "2",
            processimg: "/assets/images/icons/promo/sericon-2.png",
            Processphding: "Plan",
            Processpara: "Our professional team gives optimized plans to uprise your business."
        },
        {
            id: "3",
            processimg: "/assets/images/icons/promo/sericon-3.png",
            Processphding: "Create",
            Processpara: "On the basis of adequate planning, we figure out your project optimally."
        },
        {
            id: "4",
            processimg: "/assets/images/icons/promo/sericon-4.png",
            Processphding: "Release",
            Processpara: "We assure the timely delivery of any project within the specified deadline."
        },
    ]

    const ProcessContent = OurProcess.map((card, i) => {
        return <Processdata id={OurProcess[i].id} processimg={OurProcess[i].processimg} Processphding={OurProcess[i].Processphding}
            Processpara={OurProcess[i].Processpara}
        />
    })

    return (
        <>
            {ProcessContent}
        </>
    )

}

export default Process;
