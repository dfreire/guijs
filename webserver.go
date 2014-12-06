package main

import (
	"encoding/json"
	"github.com/codegangsta/negroni"
	"github.com/gorilla/pat"
	"log"
	"net/http"
)

func main() {
	router := pat.New()
	router.Post("/sign-up", SignUpHandler)

	n := negroni.Classic()
	n.UseHandler(router)
	n.Run(":3001")
}

func SignUpHandler(res http.ResponseWriter, req *http.Request) {
	params := make(map[string]interface{})
	err := json.NewDecoder(req.Body).Decode(&params)
	if err != nil {
		log.Panic(err)
	}
	log.Println("++++", params)
}
