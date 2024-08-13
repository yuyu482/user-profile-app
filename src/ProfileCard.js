import React, {useState} from "react";

const ProfileCard = ({ name, email, avatar, onDelete}) => {
    const [showDetails, setShowDetails] = useState(false);

    return (
        <div className="profile-card">
            <img src={avatar} alt="User Avatar" />
            <h2>{ name }</h2>
            <p>Email: { email }</p>
            <button onClick={() => setShowDetails(!showDetails)}>
                {showDetails ? 'Hide Details' : 'Show Details'}
            </button>
            {showDetails && (
                <div className="details">
                    <p>More details about {name}...</p>
                </div>
            )}
            <button onClick={onDelete}>Delete</button>
        </div>
    );
}

export default ProfileCard;