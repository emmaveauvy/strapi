import React from 'react';

const PinPopup = ({ pin, onClose }) => {
  return (
    <div className="popup">
      <div className="popup-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>{pin.attributes.title}</h2>
        {pin.images && pin.images.map(imageUrl => (
          <img key={imageUrl} src={imageUrl} alt={pin.title} />
        ))}
        <p>{pin.attributes.body}</p>
      </div>
    </div>
  );
};

export default PinPopup;
