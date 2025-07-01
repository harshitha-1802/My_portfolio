import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

createRoot(document.getElementById("root")!).render(<App />);

AOS.init();
