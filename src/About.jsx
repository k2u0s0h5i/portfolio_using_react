import './About.css';
import mainimg from './assets/main.jpeg';

function About() {
  return (
    <section className="home-content">
      <img src={mainimg} alt="Kushala Sambani" />
      <p>
      <h1>
        Hi, I'm <span>Kushala Sambani</span>
      </h1>
        Computer Science undergraduate at SRM University AP, passionate about
        Web Development, Machine Learning, and Cybersecurity. I love creating
        impactful projects that combine research, design, and technology.
      </p>
    </section>
  );
}

export default About;
