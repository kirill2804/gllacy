		var btn_radio = document.querySelectorAll(".btn-radio");
		var body = document.querySelector("body");
		var bg = document.querySelector(".bg-wrapper");
		var slider_item = document.querySelectorAll(".slider-item");



		for(var i = 0; i < btn_radio.length; i++){

			switches_axtive(i)
		}

		function switches_axtive(item){

			btn_radio[item].addEventListener("click", function(evt){

				evt.preventDefault()

				for(var t = 0; t < btn_radio.length; t++){

					if(btn_radio[t].classList.contains("btn-radio-current")){
						btn_radio[t].classList.remove("btn-radio-current")
						this.classList.add("btn-radio-current")

						bg.classList.remove('slider-bg-'+t)
						bg.classList.add('slider-bg-'+item)

						body.classList.remove('background-'+t)
						body.classList.add('background-'+item)

						slider_item[t].classList.add('visually-hidden')
						slider_item[item].classList.remove('visually-hidden')

						break
					}
				}


			})
		}