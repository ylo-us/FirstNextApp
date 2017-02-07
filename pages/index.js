import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
export default class extends React.Component {


	render () {
		return (
			<div>
				<Head>
		      <title>Demo Site</title>
		      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
		      <link rel="stylesheet" href="https://unpkg.com/purecss@0.6.1/build/pure-min.css" />
		    </Head>
				<div className="sideDrawer">
					<div id="logo">
					</div>
					<div>
						<div className="sideNav"><Link href="/home"><span>Home</span></Link></div>
						<div className="sideNav"><Link href="/about"><a>About</a></Link></div>
						<div className="sideNav"><Link href="/favorite"><a>Favorite</a></Link></div>
					</div>
				</div>
				<div className="main"></div>
			</div>
		)
	}
} 