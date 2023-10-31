import React, { useState, useEffect, memo, useContext } from 'react';
import styled from 'styled-components';
import { MyThemeContext } from '../../Context/MyThemeContext';
import { multiplyPercent } from '../../Utils/globalFunctions';

const EquityDetail = (props) => {

    const { theme } = useContext(MyThemeContext);
    const [data, setData] = useState([]);

    useEffect(() => {
        if (props.equity_average) {
            setData(props.equity_average.reverse());
        } else {
            setData([]);
        }

    }, [props]);

    return (
        <List theme={theme}>
            <h3>Equity Allocation</h3>
            <ul>
                {
                    data && data.map((v, index) => {
                        return (
                            <li key={index}>
                                <div>{v.yr}</div>
                                <div>
                                    {
                                        props.display_format === '%' ? multiplyPercent(v.eqty) : v.eqty
                                    }
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </List>
    )
}

let List = styled.div`        
    border-radius : 10px;
    padding:10px 10px 0px 10px;
    overflow-y:hidden;
    height:100%;
    background: ${props => props.theme.color.bg2};
    min-width:200px;
    h3{                
        font-size: 14px;
        font-weight: 600;
        text-align: left;
        border-bottom: 1px solid ${props => props.theme.color.text};
        padding: 0 0 10px 0;
        color: ${props => props.theme.color.text};
        text-transform: uppercase;
    }
    ul{                
        max-height : 330px;        
        overflow-y : auto;  
        list-style : none;
        padding:0;  
        li{
            display : flex;
            justify-content : space-between;
            border-bottom: 1px solid ${props => props.theme.color.bg};
            padding: 5px; 
            font-weight : 500;            
            :last-child{
                border-bottom:none;
                padding-bottom: 0px;
            }           
        }
    }    
`;

export default memo(EquityDetail);