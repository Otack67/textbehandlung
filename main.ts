function extrahiereParam (Nachricht: string, Parameter: string) {
    Wert = Nachricht.split(" ")
    Zeiger = 0
    for (let Index = 0; Index <= Wert.length - 1; Index++) {
        if (Wert[Index].includes(Parameter)) {
            Zeiger = Index
        }
    }
    Teiler = Wert[Zeiger].split(Parameter)
    Ausgabe = Teiler[1]
}
let Ausgabe = ""
let Teiler: string[] = []
let Zeiger = 0
let Wert: string[] = []
let Message = "ID:13345 STAT:1 SCORE:54"
let Laenge = Message.length
basic.pause(100)
extrahiereParam(Message, "SCORE:")
extrahiereParam(Message, "ID:")
extrahiereParam(Message, "STAT:")
basic.pause(2000)
basic.forever(function () {
	
})
