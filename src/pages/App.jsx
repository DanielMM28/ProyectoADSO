import Navbar from '../components/navbar';

function App() {
  return (
    <>
      <Navbar />
      <div className="container mt-5 mb-5">
        <div className="card shadow-lg border-0">
          <div className="card-body">
            <h2 className="card-title text-center mb-4">
              🛍️ Bienvenido a Nuestra Tienda Virtual
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
