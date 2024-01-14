import styles2 from '../../styles/sections2.module.css';
import PropTypes from 'prop-types';
import { TfiLocationPin } from "react-icons/tfi";
import { BsTelephone } from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";
import { BasicBTN } from './BasicBTN';

export const ContactUs = () => {
    return (
        <section className={styles2.ContactUsSection + " widthControl"}>
            <div className={styles2.ContactDetails}>
                <div className={styles2.sectionTitle2}>Contact Us</div>
                <div className={styles2.Details}>
                    <TfiLocationPin className={styles2.ContectIcon} />
                    <div className={styles2.ContactText}>
                        Dunagiri Retreat, Village Chari, Near Mahavatar Babaji&apos;s Cave, Block, Dwarahat, Uttarakhand 263653 India
                    </div>
                </div>
                <div className={styles2.Details}>
                    <BsTelephone className={styles2.ContectIcon} />
                    <div className={styles2.ContactText}>
                        +91 98102 67719
                    </div>
                </div>
                <div className={styles2.Details}>
                    <TfiEmail className={styles2.ContectIcon} />
                    <div className={styles2.ContactText}>
                        delighted@dunagiri.com
                    </div>
                </div>
            </div>
            <form action="" className={styles2.ContactForm}>
                <div className={styles2.nameBox}>
                    <InputBOX idName={'firstname'} label={'First Name'} type={'text'} />
                    <InputBOX idName={'secoundname'} label={'Secound Name'} type={'text'} />
                </div>
                <InputBOX idName={'email'} label={'Email'} type={'email'} />
                <InputBOX idName={'phone'} label={'Phone'} type={'number'} />
                <div className={styles2.inputBOX}>
                    <label htmlFor={'textArea'} className={styles2.InputLabel}>Message</label>
                    <textarea id='textArea' className={styles2.Input + " " + styles2.textarea} />
                </div>
                <BasicBTN text='send' styles={{ marginLeft: "auto", marginTop: "16px" }} />
            </form>
        </section>
    )
}


export const InputBOX = ({ idName, label, type }) => {
    return (
        <div className={styles2.inputBOX}>
            <label htmlFor={idName} className={styles2.InputLabel}>{label}</label>
            <input type={type} id={idName} className={styles2.Input} />
        </div >
    )
}
InputBOX.propTypes = {
    idName: PropTypes.string,
    label: PropTypes.string,
    type: PropTypes.string
}