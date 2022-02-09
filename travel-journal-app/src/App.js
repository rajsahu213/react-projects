import "./App.css";
import Header from "./components/Header";
import data from "./data";
import TravelCard from "./components/TravelCard";

function App() {
    return (
        <div>
            <Header />
            <div className="item-list">
                {data.map((eachData) => {
                    return <TravelCard key={eachData.id} data={eachData} />;
                })}
            </div>
        </div>
    );
}

export default App;
