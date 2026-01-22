# Branding Guidelines - New Energia Solar

## Cores Principais

| Nome do Token | Valor Hex | Descrição | Aplicação |
| :--- | :--- | :--- | :--- |
| `brand-blue` | `#002B5B` | Navy Blue | Textos principais, títulos, bordas de botões outline. |
| `brand-lightBlue` | `#E6F0F6` | Light Blue | Fundos de seções (ex: Hero), fundos suaves. |
| `brand-orange` | `#FFB400` | Vivid Orange | Botões primários (CTA), destaques, ícones. |
| `brand-orangeHover`| `#E5A100` | Darker Orange | Estado de hover dos botões primários. |
| `brand-gray` | `#F3F4F6` | Light Gray | Fundos neutros, áreas secundárias. |

## Tipografia

*   **Fonte Principal:** Inter (Sans-serif)
*   **Estilos:**
    *   Títulos: Font-extrabold, Leading-tight.
    *   Corpo: Text-gray-600, Leading-relaxed.

## Componentes UI

### Botões

#### Primário (`.btn-primary`)
*   **Background:** `#FFB400` (Orange)
*   **Texto:** `#002B5B` (Blue)
*   **Estilo:** Bold, arredondado (rounded-lg), sombra (shadow-lg).
*   **Interação:** Hover lift (-translate-y-1), hover shadow (shadow-xl), active scale (scale-95).

#### Outline (`.btn-outline`)
*   **Background:** Transparente
*   **Borda:** 2px solid `#002B5B`
*   **Texto:** `#002B5B`
*   **Interação:** Hover background `#002B5B`, texto branco, lift (-translate-y-1).

### Container

*   **Classe:** `.container-custom`
*   **Max-width:** 7xl
*   **Padding:** px-4 (sm: px-6, lg: px-8)
*   **Alinhamento:** Centralizado (mx-auto)

## Estrutura de Layout (Breakpoints)

*   **sm:** 640px
*   **md:** 768px
*   **lg:** 1024px
*   **xl:** 1280px
