# AboutUs

Sekcja "O nas", przedstawiająca zespół. Dwie sekcje ze zdjęciem i opisem. 

---

## 🧩 Props
Komponent nie przyjmuje żadnych propsów

---

## 💡 Przykład użycia

```tsx
import AboutUs from './AboutUs';

<AboutUs />
```

---

## 🎨 Stylizacja
Klasy CSS:

| Klasa       | Opis                                      |
|-------------|-------------------------------------------|
| aboutUs     | główny kontener sekcji                    |
| team        | kontener dla członków zespołu             |
| teamMember  | kontener dla pojedynczego członka zespołu |
| image       | obrazek członka zespołu                   |
| name        | imię i nazwisko członka zespołu           |
| memberTitle | stanowisko członka zespołu                |
| description | opis członka zespołu                      |

Styl nie zależy od propsów.

---

## 🗒️ Treść
- `title`: tytuł sekcji.
- `members`: tablica obiektów z danymi członków zespołu:
    - `name`: imię i nazwisko.
    - `title`: stanowisko.
    - `description`: opis.
    - `image_src`: ścieżka do zdjęcia.
    - `image_alt`: tekst alternatywny dla zdjęcia.

---

## 🤖 Logika
Komponent mapuje tablicę `members` i renderuje informacje o każdym członku zespołu.

---

## 📚 Ostatnia aktualizacja: 2025-07-09