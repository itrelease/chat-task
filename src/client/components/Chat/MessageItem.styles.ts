import css from "styled-jsx/css";

export const styles = css`
  .MessageItem {
    position: relative;
    border-radius: 12px;
    padding: 12px 14px;
    min-width: 164px;
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

  .MessageItem-senderName {
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .MessageItem-status {
    display: inline-block;
    width: 4px;
    height: 4px;
    border-radius: 2px;
    margin-left: 4px;
    flex: 0 0 auto;
  }

  .MessageItem-status[data-value="online"] {
    background-color: green;
  }

  .MessageItem-status[data-value="offline"] {
    background-color: red;
  }

  .MessageItem-meta--info {
    display: flex;
    align-items: center;
    white-space: nowrap;
  }

  .MessageItem-meta--time {
    text-align: right;
  }

  .MessageItem-content {
    position: relative;
    z-index: 1;
    margin-top: 4px;
  }

  .MessageItem-content span {
    white-space: pre-wrap;
    overflow-wrap: break-word;
  }

  .MessageItem-content img {
    display: block;
    margin: 6px 0;
    max-width: 100%;
  }

  .MessageItem-content img:first-child {
    margin-top: 0;
  }

  .MessageItem-corner {
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

  .MessageItem-corner[data-type="right"] {
    right: -4px;
    border-left: 4px solid black;
  }

  .MessageItem-corner[data-type="left"] {
    left: -4px;
    border-right: 4px solid black;
  }
`;
