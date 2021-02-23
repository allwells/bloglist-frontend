import styled from "styled-components";

const StyledBlogs = styled.div`
  margin-top: 2em;
  border-radius: 5px;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  jusitfy-content: center;
  place-items: center;
  width: 98%;
  padding: 1em 0;
  background-color: #f5f5f5;

  h2 {
    color: #808080;
    text-align: center;
    font-size: 20px;
    margin-bottom: 0.5em;
    letter-spacing: 0.1em;
  }

  .blogs {
    margin: 1em 0;
    box-shadow: 0 0 4px #dddddd;
    width: 95%;
    padding: 1em 1.3em;
    border-radius: 3px;
    background-color: #f9f9f9;

    h3 {
      color: #833333;
      text-align: left;
      font-weight: 100;
      font-size: 14px;
    }

    p {
      text-align: justify;
      font-size: 13px;
      letter-spacing: 0.1em;
      color: #888888;
    }
    @media (max-width: 540px) {
      p {
        letter-spacing: 0;
      }
    }

    b {
      font-size: 14px;
      color: #833333;
      font-weight: 100;
    }

    button {
      background: #800000;
      border: none;
      outline: none;
      width: 135px;
      height: 25px;
      font-size: 12px;
      margin-top: 0.5em;
      color: #f5f5f5;
      border-radius: 3px;
      transition-duration: 0.3s;

      &:hover {
        cursor: pointer;
      }
    }
  }
`;

export default StyledBlogs;
