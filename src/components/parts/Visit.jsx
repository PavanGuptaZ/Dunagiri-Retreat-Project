import styles from '../../styles/sections2.module.css';
import VisitSection from '../../assets/jsons/VisitSection.json'
import { useState } from 'react';
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { BasicBTN } from './BasicBTN';
// import { BsArrowsFullscreen } from "react-icons/bs";

export const Visit = () => {
    const [viewImage, setViewImage] = useState(null)
    const TotalLenght = VisitSection.length;
    const handleDirections = (type) => {
        let value;
        if (type == 'right') {
            value = viewImage.j == 0 ? { i: viewImage.i, j: viewImage.j + 1 } : { i: viewImage.i + 1 < TotalLenght ? viewImage.i + 1 : viewImage.i, j: viewImage.i + 1 < TotalLenght ? viewImage.j - 1 : viewImage.j }
        } else {
            value = viewImage.j == 0 ? { i: viewImage.i - 1 > -1 ? viewImage.i - 1 : viewImage.i, j: viewImage.i - 1 > -1 ? viewImage.j + 1 : viewImage.j } : { i: viewImage.i, j: viewImage.j - 1 }
        }
        setViewImage((prev) => ({ ...prev, ...value }))
    }

    return (
        <section className={'flexCol widthControl'}>
            <div className={styles.sectionTitle}>Visit Mahavatar Babaji&apos;s Cave </div>
            <div className={styles.MainImgBox}>
                {VisitSection.map((elem, i) => {
                    let className = i % 2 === 0 ? styles.colType1 : styles.colType2;
                    return (
                        <div key={i} className={className + " " + styles.columnBox}>
                            {elem.map((elem2, j) => {
                                let className2 = j % 2 === 0 ? styles.imageBox01 : styles.imageBox02;
                                return (
                                    <div key={j} className={className2 + " " + styles.imageBox}
                                        onClick={() => setViewImage((prev) => ({ ...prev, i, j }))}>
                                        <img className={styles.image} src={elem2.image} alt="" />
                                        <div className={styles.hoverText}>{elem2.text}</div>
                                    </div>
                                )
                            })}
                        </div>
                    )
                })}
            </div>
            <BasicBTN text='Activities' styles={{ margin: "4rem auto" }} />

            {viewImage &&
                <div className={styles.viewImageBox}>
                    <div className={styles.imageFullShowBox}>
                        {(viewImage.i !== 0 || viewImage.j !== 0) && <FaChevronLeft className={styles.LeftArrow} onClick={() => handleDirections("left")} />}
                        <div className={styles.imageShowBox}>
                            <img src={VisitSection[viewImage.i][viewImage.j].image} alt="" style={{ maxWidth: "100%", maxHeight: "100%", backgroundPosition: "cover" }} />
                        </div>
                        {(viewImage.i !== TotalLenght - 1 || viewImage.j !== 1) && <FaChevronRight className={styles.RightArrow} onClick={() => handleDirections("right")} />}
                    </div>
                    <div className={styles.Text}>{VisitSection[viewImage.i][viewImage.j].text}</div>
                    <IoClose className={styles.closeIcon} onClick={() => setViewImage(null)} />
                </div>}
        </section>
    )
}
