import './contact.mod.scss'
import { Link } from 'react-router-dom';

const contact = () => {
  return (
    <div className = "contact">
        <p>For any inquiries, please email me at <b>jacksonqfontaine@gmail.com</b>.</p>
        <br/><br/><br/><br/>
        <Link to="/put_me_on" className="Link">Click me Kayden :)</Link>
    </div>
  )
}

export default contact
