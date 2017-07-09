package main

import "net/http"

func GetDbRequest(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte("Hello World"))
}
