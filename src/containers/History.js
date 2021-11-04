import React, { useState, useEffect } from "react";
import axios from "axios";
import { backendURI, scale } from "../constants";

let History = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    axios
      .get(backendURI + "/happy")
      .then((res) => {
        console.log(res.data);
        setHistory(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h3 style={{ color: "#C19999", fontSize: "26px" }}>History</h3>
      <hr class="solid"></hr>
      {history.length &&
        history.map((item) => {
          const D = new Date(item.date);
          var options = { weekday: "short", month: "short", day: "numeric" };
          let date = D.toLocaleDateString("en-US", options); // Saturday, September 17, 2016

          let findAnswer = scale.filter((each) => {
            if (
              item.totalHappiness >= each.lower &&
              item.totalHappiness <= each.upper
            )
              return true;
            return false;
          });

          return (
            <div>
              <div key={item["_id"]}>
                <div className="historyContainer">
                  <p className={"historyDate"}>Date: {date}</p>
                  <div className="historyContainer">
                    <span className={"historyText"}>{item.text}</span>
                  </div>
                </div>
                <span className={"historyEmoji"}>
                  {findAnswer && findAnswer.length && findAnswer[0].emoji}
                </span>
              </div>
              <hr className="solid"></hr>
            </div>
          );
        })}
    </div>
  );
};

export default History;
