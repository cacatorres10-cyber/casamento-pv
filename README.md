# Casamento Possível : página de vendas

Página de vendas do app que funciona como assessoria de casamento. Página estática,
sem build e sem dependência: abra o `index.html` no navegador ou suba a pasta inteira
em qualquer hospedagem (Netlify, Vercel, Cloudflare Pages, Hostinger, cPanel).

```
index.html          a página inteira (CSS e JS embutidos, um arquivo só)
images/             todas as imagens
images/LEIA-ME.md   qual arquivo entra em qual slot
```

O CSS e o JavaScript ficam dentro do próprio `index.html`. É de propósito: um arquivo
só, uma requisição só, carrega rápido no 4G e é fácil de colar em qualquer lugar.

---

## Antes de publicar: 4 coisas para preencher

Todas estão marcadas dentro do `index.html`.

1. **Os dois links de checkout.** Procure por `LINK_CHECKOUT_ESSENCIAL` e
   `LINK_CHECKOUT_COMPLETO` e troque pelos links reais. Enquanto estiverem assim,
   o botão não leva a lugar nenhum e o evento `InitiateCheckout` do Pixel dispara
   sem venda possível.
2. **A quebra dos R$ 6.697,70.** Na seção "Como um casamento cabe em R$ 45 por
   convidado" existe o quadro `ONDE FORAM PARAR OS MEUS R$ 6.697,70` com cinco linhas
   em `R$ ___`. Preencha com os valores reais do casamento da Aline. **Não invente
   número:** o quadro inteiro existe para provar que a ordem das escolhas é o que
   importa, e um valor inventado derruba a prova toda. Se você não tiver a quebra
   real, apague o quadro em vez de estimar.
3. **O print da conversa dentro do app.** Na seção "E hoje tudo isso virou um
   aplicativo" tem um comentário `<!-- TROCAR PELO PRINT REAL -->`. A conversa do print
   precisa ser uma resposta que o app realmente dá hoje.
4. **As imagens.** Siga o `images/LEIA-ME.md`. São 17 arquivos, com os mesmos nomes
   que a página no ar já usa.

---

## Preço e planos que estão na página

Dois planos, como veio na nova versão:

| Plano | Preço | O que tem |
|---|---|---|
| Essencial | R$ 67 à vista | O app sem limite de perguntas, orçamento dividido por item, acesso até a data do casamento |
| Completo | R$ 97 ou 5x de R$ 21,70 | Tudo do Essencial + faixa de preço por porte de festa, ordem de contratação, acesso do noivo e os 5 bônus |

Garantia de 7 dias e pagamento único aparecem em três lugares (oferta, FAQ e rodapé).
Se o modelo virar assinatura, os três precisam mudar juntos.

---

## Pixel do Facebook

A página carrega dois pixels: `377342407834581` e `852344160745586`. Ambos disparam
`PageView` no carregamento, e `InitiateCheckout` no clique de qualquer botão que
aponte para fora da página (os botões com `#` só rolam a tela e não disparam nada).

---

## Conformidade

A página não promete valor final de casamento. Os R$ 6.697,70 e os prints aparecem
sempre como caso real, e o aviso de que o resultado varia por região, data, lista e
fornecedor está na seção de prova social e no rodapé.

Não tem contador falso, escassez inventada nem "último dia" com data fixa. Se for usar
urgência, use lote ou prazo que você vá respeitar de verdade.

---

## Decisões tomadas nesta versão (revise se discordar)

1. **`NOME_DO_APP` virou "Casamento Possível"**, que é o nome que o produto já usava
   no repositório. Se o nome comercial for outro, é uma troca só, na seção do app.
2. **As imagens continuam em `images/`**, com os nomes originais, para você conseguir
   copiar a pasta da hospedagem atual sem renomear nada.
3. **Imagem que ainda não subiu vira placeholder listrado** com o nome do arquivo que
   falta, em vez de ícone de imagem quebrada.
4. **A versão anterior da página** (a de layout claro com `assets/css` e `assets/js`)
   foi substituída por completa. Ela continua no histórico do git, no commit
   "Página de vendas remodelada: do ebook para o app de assessoria", se você quiser
   recuperar qualquer trecho de copy.
