import css from "styled-jsx/css";

export const styles = css`
  .SettingsModal-separator {
    margin: 32px 0;
    border: 0;
    height: 1px;
    background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.75),
      rgba(0, 0, 0, 0)
    );
  }

  .SettingsModal-row {
    margin-bottom: 24px;
  }

  .SettingsModal-row--userName,
  .SettingsModal-row:last-of-type {
    margin-bottom: 0;
  }

  .SettingsModal-title {
    margin-bottom: 6px;
  }

  .SettingsModal-group {
    display: flex;
  }

  .SettingsModal-label {
    font-size: 14px;
    margin-right: 18px;
    color: #6a6a6a;
  }

  .SettingsModal input[type="text"] {
    border: 1px solid #6a6a6a;
    padding: 6px 8px;
    outline: none;
    appearance: none;
    flex: 1;
    margin-right: 12px;
  }

  .SettingsModal-label input[type="radio"] {
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
