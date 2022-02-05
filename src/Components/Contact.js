import React, { Component } from 'react';
import { GrMail } from 'react-icons/gr';

class Contact extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var message = this.props.data.contactmessage;
    }

    return (
      <section id="contact">

         <div className="row">
            <div className="eight columns">

               <form id="contactForm" action="https://postmail.invotes.com/send" method="post">
					<fieldset>

                  <h1><GrMail /></h1><p>{message}</p>

                  <div>
						   <label htmlFor="contactName">Name <span className="required">*</span></label>
						   <input type="text" defaultValue="" size="35" id="contactName" name="extra_contactName" required/>
                  </div>

                  <div>
						   <label htmlFor="contactEmail">Email <span className="required">*</span></label>
						   <input type="email" defaultValue="" size="35" id="contactEmail" name="extra_email" required/>
                  </div>

                  <div>
						   <label htmlFor="contactSubject">Subject</label>
						   <input type="text" defaultValue="" size="35" id="contactSubject" name="subject" required/>
                  </div>

                  <div>
                     <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                     <textarea cols="50" rows="15" id="contactMessage" name="text" required></textarea>
                  </div>

                  <input type="hidden" name="access_token" value="hr1zve9yhcq1l8c136kvchyi" />
                  <input type="hidden" name="success_url" value=".?message=Email+Successfully+Sent%21&isError=0" />
                  <input type="hidden" name="error_url" value=".?message=Email+could+not+be+sent.&isError=1" />

                  <div>
                     <input type="submit" id="js_send" value="Send" className="submit" />
                  </div>
					</fieldset>
				   </form>
           </div>


            <aside className="four columns footer-widgets">
               <div className="widget widget_contact">
					   <h4>Contact Information</h4>
					   <p className="address">
						   {name}<br />
						   {city}, {state}<br />
						   <span>{phone}</span><br />
                     <span>{email}</span>
					   </p>
				   </div>
            </aside>
      </div>
   </section>
    );
  }
}

export default Contact;
