import React, { useState, useEffect, useContext } from 'react';
import { Slider } from 'antd';
import styled from 'styled-components';
import { MyThemeContext } from '../../../Context/MyThemeContext';

const SliderYear = (props) => {
    const { theme } = useContext(MyThemeContext);
    const [min, setMin] = useState(props.min);
    const [max, setMax] = useState(props.max);
    const [marks, setMarks] = useState();
    const [defaultSet, setDefaultSet] = useState([props.min, props.max]);

    useEffect(() => {
        setMin(props.min);
        setMax(props.max);

        setMarks({
            [props.min]: {
                style: { color: '#096dd9' },
                label: <strong>{props.min}</strong>
            },
            [props.max]: {
                style: { color: '#096dd9' },
                label: <strong>{props.max}</strong>
            },
        });

    }, [props.min, props.max]);

    //
    let onChangeHandler = (value) => {
        if (value[0] >= min && value[1] <= max) {
            setMarks({
                [min]: {
                    //style: { color: '#096dd9' },
                    style: { color: theme.color.text },
                    label: <strong>{min}</strong>
                },
                [value[0]]: {
                    //style: { color: '#181d1f' },
                    label: value[0]
                },
                [value[1]]: {
                    //style: { color: '#181d1f' },
                    label: value[1]
                },
                [max]: {
                    //style: { color: '#096dd9' },
                    style: { color: theme.color.text },
                    label: <strong>{max}</strong>
                }
            });
        }
        props.onYearSliderChange(value[0], value[1]);
    };

    return (
        <RangeSlider
            theme={theme}
            min={min}
            max={max}
            range
            onAfterChange={onChangeHandler}
            marks={marks}
            defaultValue={defaultSet}
        />
    );
};

export default SliderYear;

const RangeSlider = styled(Slider)`    
   & .ant-slider-rail {        
        background-color: ${props => props.theme.color.bg2};    
        height:2px;
    }
    .ant-slider-track {                
        height:2px;
        background : ${props => props.theme.color.text};    
    }
    & .ant-slider:hover .ant-slider-track {
        Xbackground-color: green;
        height:2px;
    }    
    .ant-slider-handle {
        width: 15px;
        height: 20px;
        margin-top: -8px;
        background-color: ${props => props.theme.color.bg2};
        border:1px solid ${props => props.theme.color.text};        
        border-radius: 0;
        border-radius : 2px;        
        Xbox-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
        font-size: 10px;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        font-size: 8px;
        color: ${props => props.theme.color.text};
        padding-left: 1px;        
        : before{
            content: "||";
            Xcolor: ${props => props.theme.color.text};
        }
    }
    .ant-slider-mark {
        position: absolute;
        top: -22px;
        left: 0;
        width: 100%;
        font-size: 12px;
        .ant-slider-mark-text{
            :first-child
            {
                margin-top:40px;
                left : 1% !important
            }
            :last-child{
                margin-top:40px;
                left : 99% !important
            }
        }
    }
    .ant-slider-mark-text-active {        
        color: ${props => props.theme.color.text};
    }    
`
