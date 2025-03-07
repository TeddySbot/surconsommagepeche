package handler

import (
	"html/template"
	"net/http"
)

func IndexHandler(w http.ResponseWriter, r *http.Request) {
	tmpl, err := template.ParseFiles("surconsommagepeche/Frontend/HTML/index.html")
	if err != nil {
		http.Error(w, "Erreur lors du rendu de la page", http.StatusInternalServerError)
		return
	}
	tmpl.Execute(w, nil)

}
