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
2. **A quebra dos R$ 6.697,70**, no quadro `ONDE FORAM PARAR OS MEUS R$ 6.697,70`.
   Cinco linhas em `R$ ___`. **Esta é a maior lacuna de prova da página inteira:** o
   quadro existe para provar que a ordem importa mais que o valor, e ele está vazio.
   Não estime. Se você não tiver os valores reais, apague a caixa.
3. **A resposta do FAQ marcada `CONFIRME`** ("E se ele não conhecer a minha cidade?").
   Ela precisa bater com o que o app realmente faz. Vender função que não existe é
   reembolso na certa.
4. **As imagens.** Siga o `images/LEIA-ME.md`. São 17 arquivos.

---

## A estratégia por trás desta copy

Escrita a partir da pesquisa de público (falas literais de noivas em fóruns brasileiros,
dados de mercado, mapa de dores). Sem isso registrado, a próxima alteração vira
discussão de gosto, e gosto não melhora conversão.

**Para quem:** noiva brasileira com orçamento apertado, que já pediu o primeiro
orçamento e travou. Tráfego frio de Meta.

**Nível de consciência:** consciente do problema, entrando em consciente da solução.
Ela já viu ebook de economia e planilha. Por isso a página não gasta uma linha provando
que dá para economizar: ela ataca o mecanismo.

**Sofisticação:** estágio 4. "Economize no casamento" cansou. O diferencial tem que ser
o mecanismo, não a promessa.

**Grande ideia:** não existe casamento caro e casamento barato. Existe casamento que
parece caro e casamento que parece barato, e o que separa os dois não é quanto você
gastou, é a ordem em que você gastou.

**One Belief** (a crença que a página existe para instalar): *o casamento que eu quero
cabe no dinheiro que eu tenho, e a chave não é cortar mais, é a ordem em que eu decido,
porque o que faz um casamento parecer caro não é quanto custou, é onde o dinheiro foi
parar.*

**O inimigo:** a indústria do casamento, que dobra o preço quando ouve a palavra
"casamento". Nunca uma pessoa, nunca a família dela, nunca o noivo.

### O que mudou em relação à versão anterior, e por quê

| Bloco | O que era | O que passou a ser | Por quê |
|---|---|---|---|
| Headline | "O casamento que você salvou no Pinterest cabe no orçamento que você tem" | "Casamento com cara de caro, com o dinheiro que você tem de verdade" | A pesquisa derruba parcialmente a hipótese do Pinterest: ele inspira, mas é fonte documentada de frustração ("expectativa x realidade"). As duas dores mais confirmadas são "realizar o sonho sem quebrar" e "não parecer barato". A headline nova junta as duas e ancora em número na linha seguinte |
| Abertura | Quatro perguntas escritas em português de copywriter | Cinco falas literais de noivas, com fonte declarada | Entrar na conversa que já está na cabeça dela, com as palavras dela. É o bloco que faz pensar "alguém entrou na minha cabeça" |
| (não existia) | nada | **"Você não é ruim com dinheiro"** com R$ 50.073, R$ 414 por convidado, 65% e 72,4% | Era o maior buraco da página: faltava responder "por que eu não estou conseguindo". A resposta tira a culpa dela sem culpar ninguém pessoalmente, e ancora o preço lá em cima antes da oferta |
| (não existia) | nada | **"O preço muda quando você diz a palavra casamento"** | Faltava o culpado. Este bloco é o único conteúdo da página que ela não consegue achar de graça em lugar nenhum, e é o que sustenta a autoridade: taxa de rolha, hora extra, venda casada, prato do fornecedor |
| Mecanismo | Afirmado em duas linhas | Afirmado e depois **explicado** (o primeiro item que você fecha define o preço de todos os outros) | Sofisticação 4 sem mecanismo explicado é morte certa. Promessa grande precisa de razão que a sustente |
| História da Aline | Pulava do choro para o resultado | Ganhou o meio: os três meses perguntando como o preço se forma | Prova embrulhada em história. O "portanto" da história é o mecanismo, não o número |
| Bullets do app | Cinco, começando por lista de convidados | Sete, começando por **"por onde começar"** e **"esse orçamento está caro?"** | São as duas dores mais verbalizadas da pesquisa ("não sei por onde começar" aparece MUITO). Estavam enterradas no meio |
| Acesso do noivo | Bullet solto no fim da lista do plano | Bloco próprio, com a fala "até parece que estou casando sozinha" | Ângulo forte e subexplorado pelo mercado inteiro. Nenhum concorrente ataca a sobrecarga da noiva |
| (não existia) | nada | **"O que isto aqui não é"** | Oferta boa demais gera desconfiança. Admitir um limite real (não é assessoria, ninguém liga para o buffet por você) faz o resto do texto ser acreditado |
| Oferta | Preço solto | Soma dos bônus (R$ 329) + minimizador ("menos de um quarto de um convidado") | A lacuna entre valor e preço precisa ser desenhada, não afirmada |
| FAQ | 4 perguntas, 2 delas institucionais | 7 perguntas, incluindo "eu consigo sozinha", "e a minha cidade" e "meu noivo não se envolve" | "Eu mesma faço" é a objeção nº 1 do público a qualquer assessoria, segundo a pesquisa. A página não respondia |
| Fechamento | Um CTA | Três caminhos + urgência honesta + P.S. e P.P.S. | A decisão precisa parecer dela. E a urgência é real: contrato assinado não se desfaz, e perto da data o poder de negociar acaba |

