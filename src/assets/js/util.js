function getQueryString(name) { 
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); 
    var r = window.location.search.substr(1).match(reg); 
    if (r != null) return unescape(r[2]); 
    return null; 
} 

const validator = {
    telephone: function(str) {
        var re = /^0?1[3|4|5|8|7][0-9]\d{8}$/;
        return re.test(str);
    },
}


module.exports = {
	getQueryString: getQueryString,
	validator: validator
}
