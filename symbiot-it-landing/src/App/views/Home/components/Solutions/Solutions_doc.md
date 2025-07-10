# Solutions

Sekcja "Nasza Oferta".

---

## 🧩 Props
Komponent nie przyjmuje żadnych propsów

---

## 💡 Przykład użycia

```tsx
import Solutions from './Solutions';

<Solutions />
```

---

## 🎨 Stylizacja
Klasy CSS:

| Klasa     | Opis                              |
|-----------|-----------------------------------|
| section   | główny kontener sekcji            |
| container | kontener dla kart z rozwiązaniami |
| card      | karta z pojedynczym rozwiązaniem  |

Styl nie zależy od propsów.

---

## 🗒️ Treść
- `header`: tytuł sekcji.
- `solutions`: tablica obiektów z rozwiązaniami:
    - `title`: tytuł rozwiązania.
    - `description`: opis rozwiązania.

---

## 🤖 Logika
Komponent mapuje tablicę `solutions` i renderuje karty z rozwiązaniami.

---

## 📚 Ostatnia aktualizacja: 2025-07-10