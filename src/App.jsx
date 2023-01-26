import Clock from "./Clock";

function App() {
  return (
    <div>
      <main>
        <div>
          <Clock city="Paris" timeZone="Europe/Paris" />
          <Clock city="Stockholm" timeZone="Europe/Stockholm" />
          <Clock city="London" timeZone="Europa/London" />
        </div>
      </main>
    </div>
  );
}

export default App;
