import { useState } from "react";
import "./Profile.css";

const Profile = () => {
  fetch("/data/food.csv")
    .then((response) => response.text())
    .then((data) => {
      console.log(data);
    });
  const data = {
    // db에서 조회된 데이터
    Name: "민지",
    Weight: "43",
    Height: "169",
    PhotoUrl:
      "https://photo.newsen.com/news_photo/2022/08/19/202208190914415510_1.jpg",
    Email: "minji@win.co.kr",
    Calories: "1500",
    Protein: "120",
    Carbohydrate: "120",
    Fat: "50",
  };
  const [isEdit, setIsEdit] = useState(false);
  const [name, setName] = useState(data.Name);
  const [weight, setWeight] = useState(data.Weight);
  const [height, setHeight] = useState(data.Height);
  const [photoUrl, setPhotoUrl] = useState(data.PhotoUrl);
  const [email, setEmail] = useState(data.Email);
  const [calories, setCalories] = useState(data.Calories);
  const [protein, setProtein] = useState(data.Protein);
  const [carbohydrate, setCarbohydrate] = useState(data.Carbohydrate);
  const [fat, setFat] = useState(data.Fat);

  const handleEditToggle = () => {
    setIsEdit(!isEdit);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleWeightChange = (e) => {
    setWeight(e.target.value);
  };

  const handleHeightChange = (e) => {
    setHeight(e.target.value);
  };

  const handlePhotoUrlChange = (e) => {
    setPhotoUrl(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleCaloriesChange = (e) => {
    setCalories(e.target.value);
  };

  const handleProteinChange = (e) => {
    setProtein(e.target.value);
  };

  const handleCarbohydrateChange = (e) => {
    setCarbohydrate(e.target.value);
  };

  const handleFatChange = (e) => {
    setFat(e.target.value);
  };

  return (
    <div className="profile-container">
      <div className="profile-item">
        <button onClick={handleEditToggle}>{isEdit ? "Save" : "Edit"}</button>
      </div>
      {isEdit ? (
        <>
          <div className="profile-item">
            <label htmlFor="name-input">Name: </label>
            <input
              type="text"
              id="name-input"
              value={name}
              onChange={handleNameChange}
            />
          </div>
          <br />
          <div className="profile-item">
            <label htmlFor="weight-input">Weight: </label>
            <input
              type="number"
              id="weight-input"
              value={weight}
              onChange={handleWeightChange}
            />
          </div>
          <br />
          <div className="profile-item">
            <label htmlFor="height-input">Height: </label>
            <input
              type="number"
              id="height-input"
              value={height}
              onChange={handleHeightChange}
            />
          </div>
          <br />
          <div className="profile-item">
            <img width={400} src={photoUrl} alt="Profile" />
          </div>
          <div className="profile-item">
            <label htmlFor="photo-url-input">Photo URL: </label>
            <input
              type="text"
              id="photo-url-input"
              value={photoUrl}
              onChange={handlePhotoUrlChange}
            />
          </div>
          <br />
          <div className="profile-item">
            <label htmlFor="email-address-input">Email : </label>
            <input
              type="email"
              id="email-address-input"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <br />
          <div className="profile-item">
            <label htmlFor="calories-input">일일 칼로리: </label>
            <input
              type="number"
              id="calories-input"
              value={calories}
              onChange={handleCaloriesChange}
            />
          </div>
          <br />
          <div className="profile-item">
            <label htmlFor="protein-input">일일 단백질: </label>
            <input
              type="number"
              id="protein-input"
              value={protein}
              onChange={handleProteinChange}
            />
          </div>
          <br />
          <div className="profile-item">
            <label htmlFor="carbohydrate-input">일일 탄수화물: </label>
            <input
              type="number"
              id="carbohydrate-input"
              value={carbohydrate}
              onChange={handleCarbohydrateChange}
            />
          </div>
          <br />
          <div className="profile-item">
            <label htmlFor="fat-input">일일 지방: </label>
            <input
              type="number"
              id="fat-input"
              value={fat}
              onChange={handleFatChange}
            />
          </div>
        </>
      ) : (
        <>
          <div className="profile-item">
            <h1>{name}</h1>
          </div>
          <div className="profile-item">
            <p>Weight: {weight}</p>
          </div>
          <div className="profile-item">
            <p>Height: {height}</p>
          </div>
          <div className="profile-item">
            <img width={400} src={photoUrl} alt="Profile" />
          </div>
          <div className="profile-item">
            <p>
              Email: <a href={`mailto:${email}`}>{email}</a>
            </p>
          </div>
          <div className="profile-item">
            <p>일일 칼로리: {calories} kcal</p>
          </div>
          <div className="profile-item">
            <p>일일 단백질: {protein} g</p>
          </div>
          <div className="profile-item">
            <p>일일 탄수화물: {carbohydrate} g</p>
          </div>
          <div className="profile-item">
            <p>일일 지방: {fat} g</p>
          </div>
        </>
      )}
    </div>
  );
};

export default Profile;
