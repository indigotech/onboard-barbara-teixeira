import * as React from "react"
import PropsTypes from "prop-types"

const Table: React.FunctionComponent = (props) => {
  return <table>{props.children}</table>
}

Table.propTypes = { children: PropsTypes.node.isRequired }

export { Table }
