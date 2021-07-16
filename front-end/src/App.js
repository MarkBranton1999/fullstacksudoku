import logo from './logo.svg';
import './App.css';
import Cell from './Cell'

function App() {
  const nums = [0,1,2,3,4,5,6,7,8];
  return (
    <div className="App">
      <h1>Sudoku</h1>
      <table className="Table">
        {nums.map(function(rowNum,i){
          return <tr>{nums.map(function(cellNum,j){
            return <Cell></Cell>
          })}</tr>
        })}
      </table>
    </div>
  );
}

export default App;
