import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            Personality Assessment App
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Discover your unique personality type through our comprehensive 32-question assessment
          </p>
          
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 max-w-md mx-auto">
            <h2 className="text-2xl font-semibold text-white mb-4">
              Development Status
            </h2>
            <div className="space-y-3">
              <div className="flex items-center justify-between text-white">
                <span>✅ Vite Setup</span>
                <span className="text-green-300">Complete</span>
              </div>
              <div className="flex items-center justify-between text-white">
                <span>✅ Tailwind CSS v4</span>
                <span className="text-green-300">Complete</span>
              </div>
              <div className="flex items-center justify-between text-white">
                <span>⏳ Backend Setup</span>
                <span className="text-yellow-300">In Progress</span>
              </div>
            </div>
            
            <button 
              onClick={() => setCount(count + 1)}
              className="mt-6 bg-white text-purple-600 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              Test Counter: {count}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
