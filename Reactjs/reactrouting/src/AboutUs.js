function AboutUs(props)
{
   return(<center><div><b>Contact us at</b><br/><br/>
          {props.companyName}<br/>
          {props.address}
          <a href="mail to: aboutus@gavstech.com?subject=About us">About us</a>
   </div>
   </center>);
}
export default AboutUs;