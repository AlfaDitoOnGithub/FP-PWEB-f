import "./Hero.css";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
        {/* left side */}
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle" />
            <motion.h1
            initial={{ y: "2rem", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 2,
              type: "ease-in",
            }}
            >
              Cari Kost? <br />
              Gampang!
              <br /> HoRe Punya
            </motion.h1>
          </div>
          <div className="bc flexColStart secondaryText flexhero-des ">
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, s </span>
            <span>ed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
          </div>

          <div className="flexCenter search-bar">
            <HiLocationMarker color="var(--blue)" size={25} />
            <input type="text" />
            <button className="button">Search</button>
          </div>

          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={1000} end={3000} duration={4} /> <span>+</span>
              </span>
              <span className="secondaryText bc">Kamar Exclusive</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp start={1000} end={2500} duration={4} /> <span>+</span>
              </span>
              <span className="secondaryText bc">Transaksi</span>
           
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="flexCenter hero-right">
          <motion.div
            initial={{ x: "7rem", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 2,
              type: "ease-in",
            }}
            className="image-container"
          >
            <img src="./hero-image.png" alt="houses" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
