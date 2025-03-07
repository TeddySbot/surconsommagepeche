package main

import (
	"fmt"
	"net/http"
	"teddysbot-surconsommagepeche/Backend/Handler"
)

func main() {
	port := ":8080" // Remplace par le port souhaité
	fmt.Println("Serveur démarré sur le port", port)
	http.HandleFunc("/", Handler.HomeHandler)
	err := http.ListenAndServe(port, nil)
	if err != nil {
		fmt.Println("Erreur lors du démarrage du serveur:", err)
	}
}
