
class ConcertTicket {
    public artist: string;
    public city: string;
    public date: string;
    public placeNumber: number;
    public clientName: any;

    constructor(artist: string, city: string, date: string, placeNumber: number, clientName: any) {

        this.artist = artist;
        this.city = city;
        this.date = date;
        this.placeNumber = placeNumber;
        if (!is_null(clientName)) {
            this.clientName = clientName;
        }
    }

    function showTicketDetail() {
    showTicketContent = "
        < p > Artiste : this.artist < /p>
            < p > Lieu du concert: this.city < /p>
                < p > Date du concert: this.date < /p>
                    < p > Lieu du concert: this.placeNumber < /p>
    ";
    if (!is_null(this.name)) {
        showTicketContent = showTicketContent + "<p>Détenteur du ticket : this.clientName </p>";
    }
    return showTicketContent;
}
}
ticket01 = new ConcertTicket("Dalida", "27.03", "Marseille", "1", "AnneChariotte");
echo(ticket01.showTicketDetail());
