import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Home from "./pages/home"
import Projects from "./pages/projects"
import Contact from "./pages/contact"
import Header from "./components/header"
import Footer from "./components/footer"

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projetos" element={<Projects />} />
            <Route path="/contato" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
