import * as S from './styles';

const Faq = () => {
  const detail_list = [
    {
      summary: 'Como pode melhorar o meu atendimento?',
      details: 'A Ai Atende pode ajudar a melhorar significativamente o seu atendimento ao cliente. Com nossa solução de ChatBot com Inteligência Artificial integrada e treinada especificamente para o seu nicho, você pode oferecer um atendimento humanizado e personalizado 24/7. Nosso ChatBot entende o tom de voz e as intenções dos seus clientes, respondendo com agilidade a qualquer tipo de pergunta. Isso diminui a ociosidade da sua equipe e mantém um padrão de qualidade alto em todas as interações, educando constantemente os seus clientes sobre os seus produtos e serviços.'
    },
    {
      summary: 'O que é e como trabalham?',
      details: 'A Ai Atende é uma solução de atendimento ao cliente com Inteligência Artificial que funciona de forma integrada ao seu CRM. Nós treinamos nosso ChatBot especificamente para entender as necessidades e o vocabulário do seu público-alvo, seja ele de clínicas médicas, odontológicas ou de qualquer outro segmento. Dessa forma, o ChatBot consegue manter conversas fluídas e naturais, resolvendo dúvidas, agendando consultas, gerando leads e muito mais. Tudo isso de forma automatizada, porém com um toque de humanização que fideliza os seus clientes.'
    },
    {
      summary: 'Como funciona essas respostas automáticas?',
      details: 'Nossas respostas automáticas são geradas por um ChatBot com Inteligência Artificial, treinado especificamente para atender o seu público. Ao receber uma mensagem do cliente, o ChatBot analisa o contexto, o tom de voz e a intenção por trás da pergunta. Com base nisso, ele seleciona a melhor resposta possível, que pode ir desde uma informação simples até um aconselhamento mais elaborado. O ChatBot é constantemente atualizado e aprimora suas habilidades de conversação, para que o atendimento seja cada vez mais natural e eficiente.'
    },
    {
      summary: 'O que é uma IA Conversacional?',
      details: 'Uma IA Conversacional, como a utilizada pela Ai Atende, é um sistema de Inteligência Artificial capaz de manter diálogos naturais e fluidos com os usuários. Diferente de um sistema de respostas pré-programadas, a IA Conversacional analisa o contexto, a intenção e o tom de voz do usuário para gerar respostas personalizadas e adaptadas à cada situação. Isso torna a experiência de interação muito mais natural e engajadora, aproximando o cliente da marca de uma forma genuína e humanizada.'
    },
    {
      summary: 'O que é um ChatBot com Chat-GPT integrado?',
      details: 'Um ChatBot com Chat-GPT integrado é uma solução de atendimento automatizado que utiliza a poderosa tecnologia do Chat-GPT, desenvolvida pela OpenAI. Esse tipo de ChatBot consegue entender a linguagem natural dos usuários com uma precisão muito maior do que os ChatBots convencionais, sendo capaz de gerar respostas extremamente coerentes e elaboradas. Na Ai Atende, nós integramos essa tecnologia ao nosso ChatBot, treinando-o ainda mais para atender especificamente o seu público-alvo. Isso garante um atendimento ainda mais humanizado e eficiente.'
    },
    {
      summary: 'Posso integrar a Ai Atende no meu CRM?',
      details: 'Sim, a integração da Ai Atende com o seu CRM é um dos diferenciais do nosso serviço. Nós sabemos que a gestão do atendimento e do funil de vendas é essencial para o seu negócio, por isso desenvolvemos uma solução que se integra perfeitamente aos principais sistemas de CRM do mercado. Dessa forma, todas as interações do seu cliente com o ChatBot são registradas e disponibilizadas no seu CRM, alimentando automaticamente o seu funil de vendas e permitindo um acompanhamento completo da jornada do cliente.'
    },
    {
      summary: 'Funciona para Instagram?',
      details: 'Claro! A Ai Atende foi desenvolvida para funcionar em diversos canais de atendimento, incluindo o Instagram. Nosso ChatBot pode ser integrado diretamente à sua página, respondendo mensagens, tirando dúvidas, agendando consultas e muito mais. Isso faz com que você esteja sempre disponível para os seus clientes, mesmo fora do horário comercial, melhorando significativamente a experiência e a satisfação dos seus seguidores. E o melhor: tudo de forma automatizada, mas com aquele toque de humanização que fideliza.'
    },
    {
      summary: 'Por que implementar a Ai Atende?',
      details: 'Implementar a Ai Atende é uma excelente estratégia para melhorar o atendimento ao cliente e impulsionar os resultados do seu negócio. Com nossa solução de ChatBot com Inteligência Artificial, você pode oferecer um atendimento 24/7, respondendo qualquer dúvida dos seus clientes com agilidade e precisão. Isso diminui a ociosidade da sua equipe, aumenta a satisfação dos clientes e ainda alimenta automaticamente o seu funil de vendas. Além disso, nosso ChatBot é treinado especificamente para o seu nicho, mantendo um tom de voz personalizado e humanizado que fideliza os seus clientes. Investir na Ai Atende é investir no crescimento sustentável do seu negócio.'
    },
    {
      summary: 'Quanto tempo demora?',
      details: (<>
        O processo de implementação da Ai Atende é ágil e pode ser concluído em poucas semanas. Primeiro, realizamos um alinhamento estratégico com você para entender as necessidades do seu negócio e o perfil do seu público-alvo. Com base nisso, nossos especialistas treinam o ChatBot com Inteligência Artificial, personalizando-o para atender perfeitamente às demandas do seu nicho.<br /><br />
        Após essa fase de treinamento, integramos a solução aos seus principais canais de atendimento, como website, WhatsApp, Instagram e até mesmo ao seu CRM. Todo esse processo é acompanhado de perto pela nossa equipe, que também capacita a sua equipe para utilizar a plataforma de forma eficiente.<br /><br />
        Portanto, em poucos dias você já pode começar a colher os benefícios de um atendimento humanizado e automatizado, que melhora a experiência do cliente e impulsiona os resultados do seu negócio.
      </>)
    },
    {
      summary: 'Tenho acesso a suporte?',
      details: (<>
        Sim, a Ai Atende oferece um suporte completo e dedicado aos nossos clientes. Além da fase de implementação, nossa equipe de especialistas está sempre à disposição para ajudar com dúvidas, customizações e melhorias contínuas da solução.<br /><br />
        Você terá acesso a um canal de comunicação direto com nossos consultores, que estarão prontos para esclarecer qualquer questão, seja ela sobre o funcionamento do ChatBot, a integração com o seu CRM ou até mesmo estratégias de atendimento e fidelização de clientes.<br /><br />
        Além disso, disponibilizamos um conjunto de materiais de apoio, como manuais, tutoriais e dicas de uso, para que você e sua equipe possam tirar o máximo proveito de todas as funcionalidades da Ai Atende.<br /><br />
        Nosso objetivo é ser um parceiro confiável no seu processo de transformação digital, acompanhando você em cada etapa e garantindo que a solução de atendimento automatizado se torne um verdadeiro diferencial competitivo para o seu negócio.
      </>)
    }
  ];

  return (
    <S.Container>
      <S.TextWrapper>
        <S.Title>
          Perguntas Frequentes
        </S.Title>
        <S.Text>
          Tire suas principais dúvidas e embarque na jornada AI Atende com confiança.
        </S.Text>
      </S.TextWrapper>
      <S.DetailsContainer>
        {detail_list.map((item, idx) => (
          <S.Details key={idx}>
            <S.Summary>
              {item.summary}
              <S.Arrow />
            </S.Summary>
            <S.Line />
            <S.Span>
              {item.details}
            </S.Span>
          </S.Details>
        ))}
      </S.DetailsContainer>
    </S.Container>
  );
};

export default Faq;
