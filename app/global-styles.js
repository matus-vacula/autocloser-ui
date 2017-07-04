import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: "museo-sans", sans-serif;
  }

  #app {
    background-color: white;
    
    text-align: center;
    width: 50%;
    margin: auto;
    background-color: white;
  }
  
  h1 {
    font-family: "museo-sans", sans-serif;
    font-weight: 400;
    letter-spacing: 1px;
    color: #d70f64;
    padding: 20px;
  }
  
  .save-button {
    color: #fff;
    background-color: #d70f64;
    font-weight: 600;
    line-height: 1.42857143;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    display: inline-block;
    padding: 6px 12px;
    margin-bottom: 0;
    font-size: 14px;

    font-weight: 600;
    line-height: 1.42857143;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-image: none;
    border: 1px solid transparent;
    border-radius: 4px;
  }

  label {
   font-weight: 600;
   font-family: arial;
   font-size: 11pt;
  }
  
  input[type="text"] {
        -webkit-appearance: textfield;
    background-color: white;
    -webkit-rtl-ordering: logical;
    user-select: text;
    cursor: auto;
    padding: 1px;
    border-width: 2px;
    border-style: inset;
    border-color: initial;
    border-image: initial;
  }

`;
