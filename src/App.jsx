import { useState } from "react";
import { CORE_CONCEPTS, EXAMPLES } from "./data";
import Header from "./components/Header.jsx";
import CoreConcept from "./components/CoreConcept.jsx";
import TabButton from "./components/TabButton.jsx";

function Main() {
  const [selectedTopic, setSelectedTopic] = useState("components");
  function HandleSelect(pressedButton) {
    setSelectedTopic(pressedButton);
  }
  return (
    <main>
      <h2>Time to get started!</h2>
      <section id="core-concepts">
        <h2>Core Concepts</h2>
        <ul>
          <CoreConcept
            title={CORE_CONCEPTS[0].title}
            description={CORE_CONCEPTS[0].description}
            image={CORE_CONCEPTS[0].image}
          />
          <CoreConcept {...CORE_CONCEPTS[1]} />
          <CoreConcept {...CORE_CONCEPTS[2]} />
          <CoreConcept {...CORE_CONCEPTS[3]} />
        </ul>
      </section>
      <section id="examples">
        <h2>Examples</h2>
        <menu>
          <TabButton onSelect={() => HandleSelect("components")}>
            Components
          </TabButton>
          <TabButton onSelect={() => HandleSelect("jsx")}>JSX</TabButton>
          <TabButton onSelect={() => HandleSelect("props")}>Props</TabButton>
          <TabButton onSelect={() => HandleSelect("state")}>State</TabButton>
        </menu>
        <div id="tab-content">
          <h3>{EXAMPLES[selectedTopic].title}</h3>
          <p>{EXAMPLES[selectedTopic].description}</p>
          <pre>
            <code>{EXAMPLES[selectedTopic].code}</code>
          </pre>
        </div>
      </section>
    </main>
  );
}

function App() {
  return (
    <div>
      <Header />
      <Main />
    </div>
  );
}

export default App;