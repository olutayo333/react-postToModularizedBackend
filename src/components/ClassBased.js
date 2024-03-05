// class  extends Component {
//     constructor(props) {
//         super(props);
//     }
//     state = {  }
//     render() { 
//         return (  );
//     }
// }


import { Component } from "react"
 
// export default ;

class ClassBased extends Component {
    constructor(props)
    {
        super(props)
    }
   state = {
        myNumber: 0, 
        allStudents:[], 
        firstName:'oLUTAYO',
    }
    test=()=>{
        alert('How far CCB')
    }
   increament = () =>{
    this.setState({myNumber:this.state.myNumber + 1})
   }
    render (){
        console.log(this.props.title)
        return(
            <div>
                <h2> Hello Class Based Components</h2>
                <h1>{this.state.myNumber}</h1>
                <button onClick={this.test}> Test </button>
                <button onClick={this.increament}> + </button>
            <hr/>
            </div>
        )
    }
}

export default ClassBased
