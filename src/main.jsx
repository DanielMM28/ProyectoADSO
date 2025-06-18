import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Rutas from './rutas.jsx'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { AuthProvider } from './autenticacion.jsx';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // ← obligatorio para que funcionen los dropdowns
import 'datatables.net-bs5';
import 'datatables.net-bs5/css/dataTables.bootstrap5.min.css';


createRoot(document.getElementById('root')).render(

  <StrictMode>
    <AuthProvider>

     <Rutas />
     <AuthProvider>
    </AuthProvider>
    </AuthProvider>
  </StrictMode>,
)
