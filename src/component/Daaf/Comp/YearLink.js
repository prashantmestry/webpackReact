import React, { useState } from 'react';
import styled from 'styled-components';

const YearLink = ({ onClick, activeyear }) => {

    const [years] = useState([
        { year: 1, display: '1Y' },
        { year: 3, display: '3Y' },
        { year: 5, display: '5Y' },
        { year: 10, display: '10Y' },
        { year: 'all', display: 'All' }
    ]);

    return (
        <YearList>
            {
                years.map((v, index) => {
                    return (
                        <a
                            className={activeyear == v.year ? 'active' : null}
                            key={index}
                            onClick={() => onClick(v.year)}
                            id={v.id}>
                            {v.display}
                        </a>
                    )
                })
            }
        </YearList>
    )
}

let YearList = styled.div`
    display : flex;        
    text-align:center;    
    font-size:12px;
    margin-right:10px;
    a{  
        display : flex;      
        margin:0 5px;    
        font-weight:500;     
        color: ${props => props.theme.color.text};                                       
        justify-content : center;
        align-items:center;
        cursor : pointer;
        :hover{
            border-bottom : 1px solid;            
        }
    }
    a.active{
        font-weight:700;
        border-bottom : 1px solid;        
    }
`;

export default YearLink;
