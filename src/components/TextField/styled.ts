import styled from '@emotion/styled'

export const InputElement = styled.input`
  border: none;
  outline: none;
  color: #3a4b51;
  width: 100%;
  border-radius: 0.7rem;
  padding: 1.1rem;
  box-shadow: inset 0 0 0 1px rgba(0, 27, 55, 0.1);
  transition: background 0.2s ease, color 0.1s ease, box-shadow 0.2s ease;
  :hover,
  :focus {
    box-shadow: inset 0 0 0 1px #1bc8ff;
  }
`

export const ErrorMessage = styled.div`
  margin-top: 0.8rem;
  margin-bottom: 3rem;
  color: red;
`

export const Label = styled.label`
  font-size: 1.35rem;
  color: #3a4b51;
  display: inline-block;
  padding: 5px 0;
`
