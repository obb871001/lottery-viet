import React from "react";
import CustomInput from "../../components/CustomInput";
import { NORMAL_LOTTERY } from "../NormalLottery/regionSelector/form/config";

const NormalSearch = () => {
  return (
    <>
      <CustomInput
        props={{
          type: "select",
          label: "分鐘",
          formControlStyle: {
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
          },
          name: "minute",
          options: NORMAL_LOTTERY?.map((item) => {
            return { value: item, label: item };
          }),
          placeholder: "請選擇分鐘",
        }}
      />
      <CustomInput
        props={{
          type: "text",
          label: "查詢號碼",
          formControlStyle: {
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
          },
          name: "minute",
          placeholder: "請輸入",
        }}
      />
    </>
  );
};

export default NormalSearch;
