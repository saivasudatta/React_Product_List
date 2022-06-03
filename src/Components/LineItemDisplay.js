import React from 'react'

 const LineItemDisplay = (props) => {
  return (
    props.displayData.map(({ name, price }, index) => (
		<tr key={index}>
			<td>{name}</td>
			<td>{price}</td>
		</tr>
	))
  )
}

export default LineItemDisplay