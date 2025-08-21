import React from 'react'

function ContactForm() {
  const NameForm = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Hello ${firstName} ${lastName}!`);
    };

    return (
    
        <div className="contact-us-form">
            <h1>1 → Let’s get to know you, what’s your name?*</h1>
            <form className="name-form">
                <div className="input-group">
                    <label htmlFor="first-name">First name *</label>
                    <input 
                        type="text"
                        id="first-name"
                        
                       
                        required
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="last-name">Last name *</label>
                    <input 
                        type="text"
                        id="last-name"
                        required
                    />
                </div>
                <button type="submit" className="submit-button">OK</button>
            </form>
        </div>
        
    );
};
}

export default ContactForm