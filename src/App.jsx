import Titlecard from "./components/Titlecard";
import Footer from "./components/Footer";

function App() {

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-lightgrey p-8">
      <Titlecard/>
      <Footer/>
    </div>
  )
}

export default App;