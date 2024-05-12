import Feed from './components/Feed';
import Input from './components/Input';

function App() {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-slate-300 p-4">
      <div className="flex h-full max-h-[800px] w-full max-w-[600px] flex-col rounded-xl bg-white p-4">
        <div className="flex flex-col items-center">
          <h1 className="text-lg font-bold">Townhall</h1>
          <p className="mb-2 text-slate-600">
            Welcome to The Townhall. Drop a message below!
          </p>
        </div>
        <Feed />
        <Input />
      </div>
    </div>
  );
}

export default App;
