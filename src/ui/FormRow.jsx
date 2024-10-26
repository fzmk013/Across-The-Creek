/** @format */

import styled from "styled-components";

/** @format */
const StyledFormRow = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 24rem 1fr 1.2fr;
  gap: 2.4rem;

  padding: 1.2rem 0;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }

  &:not(:last-child) {
    border-bottom: 1px solid #f3f4f6;
  }

  &:has(button) {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`;

const Label = styled.label`
  font-weight: 500;
`;

const Error = styled.span`
  font-size: 1.4rem;
  color: #b91c1c;
`;

function FormRow({ label, error, children }) {
  return (
    <StyledFormRow>
      {/* htmlFor property reflects the value of the for content property. */}
      {label && <Label htmlFor={children.props.id}>{label}</Label>}
      {children}
      {/* showing the errors */}
      {error && <Error>{error}</Error>}
    </StyledFormRow>
  );
}

export default FormRow;
