import { VideogameCard } from "./components/VideogameCard";

const App = () => {
  return (
    <>
      <VideogameCard title="GTA 5">
        <h3>TOP de características</h3>
        <ol>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ol>
      </VideogameCard>
      <VideogameCard
        title="plantas vs zombies 2"
        header={({ title }) => (
          <ul>
            <li>{title}</li>
          </ul>
        )}
      />
      <VideogameCard title="GTA 4" />
      <VideogameCard title="Age of mythology" />
    </>
  );
};

export default App;
