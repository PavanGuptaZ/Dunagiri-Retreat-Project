import { useState } from 'react';
import guestExperiences from '../../assets/jsons/GuestExperiencesSection.json';
import styles from '../../styles/sections2.module.css';
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";


export const GuestExperiences = () => {
    const [showValue, setShowValue] = useState(0);
    const totalLength = guestExperiences.length
    const handleChange = (type) => {
        if (type === 'right') {
            setShowValue(() => showValue + 1 < totalLength ? showValue + 1 : showValue)
        } else if (type === "left") {
            setShowValue(() => showValue - 1 < 0 ? showValue : showValue - 1)
        }
    }
    const handleChangeNumber = (num) => {
        setShowValue(num)
    }
    return (
        <section className={styles.GuestExperiences}>
            <div className={styles.sectionTitle}>Guest Experiences</div>
            <div className={styles.GuestContent + " widthControl"}>
                {showValue > 0 && <FaChevronLeft className={styles.LeftArrow} onClick={() => handleChange('left')} />}
                <div className={styles.imageFullBox} style={{ background: `url(${guestExperiences[showValue].image})` }}></div>
                <div className={styles.GuestTextBox}>
                    <div>{guestExperiences[showValue].text}</div>
                    <div className={styles.dash}></div>
                    <div>{guestExperiences[showValue].title}</div>
                </div>
                {showValue < totalLength - 1 && <FaChevronRight className={styles.RightArrow} onClick={() => handleChange('right')} />}
            </div>
            <div className={styles.changeSlide}>
                {guestExperiences.map((_, i) => {
                    return <div key={i} onClick={() => handleChangeNumber(i)} className={i === showValue ? styles.active : ""}></div>
                })}
            </div>
        </section>
    )
}
