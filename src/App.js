import "./sass/app.scss"
import SearchBar from "./components/SearchBar";

function App() {
    return (
        <div>
            <div className="flex-center header py-8">
                <h2 className={'text-2xl font-bold text-center uppercase'}>Header</h2>
            </div>
            <main className={'header-footer-height-deduct'}>
                <SearchBar/>
            </main>
            <div className="footer py-8">
                <h2 className={'text-2xl font-bold text-center uppercase'}>Footer</h2>
            </div>
        </div>
    );
}

export default App;
