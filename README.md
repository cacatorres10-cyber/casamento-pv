# Casamento Possível : página de vendas

Remodelagem da página `casamentoeconomico-insta.shop/17-47/`, trocando o produto de
**ebook de segredos** para **app que funciona como assessoria de casamento**.

Página estática, sem build. Abra o `index.html` no navegador ou suba a pasta inteira
em qualquer hospedagem (Netlify, Vercel, Cloudflare Pages, Hostinger, cPanel).

```
index.html                 a página inteira
assets/css/estilo.css      todo o visual
assets/js/pagina.js        placeholder de foto, barra fixa, FAQ
assets/fotos/LEIA-ME.md    qual foto entra em qual slot
```

---

## Antes de publicar: 5 coisas para preencher

Estão todas marcadas com comentário `<!-- ... -->` dentro do `index.html`.

1. **Link do checkout.** Procure por `data-checkout` e troque o `href="#"` pelo seu link.
2. **Preço.** Procure por `EDITE O PREÇO`. Está com `R$ 47 à vista / 12x de R$ 4,79`
   como valor provisório. Ver "Suposições" abaixo.
3. **Três respostas do FAQ** marcadas com `CONFIRME`: modelo de pagamento, prazo de
   liberação do acesso e limite de perguntas.
4. **Depoimentos.** Os três cards de caso estão com `[colchetes]` para você preencher
   com depoimento real e autorizado.
5. **Fotos.** Siga o `assets/fotos/LEIA-ME.md`. São 30 slots.

Enquanto uma foto não existir, o slot vira um placeholder listrado com a descrição do
que deveria estar ali. A página funciona e continua bonita mesmo sem nenhuma foto,
mas ela foi desenhada para ficar cheia delas.

---

## A decisão de copy

**Promessa antiga:** aprenda os segredos para economizar no casamento.
**Promessa nova:** tenha alguém do seu lado para decidir, do primeiro print até o "sim".

**Grande ideia:** o casamento dos sonhos dela já existe, está salvo na pasta do Pinterest.
O que falta entre a pasta e o altar não é dinheiro, é tradução.

**Crença única que a página instala:** *ter o casamento que eu salvei no Pinterest é
possível com o dinheiro que eu já tenho, desde que alguém traduza cada referência em
decisão com preço.*

**Nível de consciência:** consciente do problema, entrando em consciente da solução.
Ela já viu ebook de casamento econômico, já viu planilha. Por isso a página não gasta
tempo provando que dá para economizar: ela ataca o **mecanismo**.

**Sofisticação:** estágio 4. "Economize no casamento" já cansou. O diferencial precisa
ser o mecanismo (assessoria no bolso), não a promessa (gastar menos).

**Os três ângulos emocionais do brainstorm, e onde cada um foi usado:**

| Ângulo | Seção |
|---|---|
| Desejo primeiro, dor como tensão | Seção 4, "sua pasta é o sonho, o problema vem uma tela depois" |
| Orgulho: "não quero que pareça barato" | Seção 10, "economizar e parecer que economizou são coisas diferentes" |
| Reconhecimento: "quero ser lembrada" | Seção 11, "daqui a dez anos você vai olhar essas fotos" |
| Medo do arrependimento | Seção 11 e P.S. do CTA final |
| Noiva inteligente, autonomia | Seção 10, o quadro dos três tipos de corte |

**O que foi mantido da página original:** os R$ 7 mil como símbolo, o caso real de
R$ 6.697,70 com 150 convidados, os depoimentos cedo na página, a história da Aline,
os cinco bônus, a garantia de 7 dias, o tamanho longo e o volume de fotos.

**O que mudou:** "guia secreto" virou assessoria; "o que você irá aprender" virou
"o que você vai conseguir resolver"; os bônus deixaram de ser pilha de PDF e viraram
recursos do app; os R$ 7 mil ganharam contexto honesto em vez de virarem garantia.

---

## Conformidade

A página não promete valor final. Todo lugar que cita R$ 7 mil ou R$ 6.697,70 vem com
o contexto de que é caso real e referência de planejamento, não resultado garantido.
Tem aviso explícito em duas seções e no rodapé.

Não há contador falso, escassez inventada nem "último dia" com data fixa. Se você quiser
usar urgência, use lote ou prazo que você vá respeitar de verdade.

Os mockups de conversa do app precisam corresponder ao que o produto realmente faz.
Se alguma dessas respostas o app ainda não dá, troque pelo que ele dá. Vender função
que não existe é reembolso na certa.

---

## Suposições que eu tomei (revise antes de publicar)

1. **Preço R$ 47 à vista, pagamento único.** O original vendia a R$ 10 e R$ 37.
   Como o produto agora é app com acompanhamento, subi para R$ 47 como ponto de partida.
   Se o modelo real for assinatura, muda o bloco de preço, a microcopy dos botões
   ("pagamento único" aparece em 3 lugares) e a resposta do FAQ sobre renovação.
2. **Plano único, sem versão básica.** O doc do Manus recomenda isso e eu concordo:
   plano básico faria a noiva perguntar "o agente também vem no barato?", o que derruba
   o valor percebido do mecanismo. Se você quiser dois planos, a seção da oferta vira
   dois cards lado a lado.
3. **A assessora responde durante todo o planejamento, sem limite declarado.**
   Se houver limite de mensagens ou janela de acesso, isso precisa estar na oferta e
   no FAQ (a pergunta já está lá, marcada com `CONFIRME`), não só nos termos.
4. **Os números do mockup do hero** (divisão de R$ 7 mil em 6 categorias) são
   ilustrativos e coerentes com o caso da Aline. Se o app usa outra lógica de divisão,
   troque os valores para bater com o que ele entrega de verdade.
5. **"Mais de 30 noivas ajudadas"** veio da página original. Mantive porque é o número
   conservador. Se hoje for maior e você conseguir sustentar, atualize.

---

## O próximo teste

Rode a headline atual contra a variação direta:

- **A (esta página):** "E se o casamento que você salvou no Pinterest coubesse no
  orçamento que você realmente tem?"
- **B:** "Como fazer o casamento dos seus sonhos por menos de R$ 7 mil, sem que ninguém
  perceba que você economizou"

A aposta é a A, porque entra pelo desejo e o número aparece logo abaixo, sem queimar o
ativo dos R$ 7 mil. A B é o controle: é mais parecida com a página original e com o que
o tráfego frio já está acostumado a clicar. Rode as duas com o mesmo criativo.

Segundo teste, depois que a headline estabilizar: subir a seção "economizar e parecer que
economizou" (hoje seção 10) para logo depois da prova social. É o ângulo mais forte do
brainstorm e hoje ele demora a aparecer.
