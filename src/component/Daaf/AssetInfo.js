import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import InfoList from "./InfoList";
import { MyThemeContext } from "../../context/MyThemeContext";

const AssetInfo = (props) => {
  const [attribute, setAttribute] = useState(null);
  const { theme } = useContext(MyThemeContext);

  useEffect(() => {
    setAttribute(props.asset_attribute);
  }, [props.asset_attribute]);

  return (
    <Info theme={theme}>
      <ul className="item_1">
        {attribute &&
          attribute.map((v, index) => {
            return (
              <InfoList
                key={index}
                data={{
                  ...v,
                  fmt: props.display_format,
                }}
              />
            );
          })}
      </ul>
      <ul className="item_2">
        <MomentDiv theme={theme}>
          <h3>Current Momentum</h3>
          <div style={{ fontWeight: "500", fontSize: "30px" }}>Positive</div>
        </MomentDiv>
      </ul>
    </Info>
  );
};

let Info = styled.div`
  display: grid;
  grid-template-column: auto 200px;
  border-radius: 10px;
  grid-gap: 10px;
  background: ${(props) => props.theme.color.bg2};
  padding: 10px;
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  .item_1 {
    grid-column-start: 1;
    grid-column-end: 3;
    overflow: auto;
    display: flex;
    li:last-child {
      margin-right: 0px;
    }
  }
  .item_2 {
    grid-column-start: 3;
    grid-column-end: 4;
    display: flex;
    place-items: center;
    text-align: center;
    padding-left: 10px;
    border-left: 1px solid ${(props) => props.theme.color.bg};
  }
`;

let MomentDiv = styled.div`
  padding: 35px;
  border-radius: 10px;
  font-size: 18px;
  background: ${(props) => props.theme.color.plainBg};
  h3 {
    font-size: 14px;
    text-transform: uppercase;
    color: ${(props) => props.theme.color.text};
  }
`;

export default AssetInfo;
