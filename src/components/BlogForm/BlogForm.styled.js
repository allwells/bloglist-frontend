import styled from "styled-components";

const StyledBlogForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  place-items: center;
  width: 100%;
  margin-bottom: 2em;

  h2 {
    margin: 1em 0 1em 0;
    color: #808080;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    place-items: center;
    width: 100%;

    .blogInput {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      place-items: center;

      .textField {
        height: 30px;
        width: 90%;
        border: none;
        outline: none;
        border-radius: 2px;
        color: #000000aa;
        transition-duration: 0.4s;
        margin-bottom: 1.5em;
        padding-left: 0.5em;
        background-color: whitesmoke;

        &:focus {
          border: 2px solid #800000;
          outline: none;
        }
      }

      .addBlogButton {
        background: #800000;
        border: none;
        outline: none;
        width: 120px;
        height: 30px;
        color: #f5f5f5;
        border-radius: 3px;
        transition-duration: 0.3s;

        &:hover {
          width: 22%;
          cursor: pointer;
        }
      }
    }
  }
`;

export default StyledBlogForm;
