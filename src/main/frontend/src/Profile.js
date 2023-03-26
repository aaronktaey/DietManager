import { useState } from "react";
import "./Profile.css";

const Profile = () => {
  const data = {
    // db에서 조회된 데이터
    Name: "민지",
    Weight: "43",
    Height: "169",
    PhotoUrl:
      "https://photo.newsen.com/news_photo/2022/08/19/202208190914415510_1.jpg",
    Email: "minji@win.co.kr",
  };
  const [name, setName] = useState(data.Name);
  const [weight, setWeight] = useState(data.Weight);
  const [height, setHeight] = useState(data.Height);
  const [photoUrl, setPhotoUrl] = useState(data.PhotoUrl);
  const [emailAddress, setEmailAddress] = useState(data.Email);

  return (
    <div className="profile-container">
      <div className="profile-item">
        <h1>{name}</h1>
      </div>
      <div className="profile-item">
        <img width={400} src={photoUrl} alt="Profile photo" />
      </div>
      <div className="profile-item">
        <p>Weight: {weight}</p>
      </div>
      <div className="profile-item">
        <p>Height: {height}</p>
      </div>
      <div className="profile-item">
        <p>
          Email: <a href={`mailto:${emailAddress}`}>{emailAddress}</a>
        </p>
      </div>
    </div>
  );
};

export default Profile;
