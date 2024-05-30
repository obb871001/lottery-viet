import { Text } from "@chakra-ui/react";

const LotteryDescription = () => {
  return (
    <>
      <Text
        color="deep-gray"
        fontSize="14px"
        fontWeight="400"
        letterSpace="tighter"
      >
        Đánh 2 chữ số cuối trong lô 27 giải. Thắng gấp 99 lần, nếu số đó về N
        lần thì tính kết quả x N lần. Ví dụ: đánh lô 79 - 1 con 1k, Tổng thanh
        toán: 1k x 27 = 27k. Nếu trong lô có 2 chữ số cuối là 79 thì Tiền thắng:
        1k x 99 = 99k, nếu có N lần 2 chữ số cuối là 79 thì Tiền thắng là: 1k x
        99 x N
      </Text>
    </>
  );
};

export default LotteryDescription;
