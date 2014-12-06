package main

import (
	"encoding/json"
	"github.com/codegangsta/negroni"
	"github.com/gorilla/pat"
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
		http.Error(res, err.Error(), http.StatusInternalServerError)
		return
	}

	js, err := json.Marshal(params)
	if err != nil {
		http.Error(res, err.Error(), http.StatusInternalServerError)
		return
	}

	res.Header().Set("Content-Type", "application/json")
	res.Write(js)
}
