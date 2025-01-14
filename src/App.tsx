import './App.css'
import { Letter } from './elements/letter'
import { ContainerH } from './styled/common'

const phrase = 'Проведите по буквам'

function App() {
  return (
    <>
      <ContainerH>
        {phrase.split('').map((char, i) => <Letter key={`${i}${char}`}>{char}</Letter>)}
      </ContainerH>
    </>
  )
}

export default App
