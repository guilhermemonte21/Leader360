import styled from "styled-components";

export const HeaderHome = styled(LinearGradient).attrs({
    colors: ['#3D5571', '#031326'],
    start: {x: -0.03, y: 1.5},
  end: {x: 1, y:0}
})`
    width: 100%;
  height: 73px;
  background-color: #60bfc5;
  border-radius: 0 0 15px 15px;
  


  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ImageHead = styled.Image`
    width: 39px;
    height: 35px;
`