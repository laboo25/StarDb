import React, { useEffect, useState } from "react";
import "../../Navbar/StarStyle.css";
import Navbar from "../../Navbar/Navbar";
import SideBar from "../../Navbar/SideBar";

const RebeccaVolpetti = () => {
  const [difference, setDifference] = useState();
  useEffect(() => {
    // Access the data attribute inside the useEffect hook
    const currentDate = new Date();
    const ageElement = document.getElementById("age");
    const startYear = ageElement.dataset.year;
    const startDate = new Date(startYear);
    console.log("Start Date", startDate.getFullYear()); // Outputs: 1999-01-01
    console.log("Current Date", currentDate.getFullYear()); // Outputs: 1999-01-01
    const yearDiffernce = currentDate.getFullYear() - startDate.getFullYear();
    console.log(yearDiffernce);
    setDifference(yearDiffernce);

    // You can perform other operations with the dataYear value here
  }, []);

  useEffect(() => {
    const processImages = () => {
      const images = document.querySelectorAll(".column img");
      const arr = Array.from(images);

      arr.forEach((item) => {
        if (item.naturalWidth > item.naturalHeight) {
          item.style.width = "100%";
          item.style.height = "auto";
          item.style.objectFit = "contain";
        } else if (item.naturalWidth < item.naturalHeight) {
          item.style.width = "auto";
          item.style.height = "100%";
          item.style.objectFit = "contain";
        } else {
          item.style.width = "100%";
          item.style.height = "100%";
          item.style.objectFit = "contain";
        }
      });
    };

    processImages();
  }, []);

  // useEffect(()=>{
  //   setData(Alexa);
  //   setCollection([... new Set(Alexa.map((item)=> item.title))])
  // },[])

  // const gallery_filter = (itemData) =>{
  //   const filterData = Alexa.filter((item)=> item.title == itemData);
  //   setData(filterData);
  // }

  return (
    <>
      <div>
        <Navbar />
        <div className="flex">
          <SideBar />
          <div>
            <div className="banner">
              <div className="image">
                <img
                  src="https://raw.githubusercontent.com/laboo25/mag-imgs/main/cover/rebeccaVolpetti.jpg"
                  alt=""
                />
              </div>
              <div className="textBox">
                <h3>emily willis</h3>
                <p>
                  aliases: <span>litzy lara bañuelos</span>
                </p>
                <p>
                  birth place: <span>Utah, US</span>
                </p>
                <p>
                  birth date: <span>29-Dec-1998</span>
                </p>
                <p>
                  age:{" "}
                  <span id="age" data-year="1998-12-29">
                    {difference}
                  </span>
                  <span className="lowercase">y</span>
                </p>
                <p>
                  Profession: <span>adult model, porn star</span>
                </p>
                <p>
                  career:{" "}
                  <span>
                    2017—<span className="common active">active</span>
                  </span>
                </p>
                <p>
                  race: <span>caucasian</span>
                </p>
                <p>
                  boobs: <span>natural</span>
                </p>
                <p>
                  measurements: <span>32A―23―34</span>
                </p>
                <p>
                  hair color: <span>brown</span>
                </p>
                <p>
                  eye color: <span>brown</span>
                </p>
                <p>
                  shoe size: <span>37 us</span>
                </p>
                <p>
                  height: <span>5'5" [165 Cm]</span>
                </p>
                <p>
                  piercings: <span>no</span>
                </p>
                <p>
                  tattoos: <span>no</span>
                </p>
                <p>
                  pubic hair: <span>shaved</span>
                </p>
                <p>
                  abaility: <span>FF, DP</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default RebeccaVolpetti;
