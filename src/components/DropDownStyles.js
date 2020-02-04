import styled, { css } from 'styled-components';

const DropdownStyles = styled.div`
  position: relative;
  width: 150px;
  font-size: 10px;
  font-weight: 400;

  
  .dropdown__button {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    color: #950750;
    background-color: transparent;
    border: 1px solid rgba(0, 118, 255, 0.1);
    border-radius: 5px;

    &:hover,
    &:focus {
      color: #4e4e50;
      background: rgba(0, 118, 255, 0.1);
      border-color: rgba(0, 118, 255, 0.1);
    }
    svg {
      margin-left: 0.5rem;
    }
    label {
      transition: all 0.2s ease-in-out;
      cursor: pointer;
      font-size: 14px;
    }
  }
  .dropdown__list {
    position: absolute;
    overflow: hidden;
    z-index: 2;
    transition: all 0.2s ease-in-out;
    box-shadow: 0 5px 30px -15px rgba(0, 0, 0, 0.2);
    opacity: 0;
    visibility: hidden;
    background-color: rgb(238, 236, 236);
    list-style-type: none;

  }
  .dropdown__list-item {
    border-radius: 0;
    transition: all 0.2s ease-in-out;
    &:hover,
    &:focus {
      background-color: rgb(238, 236, 236);
    }
    &:first-of-type {
      button {
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
      }
    }
    &:last-of-type {
      button {
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
      }
    }
    button {
      color: #950740;
      background: rgba(0, 118, 255, 0.1);
      padding: 10px 7px;
      width: 100%;
      font-size: 14px;
      font-weight: 500;
      line-height: 1;
      text-align: left;
    }
  }
  ${props =>
    props.active &&
    css`
      .dropdown__list {
        opacity: 1;
        visibility: visible;
      }
      .dropdown__button {
        background: rgba(0, 118, 255, 0.1);
        svg {
          transform: rotate(0.5turn);
        }
      }
    `}
`;

export default DropdownStyles;
