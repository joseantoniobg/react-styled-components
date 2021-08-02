import React from "react";
import { Box, Btn } from "../ui/index";
import { extratoList } from '../../info';
import Items from "../Items";

export default function Extrato() {
  return <Box>
    {extratoList.updates.map(
      ({ id, type, from, value, date }) =>
        (<Items key={id} type={type} from={from} value={value} date={date} />)
      )}
      <Btn>Ver mais</Btn>
  </Box>;
}
