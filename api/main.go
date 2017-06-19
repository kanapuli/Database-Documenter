package main

import (
	"fmt"
	"gopkg.in/mgo.v2"
	"gopkg.in/mgo.v2/bson"
	//"github.com/gorilla/mux"
	"log"
)

//Person - struct to hold the user details
type Person struct {
	Name       string
	UserName   string
	Password   string
	IsAdmin    bool
	IsApprover bool
}

func main() {
	session, err := mgo.Dial("mongodb://127.0.0.1:27017")
	if err != nil {
		log.Fatal(err)
	}
	fmt.Println("connected")
	defer session.Close()

	c := session.DB("mydb").C("users")
	/*err = c.Insert(&Person{"Athavan Kanapuli", "Kanapuli", "play2win", true, false})
	if err != nil {
		log.Fatal(err)
	}
	result := Person{}
	err = c.Find(bson.M{"name":"Athavan Kanapuli"}).One(&result)
	if err != nil {
		log.Fatal(err)
	}
	fmt.Println(result)
	*/
}
