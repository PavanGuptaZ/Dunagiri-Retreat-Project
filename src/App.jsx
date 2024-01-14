import { Navbar } from "./components/Navbar";
import { BasicBTN } from "./components/parts/BasicBTN";
import { SliderBox } from "./components/parts/SliderBox";
import styles from './styles/sections.module.css';
import styles2 from './styles/sections2.module.css';
import retreatSection from './assets/jsons/retreatSection.json'
import motivationSection from './assets/jsons/motivationSection.json'
import chooseSection from './assets/jsons/chooseSection.json'
import { Visit } from "./components/parts/Visit";
import { GuestExperiences } from "./components/parts/GuestExperiences";
import { ThreeSections } from "./components/parts/ThreeSections";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { DunagiriBlog } from "./components/parts/DunagiriBlog";
import { ContactUs } from "./components/parts/ContactUs";
import { BiLike } from "react-icons/bi";
import { Footer } from "./components/Footer";

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
      <ThreeSections />
      <section className={styles2.MeetOurSection}>
        <div className={styles2.MeetContent}>
          <div className={styles2.name}><strong> Meet Our Founder Piyush Kumar</strong></div>
          <div className={styles2.AboutPara}>Guided by the philosophy that love transcends monetary value, Piyush Kumar, a former World Bank professional, established Dunagiri Retreat in 2005. His vision was to create a retreat that harmonizes with nature and nurtures the local community, fostering a unique synergy between guests and villagers under the retreat&apos;s guiding principles.</div>
          <div className={styles2.SocialAccountsBox}>
            <a href="https://www.linkedin.com/in/piyush-kumar-b859a16/" target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
            <a href="https://www.instagram.com/dunagiri_retreat/" target="_blank" rel="noreferrer" ><FaInstagram /></a>
            <a href="https://www.facebook.com/DunagiriRetreat/" target="_blank" rel="noreferrer"><FaFacebookF /></a>
          </div>
          <BasicBTN text="About Us" />
        </div>
        <div className={styles2.imageDiv}>
          <img src="https://static.wixstatic.com/media/9c6671_38312d206be444a8ba09d885b67a3d89~mv2.jpeg/v1/fill/w_289,h_542,al_c,lg_1,q_80,enc_auto/9c6671_38312d206be444a8ba09d885b67a3d89~mv2.jpeg" alt="" />
        </div>
      </section>
      <DunagiriBlog />
      <ContactUs />
      <section className="widthControl" style={{ display: "flex", alignItems: "center" }}>
        <BiLike className={styles2.likeIcon} />
        <div className={styles2.SocialAccountsBox}>
          <a href="https://www.linkedin.com/in/piyush-kumar-b859a16/" target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
          <a href="https://www.instagram.com/dunagiri_retreat/" target="_blank" rel="noreferrer" ><FaInstagram /></a>
          <a href="https://www.facebook.com/DunagiriRetreat/" target="_blank" rel="noreferrer"><FaFacebookF /></a>
        </div>
      </section>
      <section className="widthControl flexRow" style={{ margin: "4rem auto" }}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3461.4281967432426!2d79.44595647554533!3d29.823059675035683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a7547b97e9c3b5%3A0xeed550edee305a4b!2sDunagiri%20Retreat!5e0!3m2!1sen!2sin!4v1705229636838!5m2!1sen!2sin&maptype"
          width={'100%'} height="450" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade">
        </iframe>
      </section>
      <Footer />
    </>
  )
}

export default App
