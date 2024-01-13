import { useEffect, useState } from 'react';
import styles from '../../styles/sections.module.css';

export const SliderBox = () => {
    const [scrollValues, setScrollValues] = useState({ sliderBox: 0, mouse: false })
    useEffect(() => {
        const sliderBoxHandle = () => {
            const isLastSlide = scrollValues.sliderBox >= 2
            if (!scrollValues.mouse) {
                setScrollValues((prev) => ({ ...prev, sliderBox: isLastSlide ? 0 : scrollValues.sliderBox + 1 }))
            }
        }
        const slideFunction = setInterval(() => {
            sliderBoxHandle()
        }, 5000)

        return () => {
            clearInterval(slideFunction);
        }
    }, [scrollValues.mouse, scrollValues.sliderBox])

    const sliderValueHandle = (value) => {
        setScrollValues((prev) => ({ ...prev, sliderBox: value - 1 }))
    }
    return (
        <section className={styles.sliderSection}>
            <div className={styles.sliderBox} style={{ transform: `translateX(-${scrollValues.sliderBox}00%)` }}>
                <div className={styles.slider + " flexCol"}>
                    <div className={styles.slideheadIMGBox}>
                        <img src="https://static.wixstatic.com/media/9c6671_7b9aa9bf48ef4931b1c4f7385ca8e86b~mv2.png/v1/fill/w_157,h_55,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/logo-cnntravel.png" alt="" />
                    </div>
                    <div className={styles.slideText}>
                        &quot;Glittering peaks and vivid landscapes create an environment that can calm the most unsettled of hearts.&quot;
                    </div>
                </div>
                <div className={styles.slider + " flexCol"}>
                    <div className={styles.slideheadIMGBox}>
                        <img src="https://static.wixstatic.com/media/9c6671_5f97ba7f0b6d4585956f85d112b25320~mv2.png/v1/fill/w_157,h_40,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/307_Outlook_Traveller_edited.png" alt="" />
                    </div>
                    <div className={styles.slideText}>
                        &quot;Time and global warming notwithstanding, the stories frame Dunagiri, a place lush with natural and mythological lore.&quot;
                    </div>
                </div>
                <div className={styles.slider + " flexCol"}>
                    <div className={styles.slideheadIMGBox}>
                        <img src="https://static.wixstatic.com/media/9c6671_be30236887c54160b5f0deb0ea78c554~mv2.png/v1/fill/w_134,h_62,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/pngwing_com%20(8).png" alt="" />
                    </div>
                    <div className={styles.slideText}>
                        &quot;(Dunagiri Retreat) A place of warmth, bliss, solitude, and delicious food!.&quot;
                    </div>
                </div>
            </div>
            <div className={styles.slideBTNBox}
                onMouseEnter={() => setScrollValues((prev) => ({ ...prev, mouse: true }))}
                onMouseLeave={() => setScrollValues((prev) => ({ ...prev, mouse: false }))}
            >
                {Array.from({ length: 3 }, (_, i) => i + 1).map((num, i) => {
                    let isActive = scrollValues.sliderBox === i ? styles.active : ""
                    return <div key={num} data={i} className={styles.BTN + " " + isActive} onClick={() => sliderValueHandle(num)}></div>
                })}
            </div>
        </section>
    )
}
