# Boolflix

replica di un sito per la visualizzazione di film e serie tv come netflix utilizzando di base un api per ottenere i risultati da una fonte esterna.

1. creiamo una barra di ricerca dove il risultato all' interno al click sul bottone, itera sull' api per dare tutti i risultati con
   il valore riportato all' interno dell' input.;

2. riportare a schermo i valori "titolo" "titolo originale" "lingua" "voto";

3. gestiamo la stringa della lingua sostituendo italiano o inglese con le rispettive bandiere;

4. aggiungiamo al risultato dei film anche le serie tv;

5. diamo una dimensione alle copertine che andranno a identificare il/la film/serie riportata;

6. trasformiamo il voto in un numero intero e massimo fino a 5, successivamente sostituiamo il valore numerico con delle icone stelle;

7. terminiamo aggiungendo il layout della pagina replicando una pagina simil-netflix:
   -Un header che contiene logo e search bar
   -Dopo aver ricercato qualcosa nella searchbar, i risultati appaiono sotto forma di “card” in cui lo sfondo è rappresentato dall’immagine -di copertina (consiglio la poster_path con w342)
   -Andando con il mouse sopra una card (on hover), appaiono le informazioni aggiuntive già prese nei punti precedenti più la overview;
