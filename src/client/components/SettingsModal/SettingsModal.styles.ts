import css from "styled-jsx/css";

export const styles = css`
  .SettingsModal {
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

  .SettingsModal[data-status="opened"] {
    opacity: 1;
  }

  .SettingsModal-content {
    position: relative;
    background-color: #fff;
    border-radius: 12px;
    padding: 32px 24px 24px;
  }

  .SettingsModal-close {
    position: absolute;
    top: 10px;
    right: 10px;
  }

  .SettingsModal-row {
    margin-bottom: 24px;
  }

  .SettingsModal-row:last-of-type {
    margin-bottom: 0;
  }

  .SettingsModal-title {
    margin-bottom: 6px;
  }

  .SettingsModal-label {
    font-size: 14px;
    margin-right: 18px;
    color: #6a6a6a;
  }

  .SettingsModal-label input {
    margin: 0 4px 0 0;
    vertical-align: middle;
  }

  .SettingsModal-reset {
    background: none;
    border: none;
    appearance: none;
    cursor: pointer;
    display: block;
    margin: 0 auto;
    color: #6a6a6a;
    outline: none;
  }
`;