### O que **não** foi feito, de propósito

- **Nenhum contador, lote falso ou "última vaga".** A urgência da página é a única real
  que existe aqui: cada fornecedor fechado na ordem errada é dinheiro que não volta.
- **A palavra "pobre" não aparece.** A pesquisa mostra que a noiva sente essa vergonha
  mas se sente proibida de admitir. Nomear isso na cara dela gera defensividade
  ("meu casamento simples foi lindo!"). O enquadramento é sempre positivo: "cara de caro".
- **Nenhuma fala de fórum é apresentada como depoimento do produto.** Todas estão
  marcadas como públicas, de fóruns. Misturar as duas coisas é prova fabricada.
- **Nenhum número inventado.** Os dados de mercado estão com fonte no rodapé e a quebra
  dos R$ 6.697,70 continua vazia, esperando o valor real.

---

## O que testar, na ordem

**Teste 1, headline** (é a linha de maior alavancagem que existe na página). A atual
contra estas quatro, que são ângulos diferentes e não sinônimos:

| # | Headline | Ângulo |
|---|---|---|
| A | Casamento com cara de caro, com o dinheiro que você tem de verdade | **A atual.** Desejo + tensão financeira |
| B | Como casar com 150 convidados por R$ 6.697,70 sem que ninguém perceba onde você economizou | Prova + orgulho |
| C | A média no Brasil é R$ 414 por convidado. O casamento da Aline saiu por R$ 45. | Contradição + número |
| D | Não é que falta dinheiro para o seu casamento. É que ninguém te contou a ordem. | O verdadeiro problema |
| E | Se você economizar em tudo, seu casamento fica barato. Se souber onde, continua parecendo caro. | Mecanismo puro |

Aposta: **B** bate a atual em tráfego frio, porque tem pessoa, número quebrado e o
"sem que ninguém perceba" que ataca a vergonha sem nomear. **D** é a que eu testaria em
público que já viu a marca, porque exige mais contexto para fazer sentido.

**Teste 2, ângulo de campanha inteira:** "não case sozinha" (sobrecarga da noiva) contra
o ângulo financeiro. A pesquisa mostra que essa dor aparece MUITO e que ninguém no
mercado ataca ela. Se o CPL empatar com o financeiro, escale nele.

**Teste 3, posição do bloco de dados:** hoje ele vem depois de "você não quer economizar".
Testar subindo para logo depois do bloco de falas, o que aproxima a absolvição
("não é você") do reconhecimento ("sou eu").

**Se o CTR estiver bom e a página não converter,** o problema não é a headline: é a caixa
vazia dos R$ 6.697,70. A promessa está no nível da prova só quando aquele quadro tiver
número.

---

## Preço e planos

| Plano | Preço | O que tem |
|---|---|---|
| Essencial | R$ 67 à vista | O app sem limite de perguntas, orçamento dividido por item, acesso até a data |
| Completo | R$ 97 ou 5x de R$ 21,70 | Tudo do Essencial + faixa real por porte de festa, ordem de contratação, acesso do noivo e os 5 bônus |

Garantia de 7 dias e pagamento único aparecem em três lugares (oferta, FAQ e rodapé).
Se o modelo virar assinatura, os três mudam juntos.

---

## Pixel do Facebook

Dois pixels: `377342407834581` e `852344160745586`. Ambos disparam `PageView` no
carregamento e `InitiateCheckout` no clique de qualquer botão que aponte para fora da
página (os botões com `#` só rolam a tela e não disparam nada).

**Atenção ao levar copy desta página para o anúncio:** a Meta trata como violação o
criativo que insinua conhecer característica pessoal de quem lê. "Você não é ruim com
dinheiro" funciona na página e é arriscado no anúncio. No criativo, prefira a forma
impessoal: "dois em cada três casais gastam mais do que planejaram".

---

## Conformidade

A página não promete valor final de casamento. O caso dos R$ 6.697,70 aparece sempre
como caso real e individual, com aviso de variação no rodapé. Os dados de mercado têm
fonte declarada. As falas de noivas são públicas e estão identificadas como tal.

---

## Histórico

A primeira versão da página (layout claro, com `assets/css/estilo.css` e
`assets/js/pagina.js`) está no histórico do git, no commit "Página de vendas remodelada:
do ebook para o app de assessoria".
