import css from "styled-jsx/css";

export const styles = css`
  .Button {
    display: flex;
    appearance: none;
    border: 0;
    background-color: transparent;
    padding: 0;
    transition: background-color 0.25s ease-out;
    padding: 6px;
    border-radius: 50%;
    cursor: pointer;
    outline: none;
  }

  .Button:hover {
    background-color: rgba(80, 0, 0, 0.35);
  }

  .Button:active {
    filter: saturate(150%);
  }
`;
