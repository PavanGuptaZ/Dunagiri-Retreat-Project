import { Navbar } from "./components/Navbar";
import { BasicBTN } from "./components/parts/BasicBTN";
import { SliderBox } from "./components/parts/SliderBox";
import styles from './styles/sections.module.css';
import retreatSection from './assets/jsons/retreatSection.json'
import motivationSection from './assets/jsons/motivationSection.json'
import chooseSection from './assets/jsons/chooseSection.json'
import { Visit } from "./components/parts/Visit";
import { GuestExperiences } from "./components/parts/GuestExperiences";

function App() {

  return (
    <>
      <Navbar />
      <section className={styles.mainHeroSection}>
        <div className={styles.content}>
          <div className={styles.title}>Dunagiri Retreat</div>
          <div className={styles.para}>Experience serenity and divinity steps away from Mahavatar Babaji&apos;s Cave in the Himalayas.</div>
          <BasicBTN text="inquire now" />
        </div>
      </section>
      <section className={styles.textSection}>As Featured In</section>
      <SliderBox />
      <section className={styles.retreatSection + " widthControl flexCol"}>
        <div className={styles.header}>A Retreat For Your Soul</div>
        <div className={styles.retreatPara + " flexCol"}>
          {retreatSection.map((ele, i) => {
            return <p key={i}>{ele}</p>
          })}
        </div>
        <BasicBTN text="About us" />
      </section>
      <section className={styles.reconnectSection}>
        <div className={styles.contentControl + " widthControl"}>
          <div className={styles.aside01}>
            Reconnect with your mind and body.
          </div>
          <div className={styles.aside02}>
            <div>“Keep close to Nature&apos;s heart...and break clear away, once in a while, and climb a mountain or spend a week in the woods. Wash your spirit clean.”</div>
            <div className={styles.line}></div>
            <div><strong>John Muir</strong></div>
          </div>
        </div>
      </section>
      <section className={styles.motivationSection}>
        <div className={styles.ImgBox}>
          <img src="https://static.wixstatic.com/media/9c6671_b3cabf03e33e4caa87419c63a0360321~mv2.jpg/v1/crop/x_136,y_0,w_654,h_1080/fill/w_466,h_770,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/C1DSC03475_edited.jpg" alt=""
            className={styles.ImgTag} />
        </div>
        <div className={styles.motivationBox}>
          <div className={styles.head01}>NO MATTER YOUR MOTIVATION, WE CAN HELP</div>
          <div className={styles.head02}>Are you...</div>
          <div className={styles.motivationList}>
            {motivationSection.map((elem, i) => {
              return (
                <div key={i} className={styles.item}>
                  <div className={styles.imgBox}><img src={elem.image} alt="" style={{ width: "100%" }} /></div>
                  <div className={styles.title}>{elem.title}</div>
                  <div className={styles.parag}>{elem.parag}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
      <section className={styles.numbersSection}>
        <div className={styles.contentBox + ' widthControl'}>
          <div className={styles.head01}>OUR NUMBERS SPEAK FOR THEMSELVES</div>
          <div className={styles.head02}>Guests Experience Lasting Benefits</div>
          <div className={styles.valuesBox}>
            <div className={styles.data}>
              <div className={styles.head03}>30%</div>
              <div className={styles.parag}>Decrease in anxiety while staying at Dunagiri Retreat.</div>
            </div>
            <div className={styles.data}>
              <div className={styles.head03}>26%</div>
              <div className={styles.parag}>Improvement in sleep during and post visit.</div>
            </div>
            <div className={styles.data}>
              <div className={styles.head03}>16%</div>
              <div className={styles.parag}>Improvement in self-compassion after a 5-night stay.</div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.chooseSection}>
        <div className={styles.chooseContent + " flexCol widthControl"}>
          <div className={styles.sectionHeading}>Choose Your Path</div>
          <div className={styles.sectionParagraph}>Choose your transformational adventure at your own pace — join our dynamic retreat groups or come solo.</div>
          <div className={styles.chooseBox}>
            {chooseSection.map((elem, i) => {
              return (
                <div key={i} className={styles.chooseItem}>
                  <div className={styles.chooseImageBox}>
                    <img src={elem.image} alt="" width={'100%'} />
                  </div>
                  <div className={styles.title}><strong> {elem.title}</strong></div>
                  <div className={styles.chooseParag}>{elem.parag}</div>
                  <button className="BasicButton" style={{ marginTop: "2rem" }}>{elem.BTNText}</button>
                </div>
              )
            })}
          </div>
        </div>
      </section>
      <Visit />
      <GuestExperiences />
      <section className={styles.textSection} style={{ background: "#1D2927", color: "#fff" }}>Why Choose Us</section>
    </>
  )
}

export default App
