import gfg from "../assets/gfg.png";
import nng from "../assets/nng.png";
import w3s from "../assets/w3s.png";

const resources = [
  {
    label: "W3 Schools",
    desc: "Well organized and easy to understand Web building tutorials.",
    url: "https://www.w3schools.com/",
    img: w3s,
  },
  {
    label: "Geeks for Geeks",
    desc: "Your All-in-One Learning Portal.",
    url: "https://www.geeksforgeeks.org/",
    img: gfg,
  },
  {
    label: "Nielsen and Norman Group",
    desc: "UX Training and Certification.",
    url: "https://www.nngroup.com/",
    img: nng,
  },
];

function HowIAmLearning() {
  return (
    <div id="learning" className="resources-container">
      <h2 className="resources-header">Resources I'm Using</h2>
      <div className="resources-grid">
        {resources.map((resource, index) => (
          <div key={resource.label} className={`resource-${index}`}>
            <img className={`resource-${index}-img`} src={resource.img} alt={resource.label} />
            <a className={`resource-${index}-link`} href={resource.url}>
              <h5 className={`resource-${index}-title`}>{resource.label}</h5>
            </a>
            <p className={`resource-${index}-subtitle`}>{resource.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HowIAmLearning;
