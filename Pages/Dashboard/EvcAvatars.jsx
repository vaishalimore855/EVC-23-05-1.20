import React, { useEffect, useState } from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { Link } from "react-router-dom";
import busd from "../../assets/img/dashboard/icons/busd.png";
import { Navigate } from "react-router-dom";
import Avatar1 from "../../assets/img/dashboard/img/avatar-1.png";
import Avatar2 from "../../assets/img/dashboard/img/avatar-2.png";
import Avatar3 from "../../assets/img/dashboard/img/avatar-3.png";
import Avatar4 from "../../assets/img/dashboard/img/avatar-4.png";
import Avatar5 from "../../assets/img/dashboard/img/avatar-5.png";
import Avatar6 from "../../assets/img/dashboard/img/avatar-6.png";
import Avatar7 from "../../assets/img/dashboard/img/avatar-7.png";
import Avatar8 from "../../assets/img/dashboard/img/avatar-8.png";

import level1 from "../Dashboard/Mint/Images/level1.png";
import level2 from "../Dashboard/Mint/Images/level2.png";
import level3 from "../Dashboard/Mint/Images/level3.png";
import level4 from "../Dashboard/Mint/Images/level4.png";
import level5 from "../Dashboard/Mint/Images/level5.png";
import level6 from "../Dashboard/Mint/Images/level6.png";
import level7 from "../Dashboard/Mint/Images/level7.png";
import level8 from "../Dashboard/Mint/Images/level8.png";

import {
  setMintL8,
  setMintL7,
  setMintL6,
  setMintL5,
  setMintL4,
  setMintL3,
  setMintL2,
  setMintL1,
} from "../../ContractAction/EVCNFTContractAction";

const evc_avatars = [
  {
    thumb: level8,
    title: "CryptoCap Tycoon",
    evc_no: "#EVC 8",
    price: "$55,000",
    bv: "$50,000",
  },
  {
    thumb: level7,
    title: "Bitcoin Billionaire",
    evc_no: "#EVC 7",
    price: "$27,500",
    bv: "$25,000",
  },
  {
    thumb: level6,
    title: "Blockchain Mogul",
    evc_no: "#EVC 6",
    price: "$11,000",
    bv: "$10,000",
  },
  {
    thumb: level5,
    title: "Crypto King",
    evc_no: "#EVC 5",
    price: "$5,500",
    bv: "$5,000",
  },
  {
    thumb: level4,
    title: "Crypto Investor",
    evc_no: "#EVC 4",
    price: "$2,750",
    bv: "$2,5OO",
  },
  {
    thumb: level3,
    title: "Crypto Entrepreneur",
    evc_no: "#EVC 3",
    price: "$1,100",
    bv: "$1,000",
  },
  {
    thumb: level2,
    title: "Crypto Enthusiast",
    evc_no: "#EVC 2",
    price: "$550",
    bv: "$500",
  },
  {
    thumb: level1,
    title: "Crypto Newbies",
    evc_no: "#EVC 1",
    price: "$110",
    bv: "$100",
  },
];

const getNtf = async (value) => {
  alert(value);

  switch (value) {
    case "#EVC 8":
      return await setMintL8();
      break;
    case "#EVC 7":
      return await setMintL7();
      break;
    case "#EVC 6":
      return await setMintL6();
      break;
    case "#EVC 5":
      return await setMintL5();
      break;
    case "#EVC 4":
      return await setMintL4();
      break;
    case "#EVC 3":
      return await setMintL3();
      break;
    case "#EVC 2":
      return await setMintL2();
      break;
    case "#EVC 1":
      return await setMintL1();
      break;
    default:
    // code block
  }
};
const newAddress = window.localStorage.getItem("connectedAccount");

const EvcAvatars = ({ title }) => {
  useEffect(() => {
    document.title = title ? title : "EVC Avatars | Buy Evc Avatars";
    document.querySelector(".page-title").innerText = "Buy Evc Avatars";
  }, []);

  return (
    <>
      
        <div className="dashboard-wrap">
          <Breadcrumb>
            <li className="breadcrumb-item">
              <Link to="/">HOME</Link>
            </li>
            <Breadcrumb.Item active>Buy EVC Avatars</Breadcrumb.Item>
          </Breadcrumb>

          <div className="dash-content-area">
            <div className="text-center mb-5">
              <div className="h4">EVC AVATARS</div>
              <p className="text-secondary mb-0">
                To buy NFT and Mint, Connect your Wallet.
              </p>
            </div>
            <div className="w-100">
              <div className="row justify-content-center g-32">
                {evc_avatars.map((el, i) => {
                  return (
                    <div className="col-sm-6 col-xl-4 col-xxl-3" key={i}>
                      <div className="card-evc h-100 d-flex flex-column">
                        <div className="evc-avatar">
                          <img
                            src={el.thumb}
                            alt=""
                            className="img-fluid w-100"
                          />
                        </div>
                        <div className="evc-info p-3 px-0 px-xs-3 pb-0 h-100 d-flex flex-column justify-content-between">
                          <div className="d-flex gap-2 flex-wrap justify-content-between mb-2">
                            <a href="#" className="evc-title">
                              {el.title}
                            </a>
                            <div className="evc-no">{el.evc_no}</div>
                          </div>
                          <div className="d-flex justify-content-between">
                            <div className="evc-price">
                              <div className="evc-price-title">PRICE</div>
                              <div className="evc-price-amount">
                                <img src={busd} alt="" className="img-fluid" />
                                {el.price}
                              </div>
                            </div>
                            <div className="evc-bv">
                              <div className="evc-bv-title">BV</div>
                              <div className="evc-bv-amount">
                                <img src={busd} alt="" className="img-fluid" />
                                {el.bv}
                              </div>
                            </div>
                          </div>
                          <div class="d-grid gap-2">
                            {/* {newAddress ? ( */}
                            <button
                              class="btn btn-primary"
                              value={el.evc_no}
                              type="button"
                              onClick={(e) => getNtf(e.target.value)}
                            >
                              Mint
                            </button>
                            {/* ) :  "" } */}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

    </>
  );
};

export default EvcAvatars;
