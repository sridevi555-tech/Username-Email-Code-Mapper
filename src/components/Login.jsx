import  { useState } from "react";

const LoginPage = () => {
  const [data, setData] = useState({
    userName: "",
    email: "",
  });

  const [saveData, setSavedData] = useState([]);

  let { userName, email } = data;

  const handleChange = ({ target: { name, value } }) => {
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSave = () => {
    setSavedData((prevState) => [...prevState, { userName, email }]);
    setData({
      userName: "",
      email: "",
    });
  };

  console.log("saved", saveData);

  return (
    <>
      <br />
      <br />
      <label>UserName:</label>
      <input
        type="text"
        name="userName"
        value={userName}
        onChange={handleChange}
      />
      <label>Email</label>
      <input type="text" name="email" value={email} onChange={handleChange} />
      <button onClick={handleSave}>Save</button>
      <h2>SAVED USER DATA</h2>
      {saveData.map((details) => (
        <>
          <div>USERNAME:{details.userName}</div>
          <div>EMAIL:{details.email}</div>
        </>
      ))}
    </>
  );
};

export default LoginPage;
