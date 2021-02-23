import styled from "styled-components";

const StyledFilter = styled.div`
  display: flex;
  justify-content: space-around;
  place-items: center;
  width: 100%;

  .filter {
    height: 30px;
    width: 80%;
    text-align: center;
    border: none;
    outline: none;
    border-radius: 2px;
    color: #000000aa;
    transition-duration: 0.4s;

    &:hover {
      box-shadow: 0 0 8px #bbbbbb;
    }

    &:focus {
      box-shadow: 0 0 8px #bbbbbb;
      outline: none;
    }
  }
`;

export default StyledFilter;
