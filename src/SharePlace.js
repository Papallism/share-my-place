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

		navigator.geolocation.getCurrentPosition(
			(success) => {
        const coordinates = {
          lat: success.coords.latitude,
          lng: success.coords.longitude
        }
        console.log(coordinates);
      },
			(error) => {
        alert("Could not locate user.", error)
      }
		)
	}
}

new PlaceFinder()