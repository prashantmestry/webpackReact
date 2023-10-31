import React, { useEffect, useState } from "react";
import AssetInfo from "./AssetInfo";
// import * as actions from "../../redux/actions/index";
// import { connect } from "react-redux";
// import styled from "styled-components";
// import moment from "moment";
// import Loading from "../Common/Loading";
//import AssetInfo from "./AssetInfo";
// import EquityDetail from "./EquityDetail";
// import LineGraphBox from "./Graph/LineGraphBox";
//import { MyThemeContext } from "../../context/MyThemeContext";

import { asset_data } from "../../Daaf/asset_data";

const Daaf = () => {
  const [allocationData, setAllocationData] = useState(null);

  useEffect(() => {
    setAllocationData(asset_data);
  }, [asset_data]);

  return (
    <div>
      <h2>Daaf</h2>
      <div className="asset_info">
        <AssetInfo
          display_format={allocationData?.fmt}
          asset_attribute={(allocationData && allocationData?.assets) || null}
        />
      </div>
    </div>
  );
};

export default Daaf;

// class Daaf extends React.Component {
//   static contextType = MyThemeContext;
//   state = {
//     loading: false,
//   };

//   componentDidMount() {
//     this.props.fetchDaafData();
//     this.props.fetchAllDaafCharts();
//   }

//   getNewDate = (dt) => {
//     return moment(dt, "YYYY-MM-DD").format("Do MMM YYYY");
//   };

//   render() {
//     const { theme } = this.context;
//     return (
//       <div>
//         {this.props.allocation_data_loading && (
//           <div style={{ textAlign: "center" }}>
//             <Loading />
//           </div>
//         )}
//         {!this.props.allocation_data_loading && this.props.allocation_data && (
//           <>
//             <div style={{ fontSize: "20px" }}>
//               Allocation as on
//               <span style={{ fontWeight: "200", marginLeft: "10px" }}>
//                 {this.props.allocation_data.assets &&
//                   this.getNewDate(this.props.allocation_data.assets[0].ndt)}
//               </span>
//             </div>
//             <TopInfo>
//               {this.props.allocation_data?.fmt && (
//                 <div className="asset_info">
//                   <AssetInfo
//                     display_format={this.props.allocation_data.fmt}
//                     asset_attribute={
//                       (this.props.allocation_data &&
//                         this.props.allocation_data.assets) ||
//                       null
//                     }
//                   />
//                 </div>
//               )}
//             </TopInfo>

//             <MidBox>
//               {this.props.allocation_data && (
//                 <EquityDetail
//                   display_format={this.props.allocation_data.fmt}
//                   equity_average={
//                     (this.props.allocation_data &&
//                       this.props.allocation_data.eqtyavg) ||
//                     null
//                   }
//                 />
//               )}

//               <div
//                 style={{
//                   position: "relative",
//                   minHeight: "100px",
//                   width: "100%",
//                   margin: "0 0px 0px 10px",
//                 }}
//               >
//                 {this.props.chartDataLoading && (
//                   <div
//                     style={{
//                       textAlign: "center",
//                       height: "100%",
//                       display: "grid",
//                       alignItems: "center",
//                     }}
//                   >
//                     <Loading text="Loading Chart Data..." />
//                   </div>
//                 )}
//                 {this.props.chartData?.length > 0 &&
//                   this.props.chartData.map((val) => {
//                     return (
//                       <LineGraphBox
//                         title={val.title}
//                         display_format={val.fmt}
//                         data={val}
//                       />
//                     );
//                   })}
//               </div>
//             </MidBox>
//           </>
//         )}
//       </div>
//     );
//   }
// }

// let TopInfo = styled.div`
//   display: grid;
//   grid-template-columns: 260px auto;
//   grid-gap: 5px;
//   position: relative;
//   min-height: 100px;
//   .asset_info {
//     grid-column-start: 1;
//     grid-column-end: 3;
//     margin-top: 10px;
//   }
//   .item {
//     background: #010f15;
//     border-radius: 10px;
//     max-height: 500px;
//   }
//   .asset_detail {
//     grid-column-start: 1;
//     grid-column-end: 2;
//     border: 1px solid #fff;
//   }
//   .asset_graph {
//     grid-column-start: 2;
//     grid-column-end: 3;
//     padding: 25px;
//   }
// `;

// let MidBox = styled.div`
//   padding: 10px 0;
//   display: flex;
// `;

// const mapStateToProps = (state) => {
//   return {
//     allocation_data: state.daaf.allocation_data,
//     allocation_data_loading: state.daaf.allocation_data_loading,
//     allocation_data_error: state.daaf.allocation_data_error,
//     chartData: state.daaf.chartData,
//     chartDataLoading: state.daaf.chartDataLoading,
//     chartDataError: state.daaf.chartDataError,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     fetchDaafData: (data) => dispatch(actions.fetchDaafData(data)),
//     fetchAllDaafCharts: () => dispatch(actions.fetchAllDaafCharts()),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Daaf);
