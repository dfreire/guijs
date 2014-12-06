package main

import (
	"encoding/json"
	"github.com/codegangsta/negroni"
	"github.com/gorilla/pat"
	"html/template"
	"net/http"
	"path"
)

func main() {
	router := pat.New()

	router.Get("/", IndexHandler)
	router.Get("/sign-up", IndexHandler)
	router.Get("/sign-in", IndexHandler)
	router.Get("/reset-password", IndexHandler)

	router.Post("/sign-up", SignUpHandler)

	n := negroni.Classic()
	n.UseHandler(router)
	n.Run(":3001")
}

func IndexHandler(res http.ResponseWriter, req *http.Request) {
	fp := path.Join("templates", "index.html")
	tmpl, err := template.ParseFiles(fp)
	if err != nil {
		http.Error(res, err.Error(), http.StatusInternalServerError)
		return
	}

	if err := tmpl.Execute(res, nil); err != nil {
		http.Error(res, err.Error(), http.StatusInternalServerError)
	}
}

func SignUpHandler(res http.ResponseWriter, req *http.Request) {
	params := make(map[string]interface{})
	err := json.NewDecoder(req.Body).Decode(&params)
	if err != nil {
		http.Error(res, err.Error(), http.StatusInternalServerError)
		return
	}

	res.Header().Set("Content-Type", "application/json")
	err = json.NewEncoder(res).Encode(params)
	if err != nil {
		http.Error(res, err.Error(), http.StatusInternalServerError)
		return
	}
}
