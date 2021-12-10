
import styles from "./ContactList.module.css";

const ContactList = ({ renderContacts  }) => {
    return ( 
        <ul className={styles.contactsList}>
            {renderContacts}</ul>)
}
export default ContactList;
