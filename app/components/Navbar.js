import React from 'react'
import { connect } from 'react-redux'

class Test extends React.Component {
 render(){
    return <div>Navbar</div>
  }
}
const mapProps = null;

const mapDispatch = null;



 const TestContainer = connect(mapProps, mapDispatch)(Test);
 console.log('test',TestContainer);
 export default TestContainer
