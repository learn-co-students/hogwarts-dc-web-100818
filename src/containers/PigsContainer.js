import React, {Component} from 'react'
import Pig from '../components/Pig'

class PigsContainer extends Component {

  returnPigs = () => {
      let showPigs = this.props.getSortedPigs()
      if (this.props.greased === 'all') {
         return showPigs
      } else {
         return showPigs.filter(pig => pig.greased === this.props.greased)
      }
   }

   render() {
      return (
         <div className="ui cards">
            {this.returnPigs().map((pig, i) => <Pig key={i} pig={pig} />)}
         </div>
      )
   }

}

export default PigsContainer
