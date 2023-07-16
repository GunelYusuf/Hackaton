import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Model1() {
  const [result, setResult] = useState(0);

  const handleBatteryPowerChange = (event) => {
    setFormData({ ...formData, battery_power: event.target.value });
  };

  const handleBlueChange = (event) => {
    setFormData({ ...formData, blue: event.target.value });
  };

  const handleClockSpeedChange = (event) => {
    setFormData({ ...formData, clock_speed: event.target.value });
  };

  const handleDualSimChange = (event) => {
    setFormData({ ...formData, dual_sim: event.target.value });
  };

  const handleFcChange = (event) => {
    setFormData({ ...formData, fc: event.target.value });
  };

  const handleFourGChange = (event) => {
    setFormData({ ...formData, four_g: event.target.value });
  };

  const handleIntMemoryChange = (event) => {
    setFormData({ ...formData, int_memory: event.target.value });
  };

  const handleMDepChange = (event) => {
    setFormData({ ...formData, m_dep: event.target.value });
  };

  const handleMobileWtChange = (event) => {
    setFormData({ ...formData, mobile_wt: event.target.value });
  };

  const handleNCoresChange = (event) => {
    setFormData({ ...formData, n_cores: event.target.value });
  };

  const handlePcChange = (event) => {
    setFormData({ ...formData, pc: event.target.value });
  };

  const handlePxHeightChange = (event) => {
    setFormData({ ...formData, px_height: event.target.value });
  };

  const handlePxWidthChange = (event) => {
    setFormData({ ...formData, px_width: event.target.value });
  };

  const handleRamChange = (event) => {
    setFormData({ ...formData, ram: event.target.value });
  };

  const handleScHChange = (event) => {
    setFormData({ ...formData, sc_h: event.target.value });
  };

  const handleScWChange = (event) => {
    setFormData({ ...formData, sc_w: event.target.value });
  };

  const handleTalkTimeChange = (event) => {
    setFormData({ ...formData, talk_time: event.target.value });
  };

  const handleThreeGChange = (event) => {
    setFormData({ ...formData, three_g: event.target.value });
  };

  const handleTouchScreenChange = (event) => {
    setFormData({ ...formData, touch_screen: event.target.value });
  };

  const handleWifiChange = (event) => {
    setFormData({ ...formData, wifi: event.target.value });
  };

  const [formData, setFormData] = useState({
    battery_power: 0,
    blue: 0,
    clock_speed: 0,
    dual_sim: 0,
    fc: 0,
    four_g: 0,
    int_memory: 0,
    m_dep: 0,
    mobile_wt: 0,
    n_cores: 0,
    pc: 0,
    px_height: 0,
    px_width: 0,
    ram: 0,
    sc_h: 0,
    sc_w: 0,
    talk_time: 0,
    three_g: 0,
    touch_screen: 0,
    wifi: 0,
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Form verilerini bir API'ye gönderme işlemi
    const formData = {
      battery_power: 0,
      blue: 0,
      clock_speed: 0,
      dual_sim: 0,
      fc: 0,
      four_g: 0,
      int_memory: 0,
      m_dep: 0,
      mobile_wt: 0,
      n_cores: 0,
      pc: 0,
      px_height: 0,
      px_width: 0,
      ram: 0,
      sc_h: 0,
      sc_w: 0,
      talk_time: 0,
      three_g: 0,
      touch_screen: 0,
      wifi: 0,
    };

    try {
      const response = await axios({
        url: "http://10.30.0.31:8000/predict",
        headers: {
          "Content-Type": "application/json",
        },
        data: JSON.stringify(formData),
        method: "POST",
      });
      setResult(JSON.stringify(response.data.prediction));
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
                Battery Power:
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
                id="battery_power"
                name="battery_power"
                required
                value={formData.battery_power}
                onChange={handleBatteryPowerChange}
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
                Blue:
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
                id="blue"
                name="blue"
                required
                value={formData.blue}
                onChange={handleBlueChange}
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
                Clock Speed:
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
                id="clock_speed"
                name="clock_speed"
                required
                value={formData.clock_speed}
                onChange={handleClockSpeedChange}
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
                Dual Sim:
              </label>
              <select
                style={{
                  width: "150px",
                  height: "35px",
                  borderRadius: "5px",
                  border: "1px solid #005b7f",
                  padding: "5px",
                }}
                id="dual_sim"
                name="dual_sim"
                required
                value={formData.dual_sim}
                onChange={handleDualSimChange}
              >
                <option value="0">0</option>
                <option value="1">1</option>
              </select>
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
                FC:
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
                id="fc"
                name="fc"
                required
                value={formData.fc}
                onChange={handleFcChange}
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
                Four G:
              </label>
              <select
                style={{
                  width: "150px",
                  height: "35px",
                  borderRadius: "5px",
                  border: "1px solid #005b7f",
                  padding: "5px",
                }}
                id="four_g"
                name="four_g"
                required
                value={formData.four_g}
                onChange={handleFourGChange}
              >
                <option value="0">0</option>
                <option value="1">1</option>
              </select>
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
                Int Memory:
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
                id="int_memory"
                name="int_memory"
                required
                value={formData.int_memory}
                onChange={handleIntMemoryChange}
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
                M Dep:
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
                id="m_dep"
                name="m_dep"
                required
                value={formData.m_dep}
                onChange={handleMDepChange}
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
                  alignItems: "center",
                  marginRight: "20px",
                }}
              >
                Mobile Wt:
              </label>
              <input
                style={{
                  width: "150px",
                  height: "35px",
                  borderRadius: "5px",
                  border: "1px solid #005b7f",
                  alignItems: "center",
                  padding: "5px",
                }}
                type="number"
                id="mobile_wt"
                name="mobile_wt"
                required
                value={formData.mobile_wt}
                onChange={handleMobileWtChange}
              />
            </div>

            <div
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginLeft: "20px",
              }}
            >
              <label
                style={{
                  color: "#005b7f",
                  fontSize: "20px",
                  fontWeight: "bold",
                  alignItems: "center",
                  marginRight: "20px",
                }}
              >
                N Cores:
              </label>
              <input
                style={{
                  width: "150px",
                  height: "35px",
                  borderRadius: "5px",
                  alignItems: "center",
                  border: "1px solid #005b7f",
                  padding: "5px",
                }}
                type="number"
                id="n_cores"
                name="n_cores"
                required
                value={formData.n_cores}
                onChange={handleNCoresChange}
              />
            </div>
          </div>

          {/* salam 2 */}
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
                  alignItems: "center",
                }}
              >
                PC:
              </label>
              <select
                style={{
                  width: "150px",
                  height: "35px",
                  borderRadius: "5px",
                  alignItems: "center",
                  border: "1px solid #005b7f",
                  padding: "5px",
                }}
                id="pc"
                name="pc"
                required
                value={formData.pc}
                onChange={handlePcChange}
              >
                <option value="0">0</option>
                <option value="1">1</option>
              </select>
            </div>

            <div
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <label
                style={{
                  color: "#005b7f",
                  fontSize: "20px",
                  fontWeight: "bold",
                  alignItems: "center",
                }}
              >
                Px Height:
              </label>
              <input
                style={{
                  width: "150px",
                  height: "35px",
                  borderRadius: "5px",
                  alignItems: "center",
                  border: "1px solid #005b7f",
                  padding: "5px",
                }}
                type="number"
                id="px_height"
                name="px_height"
                required
                value={formData.px_height}
                onChange={handlePxHeightChange}
              />
            </div>

            <div
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <label
                style={{
                  color: "#005b7f",
                  fontSize: "20px",
                  fontWeight: "bold",
                  alignItems: "center",
                }}
              >
                Px Width:
              </label>
              <input
                style={{
                  width: "150px",
                  height: "35px",
                  borderRadius: "5px",
                  alignItems: "center",
                  border: "1px solid #005b7f",
                  padding: "5px",
                }}
                type="number"
                id="px_width"
                name="px_width"
                required
                value={formData.px_width}
                onChange={handlePxWidthChange}
              />
            </div>

            <div
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <label
                style={{
                  color: "#005b7f",
                  fontSize: "20px",
                  fontWeight: "bold",
                  alignItems: "center",
                  marginRight: "20px",
                }}
              >
                Ram:
              </label>
              <input
                style={{
                  width: "150px",
                  height: "35px",
                  borderRadius: "5px",
                  alignItems: "center",
                  border: "1px solid #005b7f",
                  padding: "5px",
                }}
                type="number"
                id="ram"
                name="ram"
                required
                value={formData.ram}
                onChange={handleRamChange}
              />
            </div>

            <div
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <label
                style={{
                  color: "#005b7f",
                  fontSize: "20px",
                  fontWeight: "bold",
                  alignItems: "center",
                  marginRight: "20px",
                }}
              >
                Sc H:
              </label>
              <input
                style={{
                  width: "150px",
                  height: "35px",
                  borderRadius: "5px",
                  alignItems: "center",
                  border: "1px solid #005b7f",
                  padding: "5px",
                }}
                type="number"
                id="sc_h"
                name="sc_h"
                required
                value={formData.sc_h}
                onChange={handleScHChange}
              />
            </div>
          </div>

          {/* salam 3 */}
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
                  alignItems: "center",
                  fontWeight: "bold",
                }}
              >
                Sc W:
              </label>
              <input
                style={{
                  width: "150px",
                  height: "35px",
                  alignItems: "center",
                  borderRadius: "5px",
                  border: "1px solid #005b7f",
                  padding: "5px",
                }}
                type="number"
                id="sc_w"
                name="sc_w"
                required
                value={formData.sc_w}
                onChange={handleScWChange}
              />
            </div>

            <div
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginLeft: "20px",
              }}
            >
              <label
                style={{
                  color: "#005b7f",
                  fontSize: "20px",
                  alignItems: "center",
                  fontWeight: "bold",
                  marginRight: "20px",
                }}
              >
                Talk Time:
              </label>
              <input
                style={{
                  width: "150px",
                  height: "35px",
                  alignItems: "center",
                  borderRadius: "5px",
                  border: "1px solid #005b7f",
                  padding: "5px",
                }}
                type="number"
                id="talk_time"
                name="talk_time"
                required
                value={formData.talk_time}
                onChange={handleTalkTimeChange}
              />
            </div>

            <div
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginLeft: "20px",
              }}
            >
              <label
                style={{
                  color: "#005b7f",
                  fontSize: "20px",
                  alignItems: "center",
                  fontWeight: "bold",
                  marginRight: "20px",
                }}
              >
                Three G:
              </label>
              <select
                style={{
                  width: "150px",
                  height: "35px",
                  alignItems: "center",
                  borderRadius: "5px",
                  border: "1px solid #005b7f",
                  padding: "5px",
                }}
                id="three_g"
                name="three_g"
                required
                value={formData.three_g}
                onChange={handleThreeGChange}
              >
                <option value="0">0</option>
                <option value="1">1</option>
              </select>
            </div>

            <div
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginLeft: "20px",
              }}
            >
              <label
                style={{
                  color: "#005b7f",
                  fontSize: "20px",
                  alignItems: "center",
                  fontWeight: "bold",
                  marginRight: "20px",
                }}
              >
                Touch Screen:
              </label>
              <select
                style={{
                  width: "150px",
                  height: "35px",
                  alignItems: "center",
                  borderRadius: "5px",
                  border: "1px solid #005b7f",
                  padding: "5px",
                }}
                id="touch_screen"
                name="touch_screen"
                required
                value={formData.touch_screen}
                onChange={handleTouchScreenChange}
              >
                <option value="0">0</option>
                <option value="1">1</option>
              </select>
            </div>

            <div
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginLeft: "20px",
              }}
            >
              <label
                style={{
                  color: "#005b7f",
                  alignItems: "center",
                  fontSize: "20px",
                  fontWeight: "bold",
                  marginRight: "20px",
                }}
              >
                Wifi:
              </label>
              <select
                style={{
                  width: "150px",
                  height: "35px",
                  alignItems: "center",
                  borderRadius: "5px",
                  border: "1px solid #005b7f",
                  padding: "5px",
                }}
                id="wifi"
                name="wifi"
                required
                value={formData.wifi}
                onChange={handleWifiChange}
              >
                <option value="0">0</option>
                <option value="1">1</option>
              </select>
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
