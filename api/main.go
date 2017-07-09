package main

import (
	"encoding/json"
	"fmt"

	"log"
	"net/http"

	"gopkg.in/mgo.v2"
	"gopkg.in/mgo.v2/bson"

	"github.com/gorilla/handlers"
	"github.com/gorilla/mux"
)

const mongoUrl = "mongodb://127.0.0.1:27017"

//Person - struct to hold the user details
type Person struct {
	Id         string
	Name       string
	UserName   string
	IsAdmin    bool
	IsApprover bool
}
type DbResponse struct {
	session *mgo.Session
	err     error
}
type DbRequest struct {
	url string
}

func main() {

	router := mux.NewRouter().StrictSlash(true)
	router.HandleFunc("/login", Login).Methods("POST")
	methodsOK := handlers.AllowedMethods([]string{"GET", "POST", "PUT", "DELETE", "OPTIONS"})
	originsOk := handlers.AllowedOrigins([]string{"*"})
	headersOk := handlers.AllowedHeaders([]string{"X-Requested-With", "access-control-allow-origin"})
	log.Fatal(http.ListenAndServe(":8080", handlers.CORS(methodsOK, originsOk, headersOk)(router)))

}

type LoginDetails struct {
	Username string `json:"username,omitempty"`
	Password string `json:"password,omitempty"`
}

func Login(w http.ResponseWriter, r *http.Request) {

	//Get The Mongo Session First
	dbClient := &DbRequest{}
	dbClient.url = mongoUrl
	response := dbClient.ConnectMongo()
	if response.err != nil {
		log.Fatal(response.err)
	}
	defer response.session.Close()
	var Credentials LoginDetails
	_ = json.NewDecoder(r.Body).Decode(&Credentials)

	mongoRecord := Person{}
	c := response.session.DB("mydb").C("users")
	//fmt.Println(Credentials)
	err := c.Find(bson.M{"username": Credentials.Username, "password": Credentials.Password}).One(&mongoRecord)
	fmt.Println(mongoRecord)
	if err != nil {
		w.WriteHeader(http.StatusNoContent)
		return
	}
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE")
	w.Header().Set("Access-Control-Allow-Headers", "x-requested-with, Content-Type, origin, authorization, accept, client-security-token, access-control-allow-origin")
	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(mongoRecord)

}

//ConnectMongo  -  Connects to mongo db using the receiver string and returns the pointer session and error
func (request DbRequest) ConnectMongo() *DbResponse {
	response := &DbResponse{}

	response.session, response.err = mgo.Dial(request.url)
	if response.err != nil {
		log.Fatal(response.err)
	}
	fmt.Println("connected")
	return response

}
