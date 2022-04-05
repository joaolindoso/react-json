import './App.css';
import Records from './data.json';

function App() {

  return (
    <div className="App">
      <h1>... Thanks to WebStylePress ...</h1>

      {
        Records && Records.map( record => {
          return(
            <div className="box" key={ record.id }>
                <h3>{ record.title }</h3>
                <h4>{ record.content }</h4>
                
                { record.tech && record.tech.map( data => {
                  return(
                    <div key={ record.id }>
                      <h5>
                        { data.name }<br />
                        { data.version }
                      </h5>
                    </div>
                  )
                }) }
            </div>
          )
        } )
      }    

    </div>
  );
}

export default App;
