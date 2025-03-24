import React from 'react';
import './FixedMessage.css';

function FixedMessage() {
    const handleClose = () => {
        // Logique pour fermer le message
        document.querySelector(".fixed-message").style.display = "none";
    };

    return (
        <div className="fixed-message">
            <span className="close-btn" onClick={handleClose}>❌</span>
            <p>💼 Je suis actuellement à la recherche d'un stage !</p>
        </div>
    );
}

export default FixedMessage;
