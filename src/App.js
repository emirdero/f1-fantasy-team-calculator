import React from "react";
import "./App.css";

export default function Home() {
  const [team, setTeam] = React.useState(
    Array(6).fill({ price: 0, average_score_current_season: 0 })
  );

  const [drivers, setDrivers] = React.useState([]);
  const [selected, setSelected] = React.useState(0);
  const [constructors, setConstructors] = React.useState([]);

  React.useEffect(() => {
    fetch("https://f1-fantasy-tools-api.herokuapp.com//drivers")
      .then((response) => response.json())
      .then((data) => setDrivers(data));

    fetch("https://f1-fantasy-tools-api.herokuapp.com//constructors")
      .then((response) => response.json())
      .then((data) => setConstructors(data));
  }, []);

  return (
    <div className='container'>
      <head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </head>
      <div id='modal-root'></div>
      <Modal
        id='constructorModal'
        items={constructors}
        setConstructor={(constructor) =>
          setTeam((prevTeam) => {
            prevTeam[selected] = constructor;
            return [...prevTeam];
          })
        }
      ></Modal>
      <Modal
        id='driverModal'
        items={drivers}
        setConstructor={(constructor) =>
          setTeam((prevTeam) => {
            prevTeam[selected] = constructor;
            return [...prevTeam];
          })
        }
      ></Modal>

      <main>
        <h1 className='title'>F1 Fantasy Team Calculator</h1>

        <p className='description'>
          Add drivers and a constructor to see their expected points
        </p>
        <p className='description'>
          Expected return:{" "}
          {team
            .reduce((previous_value, current_driver, index) => {
              // Add turbo driver bonus
              const avg = current_driver.average_score_current_season;
              const points = index == 1 ? avg * 2 : avg;
              return {
                average_score_current_season:
                  previous_value.average_score_current_season + points,
              };
            })
            .average_score_current_season.toFixed(2)}{" "}
          points <br /> Total cost: $
          {team
            .reduce((previous_value, current_driver) => {
              return { price: previous_value.price + current_driver.price };
            })
            .price.toFixed(2)}{" "}
          Million
        </p>

        <div className='grid'>
          {team.map((item, index) => (
            <a
              key={"card" + index}
              onClick={() => {
                document.getElementById(
                  index == 0 ? "constructorModal" : "driverModal"
                ).style.display = "block";
                setSelected(index);
              }}
              className='card'
              style={{
                backgroundColor: item.color,
                color:
                  item.price == 0 || item.color == "#ffffff"
                    ? "black"
                    : "white",
              }}
            >
              {item.price == 0 ? (
                <span>
                  <h1 className='pluss'> &#43;</h1>
                  <p className='pluss'>
                    Add{" "}
                    {index == 0
                      ? "constructor"
                      : index == 1
                      ? "turbo driver"
                      : "driver"}
                  </p>
                </span>
              ) : (
                <span>
                  <h1 className='pluss'> {item.name}</h1>
                  <p className='pluss'>
                    ${item.price} -{" "}
                    {index == 1
                      ? (item.average_score_current_season * 2).toFixed(2) +
                        " points (turbo driver)"
                      : item.average_score_current_season.toFixed(2) +
                        " points"}
                  </p>
                </span>
              )}
            </a>
          ))}
        </div>
      </main>
    </div>
  );
}

function Modal(props) {
  const closeModal = () =>
    (document.getElementById(props.id).style.display = "none");
  return (
    <div id={props.id} className='modal'>
      <div className='modal-content'>
        <a onClick={closeModal}>
          <span className='close'>&times;</span>
        </a>
        <div>
          <div className='grid' style={{ maxWidth: 500000 }}>
            {props.items.map((item, index) => {
              return (
                <a
                  key={props.id + index}
                  onClick={() => {
                    props.setConstructor(item);
                    closeModal();
                  }}
                  className='card'
                  style={{
                    borderColor: item.color,
                    borderWidth: 5,
                  }}
                >
                  <p className='pluss'>
                    {item.name}
                    <br />${item.price} -{" "}
                    {item.average_score_current_season.toFixed(2)} points
                  </p>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
