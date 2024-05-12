import Feed from './components/Feed';
import Input from './components/Input';

function App() {
  return (
    <div className="flex h-screen w-screen justify-center">
      <div>
        <h1 className="">Townhall</h1>
        <Feed />
        <Input />
      </div>
    </div>
  );
}

export default App;
