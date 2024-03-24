import mainVideo from "../assets/mainVideo.mp4";
import "../style/Main.scss";
import Cards from "./Cards";

function Main() {
  const CardsArray = [
    { imgUrl: "imgs/moneyBag.png", title: "Long-Term success and stability" },

    { imgUrl: "imgs/dramaMask.png", title: "Digital cultural exchange" },

    { imgUrl: "imgs/chase.png", title: "Empowering Artists" },

    { imgUrl: "imgs/unnamed.png", title: "Fostering a global community" },

    { imgUrl: "imgs/dramaMask2.png", title: "Preservation of cultural art" },
    { imgUrl: "imgs/unnamed (1).png", title: "Democratizing art globally" },
  ];
  return (
    <div className="main_Video_Div">
      <div className="main-video_innerDiv">
        <div className="Main_Video_inner">
          <video autoPlay muted loop className="video">
            <source src={mainVideo} type="video/mp4" />
          </video>
        </div>

        <div className="main-Cards">
          {CardsArray.map((item, index) => {
            return (
              <Cards key={index} imgUrl={item.imgUrl} title={item.title} />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Main;
