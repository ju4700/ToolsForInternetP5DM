import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden md:max-w-2xl">
        <div className="md:flex">
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              React App with Tailwind CSS
            </div>
            <h1 className="block mt-1 text-lg leading-tight font-medium text-black">
              Welcome to your styled app!
            </h1>
            <p className="mt-2 text-gray-500">
              This is a demo showing Tailwind CSS working in your React application.
            </p>
            <div className="mt-4">
              <img src={logo} className="h-20 w-20 animate-spin mx-auto" alt="logo" />
            </div>
            <div className="mt-6">
              <a
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>  
  );
}

export default App;
