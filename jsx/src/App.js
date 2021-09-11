import "./App.css";
import imageInSrc from "./imageInSrc.jpg";
import "./style.css";
function App() {
  return (
    <div className="bdy">
      <div
        className="sst"
        style={{ border: "solid 1px black", maxWidth: "100vw" }}
      >
        <h1 className="title red">Ayoub Jairi</h1>
        <br />

        <img src={imageInSrc} alt="images" />

        <img src="/imageInPublic.jpg" alt="img" />
      </div>
      <video width={320} height={240} controls>
        <source src="myVideo.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

export default App;
