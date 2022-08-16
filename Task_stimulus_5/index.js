import { Application, Controller } from "https://unpkg.com/@hotwired/stimulus/dist/stimulus.js"
window.Stimulus = Application.start()

Stimulus.register("index", class extends Controller {
  static targets = [ "name" ]

  connect() {
    debugger
  }
})