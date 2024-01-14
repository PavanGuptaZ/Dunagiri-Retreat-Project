import ThreeSectionsData from '../../assets/jsons/threeSections.json';
import styles from '../../styles/sections2.module.css'

export const ThreeSections = () => {

    return (
        <>
            {
                ThreeSectionsData.map((elem, i) => {
                    let className = i % 2 !== 0 ? styles.ThreeLeft : styles.ThreeRight
                    return (
                        <section key={i} className={styles.ThreeSectionsBox + " " + className} style={{ background: `url(${elem.image}) center/cover no-repeat` }}>
                            <div className={styles.threeContent}>
                                <div className={styles.title}>{elem.title}</div>
                                <div className={styles.parag}>{elem.para}</div>
                                <div className={styles.readmeBTN}><strong> Read More</strong></div>
                            </div>
                        </section>
                    )
                })
            }
        </>
    )
}
