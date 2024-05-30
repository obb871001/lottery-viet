import React from "react";
import CustomInput from "../../components/CustomInput";
import { PUBLIC_LOTTERY } from "../PublicLottery/regionSelector/form/config";

const PublicSearch = () => {
  return (
    <>
      <CustomInput
        props={{
          type: "date",
          label: "日期",
          formControlStyle: {
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
          },
          name: "date",
        }}
      />
      <CustomInput
        props={{
          type: "select",
          label: "縣市",
          formControlStyle: {
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
          },
          name: "region",
          placeholder: "請選擇縣市",
          options: Object.keys(PUBLIC_LOTTERY)?.map((item) => {
            return { value: item, label: item };
          }),
        }}
      />
      <CustomInput
        props={{
          type: "select",
          label: "區域",
          formControlStyle: {
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
          },
          name: "area",
          placeholder: "請選擇區域",
          options: [],
        }}
      />
    </>
  );
};

export default PublicSearch;
