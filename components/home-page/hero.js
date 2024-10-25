import classes from "./hero.module.css";
import Image from "next/image";
function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/next-1.jpg"
          width={300}
          height={300}
          alt="An Image Show Đan"
        />
      </div>
      <h1>Hi, I'm Đan</h1>
      <p>I blog about web development</p>
    </section>
  );
}
export default Hero;
