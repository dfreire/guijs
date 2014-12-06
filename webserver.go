package main

import (
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
	log.Println("++++", req)
}
