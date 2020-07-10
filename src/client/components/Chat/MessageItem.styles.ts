import css from "styled-jsx/css";

export const styles = css`
  .MessageItem {
    position: relative;
    border-radius: 12px;
    padding: 12px 14px;
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

  .MessageItem-meta {
    position: relative;
    font-size: 10px;
    color: #273746;
    z-index: 1;
  }

  .MessageItem-meta--time {
    text-align: right;
  }

  .MessageItem-content {
    position: relative;
    z-index: 1;
    margin-top: 4px;
  }

  .MessageItem-content img {
    max-width: 100%;
  }

  .MessageItem-arrow {
    content: "";
    width: 0;
    height: 0;
    border-top: 4px solid transparent;
    border-bottom: 4px solid transparent;
    display: block;
    position: absolute;
    bottom: 10px;
    opacity: 0.4;
  }

  .MessageItem-arrow--right {
    right: -4px;
    border-left: 4px solid black;
  }

  .MessageItem-arrow--left {
    left: -4px;
    border-right: 4px solid black;
  }
`;
