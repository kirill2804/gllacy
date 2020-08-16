var bg_fon = document.querySelector(".bg");

		var btn_contact = document.querySelector(".contacts-button");

		var modal = document.querySelector(".modal-feedback")

		var modal_close = document.querySelector(".modal-close")

		var form = document.querySelector(".form-feedback")

		var input_name = form.querySelector("input[type=text]")

		var input_email = form.querySelector("input[type=email]")

		var input_textarea = form.querySelector(".form-feedback-message")


		var logininfo = {}

		var storage = ""
		var isStoragesupport = true

		try{
			var storage = JSON.parse(localStorage.getItem("formdata"))
		}catch(err){
		    isStoragesupport = false
		}


		btn_contact.addEventListener("click", function(evt){

			evt.preventDefault()

			modal.classList.remove("modal-error");

			bg_fon.classList.add("modal-bg")

			document.body.classList.add("overflow-bg")

			modal.classList.add("modal-show")

			if(storage){
					input_name.value = storage.name
					input_email.value = storage.email
					input_textarea.focus()
				}else{
					input_name.focus()
			}
		})


		form.addEventListener("submit", function(evt){

			if(!input_name.value || !input_email.value){
				evt.preventDefault()
				modal.classList.remove("modal-error");
				modal.offsetWidth = modal.offsetWidth
				modal.classList.add("modal-error");

				console.log("поля не заполнены")
			}else{

				if(isStoragesupport){
			
						/*!!!*/ evt.preventDefault()
						

						logininfo.name = input_name.value
						logininfo.email = input_email.value
						localStorage.setItem("formdata", JSON.stringify(logininfo))

						
						modal.classList.remove("modal-show")
						bg_fon.classList.remove("modal-bg")
						document.body.classList.remove("overflow-bg")

						console.log("Форма успешно отправлена!!")
				}

			}

		})

		modal_close.addEventListener("click", function(evt){

			evt.preventDefault()

			modal.classList.remove("modal-error");
			modal.classList.remove("modal-show")

			bg_fon.classList.remove("modal-bg")

			document.body.classList.remove("overflow-bg")
		}) 


		window.addEventListener("keydown", function(evt){

			if(modal.classList.contains("modal-show")){

				if(evt.keyCode === 27){
					evt.preventDefault()	

					modal.classList.remove("modal-error");
					modal.classList.remove("modal-show")

					bg_fon.classList.remove("modal-bg")

					document.body.classList.remove("overflow-bg")
				}

			}
		})