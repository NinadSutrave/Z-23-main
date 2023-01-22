class Event {
    constructor(cashPrize, category, description, entryFee, imageUrl, isAdvitiya, name, participants, participantList, rulebookLink) {
        this.cashPrize = cashPrize;
        this.category = category;
        this.description = description;
        this.entryFee = entryFee;
        this.imageUrl = imageUrl;
        this.isAdvitiya = isAdvitiya;
        this.name = name;
        this.participants = participants;
        this.participantList = participantList;
        this.rulebookLink = rulebookLink;
    }
}

module.exports = Event;