import styled from "styled-components"

const TableCell = styled.td`
  background-color: grey;
  border: 1px solid #f5f5f5;
  ${({ type }: { type: string }) => {
    if (type === "th") {
      return `
        background: black;
        font-weigth: 400;
        color: white;
    `
    }
  }}
`

export { TableCell }
