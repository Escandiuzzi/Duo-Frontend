import './App.css';
import Navigator from './Navigator/navigator'
import Panel from './Panel/panel'
import Accordion from './Accordion/accordion'
import json from './Assets/duvidas.json'

function App() {
  return (
    <div className="App">
      <Panel/>
      <Navigator/>
      <body>
        { json.lista_tarefas.map((duvida) => { return <Accordion title={duvida.titulo} content={duvida.descricao} /> }) }
      </body>
    </div>
  );
}

export default App;
