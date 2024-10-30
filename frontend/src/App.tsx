import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home/Home";
import './App.scss';


import mail from './assets/images/email/mail.svg';
import phone from './assets/images/email/phone.svg';
import whatsapp from './assets/images/email/whatsapp.svg';
import telegram from './assets/images/email/telegram.svg';
import linkedin from './assets/images/email/linkedin.svg';

function App() {
  useEffect(() => {
    // fetch('/backend/date')
    //   .then(response => {
    //     if (!response.ok) {
    //       throw new Error("Network response was not ok");
    //     }
    //     response.text().then(text => console.log(text));
    //   })
    //   .catch(error => console.error("There was an error!", error));
  }, []);

  console.log('Mail SVG Path:', mail);
  console.log('Phone SVG Path:', phone);
  console.log('WhatsApp SVG Path:', whatsapp);
  console.log('Telegram SVG Path:', telegram);
  console.log('LinkedIn SVG Path:', linkedin);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
