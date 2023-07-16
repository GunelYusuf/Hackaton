import React, { useState } from 'react';
import axios from 'axios';

export default function Model3() {

  const [file, setFile] = useState()
  const [uploadedFile, setUploadedFile] = useState();
  const [error, setError] = useState();

  function handleChange(event) {
    setFile(event.target.files[0])
  }

  function handleSubmit(event) {
    event.preventDefault()
    const url = 'http://10.30.0.31:8000/';
    const formData = new FormData();
    formData.append('file', file);
    formData.append('fileName', file.name);
    const config = {
      headers: {
        'content-type': 'multipart/form-data',
      },
    };
    axios.post(url, formData, config).then((response) => {
        console.log(response.data);
        setUploadedFile(response.data.file);
      })
      .catch((error) => {
        console.error("Error uploading file: ", error);
        setError(error);
      });

  }
  return (
    <div className="App" style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      width: "100vw",
      backgroundColor: "orange",
    }}>
      <form onSubmit={handleSubmit}>
        <h1
          style={{
            color: "#005b7f",
            fontSize: "30px",
            fontWeight: "bold",

          }}
        >
          Şəkil seçin:
        </h1>
        <input type="file" onChange={handleChange} />
        <button style={{
          backgroundColor: "#005b7f",
          color: "white",
          fontSize: "20px",
          fontWeight: "bold",
          padding: "10px",
          borderRadius: "10px",
          marginTop: "10px",

        }} type="submit">Yüklə</button>
      </form>
      {uploadedFile && <img src={uploadedFile} alt="Uploaded content" />}
      {error && <p>Error uploading file: {error.message}</p>}
    </div>
  );
}