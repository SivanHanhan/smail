import MailList from './MailList'; // assuming MailList is in the same directory
import {mails} from '../mails/mails'; // assuming mails.js is in the same directory

const MailView = () => {
    return (
        <div>
            <h1>My Mail</h1>
            <section style={{display:"flex", justifyContent:"space-around"}}>
            <MailList mails={mails}/>
            </section>
          
        </div>
    );
}

export default MailView;
