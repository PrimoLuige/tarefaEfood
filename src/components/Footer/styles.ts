// Importação de bibliotecas externas
import styled from "styled-components"
// Importação das cores da aplicação
import { cores } from "../../GlobalStyles"

export const FooterContainer = styled.footer`
  width: 100vw;
  background-color: ${cores.bege};
  text-align: center;
  padding: 40px 16px;
  
  
  
`;
export const FooterLogo = styled.div`
  padding-top: 32px;
  margin-left: 8px;

  img {
    margin-right: 8px;
  }
`
export const FooterText = styled.p`
  margin-top: 80px;
  color: ${cores.laranja};
  font-size: 14px;
  line-height: 13px;
`