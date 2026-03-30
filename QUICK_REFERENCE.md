# Guia Rápido de Referência - LP Vaapty

## CORES PRINCIPAIS - COPIAR E COLAR

```css
/* Roxos (Marca) */
--roxo-escuro: #150424;
--roxo-medio: #3f1c66;
--roxo-botao: #651c83;
--roxo-claro: #a237d7;
--roxo-separador: #12031f;

/* Neutros */
--cinza-claro: #f3f2f6;
--cinza-medio: #f2f2f2;
--cinza-form: #f5f5f5;
--branco: #ffffff;

/* Textos */
--texto-escuro: #161616;
--texto-preto: #13031f;
--texto-tabela: #0b0b0b;
--texto-legal: #3d3d3d;

/* Destaque */
--vermelho: #ea4447;
--verde: #37d754;
--borda-input: #a7a7a7;
```

## TIPOGRAFIA - CONFIGURAÇÃO

```css
/* Importar fontes */
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;500;600;700;900&family=Oswald:wght@300;500;600;700&display=swap');

/* Estilos de Título */
.hero-title {
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 500;
  font-size: 45px;
  line-height: 56px;
  letter-spacing: -2.25px;
  color: white;
}

.section-title {
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 500;
  font-size: 55px;
  line-height: 55px;
  letter-spacing: -2.75px;
}

.subtitle {
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 300;
  font-size: 35px;
  line-height: 42px;
  letter-spacing: 0.35px;
}

.big-number {
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 900;
  font-size: 103.24px;
  line-height: 103.24px;
  letter-spacing: -5.162px;
}

/* Botões */
.btn-primary {
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 500;
  font-size: 32px;
  letter-spacing: -0.96px;
  background: #f2f2f2;
  color: #13031f;
  padding: 10px;
  border-radius: 10px;
  width: 458px;
  height: 58px;
}

.btn-secondary {
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 600;
  font-size: 35px;
  line-height: 55px;
  letter-spacing: -1.75px;
  background: #150424;
  color: white;
  border-radius: 10px;
  width: 597px;
  height: 75px;
}
```

## ESTRUTURA DAS DOBRAS - RESUMO

```
┌─────────────────────────────────────────────────┐
│ DOBRA 01 - Hero (800px altura)                  │
│ • BG: imgBg (#150424 com imagem)                │
│ • Título: 45px Medium white                     │
│ • Subtítulo: 35px Light white                   │
│ • Botão: 458x58px #f2f2f2                       │
│ • Posição conteúdo: left 641px, top 130px       │
├─────────────────────────────────────────────────┤
│ SEPARADOR #12031f (20px)                        │
├─────────────────────────────────────────────────┤
│ DOBRA 02 - Frase Impacto (234px altura)         │
│ • BG: white                                     │
│ • Texto: 40px Medium #161616, centralizado      │
├─────────────────────────────────────────────────┤
│ DOBRA 2.5 - Problemas/Soluções (800px)          │
│ • BG: white                                     │
│ • 3 boxes vermelhos (border #ea4447)            │
│ • 3 boxes verdes (border #37d754)               │
│ • Texto: 32px Medium #161616                    │
├─────────────────────────────────────────────────┤
│ DOBRA 03 - Resultados (800px)                   │
│ • BG: #150424                                   │
│ • Imagem 485x586px + 3 estatísticas             │
│ • Números: 103.24px Black white                 │
├─────────────────────────────────────────────────┤
│ DOBRA 04 - Como Funciona (800px)                │
│ • BG: white                                     │
│ • 4 cards roxos (#150424) com processo          │
│ • Cards: 304x231px, gap 23px                    │
├─────────────────────────────────────────────────┤
│ DOBRA 05 - Por que Investir (801px)             │
│ • BG: #f3f2f6                                   │
│ • 5 itens de lista com ícones                   │
│ • Texto: 35.241px SemiBold #150424              │
├─────────────────────────────────────────────────┤
│ DOBRA 06 - Projeção (800px)                     │
│ • BG: #f3f2f6                                   │
│ • Lado esquerdo: texto (642px)                  │
│ • Lado direito: 5 métricas (415px)              │
│ • Números: 72.762px Black #3f1c66               │
├─────────────────────────────────────────────────┤
│ DOBRA 07 - Sistema (800px)                      │
│ • BG: Gradiente #150424 to #3f1c66              │
│ • Tabela comparativa 3 colunas                  │
│ • Headers com gradientes                        │
├─────────────────────────────────────────────────┤
│ DOBRA 08 - Depoimentos (804px)                  │
│ • BG: Gradiente #150424 to #3f1c66 (reverso)    │
│ • 4 cards roxos claros (#a237d7)                │
│ • Estrutura similar à Dobra 04                  │
├─────────────────────────────────────────────────┤
│ DOBRA 09 - Mídia (567px)                        │
│ • BG: white                                     │
│ • 3 cards de mídia com logos                    │
│ • Cards: 380px width, gap 23px                  │
├─────────────────────────────────────────────────┤
│ DOBRA 10 - Última Oportunidade (800px)          │
│ • BG: imgBg1 (imagem)                           │
│ • Conteúdo à direita (676px left)               │
│ • 3 itens com ícones check                      │
├─────────────────────────────────────────────────┤
│ DOBRA 11 - Formulário (1268px)                  │
│ • BG: #f3f2f6                                   │
│ • Form: 737x764px, bg #f5f5f5                   │
│ • Shadow: 0 0 20.1px rgba(0,0,0,0.25)           │
│ • 3 inputs + 4 radios + botão                   │
└─────────────────────────────────────────────────┘
```

