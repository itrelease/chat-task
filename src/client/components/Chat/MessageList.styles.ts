import css from "styled-jsx/css";

export const styles = css`
  .MessageList {
    padding: 16px 16px 0;
    display: flex;
    flex-direction: column;
    align-items: self-start;
    overflow: scroll;
  }

  .MessageList[data-empty="true"] {
    flex: 1;
    align-items: center;
    justify-content: center;
  }

  .MessageList-item {
    display: flex;
    justify-content: flex-start;
    margin-bottom: 16px;
    max-width: 70%;
  }

  .MessageList-item[data-own="true"] {
    justify-content: flex-end;
    align-self: flex-end;
  }
`;
