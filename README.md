# Casamento Possível : página de vendas

Página estática, sem build. Abra o `index.html` no navegador ou suba a pasta inteira em
qualquer hospedagem (Netlify, Vercel, Cloudflare Pages, Hostinger, cPanel).

```
index.html          a página inteira (CSS e JS embutidos, um arquivo só)
images/             todas as imagens
images/LEIA-ME.md   qual arquivo entra em qual slot
```

---

## Antes de publicar: 4 coisas para preencher

1. **Os dois links de checkout.** Procure por `LINK_CHECKOUT_ESSENCIAL` e
   `LINK_CHECKOUT_COMPLETO`. Enquanto estiverem assim, o botão não leva a lugar nenhum
   e o `InitiateCheckout` do Pixel dispara sem venda possível.
2. **O nome do app.** Procure por `NOME_DO_APP`, na seção do aplicativo. No resto do
   material o produto se chama Casamento Possível.
3. **A quebra dos R$ 6.697,70**, no quadro `ONDE FORAM PARAR OS MEUS R$ 6.697,70`.
   Cinco linhas em `R$ ___`. É a única prova concreta do mecanismo e está vazia.
   Não estime: se não tiver os valores reais, apague a caixa.
4. **As imagens.** Siga o `images/LEIA-ME.md`. São 17 arquivos.

---

## O que mudou na copy, e por quê

Só o texto do corpo. O CSS, o JavaScript, o `<head>`, o Pixel, as imagens, os planos e
os preços continuam idênticos.

| Onde | O que mudou | Por quê |
|---|---|---|
| Topo | "Descubra como uma noiva realizou..." virou "Sem cortar o vestido, sem cortar a foto e sem cortar convidado. E ninguém que estava lá percebeu onde ela economizou" | "Descubra como" é ruído de anúncio. O que prende é a promessa de economizar sem que apareça, que é a dor real: ela quer economizar, não quer que percebam |
| As quatro perguntas | Reescritas na voz dela ("Tá tudo tão caro que chega a desanimar") | Estavam em português de folheto. Agora usam as palavras que ela realmente usa quando fala do assunto |
| Fecho das perguntas | "As respostas é o que vai te fazer economizar MUITO" virou "Ninguém responde essas perguntas de graça" | Cria o valor da resposta antes de vender quem responde |
| Você não quer economizar | Ganhou a linha "você já ouviu que o que importa é o amor. E importa mesmo" | Ela sente vergonha de querer bonito e se sente proibida de admitir. Dar permissão é o que faz o bloco funcionar |
| A virada | O mecanismo passou a ser explicado: o primeiro item que você fecha define o preço de todos os outros | Promessa grande sem razão que a sustente não convence quem já viu cinco ebooks de economia |
| História da Aline | O loop aberto agora fecha: os três meses perguntando como o preço se forma, e a ficha caindo | Antes ela dizia "vou te contar agora" e não contava. Prova precisa vir dentro da história |
| A comida | "Explode em festa grande" virou "errar aqui é errar 150 vezes" | Número no lugar do adjetivo |
| As mãos que ajudam | Saiu "o amigo começando na fotografia", entrou a ressalva de que foto é o único item em que amador sai caro | Arrependimento nº 1 de quem casou. Vender isso como economia gera reembolso |
| Bullets do app | Passaram a começar por "por onde começar" e "se o preço que te passaram está caro" | São as duas dúvidas mais verbalizadas pelo público. Estavam enterradas no meio da lista |
| Acesso do noivo | "Acesso do noivo na mesma conta" virou "para você não decidir tudo sozinha" | A sobrecarga da noiva é uma das dores mais frequentes e quase ninguém no mercado fala dela |
| Bônus | Os medos foram trocados pelos medos reais, a começar por "vou casar e não sei nem por onde começar" | Medo genérico não gera identificação |
| Oferta | Ganhou a soma dos bônus (R$ 329) e a régua "custa menos do que um convidado a mais" | A distância entre valor e preço precisa ser desenhada, não afirmada |
| FAQ | Entrou "eu consigo organizar sozinha, por que pagar?" e a admissão de que isto não substitui cerimonial do dia | "Eu mesma faço" é a objeção nº 1 a qualquer assessoria. E admitir um limite real faz o resto ser acreditado |
| Fechamento | Ganhou a cena dos dez anos e um P.S. | Quem rola direto para o fim precisa entender a oferta inteira ali |

Nada de contador falso, escassez inventada, número sem fonte ou depoimento fabricado.
A palavra "pobre" não aparece em lugar nenhum: o enquadramento é sempre "cara de caro".

---

## O que testar, na ordem

**Teste 1, a headline.** É a linha de maior alavancagem da página. A atual contra quatro
ângulos diferentes (não sinônimos):

| # | Headline | Ângulo |
|---|---|---|
| A | O casamento que você salvou no Pinterest cabe no orçamento que você tem | **A atual.** Desejo |
| B | Como casar com 150 convidados por R$ 6.697,70 sem que ninguém perceba onde você economizou | Prova + orgulho |
| C | Casamento com cara de caro, com o dinheiro que você tem de verdade | Desejo + tensão |
| D | Não é que falta dinheiro para o seu casamento. É que ninguém te contou a ordem | O verdadeiro problema |

Aposta: **B** em tráfego frio, porque tem pessoa, número quebrado e ataca a vergonha
sem nomear. **D** só para quem já viu a marca, porque exige contexto.

**Teste 2, ângulo de campanha:** "não case sozinha" (a sobrecarga da noiva) contra o
ângulo financeiro. Se o custo por lead empatar, escale nele: é terreno vazio.

**Se o CTR vier bom e a página não converter,** o problema não é a headline. É a caixa
vazia dos R$ 6.697,70: a prova não está no tamanho da promessa.

---

## Preço e planos

| Plano | Preço | O que tem |
|---|---|---|
| Essencial | R$ 67 à vista | O app sem limite de perguntas, orçamento dividido por item, acesso até a data |
| Completo | R$ 97 ou 5x de R$ 21,70 | Tudo do Essencial + faixa real por porte de festa, ordem de contratação, acesso do noivo e os 5 bônus |

Pagamento único e garantia de 7 dias aparecem em três lugares (oferta, FAQ e rodapé).
Se virar assinatura, os três mudam juntos.

---

## Pixel do Facebook

Dois pixels: `377342407834581` e `852344160745586`. Disparam `PageView` no carregamento
e `InitiateCheckout` no clique de qualquer botão que aponte para fora da página.

---

## Histórico

A primeira versão da página (layout claro, com `assets/css/estilo.css` e
`assets/js/pagina.js`) está no histórico do git, no commit "Página de vendas remodelada:
do ebook para o app de assessoria".
