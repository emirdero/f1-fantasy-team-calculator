import React from "react";

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
            {props.items.map((constructor) => {
              return (
                <a
                  onClick={() => {
                    props.setConstructor(constructor);
                    closeModal();
                  }}
                  className='card'
                >
                  <p className='pluss'>
                    {constructor.name}
                    <br />${constructor.price} -{" "}
                    {constructor.average_score_current_season.toFixed(2)} points
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

export default Modal;
