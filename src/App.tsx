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
            ESBOÇO AULA 13 DO 4° TRIMESTRE DE 2025
          </H1>
        </Header>

        <Section>
          <div className="flex items-center gap-4">
            <H2>TITULO:</H2>
            <P>Uma Palavra Profética às Nações</P>
          </div>
        </Section>

        <Divider />

        <Section>
          <H2>RESUMO DA LIÇÃO:</H2>
          <P>
            Assim como o profeta Jeremias, temos a missão de anunciar a Palavra
            de Deus até os confins da Terra.
          </P>
        </Section>

        <Divider />

        <Section>
          <H2>OBJETIVOS:</H2>

          <List>
            <ListItem icon="➤">
              <strong className="font-semibold text-slate-900 dark:text-slate-100">
                COMPREENDER
              </strong>{" "}
              que Deus fala às nações
            </ListItem>

            <ListItem icon="➤">
              <strong className="font-semibold text-slate-900 dark:text-slate-100">
                REFLETIR
              </strong>{" "}
              sobre o chamado de Jeremias
            </ListItem>

            <ListItem icon="➤">
              <strong className="font-semibold text-slate-900 dark:text-slate-100">
                SABER
              </strong>{" "}
              que Israel falhou com as nações
            </ListItem>
          </List>
        </Section>
        <Divider />
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

            <P>
              Assim como os demais profetas, Jeremias foi enviado inicialmente
              ao seu povo, o que não significa que não teve de advertir às
              demais nações a respeito da responsabilidade que todos,
              indistintamente, têm diante de Deus. Ao contrário disso, Jeremias
              profetizou contra várias nações, reafirmando assim a
              universalidade do plano de Deus e a verdade de que todos os povos
              devem resposta e reverência ao Criador (46—64).
            </P>

            <H3>2. Um plano para as nações.</H3>
            <P>Teste</P>

            <H3>3. Um reino de nações.</H3>
            <P>Teste</P>
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
