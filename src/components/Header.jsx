import reactCoreImage from '../assets/reactImage.png';

const reactDescriptions = ["Fundamentals", "Core", "Crucial"];
function genRandomValue(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
  const reactDes = reactDescriptions[genRandomValue(2)];
  return (
    <header>
      <img src={reactCoreImage} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {reactDes} React concepts you will need for almost any app you are going
        to build!
      </p>
    </header>
  );
}
