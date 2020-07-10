import css from "styled-jsx/css";

export const styles = css`
  .MessageList {
    padding: 0 12px;
    display: flex;
    flex-direction: column;
    align-items: self-start;
    overflow: scroll;
  }

  .MessageList-item {
    margin-bottom: 8px;
  }

  .MessageList-item[data-own="true"] {
    align-self: flex-end;
  }
`;
