import css from "styled-jsx/css";

export const styles = css`
  .MessageItem {
    position: relative;
    border-radius: 12px;
    padding: 8px 12px;
  }

  .MessageItem:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.6);
  }

  .MessageItem-content {
    position: relative;
    z-index: 1;
  }
`;
