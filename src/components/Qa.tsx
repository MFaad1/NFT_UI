import { useState } from "react";
import "../style/qa.scss";
import "bootstrap/dist/css/bootstrap.min.css";

function Qa() {
  const [navigateIcon, setNavigation] = useState<string>("General");

  const navigation: any = [
    {
      id: 1,
      name: "General",
    },
    {
      id: 2,
      name: "Pre ICO",
    },
    {
      id: 3,
      name: "Token",
    },
    {
      id: 4,
      name: "Client",
    },
    {
      id: 5,
      name: "Legal",
    },
  ];

  const AccordianArray = [
    "What kind of art does 3dotlink support?",
    "How are digital artworks verified for authenticity?",
    "Can artists access and manage their collections on 3dotlink?",
  ];

  return (
    <div className="qa_section">
      <div className="qa_container">
        <div className="qa_container_leftside">
          <div className="qa_container_leftside_intro">
            <h1>Have any question?</h1>
            <p>
              Curious about 3dotlink? Explore our frequently asked questions to
              find answers
            </p>

            <div className="qa_container_leftside_navigation_Buttons">
              {navigation.map((item: any) => {
                return (
                  <p
                    key={item.id}
                    onClick={() => setNavigation(item.name)}
                    className={navigateIcon == item.name ? "activeNav" : "nor"}
                  >
                    {item.name}
                  </p>
                );
              })}
            </div>

            <div className="Accordion_Section">
              <div
                className="accordion accordion-flush"
                id="accordionFlushExample"
              >
                <div className="accordion-item">
                  <h2 className="accordion-header" id="flush-headingOne">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseOne"
                      aria-expanded="false"
                      aria-controls="flush-collapseOne"
                    >
                      How do I create NFTs on 3dotlink?
                    </button>
                  </h2>
                  <div
                    id="flush-collapseOne"
                    className="accordion-collapse collapse"
                    aria-labelledby="flush-headingOne"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      Artists and creators can use our AI-integrated platform to
                      generate NFTs by providing specific inputs, such as the
                      desired features and elements for their digital artwork.
                    </div>
                  </div>
                </div>
              </div>

              <div className="accordion_name_Container">
                {AccordianArray.map((item) => {
                  return <p className="accordion_name">{item}</p>;
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="qa_container_rightside">
          <div>
            <img src="imgs/qaAvatar.png" alt="qaAvatar" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Qa;
