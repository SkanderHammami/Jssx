import niceHouse from "./house.jpg"
import './App.css';
import vvideo from "../src/vpharaon.mp4"


function App() {
  return (
    <div style={{border:"1px", border: "solid", border : "black",maxWidth:"100vw"}}>
      <h1 class="title red">
       Skander Hammami
      </h1>
      <img height={800} src="/pyramide.jpg" alt="photoPyramide"/>
      <img height={600} src={niceHouse} alt="Housee"/>

      <video controls autostart autoPlay height={300} src={vvideo} type="video/mp4" />

    </div>
  );
}

export default App;
