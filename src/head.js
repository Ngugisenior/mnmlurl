var endpoint = 'https://www.jsonstore.io/1f43dbff706099a6a69fccc08fd4f0673fc087ef0f95f5b67c9f223be22d23b8'

function fetchJSON(a) {
	var f = new XMLHttpRequest()
	f.open('GET', a, false)
	f.send(null)
	return f.responseText
}

function isURL(a) {
	var f = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/
	if (f.test(a)) {
		return true
	} else {
		return false
	}
}
var hashh = window.location.hash.substr(1)
if (window.location.hash != '') {
	var res = JSON.parse(fetchJSON(endpoint + '/' + hashh))
	var data = res.result
	if (data != null) {
		if (isURL(data)) {
			window.location.href = data
		}
	}
}
