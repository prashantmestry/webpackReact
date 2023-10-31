import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { MyThemeContext } from '../../../Context/MyThemeContext';

const GraphPeriod = ({ onClick, activePeriod }) => {

    const { theme } = useContext(MyThemeContext);
    const [years] = useState([
        { period: 'daily', display: 'Daily' },
        { period: 'weekly', display: 'Weekly' },
        { period: 'monthly', display: 'Monthly' },
        { period: 'yearly', display: 'Yearly' }
    ]);

    return (
        <GraphPeriodBox theme={theme}>
            {
                years.map((v, index) => {
                    return (
                        <a
                            className={activePeriod == v.period ? 'active' : null}
                            key={index}
                            onClick={() => onClick(v.period)}
                        >
                            {v.display}
                        </a>
                    )
                })
            }
        </GraphPeriodBox>
    )
}

let GraphPeriodBox = styled.div`
    display :flex;
    align-items : center;     
    font-size: 12px;
    margin-left:10px;
    a{                    
        margin:0 5px;
        color: ${props => props.theme.color.text};
        text-align : center;
        :hover{            
            cursor : pointer;
            border-bottom:1px solid;
        }        
    }
    a.active{        
        font-weight:700;
        border-bottom:1px solid;
    }
`;

export default GraphPeriod;
