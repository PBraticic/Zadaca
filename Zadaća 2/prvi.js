import express, { response } from "express";
import bodyParser from "body-parser";
import { v4 as uuidv4 } from "uuid";
import { request } from "http";

const app = express();
const port = 3000;
app.use(bodyParser.json());

let lista = [];

app.post("/dodajObavijest", (req, res) => {

    let obavijest = req.body;

    obavijest.id = uuidv4();

    obavijest.datum = new Date().toUTCString();

    lista.push(obavijest)

    res.send(obavijest);

    console.log(lista)

});

app.get("/vratiObavijesti", (req, res) => { // get za vracanje iz servera kao DOWNLOAD
    res.send(lista);
});

app.patch("/izmjeniObavijest/:id", (req, res) => { 
    let { id } = req.params;

    let { sadrzaj } = req.body; 

    let odabranaObavijest = lista.find(item => item.id == id);
    // iz liste filtriramo obavijest koja ima id koji smo unesli
    // provjerava jeli za svaku obavijest taj id isti


    odabranaObavijest.sadrzaj = sadrzaj

    res.send(odabranaObavijest);
});


app.listen(port);