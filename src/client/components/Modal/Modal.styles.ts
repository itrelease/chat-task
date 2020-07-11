import css from "styled-jsx/css";

export const styles = css`
  .Modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.9);
    opacity: 0;
    transition: opacity 0.25s ease-out;
    z-index: 1;
  }

  .Modal[data-status="opened"] {
    opacity: 1;
  }

  .Modal-content {
    position: relative;
    background-color: #fff;
    border-radius: 12px;
    padding: 32px 24px 24px;
  }

  .Modal-close {
    position: absolute;
    top: 10px;
    right: 10px;
  }
`;
