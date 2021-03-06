import styled, { css } from 'styled-components';
;

const Section = styled.section`
  padding: 3rem 5rem;


  ${props =>
    props.dark &&
    css`
      background-color: black;
      color: blue;
      padding-bottom: 10rem;
     
    `};

  & > div {
    max-width: 1400px;
    margin: 0 auto;
  }

  header {
    display: flex;
    align-items: center;
    margin-bottom: 2rem;

    h2 {
      display: inline-block;
      margin: 0;
      font-size: 1.75rem;
      background-image: linear-gradient(90deg, #d1d5da 50%, hsla(0, 0%, 100%, 0) 0);
      background-position: bottom;
      background-repeat: repeat-x;
      background-size: 10px 2px;
      padding-bottom: 6px;
      
    }
  }
`;

export default Section;
