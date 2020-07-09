import css from "styled-jsx/css";

export const styles = css`
  .Chat {
    display: flex;
    flex: 1;
    flex-direction: column;
  }

  .Chat-content {
    position: relative;
    flex: 1;
  }

  .Chat-messageList {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: scroll;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
`;
