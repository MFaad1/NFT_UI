import "../style/Roadmap.scss";
import video from "../assets/FileVideo.mp4";
function RoadMap() {
  const AvtarARra: any = [
    {
      id: 1,
      phaseName: "Phase - I",
      listdetails: [
        "Goal Defining",
        "Market Research",
        "Whitepaper v1",
        "Initial Funding Secured",
      ],
      Avtarurl: "imgs/avatar.png",
      position: "right",
    },
    {
      id: 2,
      phaseName: "Phase II",
      listdetails: [
        "AI Generative System Development ",
        "Early AI Generative System Testing",
        "Preparing for NFT Mask Collection Launch",
        "Website launch V1",
        "Whitelisting",
      ],
      Avtarurl: "imgs/avatar2.png",
      position: "left",
      class: "avtar2",
    },
    {
      id: 3,
      phaseName: "Phase III",
      listdetails: [
        "NFT Minting ",
        "3dotlink NFT Collection Launch",
        "Active Marketing Campaigns",
        "Community Engagement Initiatives",
        "3dotlink Marketplace Launch",
      ],
      Avtarurl: "imgs/avatar3.png",
      position: "right",
    },
    {
      id: 4,
      phaseName: "Phase IV",
      listdetails: [
        "Collaborations & Partnerships",
        "Enhanced AI Generative System",
        "Global Outreach Marketing",
        "Staking",
      ],
      Avtarurl: "imgs/avatar4.png",
      position: "left",
    },
  ];
  return (

    <>
    <div className="Roadmap_section">
      {/* Intro Secton */}
      <div className="Roadmap_intro">
        <h1>
          Road<span>map</span>
        </h1>
        <p>Guiding the fusion of culture, AI, and Web3 innovation</p>
      </div>

      {/* RoadMap Section */}

      <div className="RoadMap_main_Container">
        {AvtarARra.map((item: any, index: any) => {
          return (
            <>
              <div className="roadMap_main_sec">
               <div className="roadmap_straight_line_container"> <img src="imgs/switchbtn.png" alt="switch" /> <div className="roadmap_straight_line"></div></div> 
            <div key={index} className="Roadmap_container">
              <div className={item.position == "left" ? "phase-left" : "phase"}>
                <p>{item.phaseName}</p>
              </div>

              <div
                className={
                  item.position != "left"
                    ? "RoadMap_Details_Container"
                    : "RoadMap_Details_Container-left"
                }
              >
                <div
                  className={
                    item.position != "left"
                      ? "RoadMap_Details_inner_Container"
                      : "RoadMap_Details_inner_Container_left"
                  }
                >
                  <ul>
                    {item.listdetails.map((list: string, index: any) => (
                      <li key={index}>{list}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <>
                <div
                  className={
                    item.position != "left"
                      ? "RoadMaP_VideoContainer"
                      : "RoadMaP_VideoContainer_left"
                  }
                >
                  <video autoPlay muted loop src={video}></video>
                </div>

                <div
                  className={
                    item.position != "left"
                      ? "avatarProfile" + item.id
                      : "avatarProfile_left" + item.id
                  }
                >
                  <img src={item.Avtarurl} alt="AvatarPhoto" />
                </div>
              </>
            </div>
            </div>
            </>
          );
        })}
      </div>
    </div>


    <div className="roadmap-Sections">

<p>
<svg width="35" height="46" viewBox="0 0 35 46" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M34 43.6986L34 43.7002C34.0004 43.9341 33.9357 44.1647 33.8115 44.367C33.6872 44.5695 33.5075 44.7368 33.2903 44.8487C33.073 44.9608 32.8275 45.0126 32.5807 44.9974C32.334 44.9823 32.0975 44.9009 31.8968 44.7637L31.8955 44.7628L1.5088 24.0628C1.50852 24.0626 1.50824 24.0624 1.50796 24.0622C1.19726 23.8496 0.999999 23.456 0.999999 22.996C0.999999 22.5356 1.19757 22.1429 1.50777 21.9316L1.50793 21.9315L31.8921 1.2332C31.8927 1.23279 31.8933 1.23238 31.8939 1.23197C32.0951 1.0966 32.3314 1.0167 32.5775 1.00234C32.8243 0.98794 33.0698 1.04017 33.2872 1.15235C33.5044 1.26446 33.6842 1.4316 33.809 1.63396C33.9335 1.83587 33.9991 2.06592 34 2.29956C34 2.29992 34 2.30027 34 2.30062L34 43.6986Z" stroke="white" stroke-width="2"/>
</svg>
</p>


<p>
<svg width="35" height="46" viewBox="0 0 35 46" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.91529e-06 43.6986L5.725e-06 2.29744C0.00134089 1.87827 0.11883 1.4674 0.339827 1.10905C0.560824 0.7507 0.876955 0.458441 1.2542 0.263731C1.63144 0.0690217 2.05551 -0.0207648 2.48076 0.00403453C2.906 0.0288377 3.31632 0.167288 3.66755 0.404482L34.0551 21.1051C35.315 21.963 35.315 24.0285 34.0551 24.8887L3.66754 45.5893C3.31705 45.8289 2.90652 45.9694 2.48057 45.9955C2.05462 46.0217 1.62953 45.9325 1.25148 45.7376C0.873444 45.5427 0.556904 45.2496 0.336266 44.8901C0.115631 44.5307 -0.00066749 44.1186 3.91529e-06 43.6986Z" fill="white"/>
</svg>
</p>


    </div>
    </>



  );
}

export default RoadMap;
