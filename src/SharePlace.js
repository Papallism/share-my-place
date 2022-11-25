import { Modal } from "./UI/Modal";

class PlaceFinder {
	constructor() {
		const addressForm = document.querySelector("form")
		const locateUserButton = document.getElementById("locate-btn")

		addressForm.addEventListener("submit", this.findAddressHandler)
		locateUserButton.addEventListener("click", this.locateUserHandler)
	}

	findAddressHandler() {}

	locateUserHandler() {
		if (!navigator.geolocation) {
			alert("Location feature not available in current browser.")
			return
		}

		const modal = new Modal('loading-modal-content', 'Loading location...')
		modal.show()

		navigator.geolocation.getCurrentPosition(
			(success) => {
				modal.hide()
				
        const coordinates = {
          lat: success.coords.latitude,
          lng: success.coords.longitude
        }
        console.log(coordinates);
      },
			(error) => {
				modal.hide()
				
        alert("Could not locate user.", error)
      }
		)
	}
}

new PlaceFinder()