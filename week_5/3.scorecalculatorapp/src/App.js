import { CalculateScore } from './components/CalculateScore';

function App() {
  return (
    <div>
      <CalculateScore
        Name={"Raghu"}
        College={"Vel Tech Multi Tech College"}
        total={490}
        goal={5}
      />
    </div>
  );
}

export default App;