import { useState } from "react";

function AboutUs(props)
{   
    const [companyName, setCompany]=useState(props.companyName);
    const [address, setAddress]=useState(props.address);

    return(<center><div>
        <b>Contact Us @</b> {companyName}<br />
        <b>Our Address:</b> {address}

    </div></center>)
}
export default AboutUs;