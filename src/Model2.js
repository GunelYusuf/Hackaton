import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Model2() {
  const [result, setResult] = useState(0);

  const handleCustomerAgeChange = (event) => {
    setFormData({
      ...formData,
      Customer_Age: event.target.value,
    });
  };

  const handleTotalRelationshipCountChange = (event) => {
    setFormData({ ...formData, Total_Relationship_Count: event.target.value });
  };

  const handleMonthsInactive12monChange = (event) => {
    setFormData({ ...formData, months_inactive_12_mon: event.target.value });
  };

  const handleContactsCount12monChange = (event) => {
    setFormData({ ...formData, contacts_count_12_mon: event.target.value });
  };

  const handleCreditLimitChange = (event) => {
    setFormData({ ...formData, credit_limit: event.target.value });
  };

  const handleTotalRevolvingBalChange = (event) => {
    setFormData({ ...formData, total_revolving_bal: event.target.value });
  };

  const handleAvgOpenToBuyChange = (event) => {
    setFormData({ ...formData, avg_open_to_buy: event.target.value });
  };

  const handleTotalAmtChngQ4Q1Change = (event) => {
    setFormData({ ...formData, total_amt_chng_q4_q1: event.target.value });
  };


  const handleColorChange = (event) => {
    const selectedColor = event.target.value;
    setFormData((prevFormData) => ({
      ...prevFormData,
      blue: selectedColor === "blue",
      gold: selectedColor === "gold",
      silver: selectedColor === "silver",
      platinum: selectedColor === "platinum",
    }));
  };

  const [formData, setFormData] = useState({
    Customer_Age: 0,
    Total_Relationship_Count: 0,
    months_inactive_12_mon: 0,
    contacts_count_12_mon: 0,
    credit_limit: 0,
    total_revolving_bal: 0,
    avg_open_to_buy: 0,
    total_amt_chng_q4_q1: 0,
    blue: 0,
    gold: 0,
    silver: 0,
    platinum: 0,
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Form verilerini bir API'ye gönderme işlemi
    const updatedFormData = {
      customer_age: formData.customer_age,
      total_relationship_count: formData.total_relationship_count,
      months_inactive_12_mon: formData.months_inactive_12_mon,
      contacts_count_12_mon: formData.contacts_count_12_mon,
      credit_limit: formData.credit_limit,
      total_revolving_bal: formData.total_revolving_bal,
      avg_open_to_buy: formData.avg_open_to_buy,
      total_amt_chng_q4_q1: formData.total_amt_chng_q4_q1,
      blue: formData.blue,
      gold: formData.gold,
      silver: formData.silver,
      platinum: formData.platinum,
    };

    try {
      const response = await axios({
        url: "http://10.30.0.31:8000/predict_creditcard",
        headers: {
          "Content-Type": "application/json",
        },
        data: JSON.stringify({
          Customer_age: 0,
          Total_Relationship_Count: 0,
          Months_Inactive_12_mon: 0,
          Contacts_Count_12_mon: 0,
          Credit_Limit: 0,
          Total_Revolving_Bal: 0,
          Avg_Open_To_Buy: 0,
          Total_Amt_Chng_Q4_Q1: 0,
          Blue: 0,
          Gold: 0,
          Platinum: 0,
          Silver: 0,
        }),
        method: "POST",
      });
      console.log(response.data);
      //   setResult(JSON.stringify(response.data.prediction));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      style={{
        backgroundColor: "orange",
        width: "100%",
        borderRadius: "10px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1
        style={{
          color: "white",
          fontSize: "40px",
          fontWeight: "bold",
          zIndex: "1",
          marginTop: "20px",
          padding: "10 30px",
          textAlign: "center",
        }}
      >
        Müştəri məlumatlarını daxil edin
      </h1>
      <form onSubmit={handleSubmit}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
              margin: "25px",
              padding: "20px",
              width: "220px",
            }}
          >
            <div
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <label
                style={{
                  color: "#005b7f",
                  fontSize: "20px",
                  fontWeight: "bold",
                  padding: "5px",
                }}
              >
                Müştəri Yaşı:
              </label>
              <input
                style={{
                  width: "150px",
                  height: "35px",
                  borderRadius: "5px",
                  border: "1px solid #005b7f",
                  padding: "5px",
                }}
                type="number"
                id="customer_age"
                name="customer_age"
                required
                value={formData.Customer_Age}
                onChange={handleCustomerAgeChange}
              />
            </div>

            <div
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <label
                style={{
                  color: "#005b7f",
                  fontSize: "20px",
                  fontWeight: "bold",
                  padding: "5px",
                }}
              >
                Total Relationship Count:
              </label>
              <input
                style={{
                  width: "150px",
                  height: "35px",
                  borderRadius: "5px",
                  border: "1px solid #005b7f",
                  padding: "5px",
                }}
                type="number"
                id="total_relationship_count"
                name="total_relationship_count"
                required
                value={formData.Total_Relationship_Count}
                onChange={handleTotalRelationshipCountChange}
              />
            </div>

            <div
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <label
                style={{
                  color: "#005b7f",
                  fontSize: "20px",
                  fontWeight: "bold",
                  padding: "5px",
                }}
              >
                Months Inactive 12 Mon:
              </label>
              <input
                style={{
                  width: "150px",
                  height: "35px",
                  borderRadius: "5px",
                  border: "1px solid #005b7f",
                  padding: "5px",
                }}
                type="number"
                id="months_inactive_12_mon"
                name="months_inactive_12_mon"
                required
                value={formData.months_inactive_12_mon}
                onChange={handleMonthsInactive12monChange}
              />
            </div>

            <div
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <label
                style={{
                  color: "#005b7f",
                  fontSize: "20px",
                  fontWeight: "bold",
                  padding: "5px",
                }}
              >
                Contacts Count 12 Mon:
              </label>
              <input
                style={{
                  width: "150px",
                  height: "35px",
                  borderRadius: "5px",
                  border: "1px solid #005b7f",
                  padding: "5px",
                }}
                type="number"
                id="contacts_count_12_mon"
                name="contacts_count_12_mon"
                required
                value={formData.contacts_count_12_mon}
                onChange={handleContactsCount12monChange}
              />
            </div>

            <div
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <label
                style={{
                  color: "#005b7f",
                  fontSize: "20px",
                  fontWeight: "bold",
                  padding: "5px",
                }}
              >
                Credit Limit:
              </label>
              <input
                style={{
                  width: "150px",
                  height: "35px",
                  borderRadius: "5px",
                  border: "1px solid #005b7f",
                  padding: "5px",
                }}
                type="number"
                id="credit_limit"
                name="credit_limit"
                required
                value={formData.credit_limit}
                onChange={handleCreditLimitChange}
              />
            </div>
          </div>

          {/* salam */}

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
              margin: "25px",
              padding: "20px",
              width: "220px",
            }}
          >
            <div
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginLeft: "20px",
              }}
            >
              <label
                style={{
                  color: "#005b7f",
                  fontSize: "20px",
                  fontWeight: "bold",
                  padding: "5px",
                }}
              >
                Total Revolving Bal:
              </label>
              <input
                style={{
                  width: "150px",
                  height: "35px",
                  borderRadius: "5px",
                  border: "1px solid #005b7f",
                  padding: "5px",
                }}
                type="number"
                id="total_revolving_bal"
                name="total_revolving_bal"
                required
                value={formData.total_revolving_bal}
                onChange={handleTotalRevolvingBalChange}
              />
            </div>

            <div
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginLeft: "20px",
                alignItems: "center",
              }}
            >
              <label
                style={{
                  color: "#005b7f",
                  fontSize: "20px",
                  fontWeight: "bold",
                }}
              >
                Avg Open To Buy:
              </label>
              <input
                style={{
                  width: "150px",
                  height: "35px",
                  borderRadius: "5px",
                  border: "1px solid #005b7f",
                  padding: "5px",
                  alignItems: "center",
                }}
                type="number"
                id="avg_open_to_buy"
                name="avg_open_to_buy"
                required
                value={formData.avg_open_to_buy}
                onChange={handleAvgOpenToBuyChange}
              />
            </div>

            <div
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginLeft: "20px",
                alignItems: "center",
              }}
            >
              <label
                style={{
                  color: "#005b7f",
                  fontSize: "20px",
                  fontWeight: "bold",
                  marginRight: "20px",
                  alignItems: "center",
                }}
              >
                Total Amt Chng Q4 Q1:
              </label>
              <input
                style={{
                  width: "150px",
                  height: "35px",
                  borderRadius: "5px",
                  border: "1px solid #005b7f",
                  padding: "5px",
                  alignItems: "center",
                }}
                type="number"
                id="total_amt_chng_q4_q1"
                name="total_amt_chng_q4_q1"
                required
                value={formData.total_amt_chng_q4_q1}
                onChange={handleTotalAmtChngQ4Q1Change}
              />
            </div>

            <div
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginLeft: "20px",
                alignItems: "center",
              }}
            >
              <label
                style={{
                  color: "#005b7f",
                  fontSize: "20px",
                  fontWeight: "bold",
                  marginRight: "20px",
                  alignItems: "center",
                }}
              >
                Color:
              </label>

              <div>
                <input
                  type="radio"
                  id="blue"
                  name="color"
                  value="blue"
                  checked={formData.blue}
                  onChange={handleColorChange}
                />
                <label
                  style={{
                    color: "#005b7f",
                    fontSize: "20px",
                    fontWeight: "bold",
                    marginRight: "20px",
                    alignItems: "center",
                  }}
                  htmlFor="blue"
                >
                  Blue
                </label>
              </div>

              <div>
                <input
                  type="radio"
                  id="gold"
                  name="color"
                  value="gold"
                  checked={formData.gold}
                  onChange={handleColorChange}
                />
                <label
                  style={{
                    color: "#005b7f",
                    fontSize: "20px",
                    fontWeight: "bold",
                    marginRight: "20px",
                    alignItems: "center",
                  }}
                  htmlFor="gold"
                >
                  Gold
                </label>
              </div>

              <div>
                <input
                  type="radio"
                  id="silver"
                  name="color"
                  value="silver"
                  checked={formData.silver}
                  onChange={handleColorChange}
                />
                <label
                  style={{
                    color: "#005b7f",
                    fontSize: "20px",
                    fontWeight: "bold",
                    alignItems: "center",
                  }}
                  htmlFor="silver"
                >
                  Silver
                </label>
              </div>

              <div>
                <input
                  type="radio"
                  id="platinum"
                  name="color"
                  value="platinum"
                  checked={formData.platinum}
                  onChange={handleColorChange}
                />
                <label
                  style={{
                    color: "#005b7f",
                    fontSize: "20px",
                    fontWeight: "bold",
                    marginRight: "20px",
                    alignItems: "center",
                  }}
                  htmlFor="platinum"
                >
                  Platinum
                </label>
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <button
            style={{
              width: "200px",
              height: "40px",
              borderRadius: "15px",
              border: "1px solid #005b7f",
              backgroundColor: "green",
              color: "white",
              fontSize: "20px",
              fontWeight: "bold",
              marginRight: "20px",
              marginTop: "40px",
            }}
            type="submit"
          >
            Daxil et
          </button>
        </div>

        <div>
          <h1
            style={{
              color: "white",
              fontSize: "40px",
              fontWeight: "bold",
              zIndex: "1",
              marginTop: "20px",
              textAlign: "center",
            }}
          >
            {result}
          </h1>
        </div>
      </form>
    </div>
  );
}
