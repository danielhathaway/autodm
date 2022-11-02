
class Deck {

    constructor() {
        this.cards = [];
    }

    addCard(name, text) {
        this.cards[this.cards.length] = new Card(name, text);
    }

    drawCard() {
        let card;
        if(this.cards.length == 0) {
          card = new Card('Empty', "THE DECK IS EMPTY!");
        }
        else {
          let rdm = rdmInt(0, (this.cards.length - 1));
          card = this.cards[rdm];
          this.cards.splice(rdm, 1);
        }
        return card;
    }

    addStandardCards() {
        this.cards[this.cards.length] = new Card('Balance', 'Your mind suffers a wrenching alteration, causing your alignment to change. Lawful becomes chaotic, good becomes evil, and vice versa. If you are true neutral or unaligned, this card has no effect on you.');
        this.cards[this.cards.length] = new Card('Comet', 'If you single-handedly defeat the next hostile monster or group of monsters you encounter, you gain experience points enough to gain one level. Otherwise, this card has no effect.');
        this.cards[this.cards.length] = new Card('Donjon', 'You disappear and become entombed in a state of suspended animation in an extradimensional sphere. Everything you were wearing and carrying stays behind in the space you occupied when you disappeared. You remain imprisoned until you are found and removed from the sphere. You can’t be located by any divination magic, but a wish spell can reveal the location of your prison. You draw no more cards.');
        this.cards[this.cards.length] = new Card('Euryale', 'The card’s medusa-like visage curses you. You take a –2 penalty on saving throws while cursed in this way. Only a god or the magic of The Fates card can end this curse.');
        this.cards[this.cards.length] = new Card('The Fates', 'Reality’s fabric unravels and spins anew, allowing you to avoid or erase one event as if it never happened. You can use the card’s magic as soon as you draw the card or at any other time before you die.');
        this.cards[this.cards.length] = new Card('Flames', 'A powerful devil becomes your enemy. The devil seeks your ruin and plagues your life, savoring your suffering before attempting to slay you. This enmity lasts until either you or the devil dies.');
        this.cards[this.cards.length] = new Card('Fool', 'You lose 10,000 XP, discard this card, and draw from the deck again, counting both draws as one of your declared draws. If losing that much XP would cause you to lose a level, you instead lose an amount that leaves you with just enough XP to keep your level.');
        this.cards[this.cards.length] = new Card('Gem', 'Twenty-five pieces of jewelry worth 2,000 gp each or fifty gems worth 1,000 gp each appear at your feet.');
        this.cards[this.cards.length] = new Card('Idiot', 'Permanently reduce your Intelligence by 1d4 + 1 (to a minimum score of 1). You can draw one additional card beyond your declared draws.');
        this.cards[this.cards.length] = new Card('Jester', 'You gain 10,000 XP, or you can draw two additional cards beyond your declared draws.');
        this.cards[this.cards.length] = new Card('Key', 'A rare or rarer magic weapon with which you are proficient appears in your hands. The GM chooses the weapon.');
        this.cards[this.cards.length] = new Card('Knight', 'You gain the service of a 4th-level fighter who appears in a space you choose within 30 feet of you. The fighter is of the same race as you and serves you loyally until death, believing the fates have drawn him or her to you. You control this character.');
        this.cards[this.cards.length] = new Card('Moon', 'You are granted the ability to cast the wish spell 1d3 times.');
        this.cards[this.cards.length] = new Card('Rogue', 'A nonplayer character of the GM’s choice becomes hostile toward you. The identity of your new enemy isn’t known until the NPC or someone else reveals it. Nothing less than a wish spell or divine intervention can end the NPC’s hostility toward you.');
        this.cards[this.cards.length] = new Card('Ruin', 'All forms of wealth that you carry or own, other than magic items, are lost to you. Portable property vanishes. Businesses, buildings, and land you own are lost in a way that alters reality the least. Any documentation that proves you should own something lost to this card also disappears.');
        this.cards[this.cards.length] = new Card('Skull', 'You summon an avatar of death—a ghostly humanoid skeleton clad in a tattered black robe and carrying a spectral scythe. It appears in a space of the GM’s choice within 10 feet of you and attacks you, warning all others that you must win the battle alone. The avatar fights until you die or it drops to 0 hit points, whereupon it disappears. If anyone tries to help you, the helper summons its own avatar of death. A creature slain by an avatar of death can’t be restored to life.');

    }
}

class Card {

    constructor(name, text) {
        this.name = '';
        this.text = '';
        if(name != undefined) this.name = name;
        if(text != undefined) this.text = text;
    }
}

function rdmInt(min, max) {
	return Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1)) + min;
}
