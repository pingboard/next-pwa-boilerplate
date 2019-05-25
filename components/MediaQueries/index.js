import styled, { css } from 'styled-components';

const sizes = {
  giantbear: 1690,
  papabear: 1280,
  brotherbear: 1024,
  sisterbear: 980,
  mamabear: 736,
  babybear: 480,
};

export default Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label]}px) {
      ${css(...args)};
    }
  `;
  return acc;
}, {});
