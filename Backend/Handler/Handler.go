package handler

import (
	"net/http"
)

func HandleFunc() {

	http.HandleFunc("/", IndexHandler)
	http.Handle("/static/", http.StripPrefix("/static/", http.FileServer(http.Dir("surconsommagepeche/Frontend/CSS"))))

}
