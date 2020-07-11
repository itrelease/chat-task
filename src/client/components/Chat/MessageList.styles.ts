import css from "styled-jsx/css";

export const styles = css`
  .MessageList {
    position: relative;
    padding: 16px 16px 0;
    display: flex;
    flex-direction: column;
    align-items: self-start;
    overflow: scroll;
  }

  .MessageList:after {
    content: "";
    padding-bottom: 16px;
    width: 100%;
  }

  .MessageList[data-empty="true"] {
    flex: 1;
    align-items: center;
    justify-content: center;
  }

  .MessageList-item {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-bottom: 16px;
    max-width: 70%;
    flex: 1 0 auto;
  }

  .MessageList-item:last-of-type {
    margin-bottom: 0;
  }

  .MessageList-item[data-own="true"] {
    justify-content: flex-end;
    align-self: flex-end;
  }
`;
