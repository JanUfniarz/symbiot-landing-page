# AutomationExamples

Sekcja z przykładami automatyzacji AI. Horyzontalna galeria kart z grafiką i treścią

---

## 🧩 Props
Komponent nie przyjmuje żadnych propsów

---

## 💡 Przykład użycia

```tsx
import AutomationExamples from './AutomationExamples';

<AutomationExamples />
```

---

## 🎨 Stylizacja
Klasy CSS:

| Klasa            | Opis                                              |
|------------------|---------------------------------------------------|
| container        | główny kontener sekcji                            |
| scrollContainer  | kontener z przykładami, umożliwiający przewijanie |
| card             | karta z pojedynczym przykładem automatyzacji      |
| imagePlaceholder | placeholder na obrazek                            |

Styl nie zależy od propsów.

---

## 🗒️ Treść
- `header`: tytuł sekcji.
- `examples`: tablica obiektów z przykładami automatyzacji:
    - `title`: tytuł przykładu.
    - `description`: opis przykładu.
    - `image_placeholder`: ścieżka do obrazka (placeholder).

---

## 🤖 Logika
Komponent mapuje tablicę `examples` i renderuje karty z przykładami automatyzacji.

---

## 📚 Ostatnia aktualizacja: 2025-07-09