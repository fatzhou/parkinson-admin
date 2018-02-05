import fetch from './fetch'

export const getUser = ( num ) => fetch('/action_214/user/get_userinfo', {
	num
}, 'POST');

