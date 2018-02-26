import axios from 'axios'
import { apiUrl } from '../../config/index'
import Vue from 'vue'

function get (url, params, needToken = true) {
  if(needToken) {
  	console.log("get请求传入token", window.token)
  	return Vue.http.get(apiUrl + url, { 
  	   params: params,
	   headers: {'Authorization': 'Bearer ' + window.token}
	})
  } else {
  	return Vue.http.get(apiUrl + url, { params })
  }
}

function post (url, params, needToken = true) {
	if(needToken) {
	  return Vue.http.post(apiUrl + url, params, {
	    headers: {'Authorization': 'Bearer ' + window.token}
	  })		
	} else {
		return Vue.http.post(apiUrl + url, params)	
	}
}

export const getWxUnionid = ( code ) => get('/wx/unionId', {
	code
}, false);

export const getWxUserInfo = ( unionId ) => get('/wx/user', {
	unionId
}, false);

export const bindMobile = ( mobile, checkCode, accessToken, openId ) => post('/wx/signUp', {
	mobile,
	checkCode,
	accessToken,
	openId,
}, false);

export const getVerifyCode = ( mobile, categoryType, category, content ) => post('/message/sms/checkcode', {
	mobile,
	categoryType,
	category,
	content,
}, false);

export const getParticipateList = ( pageNo, pageSize ) => get('/wx/activities/joined', {
	pageNo,
	pageSize,
});

export const getOrganizeList = ( pageNo, pageSize ) => get('/wx/activities/created', {
	pageNo,
	pageSize,
});

export const uploadPic = ( serviceId, category, itemId, fileName, md5 ) => post('/file/upload/withParamsAndToken', {
	serviceId, 
	category, 
	itemId, 
	fileName, 
	md5,
});

export const getLocations = ( code ) => get('/comm/locations', {
	code
})

export const getFileMd5 = ( fileUpload ) => post('/file/calMD5', {
	fileUpload
})

export const createActivity = ( title, description, organization, beganAt, endedAt, contacts, districtCode, street, deadlineAt, containCount ) => post('/wx/activities', {
	title, 
	description, 
	organization, 
	beganAt, 
	endedAt, 
	contacts, 
	districtCode, 
	street, 
	deadlineAt, 
	containCount
})


