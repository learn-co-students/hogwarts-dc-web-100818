import React, {Component} from 'react'
import Details from './Details'

class Pig extends Component {
   constructor () {
      super()
      this.state = {
         clicked: false
      }
   }
   
   createSlugName = () => {
      let name = this.props.pig.name
      let slugName = name.toLowerCase().replace(/\s+/g, '_')
      return require(`../hog-imgs/${slugName}.jpg`)
    }

    handleClick = () => {
       this.setState({
          clicked: !this.state.clicked
       })
    }

   render() {
      return (
         <div className="card">
            <div className='image'>
               <img alt='' src={this.createSlugName()} />
            </div>
            <div className='content'>
               <a className='header' onClick={this.handleClick}>{this.props.pig.name}</a>
            </div>
            <div>
               {this.state.clicked ? <Details pig={this.props.pig} /> : null}
            </div>
         </div>
      )
   }
}

export default Pig
