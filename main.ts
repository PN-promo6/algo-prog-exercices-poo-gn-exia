class ConcertTicket {
  public artist: string;
  public city: string;
  public date: string;
  public placeNumber: number;
  public clientName: string = "";

  constructor(artist: string, city: string, date: string, placeNumber: number, clientName?: string){
    this.artist = artist;
    this.city = city;
    this.date = date;
    this.placeNumber = placeNumber;
    this.clientName = clientName;
    if(clientName){
      this.clientName = clientName;
    }
  }
  public htmlDetails(): string {
    let htmlContent: string = `
    <p>Nom de l'artiste : ${this.artist}</p>
    <p>Ville : ${this.city}</p>
    <p>Date : ${this.date}</p>
    <p>Numéro de la place : ${this.placeNumber}</p>`
    if(this.clientName !=""){
      htmlContent = htmlContent + `<p>Nom du titulaire : ${this.clientName}</p>`
    };
    return (htmlContent)
  };
};

let place1: ConcertTicket = new ConcertTicket("Booba", "paris", "20 septembre", 18, "Roger");
console.log(place1.htmlDetails());
