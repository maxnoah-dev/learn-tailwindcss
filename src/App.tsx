import './App.css'
import reactLogo from './assets/react.svg';

function App() {
  

  return (
    <body>
      <div className="mx-auto flex max-w-sm items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-state-800 dark:shadow-none dark:-outline-offset-1 dar">
          <img className="size-12 shrink-0" src={reactLogo} alt="React Logo"/>
          {/* <img src='./vite.svg' alt="Vite"/> */}
          <div>
            <div className="text-xl font-medium text-black dark:text-white">React Logo</div>
            <p className="text-gray-500 dark:text-gray-400">You have a new message</p>
          </div>
      </div>
    </body>
  )
}

export default App
