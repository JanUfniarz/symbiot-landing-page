# AuditForm

Formularz do wysyłania zapytania o wycenę.

---

## 🧩 Props
Komponent nie przyjmuje żadnych propsów

---

## 💡 Przykład użycia

```tsx
import AuditForm from './AuditForm';

<AuditForm />
```

---

## 🎨 Stylizacja
Klasy CSS:

| Klasa           | Opis                             |
|-----------------|----------------------------------|
| wycenaContainer | główny kontener formularza       |
| h2              | styl nagłówka                    |
| form            | styl formularza                  |
| formGroup       | grupa pól formularza             |
| label           | etykieta pola                    |
| input           | pole do wprowadzania danych      |
| textarea        | pole tekstowe                    |
| button          | przycisk do wysyłania formularza |

Styl nie zależy od propsów.

---

## 🗒️ Treść
Komponent nie pobiera treści z zewnętrznego pliku. Wszystkie teksty są zakodowane bezpośrednio w komponencie.

---

## 🤖 Logika
Użyte hooki:
- `useState` do zarządzania stanem pól formularza (`email`, `description`) oraz stanem powodzenia wysłania (`isSuccess`).

Funkcja `handleSubmit` (importowana z `AuditForm_logic.ts`) jest wywoływana po wysłaniu formularza.
Wywołuje żądanie POST na ścieżce `'/api/audit'`
Po pomyślnym wysłaniu, stan `isSuccess` jest ustawiany na `true`, a pola formularza są czyszczone.

---

## 📚 Ostatnia aktualizacja: 2025-07-07