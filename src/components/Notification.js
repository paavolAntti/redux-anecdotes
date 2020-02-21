import React from 'react'
import { connect } from 'react-redux'

const Notification = (props) => {
	
 	const style = {
    	border: 'solid',
    	padding: 10,
    	borderWidth: 1
	}
	if (!props.notifications) return null
	console.log('props:', props)
  	return (
    	<div style={style}>
      		{ props.notifications.message }
    	</div>
  	)
}

const mapStateToProps = (state) => {
	return {
		notifications: state.notifications
	}
}

const ConnectedNotification = connect(mapStateToProps)(Notification)

export default ConnectedNotification