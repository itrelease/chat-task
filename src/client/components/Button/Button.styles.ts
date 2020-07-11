import css from "styled-jsx/css";

export const styles = css`
  .Button {
    display: flex;
    appearance: none;
    border: 1px solid transparent;
    background-color: transparent;
    padding: 0;
    transition: background-color 0.25s ease-out, filter 0.25s ease-out,
      border-color 0.25s ease-out, opacity 0.25s ease-out;
    padding: 6px;
    border-radius: 50%;
    cursor: pointer;
    outline: none;
  }

  .Button:disabled {
    opacity: 0.5;
    pointer-events: none;
  }

  /* FILL */
  .Button[data-type="fill"][data-color="blue"] {
    background-color: #1e90ff;
  }

  .Button[data-type="fill"][data-color="red"] {
    background-color: #f44336;
  }

  .Button[data-type="fill"][data-color="dark"] {
    background-color: #37474f;
  }

  .Button[data-type="fill"]:hover {
    filter: brightness(120%);
  }

  /* STROKE  */
  .Button[data-type="stroke"][data-color="blue"] {
    border: 1px solid #1e90ff;
  }

  .Button[data-type="stroke"][data-color="red"] {
    border: 1px solid #f44336;
  }

  .Button[data-type="stroke"][data-color="dark"] {
    border: 1px solid #37474f;
  }

  .Button[data-type="stroke"]:hover {
    filter: brightness(0.7);
  }

  /* TRANSPARENT */
  .Button[data-type="transparent"][data-color="blue"] {
  }

  .Button[data-type="transparent"][data-color="red"] {
  }

  .Button[data-type="transparent"][data-color="dark"] {
  }

  .Button[data-type="transparent"]:hover {
    filter: invert(0);
    background-color: #000;
  }

  .Button[data-type][data-color]:active {
    filter: saturate(150%);
  }
`;
