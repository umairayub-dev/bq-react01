import React from 'react'
import {Card} from 'react-bootstrap'

const MyComponent = (props) => {
  return (
    <Card className="m-2 p-2">
        PropDate: {props.myData}
    </Card>
  )
}

export default MyComponent