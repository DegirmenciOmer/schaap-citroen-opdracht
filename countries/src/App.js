import { gql, useQuery } from "@apollo/client";
import "./App.css";
import RandomCountry from "./RandomCountry";
import { BallTriangle } from "react-loader-spinner";

function App() {
  const COUNTRIES_QUERY = gql`
    query Countries {
      countries {
        name
        emoji
      }
    }
  `;

  const { loading, error, data } = useQuery(COUNTRIES_QUERY);

  return (
    <div className="App">
      <div>
        {loading ? (
          <div>
            <BallTriangle color="#00BFFF" height={80} width={80} />
          </div>
        ) : error ? (
          <div style={{color:'red'}}>Something went wrong...</div>
        ) : (
          <RandomCountry countries={data.countries} />
        )}
      </div>
    </div>
  );
}

export default App;
