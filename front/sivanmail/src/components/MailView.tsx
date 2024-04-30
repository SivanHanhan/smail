import MailList from './MailList'; // assuming MailList is in the same directory
import {mails} from '../mails/mails'; // assuming mails.js is in the same directory

const MailView = () => {
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
