import PropTypes from "prop-types";
import styles from "./ContactForm.module.css"

const ContactForm = ({ addContact, nameInputId, name, number, handleChange, numberInputId }) => {
    return (
        <form onSubmit={addContact}>
            <label className={styles.label} htmlFor={nameInputId}>Name
                <input className={styles.input}
                    type="text"
                    name="name"
                    value={name}
                    onChange={handleChange}
                    id={nameInputId}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    required
                /></label>
            <label className={styles.label} htmlFor={numberInputId}>Number
                <input className={styles.input}
                    type="tel"
                    value={number}
                    onChange={handleChange}
                    id={numberInputId}
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    required
                /></label>
            <button className={styles.btnAdd} type="submit">Add contact</button>
        </form>)
};


export default ContactForm;