import styles2 from '../../styles/sections2.module.css';
import DunagiriBlogSection from '../../assets/jsons/DunagiriBlogSection.json';
import { useState } from 'react';
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";


export const DunagiriBlog = () => {
    const [blogPage, setBlogPage] = useState(0)
    const totalLength = DunagiriBlogSection.length;
    return (
        <section className={styles2.DunagiriBlogSection}>
            <div className={styles2.sectionTitle}>Dunagiri Retreat Blog</div>
            <div className={styles2.BlogList + ' widthControl'}>
                {DunagiriBlogSection[blogPage].map((elem, i) => {
                    return (
                        <div key={i} className={styles2.BlogBlock}>
                            <div className={styles2.imageDiv}>
                                <img className={styles2.BlogImage} src={elem.image} alt="" />
                            </div>
                            <div className={styles2.blogContent}>
                                <div className={styles2.BlogTimeStamp}>{elem.timeStamp}</div>
                                <div className={styles2.BlogTitle}>{elem.title}</div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className={styles2.BlogControls}>
                <FaChevronLeft className={styles2.BlogLeftArrow + " " + (blogPage == 0 ? styles2.disabale : "")}
                    onClick={() => setBlogPage(blogPage - 1 < 0 ? blogPage : blogPage - 1)} />
                {DunagiriBlogSection.map((_, i) => {
                    return <div key={i} className={styles2.BlogNumber + " " + (blogPage === i ? styles2.active : "")}
                        onClick={() => setBlogPage(i)}>{i + 1}</div>
                })}
                <FaChevronRight className={styles2.BlogRightArrow + " " + (blogPage == totalLength - 1 ? styles2.disabale : "")}
                    onClick={() => setBlogPage(blogPage + 1 == totalLength ? blogPage : blogPage + 1)} />
            </div>
        </section>
    )
}
