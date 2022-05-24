import CCoffee from "./components/CCoffee";
import ContactForm from "./components/ContactForm";
import FCoffee from "./components/FCoffee";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./components/Home";


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contactform" element={ <ContactForm />} />
        <Route path="/coffees" element={ <FCoffee firstName='Ludwigson' />} />

      </Routes>
      {/* <CCoffee firstName='Ludwigson' /> */}
      
      
    </BrowserRouter>
    </>
  );
}

export default App;
