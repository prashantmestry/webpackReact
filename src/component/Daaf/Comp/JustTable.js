import React, { useContext } from 'react';
import styled from 'styled-components';
import { headerYearFormatChange } from '../../../Utils/globalFunctions';
import { MyThemeContext } from '../../../Context/MyThemeContext';

const JustTable = (props) => {

    const { theme } = useContext(MyThemeContext);
    return (
        <TableBox theme={theme}>
            <div className='tableHead'>{props.title || 'Table'}</div>
            <div className='table-scroll'>
                <table>
                    <thead>
                        <tr>
                            <th>Title</th>
                            {
                                props.headerData && props.headerData.map((v, i) => {
                                    return (
                                        <th key={i}>{headerYearFormatChange(v, 'YYYY-MM-DD', 'DD-MM-YYYY')}</th>
                                    )
                                })
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            props.bodyData && props.bodyData.map((v, i) => {
                                return (
                                    <tr key={i}>
                                        <td>{props.replaceTitle[v.attr] || v.attr}</td>
                                        {
                                            props.headerData && props.headerData.map((v1, index) => {
                                                return (
                                                    <td key={index}> {v.data[v1]}</td>
                                                )
                                            })
                                        }
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </TableBox>
    )
}

let TableBox = styled.div`
.tableHead{
    margin:5px;
    font-size:18px;
    text-transform : capitalize;
}
.table-scroll {
    position: relative;
    width:100%;
    z-index: 1;
    margin: auto;
    overflow: auto;    
    padding-bottom:12px;    

    table {
        width: 100%;
        min-width: 1280px;
        margin: auto;
        border-collapse: separate;
        border-spacing: 0;           
        border-top: 1px solid #000;        
        border-right: 1px solid #000;   
        font-weight : 200;       
    th, td {
        padding: 5px 8px;
        border-bottom: 1px solid #000;
        border-right: 1px solid #000;        
        vertical-align: top;
        :last-child{
            border-right: none;
        }
    }     
    thead th {              
        position: -webkit-sticky;
        position: sticky;
        top: 0;       
        min-width:130px; 
        padding: 5px 8px;            
        text-align:right;
        :first-child{            
            left: 0;
            z-index:1;
            text-align:left;
            background: ${props => props.theme.color.bg};
            border-left:1px solid #000;      
        }        
    }
    td{
        text-align : right;        
        :first-child {
            position: -webkit-sticky;
            position: sticky;
            left: 0;   
            z-index:1;       
            border-left:1px solid #000;            
            text-align:left;
            background: ${props => props.theme.color.bg};        
        } 
    }           
    thead tr{
        background: ${props => props.theme.color.bg};
    }          
}
`;

export default JustTable;