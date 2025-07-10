# BacklightHeader

Nagłówek ze specjalnym efektem poświaty za kursorem myszy.

---

## 🧩 Props

| Nazwa      | Typ               | Wymagany | Domyślna wartość | Opis                         |
|------------|-------------------|----------|------------------|------------------------------|
| `children` | `React.ReactNode` | ❌        | brak             | tekst wyświetlany w nagłówku |

---

## 💡 Przykład użycia

```tsx
import { BacklightHeader } from './BacklightHeader';

<BacklightHeader>children</BacklightHeader>
```

---

## 🎨 Stylizacja
Klasy CSS:

| Klasa  | Opis                                    |
|--------|-----------------------------------------|
| header | odpowiada za wygląd nagłówka i poświaty |  

Styl nie zależy od propsów.

---

## 🗒️ Treść
Komponent nie zawiera treści. Jest ona przekazywana jako props

---

## 🤖 Logika
Użyte hooki:
- useRef

Funkcja `handleMouseMove` odpowiadająca za logikę wyświetlania poświaty.   

---

## 📚 Ostatnia aktualizacja: 2025-07-10