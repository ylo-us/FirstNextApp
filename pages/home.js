import React from 'react';
import { connect } from 'react-redux'

class Home extends React.Component {
	constructor(props) {
		super(props);
	}
	componentWillMount() {
		console.log('props from home: ', this.props);
	}

	render() {
		return (
			<div>
        <h1>Home</h1>
        
      </div>
		)
	}
}

function mapStateToProps(store) {
	return {
		number: store.home.number,
		name: store.home.name,
		img: store.home.img
	}
}



export default connect(mapStateToProps)(Home)








// export default connect(state => state)(({ number, name, img }) => {
// 	return (
//     <div>
//       <h1>Home</h1>
//       <div>{number}</div>
//       <div>{name}</div>
//       <div>{img}</div>
//     </div>
//   )
// })




// export default connect(state => state)(({ title, linkTo, lastUpdate, light }) => {
//   return (
//     <div>
//       <h1>{title}</h1>
//       <Clock lastUpdate={lastUpdate} light={light} />
//       <nav>
//         <Link href={linkTo}><a>Navigate</a></Link>
//       </nav>
//     </div>
//   )
// })
