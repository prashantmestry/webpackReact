import React, { useContext, useEffect } from "react";
import styled from "styled-components";
//import { multiplyPercent } from '../../Utils/globalFunctions';
// import {
//   ArrowUpOutlined,
//   ArrowDownOutlined,
//   SwapOutlined,
// } from "@ant-design/icons";
import { MyThemeContext } from "../../context/MyThemeContext";

const InfoList = (props) => {
  const { theme } = useContext(MyThemeContext);
  const { pval, nval, nm, fmt } = props.data;

  const multiplyPercent = () => {
    return;
  };

  return (
    <BoxList theme={theme}>
      <h3>{nm}</h3>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ display: "flex", flexDirection: "column", width: "75%" }}>
          <div className="innerBox">
            <div className="val_txt">Current</div>
            <div className="new_val">
              {fmt === "%" ? multiplyPercent(nval) : nval}
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "8px",
              alignItems: "center",
            }}
          >
            <div className="val_txt">Previous</div>
            <div className="old_val">
              {fmt === "%" ? multiplyPercent(pval) : pval}
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* {nval > pval && <ArrowUpOutlined className="arrow-icon high" />}
          {nval < pval && <ArrowDownOutlined className="arrow-icon low" />}
          {nval === pval && <SwapOutlined className="arrow-icon equal" />} */}
        </div>
      </div>
    </BoxList>
  );
};

let BoxList = styled.li` 
    padding: 5px 10px 5px 10px;
    display: flex;        
    flex-direction : column;         
    background : ${(props) => props.theme.color.plainBg};
    border-radius : 0px 10px 10px 10px;
    margin-right:10px;    
    min-width : 250px;      
    min-height : 100px;            

    .innerBox{        
        display: flex; 
        justify-content: space-between;
        border-bottom: 1px solid ${(props) => props.theme.color.bg2};
        padding: 8px; 
        align-items: center;
    }        
    h3{            
        font-size : 13px;            
        font-weight :600;
        text-align : left;            
        border-bottom : 1px solid ${(props) => props.theme.color.text};
        padding:5px 0 7px 0;
        color : ${(props) => props.theme.color.text};
        text-transform:uppercase;
    }    
    .arrow-icon{
        font-weight : bold;
        font-size : 20px;
    }
    .val_txt{
        font-size : 14px;
        font-weight : 500;
    }
    .high{ color : #34d82b }
    .low{ color : #ff5c0c }
    .equal{ color : #e3de20}

    .new_val{
        font-weight : 500;            
        font-size : 25px;
        color :  #19c991;
    }
    .old_val{
        font-weight : 500;            
    }    
}
`;

export default InfoList;