## IMAGENS - DOWNLOAD URGENTE (EXPIRAM EM 7 DIAS)

### Backgrounds
1. **imgBg** (Dobra 01): https://www.figma.com/api/mcp/asset/dc79d134-ef69-4ed3-9877-57ccd14005ef
2. **imgBg1** (Dobra 10): https://www.figma.com/api/mcp/asset/bec6d751-6301-4f54-b233-6b86c1b3f8a2

### Conteúdo Principal
3. **imgRectangle1** (foto): https://www.figma.com/api/mcp/asset/c3c60711-ce61-43cf-8fa5-1b8d11f99f75
4. **imgRectangle2** (badge): https://www.figma.com/api/mcp/asset/4b0287bc-1b36-4365-b660-f233f56342c6
5. **imgRectangle3** (logo mídia): https://www.figma.com/api/mcp/asset/a438843d-45fc-47ee-b07b-61b57e0efe6b
6. **imgRectangle4** (logo mídia): https://www.figma.com/api/mcp/asset/9dceda52-f247-4092-8c4b-95faf6e2cdfe
7. **imgRectangle5** (logo mídia): https://www.figma.com/api/mcp/asset/83514324-9e76-4b84-af5b-378c76f4e206
8. **imgRectangle6** (check): https://www.figma.com/api/mcp/asset/531ce8df-558c-4595-adec-fdaa5d23a08c
9. **imgRectangle9** (check tabela): https://www.figma.com/api/mcp/asset/7c47a11e-a0c4-4053-8c7a-b43bfc7c88d5
10. **imgRectangle10** (X tabela): https://www.figma.com/api/mcp/asset/b167102c-8b1e-4a12-bb55-2594b148a78d

### Elementos Decorativos
11. **imgEllipse1**: https://www.figma.com/api/mcp/asset/9edebcbf-c93f-488b-8a7c-d5d7f99d4220
12. **imgEllipse2**: https://www.figma.com/api/mcp/asset/7d62fe60-4549-4a54-89cb-b89ca4e08003
13. **imgEllipse3**: https://www.figma.com/api/mcp/asset/a093010d-5339-4d90-85b8-07339836bc5a
14. **imgEllipse4**: https://www.figma.com/api/mcp/asset/235a63f8-2483-4382-ad32-941052092417
15. **imgLine1**: https://www.figma.com/api/mcp/asset/d4cc0186-efd3-45d8-9304-70451a26c2d4
16. **imgLine2**: https://www.figma.com/api/mcp/asset/4ad5bfae-c751-4736-9864-dfe38fbdc887

## MEDIDAS CRÍTICAS

### Larguras Container
- Design total: **2560px**
- Conteúdo centralizado: **1280-1281px**
- Offset lateral para centralizar: **639-640px**

### Alturas Padrão
- Dobras normais: **800px**
- Dobra 02: **234px**
- Dobra 09: **567px**
- Dobra 11: **1268px**

### Gaps Comuns
- Entre elementos pequenos: **23px**
- Entre seções: **40px, 50px, 60px**
- Interno de cards: **13.342px**

### Border Radius
- Botões: **10px**
- Cards: **14.825px**
- Boxes lista: **18.548px**
- Inputs: **8px**
- Formulário: **20px**

### Tamanhos de Botão
- Primário (Dobra 01): **458px x 58px**
- Secundário (padrão): **597px x 75px**
- Variação menor: **376-386px x 54-75px**
- Formulário: **647px x 45px**

## GRADIENTES CSS

### Dobra 07 (Top to Bottom)
```css
background: linear-gradient(to bottom, #150424, #3f1c66);
```

### Dobra 08 (Bottom to Top)
```css
background: linear-gradient(to top, #150424, #3f1c66);
```

### Headers Tabela
```css
/* Esquerda */
background: linear-gradient(to right, #150424, #3f1c66);

/* Centro */
background: linear-gradient(to right, #3f1c66 0%, #150424 50.481%, #3f1c66 100%);

/* Direita */
background: linear-gradient(to right, #3f1c66, #150424);
```

## CHECKLIST DE IMPLEMENTAÇÃO

- [ ] Baixar todas as 16 imagens do Figma
- [ ] Importar fontes: Roboto Condensed (300,400,500,600,700,900), Oswald (300,500,600,700)
- [ ] Configurar container principal 2560px
- [ ] Implementar sistema de cores (CSS variables)
- [ ] Criar componentes de botão (3 variações)
- [ ] Criar componentes de card (3 tipos: processo, benefício, depoimento)
- [ ] Implementar gradientes
- [ ] Configurar sombras (formulário e checkboxes)
- [ ] Testar espaçamentos exatos
- [ ] Validar tipografia (tamanhos, pesos, tracking)
- [ ] Implementar formulário funcional
- [ ] Adicionar responsividade (não incluído no design original)
- [ ] Otimizar imagens para web
- [ ] Testar performance

## ATENÇÃO ESPECIAL

1. **Letter Spacing Negativo**: Muitos textos usam tracking negativo (ex: -2.75px) - isso é intencional
2. **Valores Decimais**: Mantenha valores como 32.924px, 103.24px - são necessários para alinhamento
3. **Centralização**: Use `transform: translateX(-50%)` com `left: 50%` ou `left: calc(50% + offset)`
4. **Fontes Fallback**: Sempre adicione `sans-serif` como fallback
5. **Imagens Expiram**: Prioridade máxima é baixar todas as imagens nas próximas horas
