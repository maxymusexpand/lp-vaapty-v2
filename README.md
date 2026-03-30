# LP Vaapty - Landing Page de Franquia

Landing page profissional para captação de leads interessados em franquia Vaapty, desenvolvida a partir do design Figma.

## 📋 Características

- ✅ Design responsivo para todos os dispositivos
- ✅ Animações suaves ao scroll
- ✅ Formulário de contato com validação
- ✅ Máscara de telefone automática
- ✅ Smooth scroll para navegação
- ✅ SEO-friendly
- ✅ Performance otimizada

## 🗂️ Estrutura de Arquivos

```
LP-VAAPTY/
├── index.html      # Estrutura HTML da página
├── styles.css      # Estilos e design responsivo
├── script.js       # Interatividade e funcionalidades
└── README.md       # Documentação
```

## 📱 Seções da Landing Page

1. **Hero (Dobra 01)** - Título principal com CTA
2. **Destaque (Dobra 02)** - Mensagem sobre liderança no mercado
3. **Por que este modelo (Dobra 2.5)** - Problemas x Soluções
4. **Números (Dobra 03)** - Estatísticas de sucesso
5. **Como funciona (Dobra 04)** - Processo em 4 passos
6. **Benefícios (Dobra 05)** - Por que investir na Vaapty
7. **Projeção (Dobra 06)** - Números financeiros
8. **Comparação (Dobra 07)** - Vaapty vs Concorrência
9. **Depoimentos (Dobra 08)** - Clientes reais
10. **Mídia (Dobra 09)** - Reconhecimento na imprensa
11. **Última chance (Dobra 10)** - Urgência e escassez
12. **Formulário (Dobra 11)** - Captação de leads

## 🎨 Paleta de Cores

- **Primary**: #1a1a2e (Azul escuro)
- **Secondary**: #16213e (Azul médio)
- **Accent**: #0f3460 (Azul)
- **Highlight**: #e94560 (Vermelho/Rosa)
- **Background Light**: #f8f9fa (Cinza claro)
- **Background Dark**: #0a0e27 (Quase preto)

## 🚀 Como Usar

1. **Abrir localmente:**
   - Abra o arquivo `index.html` no seu navegador
   - Todos os recursos estão incluídos nos arquivos

2. **Hospedagem:**
   - Faça upload dos 3 arquivos (HTML, CSS, JS) para seu servidor
   - Funciona em qualquer hospedagem web (GitHub Pages, Netlify, Vercel, etc.)

## 📝 Personalização

### Alterar Cores
Edite as variáveis CSS no arquivo `styles.css`:

```css
:root {
    --primary-color: #1a1a2e;
    --secondary-color: #16213e;
    --highlight-color: #e94560;
    /* ... */
}
```

### Integrar Formulário
No arquivo `script.js`, na função de submit do formulário, você pode:

1. Integrar com backend próprio
2. Conectar com serviços como:
   - EmailJS
   - Formspree
   - Google Forms
   - RD Station
   - HubSpot

Exemplo básico de integração:

```javascript
contactForm.addEventListener('submit', async function(e) {
    e.preventDefault();

    const formData = { /* ... */ };

    // Enviar para seu backend
    const response = await fetch('https://seu-backend.com/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
    });

    if (response.ok) {
        alert('Obrigado! Entraremos em contato.');
    }
});
```

## 🔧 Funcionalidades JavaScript

- **Smooth Scroll**: Navegação suave entre seções
- **Intersection Observer**: Animações ao scroll
- **Validação de Formulário**: Validação client-side completa
- **Máscara de Telefone**: Formato brasileiro automático
- **Prevenção de Duplo Submit**: Evita envios duplicados

## 📊 Performance

- ✅ HTML semântico
- ✅ CSS otimizado e minificável
- ✅ JavaScript vanilla (sem dependências)
- ✅ Imagens otimizadas (via Figma)
- ✅ Lazy loading implementado

## 🌐 Compatibilidade

- ✅ Chrome/Edge (versões recentes)
- ✅ Firefox (versões recentes)
- ✅ Safari (iOS e macOS)
- ✅ Dispositivos móveis (responsivo)

## 📈 SEO

Para melhorar o SEO, adicione no `<head>`:

```html
<meta name="description" content="Franquia Vaapty - Invista em intermediação de veículos sem estoque, com retorno previsível e modelo validado.">
<meta name="keywords" content="franquia, vaapty, carros, veículos, intermediação, investimento">
<meta property="og:title" content="Franquia Vaapty">
<meta property="og:description" content="Invista em um negócio automotivo sem estoque">
<meta property="og:image" content="URL_DA_IMAGEM">
```

## 🔐 Segurança

- Validação de formulário client-side e server-side
- Sanitização de inputs recomendada no backend
- HTTPS recomendado para produção

## 📞 Suporte

Para dúvidas ou personalizações, entre em contato com a equipe de desenvolvimento.

## 📄 Licença

© 2026 Vaapty - Todos os direitos reservados.

---

**Desenvolvido a partir do design Figma oficial da Vaapty**
