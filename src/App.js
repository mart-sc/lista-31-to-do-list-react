import { useEffect, useState } from 'react';
import './App.css';

function App() {

  let [lista, setLista] = useState([]);
  let [novoItem, setNovoItem] = useState("");

  useEffect(() => {
    setLista(['Tomar banho']);
  }, []);

  return (
    <div className="container border border-1 border-black shadow">
      <h3>To-do List</h3>
      <hr/>
      <div className="new-item">
        <input className="form-control shadow-sm" id="nomeItem" value={novoItem} onChange={value => setNovoItem(value.target.value)} type="text" placeholder="Nome da tarefa"></input>
        <button className="btn btn-outline-info shadow-sm ms-3" onClick={() => adicionarItem()}>Adicionar</button>
      </div>
      <ul className="todo-list text-muted fw-bold">
          {lista.map((item, index) => (
            <li key={index} className="todo-item border-bottom">
              {item}
              <button className="btn btn-outline-danger shadow-sm" onClick={() => deletarItem(index)}>
                <i class="fa-solid fa-trash-can"></i>
              </button>
            </li>
          ))}
      </ul>
    </div>
  );

  function adicionarItem() {
    if (novoItem.length <= 0) {
      alert("Por favor, digite algo no campo!");
      return;
    }

    let itemIndex = lista.indexOf(novoItem);
    if (itemIndex >= 0) {
      alert("Tarefa já existente.");
      return;
    }
    
    setLista([...lista, novoItem]);
    alert("Tarefa adicionada com sucesso!");
    setNovoItem("");
  }

  function deletarItem(index) {
    let tmpArray = [...lista];
    tmpArray.splice(index, 1);

    setLista(tmpArray);
  }
}



export default App;
