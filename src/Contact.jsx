import React from 'react';

const Contact = () => {
return (  
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
        <h2 style={{fontWeight:'normal'}}>Contact us.</h2>
        <form style={{ marginTop: '20px' }} action="mailto:anupojumanju777@gmail.com" method="post" encType="text/plain">
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'normal' }} htmlFor="yourname">Your Name:</label>
            <input style={{ width: '100%', padding: '10px', marginBottom: '15px', border: '1px solid #ccc', borderRadius: '5px' }} type="text" id="yourname" name="Yourname" /><br/>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'normal' }} htmlFor="youremail">Email:</label>
            <input style={{ width: '100%', padding: '10px', marginBottom: '15px', border: '1px solid #ccc', borderRadius: '5px' }} type="email" id="youremail" name="youremail" /><br/>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'normal' }} htmlFor="yourmessage">Your Message</label><br/>
            <textarea style={{ width: '100%', padding: '10px', marginBottom: '15px', border: '1px solid #ccc', borderRadius: '5px', resize: 'vertical' }} id="yourmessage" name="yourmessage" rows="8" cols="80"></textarea>
            <input style={{ backgroundColor: '#4CAF50', color: 'white', padding: '10px 20px', border: '1px solid #ccc', borderRadius: '5px', cursor: 'pointer' }} type="submit" value="Submit" />
        </form>
        </div>
    );
}

export default Contact;
