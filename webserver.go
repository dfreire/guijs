package main

import (
	"github.com/codegangsta/negroni"
	//"net/http"
)

func main() {
	n := negroni.Classic()
	n.Run(":3000")
}
