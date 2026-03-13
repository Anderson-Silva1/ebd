import { Alert } from "./components/feedback/alert";
import Comentario from "./components/feedback/comentario";
import { Divider } from "./components/layout/divider";
import { Section } from "./components/layout/section";
import { List } from "./components/list/lista";
import { ListItem } from "./components/list/listItem";
import Container from "./components/template/container";
import Header from "./components/template/header";
import H1 from "./components/typography/h1";
import H2 from "./components/typography/h2";
import H3 from "./components/typography/h3";
import { P } from "./components/typography/p";

function App() {
  return (
    <>
      <Container>
        <Header>
          <H1 className="text-center text-blue-600">
            ESBOÇO AULA 11 DO 1° TRIMESTRE DE 2026
          </H1>
        </Header>

        <Section>
          <div className="flex items-center gap-4">
            <H2>TITULO:</H2>
            <P>A adoção — Entrando na família de Deus</P>
          </div>
        </Section>

        <Divider />

        <Section>
          <H2>RESUMO DA LIÇÃO:</H2>
          <P>
            Em Cristo, fomos feitos filhos Deus por meio da adoção, guiados pelo Espírito e coerdeiros de uma esperança gloriosa.
          </P>
        </Section>

        <Divider />

        <Section>
          <H2>OBJETIVOS:</H2>

          <List>
            <ListItem icon="➤">
              <strong className="font-semibold text-slate-900 dark:text-slate-100">
                APRESENTAR
              </strong>{" "}
              o que é a doutrina bíblica da Adoção;
            </ListItem>

            <ListItem icon="➤">
              <strong className="font-semibold text-slate-900 dark:text-slate-100">
                EXPLANAR
              </strong>{" "}
              a respeito da Adoção mediante o Espírito;
            </ListItem>

            <ListItem icon="➤">
              <strong className="font-semibold text-slate-900 dark:text-slate-100">
                EXPLICAR
              </strong>{" "}
              acerca da Adoção como realidade presente e futura.
            </ListItem>
          </List>
        </Section>

        <Divider />

<!--Continuar aqui-->

        <Section>
          <H2>APLICAÇÃO INICIAL: </H2>
          <P>
            Aprendemos até hoje, muitas lições sobre o projeta jeremias...
            Jeremias sofreu muito na sua jornada... Bem que ele poderia ter
            fugido de todas as angustias... Porém ele optou por sofrer com o
            povo de Deus!... Seu amor por Deus e por Judá o fêz ir até o
            final... Que possamos amar a Deus dessa forma, a ponto de sobrer por
            ele...
          </P>
        </Section>
        <Divider />
        <Section>
          <H2>O LIVRO DE JEREMIAS:</H2>
          <P>
            O livro de Jeremias é, basicamente, uma coletânea das profecias de
            Jeremias, dirigidas principalmente a Judá (caps. 2–29), mas também a
            nove nações estrangeiras (caps. 46–51). São professias, em sua
            maioria de juíso, porém tem mensagens de esperânça futura e
            restauração Essas professias não estão guardadas de forma
            cronológica
          </P>
        </Section>
        <Divider />
        <Section>
          <H1>INTRODUÇÃO</H1>
          <P>
            Jeremias, como profeta, anunciou a mensagem de Deus às pessoas de
            seus dias. Também confirmou o compromisso de Deus com toda a raça
            humana, indistintamente, conforme prometido a Abraão (Gn 12.1-3).
          </P>
        </Section>

        <Divider />

        <Section>
          <div className="space-y-8">
            <H2>I - UM DEUS PARA AS NAÇÕES</H2>

            <H3>1. Deus fala às nações.</H3>

            <P>
              Assim como os demais profetas, Jeremias foi enviado inicialmente
              ao seu povo, o que não significa que não teve de advertir às
              demais nações a respeito da responsabilidade que todos,
              indistintamente, têm diante de Deus. Ao contrário disso, Jeremias
              profetizou contra várias nações, reafirmando assim a
              universalidade do plano de Deus e a verdade de que todos os povos
              devem resposta e reverência ao Criador (46—64).
            </P>

            <Comentario>
              Jeremias foi chamado com um propósito, pregar para o povo de
              israel, mas isso não foi uma barreira em seu ministério, pois
              Jeremias pregou tanto para Israel quanto para as outras 9 Nações
              que estariam sob o juíso de Deus... JEREMIAS NÃO FÊZ APENAS O
              MÍNIMO!!
            </Comentario>

            <Alert variant="warning">
              Estamos fazendo o mínimo no que tange o Trabalhar pra Jesus??, Se
              Sim, não estamos seguindo o Exemplo de Jeremias!!
            </Alert>

            <Alert variant="info">
              São estas as Nações:
              <List>
                <ListItem>
                  1️⃣ Judá e Jerusalém
                  <List>
                    <ListItem icon=">">Público principal da mensagem.</ListItem>
                    <ListItem icon=">">
                      Ênfase: arrependimento, idolatria, injustiça social e
                      juízo iminente.
                    </ListItem>
                    <ListItem icon=">">
                      Contexto: antes e durante o exílio babilônico.
                    </ListItem>
                  </List>
                </ListItem>

                <ListItem>
                  2️⃣ Egito (Jeremias 46)
                  <List>
                    <ListItem icon=">">Potência política da época.</ListItem>
                    <ListItem icon=">">
                      Advertência contra confiar em alianças humanas em vez de
                      Deus.
                    </ListItem>
                  </List>
                </ListItem>

                <ListItem>
                  3️⃣ Filístia (Jeremias 47)
                  <List>
                    <ListItem icon=">">Inimigos históricos de Israel.</ListItem>
                    <ListItem icon=">">
                      Juízo por violência e oposição constante ao povo de Deus.
                    </ListItem>
                  </List>
                </ListItem>

                <ListItem>
                  4️⃣ Moabe (Jeremias 48)
                  <List>
                    <ListItem icon=">">
                      Orgulho nacional e falsa segurança.
                    </ListItem>
                    <ListItem icon=">">
                      Forte linguagem contra soberba espiritual.
                    </ListItem>
                  </List>
                </ListItem>

                <ListItem>
                  5️⃣ Amom (Jeremias 49:1–6)
                  <List>
                    <ListItem icon=">">
                      Violência e apropriação indevida de terras.
                    </ListItem>
                    <ListItem icon=">">
                      Deus cobra responsabilidade territorial e moral.
                    </ListItem>
                  </List>
                </ListItem>

                <ListItem>
                  6️⃣ Edom (Jeremias 49:7–22)
                  <List>
                    <ListItem icon=">">
                      Arrogância e confiança na própria sabedoria.
                    </ListItem>
                    <ListItem icon=">">
                      Relação histórica tensa com Israel (descendentes de Esaú).
                    </ListItem>
                  </List>
                </ListItem>

                <ListItem>
                  7️⃣ Damasco / Síria (Arã) (Jeremias 49:23–27)
                  <List>
                    <ListItem icon=">">Centro estratégico do norte.</ListItem>
                    <ListItem icon=">">
                      Abalo político e militar anunciado.
                    </ListItem>
                  </List>
                </ListItem>

                <ListItem>
                  8️⃣ Quedar e Hazor (Jeremias 49:28–33)
                  <List>
                    <ListItem icon=">">Povos árabes nômades.</ListItem>
                    <ListItem icon=">">
                      Confiança excessiva em isolamento e riquezas.
                    </ListItem>
                  </List>
                </ListItem>

                <ListItem>
                  9️⃣ Elão (Jeremias 49:34–39)
                  <List>
                    <ListItem icon=">">
                      Região a leste da Babilônia (atual Irã).
                    </ListItem>
                    <ListItem icon=">">
                      Mesmo no juízo, há promessa futura de restauração.
                    </ListItem>
                  </List>
                </ListItem>

                <ListItem>
                  🔟 Babilônia (Jeremias 50–51)
                  <List>
                    <ListItem icon=">">Instrumento do juízo divino.</ListItem>
                    <ListItem icon=">">Não isenta do próprio juízo.</ListItem>
                    <ListItem icon=">">
                      Deus é soberano sobre impérios.
                    </ListItem>
                  </List>
                </ListItem>
              </List>
            </Alert>

            <P>
              Um ponto importante a ser considerado é de que, ao tratar com as
              nações por meio de profetas que levantou, de forma direta, Deus
              estava conclamando o seu povo a comunicar a estas nações acerca de
              seu caráter justo, santo e amoroso, em seu chamado para que estas
              nações o reconhecessem, o temesse e se arrependessem de seus maus
              caminhos. Jeremias foi chamado as nações para anunciar
              arrependimento e lembrar ao povo de que o Senhor é Deus de todos
              os povos.
            </P>

            <Comentario>
              Deus estava repreendendo o seu Povo para mostrar as outras nações
              seu caracter{" "}
              <span className="text-yellow-500">santo e amoroso</span> a fim de
              evangelizar a elas, ou seja, tudo era com um propósito!
            </Comentario>

            <H3>2. Um plano para as nações.</H3>

            <P>
              Quando chamou a Abraão e anunciou que de sua semente um povo seria
              levantado, Deus comunicou que o seu plano não estaria limitado a
              este povo, mas que se trata, desde o início, de um plano
              universal, isto é, que envolve todas as nações, conforme se
              observa: "...I e em ti serão benditas todas as famílias da terra"
              (Gn 12.3). Está claro que, desde o início, o alvo de Deus não foi
              somente Abraão e nem tampouco Israel, mas sim, abençoar todos os
              povos, de todas as nações.
            </P>

            <Comentario>
              Deus quer Salvar a todos (não só a israel), e a prova disso está
              em{" "}
              <strong className="text-green-600">
                <em>Gn 12:3</em>
              </strong>
              <Alert variant="info">
                <em>
                  "Abençoarei os que o abençoarem, e amaldiçoarei os que o
                  amaldiçoarem; e por meio de você todos os povos da terra serão
                  abençoados"
                </em>
              </Alert>
            </Comentario>

            <H3>3. Um reino de nações.</H3>

            <P>
              O profeta Isaías anunciou: "O teu Deus reina" (52.7). Jeremias
              chamou o povo a temer a Deus sob o argumento de que Ele é o "Rei
              das nações" (Jr 10.7). Deus é Soberano e o seu reino é formado por
              "povos, nações e línguas" e "o seu domínio é um domínio eterno" e
              "não será destruído" (Dn 7.14). Definitivamente, o Reino de Deus é
              um reino de nações.
            </P>

            <Comentario>
              DEUS está acima de tudo e todos!! Não há nação ou reino ou rei ou
              principe ou presidente que esteja acima dele, tudo está sob o seu
              Domínio e Magestade!!
            </Comentario>
          </div>
        </Section>

        <Section>
          <div className="space-y-8">
            <H2>II - UM PROFETA PARA AS NAÇÕES</H2>

            <H3>1. Um profeta para as nações.</H3>

            <P>
              A expressão “nações” tem sentido amplo nas Escrituras, mas no
              contexto de Jeremias, tem relação com outros povos além de Israel,
              ou ainda, povos e nações pagãos e gentios (Éx 9.24; 34.10; Ez
              5.6-8). Ao falar com Jeremias sobre o seu chamado, Deus usou este
              termo: “e às nações te dei por profeta” (1.5). Uma referência de
              que ele seria enviado, não somente aos da casa de Israel, mas
              também aos gentios.
            </P>

            <P>
              {" "}
              Assim como Deus determinou o início e o fim do ministério de
              Jeremias, Ele também decidiu que as nações seriam o seu
              público-alvo. Começando pelo “povo da aliança”, Jeremias se
              dirigiu também a outras nações, não negligenciando a sua
              responsabilidade com outros povos, falando-lhes amplamente,
              conforme o registro bíblico (46.1-51.64).
            </P>

            <Comentario>
              JEREMIAS não foi chamado apenas para a nação de Israel, mas para
              todas as outras nações!
            </Comentario>

            <P>
              {" "}
              Iniciando pelo Egito (46.2-28), o profeta Jeremias transmitiu a
              mensagem divina à Filistia (47.1-7), a Moabe (48.1-47), a Amom
              (49.1-6), a Edom (49.7-22), à Síria (49.23-33), a Elão (49.34-39)
              e à Babilônia (50.1-51.64). Está evidente, portanto, que, em
              obediência à vontade de Deus e aos seus propósitos, Jeremias foi
              um profeta para as nações.
            </P>

            <Comentario>
              <strong>JEREMIAS, O PROFETA DAS NAÇÕES!!!</strong>
            </Comentario>

            <H3>2. Uma mensagem para as nações.</H3>

            <P>
              A “palavra do Senhor” foi direcionada “contra as nações” (46.1). O
              termo “palavra” tem vários sentidos nas Escrituras, mas aqui
              indica a comunicação de Deus por intermédio de um agente (2 Sm
              7.4; Jr 25.3; Os 1.1). Isso também se aplica aos Dez Mandamentos,
              pois são chamados de “as dez palavras do Senhor” (Éx 34.28; Dt
              4.13).
            </P>

            <Comentario>
              A nível de informação, as 10 "palavras" ou as 10 nações que o
              Projeta Jeremias citou em seu ministério, se assemelham aos 10
              Mandamentos, pois tratam de concerto, exortação e redenção.
            </Comentario>

            <P>
              Jeremias não é o único profeta enviado a outras nações, além de
              Israel, já que houve profetas como Amós, Isaías e Ezequiel também
              o foram (Am 1.3-2.3; Is 13-23; Ez 25-32). Este interesse pelas
              nações revela não só o amor de Deus para com todos, mas também a
              sua justiça, já que os princípios aplicados para avaliar e
              disciplinar o seu povo são os mesmos usados a outros povos. O alvo
              divino é sempre castigar o pecado.
            </P>

            <Comentario>
              O Alvo de Deus é unico e exclusivamente o pecado!... Não existe
              ser humano que não possa ser achado pela GRAÇA de DEUS.
            </Comentario>

            <P>
              A disposição de Jeremias em profetizar às nações tem relação
              direta com a sua forte convicção de que Deus “é o Criador de todas
              as coisas” (Jr 10.16). Para Ele, ao contrário dos falsos deuses e
              à fragilidade humana, Deus sustenta todas as suas obras, pois é
              Poderoso (10.12-16).
            </P>

            <Comentario>
              Jeremias se dispôs a trabalhar para Deus pois sabia quem Deus é!!!
            </Comentario>

            <Alert variant="warning">
              Conhecemos a Deus a ponto de sermos um JEREMAS!!!
            </Alert>

            <H3>3. Uma mensagem para o Egito.</H3>

            <P>
              A seção que apresenta as nações a quem Jeremias profetizou, inicia
              com a mensagem dirigida ao Egito e fala sobre a derrota do Faraó
              Neco, por ocasião da chamada batalha de Carquemis, diante de
              Nabucodonosor (46.2), acontecimento que abalou o Oriente Médio da
              época (v. 12). A mensagem de Jeremias contra o Egito é repleta de
              detalhes, demonstrando a precisão profética. Ele começa retratando
              os momentos que antecederam a batalha, com informações específicas
              acerca dos instrumentos de guerra e os que se envolveriam nela
              (vv. 3-6), apresenta a batalha em si e os seus estragos (vv.
              7-11), elucida também as terríveis consequências (vv. 13-26) e a
              promessa da restauração de Israel (vv. 27-28).
            </P>

            <Comentario>
              Jeremias não só escreveu suas pregações, mas narrou acontecimentos
              históricos de forma detalhada!, o LIVRO de JEREMIAS é uma ótima
              escolha para quem gosta de ler
            </Comentario>
          </div>
        </Section>

        <Section>
          <div className="space-y-8">
            <H2>III - UM POVO PARA AS NAÇÕES</H2>

            <H3>1. Israel, o povo que falhou com as nações.</H3>

            <P>
              O ministério de Jeremias em relação a outras nações não foi um
              acontecimento à parte do plano maior de Deus que, por meio da
              missão de Israel de representá-lo, intenciona alcançar outros
              povos (Dt 28.9.10). Ao contrário disso, ele atuou no sentido de
              reafirmar o interesse divino em restaurar povos de todas as nações
              (Is 49.22.23).
            </P>

            <Comentario>
              O Plano de Deus sempre foi corrigir Israel e por tabela, corrigir
              as demais nações... Porém, como povo de Deus, Israel falhou
              miserávelmente nessa missão, foi teimoso a ponto de negligenciarem
              a vós do Senhor,e se desviou completamente.
            </Comentario>

            <Alert variant="warning">
              Quem nós somos quando somos repreendidos?
            </Alert>

            <H3>2. Igreja, o povo de Deus para as nações.</H3>

            <P>
              O texto de 1 Pedro 2.9 afirma que a Igreja foi escolhida para
              anunciar a mensagem de Deus. Nós somos a Igreja de Cristo, por
              isso fomos denominados de “geração eleita, sacerdócio real, a
              nação santa e o povo adquirido”. A Igreja recebeu de Deus a missão
              de anunciar a mensagem às nações.
            </P>

            <Comentario>
              A Igreja recebeu essa missão, pregar o EVANGELHO a toda criatura,
              mas muitos tem negligenciado essa missão e se escondendo atráz de
              pessoas e cargos
            </Comentario>

            <Alert>
              Quem tipo de igreja nós somos? Pregamos o Evangelho? ou nos
              escondemos de pregar o evangelho?
            </Alert>

            <P>
              A missão da Igreja se identifica com a de Israel no que se refere
              à tarefa de representar Deus diante das nações. Duas verdades
              precisam ser ressaltadas aqui: A primeira é que o Senhor Jesus
              ordenou que a Igreja pregue o Evangelho. E a segunda é que a
              Igreja deve anunciar, em todos os lugares, e a todos os povos que
              só o Senhor é Deus e que Jesus é o Salvador.
            </P>

            <Comentario>...</Comentario>
          </div>
        </Section>

        <Section>
          <div className="space-y-8">
            <H2>CONCLUSÃO</H2>
            <P>
              O Antigo Testamento, especialmente o profeta Jeremias, reafirma o
              caráter divino da Grande Comissão do Novo Testamento, confiada à
              Igreja, tanto no que se refere à sua origem, às suas bases e ao
              seu objetivo. Vimos a respeito do compromisso de anunciar o
              Evangelho às nações; sob a perspectiva do profeta Jeremias que, à
              semelhança de outros profetas, falou às nações, como obedeceu à
              ordem de Deus e como vocação, pois para isso ele foi enviado, do
              mesmo modo que a Igreja é enviada na atualidade.
            </P>
          </div>
        </Section>

        <Section>
          <div className="space-y-8">
            <H2>HORA DA REVISÃO</H2>
            <H3>1. Para quem Jeremias foi enviado inicialmente?</H3>
            Assim como os demais profetas, Jeremias foi enviado inicialmente ao
            seu povo, o que não significa que não teve de advertir as demais
            nações a respeito da responsabilidade que todos, indistintamente,
            têm diante de Deus.
            <H3>
              2. Quem determinou o ministério de Jeremias e qual era o seu
              público-alvo?
            </H3>
            Assim como Deus determinou o início e o fim do ministério de
            Jeremias, Ele também decidiu que as nações seriam o seu
            público-alvo.
            <H3>3. De que é composto o Reino de Deus?</H3>
            Definitivamente, o Reino de Deus é um reino de nações.
            <H3>4. Cite 2 profetas que foram enviados a outras nações.</H3>
            Isaías e Ezequiel.
            <H3>5. Qual a maior e principal missão da Igreja?</H3>A missão da
            Igreja se identifica com a de Israel no que se refere à tarefa de
            representar a Deus diante das nações.
          </div>
        </Section>
      </Container>
    </>
  );
}

export default App;

export const Lista = ({ arrayItens }: { arrayItens: string[] }) => {
  return (
    <ul className="my-6 flex flex-col gap-3">
      {arrayItens.map((item) => {
        return (
          <li key={item} className="relative pl-8 text-base leading-relaxed">
            <span className="absolute top-1 left-0">✔</span>
            <strong className="font-semibold">COMPREENDER </strong>
            que Deus fala às nações
          </li>
        );
      })}
      <li className="relative pl-8 text-base leading-relaxed">
        <span className="absolute top-1 left-0">✔</span>
        <strong className="font-semibold">COMPREENDER </strong>
        que Deus fala às nações
      </li>

      <li className="relative pl-8 text-base leading-relaxed">
        <span className="absolute top-1 left-0">✔</span>
        <strong className="font-semibold">REFLETIR </strong>a respeito do
        chamado de Jeremias para as nações;
      </li>

      <li className="relative pl-8 text-base leading-relaxed">
        <span className="absolute top-1 left-0">✔</span>
        <strong className="font-semibold">SABER</strong>
        que Israel, como povo escolhido de Deus, falhou para com as nações.
      </li>
    </ul>
  );
};
