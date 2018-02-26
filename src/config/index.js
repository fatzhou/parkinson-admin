let apiUrl = "http://apptest.gyenno.com/service_im_test/v3"

if(process.env.NODE_ENV === 'production') {
	apiUrl = "http://app.gyenno.com/service_app_im/v3"
}

module.exports = {
	apiUrl: apiUrl
}