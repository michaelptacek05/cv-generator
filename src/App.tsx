import Greetings from "./Greetings"

const word: string = "Hello world";

function App() {
  return (
    <div>
        <Greetings word={word} />
    </div>
  )
}

export default App