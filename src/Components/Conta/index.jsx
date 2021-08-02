import React, { useState } from "react";
import styled from 'styled-components';

import privado from "../../assets/images/privado.svg";
import olho_icone from "../../assets/images/olho.svg";
import dinheiro from "../../assets/images/dinheiro.svg";
import { Icon, Box, Btn, Detail, Balance } from '../ui/index'

const IconMargin = styled(Icon)`
  margin-top: 2px;
  fill: #fff;
`

const Conta = () => {
  const [toggleState, untoggle] = useState(true);

  const toggleHandler = () => {
    untoggle((toggleState) => !toggleState);
  };

  return (
    <Box>
      <h2>Conta</h2>
      <div style={{ fontSize: "26px", padding: "20px 0" }}>
        Saldo disponível{" "}
        <span>
          <Icon>
            <use xlinkHref={`${dinheiro}#Capa_1`} />
          </Icon>
        </span>
        {toggleState ? (
          <Balance>
            <Detail>R$</Detail> 0,00{" "}
          </Balance>
        ) : null}
      </div>

      <Btn onClick={toggleHandler}>
        <IconMargin>
          <use xlinkHref={`${toggleState ? privado : olho_icone}#Capa_1`} />
        </IconMargin>
      </Btn>
    </Box>
  );
};

export default Conta;
