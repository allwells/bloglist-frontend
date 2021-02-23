import styled from "styled-components";

const StyledNotification = styled.div`
  .success {
    color: green;
    background: lightgrey;
    font-size: 16px;
    border-style: solid;
    border-color: green;
    border-radius: 3px;
    padding: 10px;
    margin-bottom: 10px;
  }

  .error {
    color: red;
    background: lightgrey;
    font-size: 16px;
    border-style: solid;
    border-color: red;
    border-radius: 3px;
    padding: 10px;
    margin-bottom: 10px;
  }
`;

export default StyledNotification;
