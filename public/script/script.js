var verifyRotate = function(){
	let win = window
	let isDeitado;
	if(win.innerWidth > win.innerHeight){
		isDeitado = true
	}else {isDeitado = false}
	rotateHandler(isDeitado)
	setTimeout(verifyRotate, 100)
}

let rotateHandler = function (isDeitado){
	let height, width

	if(isDeitado){
		height = "100%"
		width = "50%"
	}else{
		height = "50%"
		width = "100%"
	}

	let top = document.getElementById("top-container")
	top.style.height = height
	top.style.width = width

	let bot = document.getElementById("bot-container")
	bot.style.height = height
	bot.style.width = width
}
