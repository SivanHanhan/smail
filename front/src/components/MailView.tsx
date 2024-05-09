import { useState, useEffect } from 'react';
import MailList from './MailList'; // assuming MailList is in the same directory
// import {mails} from '../mails/mails'; // assuming mails.js is in the same directory

const MailView = () => {
    const [mails, setMails] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/mail/') // replace with your server URL and route
            .then(response => response.json())
            .then(data => setMails(data))
            .catch(error => console.error('Error:', error));
    }, []);

    console.log(mails);

    return (
        <div>
            <h1>My Mail</h1>
            <section style={{display:"flex", justifyContent:"space-around"}}>
                {/* TODO: mails should be from the backend, need to use the correct route that already works with postman,
                 to get all the mails and display them */}
            <MailList mails={mails}/>
            </section>
        </div>
    );
}

export default MailView;
