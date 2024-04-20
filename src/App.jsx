import Header from "./components/Header.jsx";
import CoreConceptsSection from "./components/CoreConceptsSection.jsx";
import Examples from "./components/Examples.jsx";

function Main() {
  return (
    <main>
      <h2>Time to get started!</h2>
      <CoreConceptsSection />
      <Examples />
    </main>
  );
}

function App() {
  return (
    <>
      <Header />
      <Main />
    </>
  );
}

export default App;
