import React from 'react';
import { roundNumberNew } from '../../../Utils/globalFunctions';

const withLineGraph = (WrappedComponent) => {

    const LineGraph = (props) => {
        let add_more = {
            "pernk": "P/E Rank",
            "pbrnk": "P/B Rank",
            "eqty": "Equity",
            "dbt": "Debt",
            "arb": "Arbitrage",
            "50dma": "50 DMA",
            "200dma": "200 DDMA",
            "nfty50": 'Nifty 50',
            "percentile": "Percentile ranks",
            "assets": "Asset allocation",
            "momentum": "Moving average Vs. Nifty 50"
        }

        var total_line_title = null;
        let { fmt, data, dispnm } = props.data;

        if (data) { total_line_title = Object.keys(data).filter(v => v != 'dt') }

        var temp_header_data = [];
        var temp_body_data = [];

        if (data && data.length > 0) {

            // Header Data            
            let row_attr = data ? Object.keys(data[0]).filter(v => v != 'dt') : [];
            data.forEach(element => {
                temp_header_data.push(element.dt);
            });

            // body Data            
            row_attr.forEach(v => {
                let obj = { attr: v, data: [] }
                let tt = {};
                data.forEach(v1 => {
                    tt[v1.dt] = fmt == '%' ? (v1[v] * 100).toString().substr(0, 5) : roundNumberNew(v1[v], 2);
                });
                obj.data = tt;
                temp_body_data.push(obj);
            });
        }

        return (
            <WrappedComponent
                {...props}
                displayFormat={fmt}
                info={data || []}
                replaceTitle={add_more}
                header_data={temp_header_data}
                body_data={temp_body_data}
            />
        )
    }
    return LineGraph;
}

export default withLineGraph;