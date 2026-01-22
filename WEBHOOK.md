# Documentação de Integração: Formulário + Webhook

## 🚀 Visão Geral do Fluxo
Atualmente, o fluxo de captura de leads na Landing Page funciona da seguinte maneira:

1.  **Usuário preenche o formulário** na seção de Contato (`FinalCTA.jsx`).
2.  **Envio para o Make (Webhook)**: O frontend envia os dados (JSON) para a URL do webhook configurado.
3.  **Redirecionamento**: Após o disparo do webhook (independente da resposta ser 200 ou erro, para não travar o usuário), o navegador é redirecionado para a página de agradecimento (`/obrigado`).

> **Nota**: Anteriormente havia um redirecionamento para o WhatsApp. Este foi **removido** para focar 100% na conversão via formulário.

---

## 🛠️ Implementação Técnica

### Componente Principal: `src/components/FinalCTA.jsx`

A lógica de envio está isolada na função `handleSubmit`.

```javascript
const handleSubmit = async (e) => {
    e.preventDefault()

    // 1. Configuração do Webhook (Make / n8n / Zapier)
    const webhookUrl = "https://hook.us1.make.com/bzgcth851gevkhsr4p821hqcscrwk3nu"

    if (webhookUrl) {
        try {
            // Dispara o POST sem esperar resposta bloqueante (Fire and Forget)
            await fetch(webhookUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: formData.name,
                    whatsapp: formData.whatsapp,
                    billValue: formData.billValue,
                    submittedAt: new Date().toISOString(),
                    source: "Landing Page Solar" // Tag para identificar a origem
                }),
                mode: 'no-cors' // Essencial para evitar erros de CORS em webhooks simples
            })
        } catch (error) {
            console.error("Erro ao enviar para webhook (falha silenciosa):", error)
        }
    }

    // 2. Redirecionamento para Página de Obrigado
    // O usuário é levado para uma rota interna, sem abrir janelas externas
    navigate('/obrigado')
}
```

### Página de Obrigado: `src/components/ThankYou.jsx`
Uma página simples que confirma o recebimento e oferece um botão para voltar ao início. Não possui tags de conversão complexas ainda, mas é o local ideal para instalar Pixels de conversão (Meta/Google Ads).

---

## 🤖 Guia para Inteligência Artificial (I.A.)

Esta seção serve como orientação para futuros agentes de I.A. que trabalharem neste projeto.

### 1. Contexto de Dados
*   **Não temos Backend Próprio**: O projeto é "Serverless" no sentido de que não mantemos um servidor Node/Python para salvar leads. Confiamos 100% no Webhook.
*   **Campos do Formulário**: `name`, `whatsapp`, `billValue`.
*   **Webhook URL**: Atualmente configurado para `hook.us1.make.com`. Se mudar, alterar a constante `webhookUrl` em `FinalCTA.jsx`.

### 2. Pontos de Atenção (Erros Comuns)
*   **CORS**: Ao usar `fetch` direto do browser para webhooks (n8n/Make), erros de CORS são comuns. Usamos `mode: 'no-cors'` para mitigar isso. Isso significa que o browser envia os dados, mas não conseguimos ler a resposta (se foi sucesso ou falha). Para este caso de uso (LP simples), isso é aceitável.
*   **Redirecionamento**: Sempre use `useNavigate` do `react-router-dom` ao invés de `window.location`. Isso mantêm a experiência SPA (Single Page Application) fluida.

### 3. Ideias de Melhoria (Roadmap)
*   [ ] **Validação de Telefone**: O campo WhatsApp aceita qualquer texto. Adicionar máscara/regex brasileira.
*   [ ] **Feedback Visual de Loading**: Adicionar um estado `isSubmitting` para desabilitar o botão e mostrar um spinner enquanto o `await fetch` acontece.
*   [ ] **Tratamento de Erro Robusto**: Se o webhook falhar (ex: internet cair), salvar os dados no `localStorage` e tentar enviar novamente depois (Replay).
*   [ ] **UTM Tracking**: Capturar parâmetros de URL (utm_source, utm_campaign) e enviar junto no JSON do webhook para saber de onde veio o lead.

---

**Histórico de Mudanças Relevantes:**
*   **22/01/2026**: Remoção total dos redirecionamentos para WhatsApp. Foco na Página de Obrigado. Criação deste documento.
