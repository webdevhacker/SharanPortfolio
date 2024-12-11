import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react"

import { Footer, Navbar } from "./components";
import { About, Contact, Projects, Homepage } from "./pages";
import { SpeedInsights } from "@vercel/speed-insights/react";
const App = () => {
  return (
    <main className='bg-slate-300/20'>
      <SpeedInsights />
      <Analytics/>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route
            path='/*'
            element={
              <>
                <Routes>
                  <Route path='/about' element={<About />} />
                  <Route path='/projects' element={<Projects />} />
                  <Route path='/contact' element={<Contact />} />
                </Routes>
                <Footer />
              </>
            }
          />
        </Routes>
      </Router>
    </main>
  );
};

export default App;
