import React from 'react';

import logo from 'svg/veja_web_logo-02.svg';
import Footer from '../Landing/Footer';

import styles from './privacypolicy.module.css';

const PrivacyPolicy = () => {
    return (
        <>
            <header className={styles.header}>
                <a href="/" className={styles.logo}><img alt="" width="148px" height="50px" src={logo} /></a>
            </header>
            <div className={styles.contentContainer}>
                <div className={styles.title}>Política de Privacidade da Página</div>
                <div className={styles.wrapper}>
                    <p className={styles.text}>A Vejo em Casa é uma plataforma de agregação de links para eventos virtuais de conteúdo cultural e de cariz solidário, sem fins lucrativos, que visa permitir a criadores de conteúdo promoverem o seu trabalho. ("Vejo em Casa" ou "Página").</p>
                    <p className={styles.text}>A Vejo em Casa é alimentada por uma equipa de voluntários do movimento tech4covid19 (os "<b>Voluntários</b>").</p>
                    <br />
                    <p className={styles.text}>Aqui podes encontrar a nossa Política de Privacidade, que, em conjunto com os Termos e Condições, te vão ajudar a conhecer o nosso funcionamento e a forma como tratamos os teus Dados Pessoais. Qualquer dúvida, pergunta-nos ;)</p>
                    <br />
                    <p className={styles.subtitle}>Que Dados Pessoais recolhemos?</p>
                    <p className={styles.text}>A utilização do Vejo em Casa não pressupõe o tratamento de Dados Pessoais, porém podemos pedir o teu consentimento para recolher e tratar dados para fins de marketing directo (envio de newsletters e emails) ou para monitorizar a qualidade do serviço que te prestamos.</p>
                    <p className={styles.text}>Os Dados Pessoais que podemos tratar são: nome e endereço de e-mail.</p>
                    <br />
                    <p className={styles.subtitle}>Quais os meus direitos em relação aos Dados?</p>
                    <table className={styles.table}>
                        <tbody>
                            <tr>
                                <td>Direito de acesso</td>
                                <td>Tens o direito de requerer informação à Vejo em Casa sobre os teus dados pessoais que tratamos.</td>
                            </tr>
                            <tr>
                                <td>Direito à retificação</td>
                                <td>Na maioria das atividades de tratamento acima identificadas, tens o direito a requerer à Vejo em Casa a retificação dos teus dados pessoais no caso de ter informações incorretas, bem como o direito a completar esses dados, se e quando incompletos.</td>
                            </tr>
                            <tr>
                                <td>Direito à portabilidade</td>
                                <td>Sempre que a Vejo em Casa trate dados pessoais seus por meios automatizados ou com base no seu consentimento ou num contrato, tem o direito a solicitar à Vejo em Casa uma cópia desses dados pessoais, num formato estruturado, de uso corrente e de leitura automática, ou a solicitar a sua transferência para outro responsável pelo tratamento indicado por si.</td>
                            </tr>
                            <tr>
                                <td>Direito ao apagamento</td>
                                <td>O teu direito ao apagamento de dados pessoais pela Vejo em Casa encontra-se limitado pelas leis locais e europeias aplicáveis, bem como pelos direitos de defesa judicial da Vejo em Casa. Se solicitares o apagamento dos Dados Pessoais, reconheces que não irás receber qualquer nova comunicação ou newsletter da Vejo em Casa.</td>
                            </tr>
                            <tr>
                                <td>Direito à oposição ao tratamento</td>
                                <td>Tens o direito a te opores ao tratamento dos teus dados pessoais sempre que a Vejo em Casa baseie o tratamento no seu interesse legítimo, exceto quando a Vejo em Casa demonstrar um fundamento legítimo para o seu tratamento que se prevaleça sobre os teus interesses ou em caso de processos judiciais eventuais ou pendentes.</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>Tens o direito de solicitar que a Vejo em Casa limite o tratamento de dados pessoais nas seguintes circunstâncias:</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>- Se pretenderes opor-te ao tratamento que tenha por base o interesse legítimo da Vejo em Casa, a Vejo em Casa irá restringir todo o tratamento desses dados até que o interesse legítimo seja verificado.</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>- Se declarares que os teus dados pessoais estão incorretos, a Vejo em Casa terá de restringir todo o tratamento desses dados até que se verifique a correção dos mesmos.</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>- Se o tratamento for ilícito, podes opor-te à eliminação dos dados pessoais e, em vez disso, solicitar a restrição de utilização dos teus dados pessoais.</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>- Se a Vejo em Casa já não necessitar dos dados pessoais, mas tiver de os manter para a sua defesa em processos judiciais.</td>
                            </tr>
                            <tr>
                                <td>Direito de apresentar uma reclamação a uma autoridade de controlo</td>
                                <td>Caso entendas que a Vejo em Casa trata os teus dados pessoais de forma incompatível com as disposições legais aplicáveis em matéria de proteção de dados pessoais, como titular dos dados poderás apresentar uma reclamação a uma autoridade de controlo que, no caso de Portugal, é a Comissão Nacional de Proteção de Dados.</td>
                            </tr>
                        </tbody>
                    </table>
                    <br />
                    <p className={styles.text}>Para exerceres os teus direitos, contacta-nos para o endereço de correio electrónico: legal@vejoemcasa.pt</p>
                    <br />
                    <p className={styles.subtitle}>O que fazemos com os teus dados?</p>
                    <p className={styles.text}>Por forneceres o teu e-mail e número de telefone sabes que vamos enviar-te uma newsletter (em formato email) com informações sobre eventos e questionários sobre a utilização de serviço.
                    Conservamos os teus dados pessoais durante toda a execução dos serviços. Podemos, ainda conservar dados pessoais para além da execução dos serviços nos termos legalmente permitidos ou para eventual defesa de direitos em sede judicial ou administrativa.
Para mais informações sobre os prazos de conservação dos teus dados pessoais, por favor entra em contacto connosco.</p>
                    <br />
                    <p className={styles.subtitle}>Partilhamos os teus dados com terceiros?</p>
                    <p className={styles.text}>Não. Não partilhamos os teus dados com terceiros, nacionais ou internacionais.</p>
                    <br />
                    <p className={styles.subtitle}>Que cookies guardamos?</p>
                    <p className={styles.text}>Existem diferentes tipos de cookies, nomeadamente:</p>
                    <br />
                    <p className={styles.text}><b>Necessários -</b> geralmente ativos apenas durante a sessão do utilizador, permitindo identificá-lo, são essenciais ao funcionamento dos serviços disponibilizados nos sites;</p>
                    <p className={styles.text}><b>De performance –</b> ativos durante a sessão do utilizador, ou de forma persistente, com o fim de melhorar o desempenho do site, através de análise da forma como os utilizadores o usam;</p>
                    <p className={styles.text}><b>Funcionais -</b> ativos durante a sessão do utilizador, ou de forma persistente, com o fim de permitir ao utilizador uma navegação mais eficiente e individualizada;</p>
                    <p className={styles.text}><b>De publicidade –</b> ativos de forma persistente mas por período limitado, com o fim de recolherem informação do utilizador sobre hábitos de navegação na internet de modo a que a publicidade visualizada por aquele corresponda às suas necessidades e interesses.</p>
                    <br />
                    <p className={styles.text}>A Vejo em casa utiliza os seguintes tipos de cookies: Funcionais e de Publicidade (através da Google Analytics).</p>
                    <br />
                    <p className={styles.text}>Todos os browsers permitem ao utilizador aceitar, recusar ou apagar cookies, nomeadamente através da seleção das definições apropriadas no respetivo navegador, pelo que podes, a qualquer momento, desativar parcial ou totalmente os cookies. Para obter mais informações consulta as instruções e manuais do próprio navegador.</p>
                    <br />
                    <p className={styles.text}>Por utilizarmos a Google Analytics, estamos em conformidade com a User Consent Policy da Google, que pode ser consultada aqui https://www.google.com/about/company/user-consent-policy/.</p>
                    <br />
                    <p className={styles.subtitle}>Como nos podes contactar?</p>
                    <p className={styles.text}>Se tem alguma questão acerca da Política de Privacidade da “Vejo em Casa”, as informações que guardamos sobre si, ou gostaria de exercer os seus direitos de protecção de dados, por favor não hesite em contactar-nos para o seguinte endereço de correio electrónico: legal@vejoemcasa.pt</p>
                    <br />
                    <p className={styles.text}>A "Vejo em Casa" mantém a sua política de privacidade em constante revisão e irá notificar os utilizadores através de um banner sempre que a atualizar. Esta política de privacidade foi actualizada no dia 28/03/2020.</p>
                </div>
                <br />
                <div className={styles.title}>Notificação de Privacidade para Criadores</div>
                <div className={styles.wrapper}>
                    <p className={styles.text}>A Vejo em Casa é uma plataforma de agregação de links para eventos virtuais de conteúdo cultural e de cariz solidário, sem fins lucrativos, que visa permitir a criadores de conteúdo promoverem o seu trabalho. ("Vejo em Casa" ou "Página").</p>
                    <br />
                    <p className={styles.text}>A Vejo em Casa é alimentada por uma equipa de voluntários do movimento tech4covid19 (os "<b>Voluntários</b>").</p>
                    <br />
                    <p className={styles.text}>Aqui podes encontrar a nossa Política de Privacidade e os Termos e Condições. <b><a href="/termos-condicoes">Termos e Condições</a></b></p>
                    <br />
                    <p className={styles.text}>Esta Notificação de Privacidade para criadores pretende mostrar-te como tratamos os teus Dados Pessoais.</p>
                    <br />
                    <p className={styles.subtitle}>Que Dados Pessoais recolhemos?</p>
                    <p className={styles.text}>Quando fazes um upload na Vejo em Casa pedimos-te as seguintes categorias de Dados Pessoais: Nome, e-mail, contacto telefónico.</p>
                    <br />
                    <p className={styles.text}>Estes Dados Pessoais são necessários para podermos inserir a tua performance no Vejo em Casa.</p>
                    <br />
                    <p className={styles.text}>Tratamos também os dados não pessoais com base no interesse legítimo da Vejo em Casa.</p>
                    <br />
                    <p className={styles.subtitle}>Que medidas de segurança empregam para proteger os meus dados?</p>
                    <p className={styles.text}>A Vejo em Casa utiliza medidas técnicas de segurança disponibilizadas pela empresa Google e procede à encriptação dos dados, tanto na comunicação, via certificado de segurança, como na sua base de dados.</p>
                    <br />
                    <p className={styles.subtitle}>Quais os meus direitos em relação aos Dados?</p>
                    <table>
                        <tbody>
                            <tr>
                                <td>Direito de acesso</td>
                                <td>Tens o direito de requerer informação à Vejo em Casa sobre os teus dados pessoais que tratamos.</td>
                            </tr>
                            <tr>
                                <td>Direito à retificação</td>
                                <td>Na maioria das atividades de tratamento acima identificadas, tens o direito a requerer à Vejo em Casa a retificação dos teus dados pessoais no caso de ter informações incorretas, bem como o direito a completar esses dados, se e quando incompletos.</td>
                            </tr>
                            <tr>
                                <td>Direito à portabilidade</td>
                                <td>Sempre que a Vejo em Casa trate dados pessoais teus por meios automatizados ou com base no seu consentimento ou num contrato, tem o direito a solicitar à Vejo em Casa uma cópia desses dados pessoais, num formato estruturado, de uso corrente e de leitura automática, ou a solicitar a sua transferência para outro responsável pelo tratamento indicado por ti.</td>
                            </tr>
                            <tr>
                                <td>Direito ao apagamento</td>
                                <td>O teu direito ao apagamento de dados pessoais pela Vejo em Casa encontra-se limitado pelas leis locais e europeias aplicáveis, bem como pelos direitos de defesa judicial da Vejo em Casa. Se solicitares o apagamento dos Dados Pessoais, reconheces que não irás receber qualquer nova comunicação ou newsletter da Vejo em Casa.</td>
                            </tr>
                            <tr>
                                <td>Direito à oposição ao tratamento</td>
                                <td>Tens o direito a te opores ao tratamento dos teus dados pessoais sempre que a Vejo em Casa baseie o tratamento no seu interesse legítimo, exceto quando a Vejo em Casa demonstrar um fundamento legítimo para o seu tratamento que se prevaleça sobre os teus interesses ou em caso de processos judiciais eventuais ou pendentes.</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>Tens o direito de solicitar que a Vejo em Casa limite o tratamento de dados pessoais nas seguintes circunstâncias:</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>- Se pretenderes opor-te ao tratamento que tenha por base o interesse legítimo da Vejo em Casa, a Vejo em Casa irá restringir todo o tratamento desses dados até que o interesse legítimo seja verificado.</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>- Se declarares que os teus dados pessoais estão incorretos, a Vejo em Casa terá de restringir todo o tratamento desses dados até que se verifique a correção dos mesmos.</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>- Se o tratamento for ilícito, podes opor-te à eliminação dos dados pessoais e, em vez disso, solicitar a restrição de utilização dos teus dados pessoais.</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>- Se a Vejo em Casa já não necessitar dos dados pessoais, mas tiver de os manter para sua defesa em processos judiciais.</td>
                            </tr>
                            <tr>
                                <td>Direito de apresentar uma reclamação a uma autoridade de controlo</td>
                                <td>Caso entendas que a Vejo em Casa trata os teus dados pessoais de forma incompatível com as disposições legais aplicáveis em matéria de proteção de dados pessoais, como titular dos dados poderás apresentar uma reclamação a uma autoridade de controlo que, no caso de Portugal, é a Comissão Nacional de Proteção de Dados.</td>
                            </tr>
                        </tbody>
                    </table>
                    <br />
                    <p className={styles.text}>Para exercer os teus direitos contacta-nos para legal@vejoemcasa.pt</p>
                    <br />
                    <p className={styles.subtitle}>O que fazemos com os teus dados?</p>
                    <p className={styles.text}>Por nos disponibilizares os dados de Nome, email e contacto telefónico e link API da plataforma euPago, nós podemos operar a plataforma e disponbilizar a tua performance, inclusive apoios.</p>
                    <br />
                    <p className={styles.text}>Não guardaremos os teus dados pessoais para qualquer outro fim que não seja o de te prestar o serviço e prestar assistência na utilização do mesmo.</p>
                    <br />
                    <p className={styles.text}>Conservamos os teus dados pessoais durante toda a execução dos serviços. Podemos, ainda conservar dados pessoais para além da execução dos serviços nos termos legalmente permitidos ou para eventual defesa de direitos em sede judicial ou administrativa.</p>
                    <br />
                    <p className={styles.text}>Para mais informações sobre os prazos de conservação dos teus dados pessoais, por favor entra em contacto connosco.</p>
                    <br />
                    <p className={styles.subtitle}>Partilhamos os teus dados com terceiros?</p>
                    <p className={styles.text}>Não. Não partilhamos os teus dados com terceiros, nacionais ou internacionais.</p>
                    <br />
                    <p className={styles.subtitle}>Que cookies guardamos?</p>
                    <p className={styles.text}>Existem diferentes tipos de cookies, nomeadamente:</p>
                    <br />
                    <p className={styles.text}><b>Necessários -</b> geralmente ativos apenas durante a sessão do utilizador, permitindo identificá-lo, são essenciais ao funcionamento dos serviços disponibilizados nos sites;</p>
                    <p className={styles.text}><b>De performance –</b> ativos durante a sessão do utilizador, ou de forma persistente, com o fim de melhorar o desempenho do site, através de análise da forma como os utilizadores o usam;</p>
                    <p className={styles.text}><b>Funcionais -</b> ativos durante a sessão do utilizador, ou de forma persistente, com o fim de permitir ao utilizador uma navegação mais eficiente e individualizada;</p>
                    <p className={styles.text}><b>De publicidade –</b> ativos de forma persistente mas por período limitado, com o fim de recolherem informação do utilizador sobre hábitos de navegação na internet de modo a que a publicidade visualizada por aquele corresponda às suas necessidades e interesses.</p>
                    <br />
                    <p className={styles.text}>A Vejo em casa utiliza os seguintes tipos de cookies: Funcionais e de Publicidade (através da Google Analytics).</p>
                    <br />
                    <p className={styles.text}>Todos os browsers permitem ao utilizador aceitar, recusar ou apagar cookies, nomeadamente através da seleção das definições apropriadas no respetivo navegador, pelo que podes, a qualquer momento, desativar parcial ou totalmente os cookies. Para obter mais informações consulta as instruções e manuais do próprio navegador.</p>
                    <br />
                    <p className={styles.text}>Por utilizarmos a Google Analytics, estamos em conformidade com a User Consent Policy da Google, que pode ser consultada aqui https://www.google.com/about/company/user-consent-policy/ </p>
                    <br />
                    <p className={styles.subtitle}>Como nos podes contactar?</p>
                    <p className={styles.text}>Se tem alguma questão acerca da Política de Privacidade da “Vejo em Casa”, as informações que guardamos sobre si, ou gostaria de exercer os seus direitos de protecção de dados, por favor não hesite em contactar-nos para o seguinte endereço de correio electrónico: legal@vejoemcasa.pt</p>
                    <br />
                    <p className={styles.text}>A “Vejo em Casa” mantém a sua política de privacidade em constante revisão e irá notificar os utilizadores através de um banner sempre que a atualizar.  Esta política de privacidade foi actualizada no dia 28/03/2020.</p>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default PrivacyPolicy;