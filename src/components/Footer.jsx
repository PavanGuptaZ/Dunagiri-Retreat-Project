import styles2 from '../styles/navigation.module.css';
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { SiTripadvisor } from "react-icons/si";
import { FaCcPaypal } from "react-icons/fa6";

export const Footer = () => {
    return (
        <footer className={styles2.Footer}>
            <div className={styles2.FooterBox + ' widthControl'}>
                <div className={styles2.FooterColumns}>
                    <div className={styles2.FooterBlock}>
                        <div className={styles2.head}>Contact Us</div>
                        <div className={styles2.Content}>
                            TEL: +91 98102 67719 <br />
                            +91 96901 32425 <br />
                            WhatsApp: +91 98102 67719 <br />
                            E-MAIL: delighted@dunagiri.com
                        </div>
                    </div>
                    <div className={styles2.FooterBlock}>
                        <div className={styles2.head}>Address</div>
                        <div className={styles2.Content}>
                            Village Chari, Near Mahavatar <br />
                            Babaji&apos;s Cave, PO Dunagiri, <br />
                            Block Dwarahat, District  <br />
                            Almora Uttarakhand, India
                        </div>
                    </div>
                    <div className={styles2.FooterBlock}>
                        <div className={styles2.head}>Follow Us</div>
                        <div className={styles2.IconsBox}>
                            <FaFacebookF />
                            <FaInstagram />
                            <FaTwitter />
                            <SiTripadvisor />
                        </div>
                        <div className={styles2.head}>We Accept</div>
                        <div className={styles2.IconsBox}>
                            <FaCcPaypal />
                        </div>
                    </div>
                </div>
                <div className={styles2.DetailsLinks}>
                    <p>Privacy Policy</p>
                    <p>Cancellation and Refund Policy</p>
                    <p>Terms and Conditions</p>
                    <p>FAQs</p>
                    <p>Contact Us</p>
                </div>
                <div className={styles2.CopyRightText}>© 2023 by DUNAGIRI RETREAT </div>
            </div>
        </footer>
    )
}
