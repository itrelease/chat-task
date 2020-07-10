import css from "styled-jsx/css";

export const styles = css`
  .Header {
    position: relative;
    background: linear-gradient(180deg, #da0000, #a60000);
    padding: 12px;
    color: #fff;
  }

  .Header-title {
    text-align: center;
  }

  .Header-action {
    position: absolute;
    top: 50%;
    transform: translate3d(0, -50%, 0);
  }

  .Header-action--right {
    right: 16px;
  }
`;
