package main

import (
	"fmt"
	"net/http"
	"text/template"
)

func main() {
	port := ":8080" // Remplace par le port souhaité
	fmt.Println("Serveur démarré sur le port", port)
	http.HandleFunc("/", IndexHandler)
	http.HandleFunc("/documentation", IndexDocument)
	http.HandleFunc("/question", IndexQuestion)
	http.HandleFunc("/problematique", Indexproblematique)

	http.Handle("/static/", http.StripPrefix("/static/", http.FileServer(http.Dir("Frontend"))))
	http.Handle("/js/", http.StripPrefix("/js/", http.FileServer(http.Dir("Frontend/JS"))))
	http.Handle("/css/", http.StripPrefix("/css/", http.FileServer(http.Dir("Frontend/CSS"))))
	http.Handle("/images/", http.StripPrefix("/images/", http.FileServer(http.Dir("Frontend/Images"))))
	http.Handle("/videos/", http.StripPrefix("/videos/", http.FileServer(http.Dir("Frontend/Videos"))))
	err := http.ListenAndServe(port, nil)
	if err != nil {
		fmt.Println("Erreur lors du démarrage du serveur:", err)
	}
}

func IndexDocument(w http.ResponseWriter, r *http.Request) {
	tmpl, err := template.ParseFiles("Frontend/HTML/documentation.html")
	if err != nil {
		http.Error(w, "Erreur lors du rendu de la page", http.StatusInternalServerError)
		return
	}
	tmpl.Execute(w, nil)

}

func IndexQuestion(w http.ResponseWriter, r *http.Request) {
	tmpl, err := template.ParseFiles("Frontend/HTML/question.html")
	if err != nil {
		http.Error(w, "Erreur lors du rendu de la page", http.StatusInternalServerError)
		return
	}
	tmpl.Execute(w, nil)

}

func Indexproblematique(w http.ResponseWriter, r *http.Request) {
	tmpl, err := template.ParseFiles("Frontend/HTML/problematique.html")
	if err != nil {
		http.Error(w, "Erreur lors du rendu de la page", http.StatusInternalServerError)
		return
	}
	tmpl.Execute(w, nil)

}

func IndexHandler(w http.ResponseWriter, r *http.Request) {
	tmpl, err := template.ParseFiles("Frontend/HTML/index.html")
	if err != nil {
		http.Error(w, "Erreur lors du rendu de la page", http.StatusInternalServerError)
		return
	}
	tmpl.Execute(w, nil)

}
