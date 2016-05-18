
const setLocal = (key,val,exp) => {

	key = typeof(key) == 'string' ? key : JSON.stringify(key)
	val = typeof(val) == 'string' ? val : JSON.stringify(val)

	const now = Date.parse(new Date()) / 1000
	const end = now + exp

	localStorage.setItem(key,val)
	if(exp) localStorage.setItem(key + '_exp',end)
}
const getLocal = (key) => {
	const val = localStorage.getItem(key) && JSON.parse(localStorage.getItem(key))
	const now = Date.parse(new Date()) / 1000
	const exp = localStorage.getItem(key + '_exp')
	let time = exp - now
	console.log(time)
	if(exp && exp - now > 0){
		return val
	}else{
		localStorage.removeItem(key)
		return undefined
	}
}

const setSession = (key,val,exp) => {

	key = typeof(key) == 'string' ? key : JSON.stringify(key)
	val = typeof(val) == 'string' ? val : JSON.stringify(val)

	const now = Date.parse(new Date()) / 1000
	const end = now + exp

	sessionStorage.setItem(key,val)
	if(exp) sessionStorage.setItem(key + '_exp',end)
}
const getSession = (key) => {
	const val = sessionStorage.getItem(key) && JSON.parse(sessionStorage.getItem(key))
	const now = Date.parse(new Date()) / 1000
	const exp = sessionStorage.getItem(key + '_exp')

	if(exp && exp - now > 0){
		return val
	}else{
		sessionStorage.removeItem(key)
		return undefined
	}
}

export default {
  getLocal: getLocal,
  setLocal: setLocal,
  getSession: getSession,
  setSession: setSession
}
