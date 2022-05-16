### Zadatak

2 komponente - all-users i user.
UserComponent: Plavi blok sa informacijama o jednom korisniku. Iz roditeljske komponente očekuje konkretnog korisnika na osnovu kojih će prikazati podatke.
AllUsersComponent: Sadrži niz korisnika, gde svaki korisnik ima id, ime i prezime.

Dvoklikom na usera (user component), obavestiti parent komponentu na kojeg usera je kliknuto. U parent (all users) komponenti, ispod svih blokova prikazati ime usera na kojeg je poslednje kliknuto. Ukoliko je već prikazano njegovo ime, potrebno je prikazati slash. Ukoliko je trenutno prikazan slash, a pre prikazivanja slasha je bio taj isti user na kojeg je opet kliknuto i dalje treba da stoji slash.

Primer: Klik 2x na usera 1, prikaz User1. Opet se klikne na usera 1 prikaz slasha. Ako se opet klikne na usera 1 i dalje treba biti prikazan slash, dakle dokle god se ne klikne na novog - kao na snimku.

https://user-images.githubusercontent.com/38792171/168678585-482720e4-3f03-43c2-8d16-edc53efe27bb.mp4
