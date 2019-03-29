const request = require("request");
const http = require("http");
const config = require("./config");
const queryString = require('query-string');
const fs = require('fs');

const searchApi = "http://lojaprojetoverao.vtexcommercestable.com.br/api/catalog_system/pub/products/search";


module.exports.getByCollection = (collectionId) => {
	return new Promise((resolve, reject) => {
		request(`${searchApi}?fq=productClusterIds:${collectionId}`, (error, response, body) => {
			if (!error && response.statusCode == 200 || response.statusCode == 206) {
				resolve(JSON.parse(body));
			} else {
				reject(error);
			}
		});
		// resolve([
		// 	{
		// 		"productId": "128901",
		// 		"productName": "Chlorella Pura 1000 comprimidos - Green Gem",
		// 		"brand": "Green Gem Paversul",
		// 		"linkText": "green-gem---chlorella--1000-comp",
		// 		"productReference": "128901",
		// 		"categoryId": "1587129881",
		// 		"productTitle": "Chlorella - Green Gem (250mg) 1000 Comprimidos",
		// 		"metaTagDescription": "A Chlorella Green Gem® e considerada um super alimento por se tratar de um dos mais completos alimentos da natureza. Possui uma enorme quantidade de nutrientes primordiais ao bom desempenho das funcoes biologicas do nosso organismo.",
		// 		"clusterHighlights": {
		// 			"136": "Promo Relampago"
		// 		},
		// 		"productClusters": {
		// 			"136": "Promo Relampago",
		// 			"138": "Antigo",
		// 			"140": "Loja",
		// 			"141": "Comparadores",
		// 			"163": "Buscape",
		// 			"164": "Zoom",
		// 			"168": "Melhores Avaliados",
		// 			"170": "Facebook Catalogo",
		// 			"171": "Chlorella especial",
		// 			"174": "Black Friday Chlorellas"
		// 		},
		// 		"searchableClusters": {
		// 			"136": "Promo Relampago"
		// 		},
		// 		"categories": [
		// 			"/Super alimentos e digestão/Super alimentos naturais verdes/Chlorella/",
		// 			"/Super alimentos e digestão/Super alimentos naturais verdes/",
		// 			"/Super alimentos e digestão/",
		// 			"/Suplementos para emagrecer/Controladores de apetite naturais/Chorella/",
		// 			"/Suplementos para emagrecer/Controladores de apetite naturais/",
		// 			"/Suplementos para emagrecer/",
		// 			"/Super alimentos e digestão/Detox/",
		// 			"/Super alimentos e digestão/Super alimentos naturais verdes/Clorofila/"
		// 		],
		// 		"categoriesIds": [
		// 			"/715546402/904091387/1587129881/",
		// 			"/715546402/904091387/",
		// 			"/715546402/",
		// 			"/1843463835/655457002/348140705/",
		// 			"/1843463835/655457002/",
		// 			"/1843463835/",
		// 			"/715546402/523554888/",
		// 			"/715546402/904091387/1187776231/"
		// 		],
		// 		"link": "https://lojaprojetoverao.vtexcommercestable.com.br/green-gem---chlorella--1000-comp/p",
		// 		"SELOS": [
		// 			"SEM GLÚTEN",
		// 			"SEM LACTOSE",
		// 			"ZERO AÇÚCAR (DIET)",
		// 			"SEM CORANTES",
		// 			"SEM AROMATIZANTES",
		// 			"SEM CONSERVANTES",
		// 			"NÃO TRANSGÊNICO",
		// 			"NATURAL",
		// 			"CERTIFICADO ORGÂNICO (USDA)",
		// 			"CERTIFICADO ORGÂNICO (JAS)",
		// 			"CERTIFICADO DE QUALIDADE (KOSHER)",
		// 			"CERTIFICADO DE QUALIDADE (GMP TAIWAN)",
		// 			"CERTIFICADO DE QUALIDADE (SGS HACCP)",
		// 			"CERTIFICADO DE QUALIDADE (A00101 TAIWAN)",
		// 			"REGISTRO ANVISA",
		// 			"PRODUTO EM TABLETES",
		// 			"CERTIFICADO HALAL",
		// 			"CERTIFICADO ORGÂNICO JONA MICROALGAS",
		// 			"CERTIFICADO UKAS 2200",
		// 			"CERTIFICADO UKAS 9001",
		// 			"CERTIFICADO DE QUALIDADE (SNQ TAIWAN)",
		// 			"PRODUTO VEGETARIANO",
		// 			"SELO RECOMENDAMOS"
		// 		],
		// 		"Especificações": [
		// 			"SELOS"
		// 		],
		// 		"SEXO": [
		// 			"HOMEM",
		// 			"MULHER"
		// 		],
		// 		"ORGÂNICO": [
		// 			"SIM"
		// 		],
		// 		"FINALIDADE": [
		// 			"FORTALECER A IMUNIDADE"
		// 		],
		// 		"ORIGEM": [
		// 			"IMPORTADO"
		// 		],
		// 		"PREÇO": [
		// 			"DE 100 ATÉ 199"
		// 		],
		// 		"Personal Filtros": [
		// 			"SEXO",
		// 			"ORGÂNICO",
		// 			"FINALIDADE",
		// 			"ORIGEM",
		// 			"PREÇO"
		// 		],
		// 		"MERCADOLIVRE": [
		// 			"Se você busca uma alimentação balanceada, além de fortalecimento do sistema imunológico, a CHLORELLA GREEN GEM® é o alimento para você!<br>Sendo uma alga unicelular de rápida multiplicação, a CHLORELLA é a planta com maior quantidade de clorofila identificada até hoje, sendo por esse motivo de grande capacidade detox e antioxidante, retardando o envelhecimento. Comece então o quanto antes a consumir diariamente o produto e mantenha por mais tempo sua aparência jovial! Não perca tempo! Porque além disso, essa alga é considerada um superalimento por possuir uma grande quantidade de nutrientes e todos os aminoácidos essenciais para o seu corpo, proporcionando inúmeros benefícios que você mal vai acreditar.<br>Estudos acerca do uso da CHLORELLA indicam que ela auxilia em grande medida na diminuição da pressão sanguínea e dos níveis de colesterol do sangue, acelera a regeneração, além de fortalecer todo o sistema imunológico. E, por sua alta capacidade detox e de eliminar a radiação do corpo, a CHLORELLA também tem sido amplamente utilizada no tratamento do câncer para auxiliar na recuperação dos pacientes que passam pela radioterapia. Em comprimidos, o consumo e transporte do seu superalimento CHLORELLA Green Gem ficam bem mais práticos para o seu dia a dia, disponível onde e quando quiser.<br> <br>Benefícios e Diferenciais: <br>•\t- Aumento da imunidade;<br>•\t- Prevenção do envelhecimento precoce das células;<br>•\t- Regulagem do intestino;<br>•\t- Melhora de capacidade de concentração;<br>•\t- Sono mais repousante;<br>•\t- Alívio de depressão e ansiedade;<br>•\t- Melhora nas condições da pele;<br>•\t- Aumento da vitalidade.<br> <br>Informações complementares:<br>Os principais benefícios da Chlorella são: aumentar a energia, regular o intestino, melhorar a capacidade de concentração, estimular e aumentar a resistência e imunidade do organismo, sono mais repousante, aliviar a depressão e a ansiedade, melhorar as condições da pele e aumentar a vitalidade.<br>A Chlorella Pyrenoidosa é uma alga unicelular que contêm um elemento especial: o C.G.F. (Fator de Crescimento Chlorella) - um complexo com nucleotídeo-peptídeo, polissacarídeos e ácidos nucleicos, 10% de RNA e 3% de DNA descoberto por um cientista japonês que permite a Chlorella crescer tão rapidamente, onde cada célula se multiplica em quatro novas células a cada vinte horas. O C.G.F. é responsável por estimular o crescimento, a reparação do material genético das células, fortalecer o sistema imunológico e suprir as células com energia necessária para responder as exigências diárias.<br>Na década de 1950, governantes dos países mais ricos do mundo criaram um projeto de desenvolvimento com o objetivo de produzir um alimento com alto valor nutritivo, entre mil plantas, a Chlorella foi selecionada.<br>O Fator de Crescimento Chlorella estimula a recuperação dos tecidos, protege a integridade das células, melhora a ingestão de nutrientes e regula a produção de energia. Ajuda também na recuperação de materiais genéticos lesados, protege a saúde dando suporte às funções celulares vitais e retarda o processo de envelhecimento.<br>O CGF é o fator na Chlorella que promove esta rápida taxa de reprodução. O Fator de Crescimento Chlorella aparece para aumentar as funções RNA/DNA, responsáveis pela produção de proteínas, enzimas e energia à nível celular, estimulando a reparação dos tecidos e protegendo as células contra substâncias tóxicas.<br>Ingredientes: <br>Chlorella Pyrenoidosa. NÃO CONTÉM GLÚTEN<br> <br>Modo de Uso:<br>O consumo diário pode variar entre 10 a 20 comprimidos (2,5g à 5g) e costuma-se sentir seus efeitos positivos em cerca de 60 dias. Os comprimidos devem ser ingeridos com água, podendo ser consumidos pela manhã e à noite."
		// 		],
		// 		"MEUS NUTRIENTES": [
		// 			"<div class=\"nutrientes\"> <br><br><br>    <div class=\"informacao\"> <br><br><br>        <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"overflow:hidden;display:block;border-collapse:collapse;\"> <br><br><br>            <tr> <br><br><br>                <td><h3>Informações Nutricionais</h3></td> <br><br><br>            </tr> <br><br><br>            <tr> <br><br><br>                <td><p>Porção de 5g (20 comprimidos)</p></td> <br><br><br>            </tr> <br><br><br>            <tr> <br><br><br>                <td><div class=\"quantidade\">Quantidade por porção</div><div class=\"vd\">%V.D*</div></td> <br><br><br>            </tr> <br><br><br>            <tr> <br><br><br>             <td> <br><br><br>                 <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"overflow:hidden;display:block;border-collapse:collapse;\"> <br><br><br>                        <tr> <br><br><br>                            <td class=\"first\"><p>Valor energético</p></td> <br><br><br>                            <td><p> 18Kcal=75kJ</p></td> <br><br><br>                            <td class=\"last\"><p>1%</p></td> <br><br><br>                        </tr> <br><br><br>                        <br><br><br>                        <tr> <br><br><br>                            <td class=\"first\"><p>Carboidratos</p></td> <br><br><br>                            <td><p>0,6g</p></td> <br><br><br>                            <td class=\"last\"><p>0%</p></td> <br><br><br>                        </tr> <br><br><br>                    <tr> <br><br><br>                            <td class=\"first\"><p>Proteínas</p></td> <br><br><br>                            <td><p>3g</p></td> <br><br><br>                            <td class=\"last\"><p>4%</p></td> <br><br><br>                        </tr> <br><br><br><tr> <br><br><br>                            <td class=\"first\"><p> Gorduras Totais </p></td> <br><br><br>                            <td><p>0g</p></td> <br><br><br>                            <td class=\"last\"><p>0%</p></td> <br><br><br>                        </tr> <br><br><br><tr> <br><br><br>                            <td class=\"first\"><p>Ferro</p></td> <br><br><br>                            <td><p>5mg</p></td> <br><br><br>                            <td class=\"last\"><p>55%</p></td> <br><br><br>                        </tr> <br><br><br><tr> <br><br><br>                            <td class=\"first\"><p>Sódio</p></td> <br><br><br>                            <td><p>0mg</p></td> <br><br><br>                            <td class=\"last\"><p>0%</p></td> <br><br><br>                        </tr> <br><br><br>                    </table> <br><br><br>                </td> <br><br><br>            </tr> <br><br><br>  </table> <br><br><br>        <p> (%VD) Valores diários de referência com base em uma dieta de 2000 Kcal ou 8400kJ. </p><p>Seus valores diários podem ser maiores ou menores dependendo de suas necessidades energéticas.</p> <p>Não contém quantidade significativa de gorduras saturadas,gorduras trans.fibra alimentar e sódio. </p><br><br><br>    </div> <br><br><br><br><br>    <div class=\"nota\"> <br><br><br>        <h3>Tome nota:</h3> <br><br><br>        <div class=\"fundo\"> <br><br><br>            <div> <br><br><br>                <h3>Proteínas</h3> <br><br><br>                <p>3g</p> <br><br><br>            </div> <br><br><br>            <div> <br><br><br>                <h3>Ferro</h3> <br><br><br>                <p>5mg</p> <br><br><br>            </div> <br><br><br>            <div> <br><br><br>                <h3>Sódio</h3> <br><br><br>                <p>0mg</p> <br><br><br>            </div> <br><br><br>            <div class=\"last\"> <br><br><br>                <h3>Carboidratos</h3> <br><br><br>                <p>18</p> <br><br><br>                <p>Kcal</p> <br><br><br>            </div> <br><br><br>        </div> <br><br><br>        <p><strong>Ingredientes: </Strong> Chlorella Pyrenoidosa. NÃO CONTÉM GLÚTEN.</p> <br><br><br>    </div> <br><br><br>     <br><br><br>    <div class=\"advertencias\"> <br><br><br>        <h3>Advertências:</h3> <br><br><br>        <p>Manter longe do alcance das crianças. Ministério da Saúde adverte: Não existem evidências científicas comprovadas de que este alimento previna, trate ou cure doenças.</p> <br><br><br>    </div> <br><br><br>     <br><br><br>    <div class=\"qntdos\"> <br><br><br>        <div> <br><br><br>            <h3>Quantidade</h3> <br><br><br>            <h3 class=\"last\">Doses</h3> <br><br><br>        </div> <br><br><br>        <div> <br><br><br>            <p>1000 Comprimidos</p> <br><br><br>            <p class=\"last\">125</p> <br><br><br>        </div> <br><br><br>    </div> <br><br><br>     <br><br><br>    <div class=\"instrucoes\"> <br><br><br>        <h3>Instruções de uso:</h3> <br><br><br>        <p>O consumo diário pode variar entre 10 a 20 comprimidos (2,5g à 5g) e costuma-se sentir seus efeitos positivos em cerca de 60 dias. Os comprimidos devem ser ingeridos com água, podendo ser consumidos pela manhã e à noite.</p>     <br><br><br></div> <br><br><br><div class=\"nutrientes2\"><br><br><br><table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"overflow:hidden;display:block;border-collapse:collapse;\"><br><br><br>    <tr><br><br><br>        <td valign=\"top\"><br><br><br>            <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" class=\"left\" style=\"overflow:hidden;display:block;border-collapse:collapse;\"><br><br><br>                <tr><td colspan=\"2\"><div class=\"fundo1\"></div></td></tr><br><br><br>                    <tr><td><p>Proteínas</p></td><td><p>60-65%</p></td></tr><br><br><br>                    <tr><td><p>Carboidratos</p></td><td><p>12-20%</p></td></tr><br><br><br>                    <tr><td><p>Gordura</p></td><td><p>10-15%</p></td></tr><br><br><br>                    <tr><td><p>Fibras</p></td><td><p>7,5%</p></td></tr><br><br><br>                    <tr><td><p>Minerais</p></td><td><p>7,2%</p></td></tr><br><br><br>                    <tr><td><p>Calorias</p></td><td><p>360Kcal(1512kJ)</p></td></tr><br><br><br>                    <tr><td><p>C.G.F</p></td><td><p>15%</p></td></tr><br><br><br>                </table><br><br><br>            </td><br><br><br>            <td valign=\"top\"><br><br><br>            <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" class=\"middle\" style=\"overflow:hidden;display:block;border-collapse:collapse;\"><br><br><br>                <tr><td colspan=\"2\"><div class=\"fundo2\">Vitaminas e Minerais (por 100g)</div></td></tr><br><br><br>                    <tr><td><p>Caroteno</p></td><td><p>106mg</p></td></tr><br><br><br>                    <tr><td><p>B caroteno</p></td><td><p>95,9mg</p></td></tr><br><br><br>                    <tr><td><p>Vitamina B1</p></td><td><p>1,8mg</p></td></tr><br><br><br>                    <tr><td><p>Vitamina B2</p></td><td><p>5,0mg</p></td></tr><br><br><br>                    <tr><td><p>Vitamina B5</p></td><td><p>4,6mg</p></td></tr><br><br><br>                    <tr><td><p>Vitamina B6</p></td><td><p>2,0mg</p></td></tr><br><br><br>                    <tr><td><p>Vitamina B12</p></td><td><p>830/mg</p></td></tr><br><br><br>                    <tr><td class=\"azul\"><p>Vitamina C</p></td><td class=\"azul\"><p>59,5mg</p></td></tr><br><br><br>                    <tr><td><p>Vitamina E</p></td><td><p>6,7mg</p></td></tr><br><br><br>                    <tr><td><p>Biotina</p></td><td><p>264mg</p></td></tr><br><br><br>                    <tr><td><p>Ácido Fólico</p></td><td><p>1,3mg</p></td></tr><br><br><br>                    <tr><td><p>Inositol</p></td><td><p>133mg</p></td></tr><br><br><br>                    <tr><td><p>Niacina</p></td><td><p>29,2mg</p></td></tr><br><br><br>                    <tr><td><p>Clorofila</p></td><td><p>2890mg</p></td></tr><br><br><br>                    <tr><td><p>Luteína</p></td><td><p>263mg</p></td></tr><br><br><br>                    <tr><td><p>Cálcio</p></td><td><p>315mg</p></td></tr><br><br><br>                    <tr><td><p>Ferro</p></td><td><p>153mg</p></td></tr><br><br><br>                    <tr><td><p>Cobre</p></td><td><p>3,1mg</p></td></tr><br><br><br>                    <tr><td><p>Fósforo</p></td><td><p>1,63mg</p></td></tr><br><br><br>                    <tr><td class=\"azul\"><p>Potássio</p></td><td class=\"azul\"><p>900mg</p></td></tr><br><br><br>                    <tr><td><p>Magnésio</p></td><td><p>348mg</p></td></tr><br><br><br>                    <tr><td><p>Zinco</p></td><td><p>7,6mg</p></td></tr><br><br><br>                    <tr><td><p>Selênio</p></td><td><p>8mg</p></td></tr>                    <br><br><br>                </table><br><br><br>            </td><br><br><br>            <td valign=\"top\"><br><br><br>            <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" class=\"right\" style=\"overflow:hidden;display:block;border-collapse:collapse;\"><br><br><br>                <tr><td colspan=\"2\"><div class=\"fundo1\">Aminoácidos Essenciais</div></td></tr><br><br><br>                    <tr><td><p>Arginina</p></td><td><p>3,55%</p></td></tr><br><br><br>                    <tr><td><p>Fenilalania</p></td><td><p>2,90%</p></td></tr><br><br><br>                    <tr><td><p>Histidina</p></td><td><p>1,25%</p></td></tr><br><br><br>                    <tr><td><p>Isoleucina</p></td><td><p>2,38%</p></td></tr><br><br><br>                    <tr><td class=\"azul\"><p>Leucina</p></td><td class=\"azul\"><p>5,05%</p></td></tr><br><br><br>                    <tr><td><p>Lisina</p></td><td><p>3,46%</p></td></tr><br><br><br>                    <tr><td><p>Melionina</p></td><td><p>1,49%</p></td></tr><br><br><br>                    <tr><td><p>Treonina</p></td><td><p>2,90%</p></td></tr><br><br><br>                    <tr><td><p>Triptofan</p></td><td><p>1,18%</p></td></tr><br><br><br>                    <tr><td colspan=\"2\"><div class=\"fundo1\">Aminoácidos Não Essenciais</div></td></tr><br><br><br>                    <tr><td><p>Alanina</p></td><td><p>4,80%</p></td></tr><br><br><br>                    <tr><td><p>Ácido Aspártico</p></td><td><p>5,35%</p></td></tr><br><br><br>                    <tr><td><p>Cistina</p></td><td><p>0,75%</p></td></tr><br><br><br>                    <tr><td class=\"azul\"><p>Ácido Glutâmico</p></td><td class=\"azul\"><p>6,71%</p></td></tr><br><br><br>                    <tr><td><p>Glicina</p></td><td><p>3,58%</p></td></tr><br><br><br>                    <tr><td><p>Prolina</p></td><td><p>2,87%</p></td></tr><br><br><br>                    <tr><td><p>Serina</p></td><td><p>2,42%</p></td></tr><br><br><br>                    <tr><td><p>Tirosina</p></td><td><p>2,16%</p></td></tr><br><br><br>                    <tr><td><p>Valina</p></td><td><p>3,60%</p></td></tr><br><br><br>                </table><br><br><br>            </td><br><br><br>        </tr><br><br><br>        <tr><br><br><br>        <td colspan=\"3\"><br><br><br>            <div class=\"aviso\">NÃO CONTÉM GLÚTEN, NÃO CONTÉM AÇÚCAR, SEM NENHUM ADITIVO ARTIFICIAL</div><br><br><br>            </td><br><br><br>        </tr><br><br><br>        <tr><br><br><br>        <td colspan=\"3\"><br><br><br>            <div class=\"aviso aviso2\"><a href=\"/arquivos/certificado_laboratorio-chlorella.jpg\" target=\"_blank\">Certificado do Teste de Laboratório</a></div><br><br><br>            </td><br><br><br>        </tr><br><br><br>    </table><br><br><br></div>"
		// 		],
		// 		"O QUE FALAM DE MIM?": [
		// 			"<h3>O que falam de mim?</h3>"
		// 		],
		// 		"ONDE NASCI": [
		// 			"<p>A TAIWAN CHLORELLA MANUFACTURING cultiva a Chlorella Pyrenoidosa desde 1964, atingindo 70% do mercado global na comercializa&ccedil;&atilde;o do produto e investe continuamente em pesquisas, t&eacute;cnicas de produ&ccedil;&atilde;o e atualiza&ccedil;&otilde;es no seu parque produtivo, tornando-se uma empresa de excel&ecirc;ncia respons&aacute;vel pelo bem-estar dos muitos apreciadores da Chlorella Green Gem.</p><br><p>A empresa de acordo com a Revista Common Heatlh Magazine ganhou por quatro anos consecutivos, de 2010 a 2013 como a melhor marca, muito &agrave; frente das outras marcas do mesmo ramo!</p><br><p>Al&eacute;m da aprova&ccedil;&atilde;o dos consumidores, como toda a produ&ccedil;&atilde;o da Chlorella GREEN GEM&reg; &eacute; feita de forma 100% natural, ela possui certifica&ccedil;&otilde;es internacionais muito importantes no setor de alimentos que garantem que seus produtos s&atilde;o livres de aditivos qu&iacute;micos. Os certificados que possui s&atilde;o: GMP &ndash; ISO9001 &ndash; ISO22000 - HACCP KSA -KOSHER dentre outros que qualificam a Chlorella Green Gem como um alimento de confian&ccedil;a.</p><br><p>E conforme legisla&ccedil;&atilde;o estabelecida, o Controle de Qualidade &eacute; muito rigoroso e envolve os seguintes itens: Exame Bacteriano, An&aacute;lise Nutricional, Inspe&ccedil;&atilde;o de Cor, Teste de Pureza, Conte&uacute;do de Clorofila e Verifica&ccedil;&atilde;o de Volume. Esses processos fazem com que somente a Chlorella totalmente pura possa ser compactada em comprimidos.</p>"
		// 		],
		// 		"CÓDIGO ANVISA": [
		// 			"6.2184.0003.001-0"
		// 		],
		// 		"VÍDEO": [
		// 			"<iframe width=\"370\" height=\"370\" src=\"//www.youtube.com/embed/wI8EUCaKsZY\" frameborder=\"0\" allowfullscreen></iframe><br><br>"
		// 		],
		// 		"Descrição": [
		// 			"MERCADOLIVRE",
		// 			"MEUS NUTRIENTES",
		// 			"O QUE FALAM DE MIM?",
		// 			"ONDE NASCI",
		// 			"CÓDIGO ANVISA",
		// 			"VÍDEO"
		// 		],
		// 		"OBJETIVOS": [
		// 			"FORTALECER A IMUNIDADE"
		// 		],
		// 		"FORMA": [
		// 			"COMPRIMIDOS"
		// 		],
		// 		"PRODUTOS ORGÂNICOS": [
		// 			"SIM"
		// 		],
		// 		"PRODUTOS VEGETARIANOS": [
		// 			"SIM"
		// 		],
		// 		"LIVRE DE GLÚTEN": [
		// 			"SIM"
		// 		],
		// 		"SEM LACTOSE": [
		// 			"SIM"
		// 		],
		// 		"ZERO AÇUCAR": [
		// 			"SIM"
		// 		],
		// 		"NATURAL": [
		// 			"SIM"
		// 		],
		// 		"Filtros Departamentos/Categorias": [
		// 			"OBJETIVOS",
		// 			"FORMA",
		// 			"PRODUTOS ORGÂNICOS",
		// 			"PRODUTOS VEGETARIANOS",
		// 			"LIVRE DE GLÚTEN",
		// 			"SEM LACTOSE",
		// 			"ZERO AÇUCAR",
		// 			"NATURAL"
		// 		],
		// 		"allSpecifications": [
		// 			"SELOS",
		// 			"SEXO",
		// 			"ORGÂNICO",
		// 			"FINALIDADE",
		// 			"ORIGEM",
		// 			"PREÇO",
		// 			"MERCADOLIVRE",
		// 			"MEUS NUTRIENTES",
		// 			"O QUE FALAM DE MIM?",
		// 			"ONDE NASCI",
		// 			"CÓDIGO ANVISA",
		// 			"VÍDEO",
		// 			"OBJETIVOS",
		// 			"FORMA",
		// 			"PRODUTOS ORGÂNICOS",
		// 			"PRODUTOS VEGETARIANOS",
		// 			"LIVRE DE GLÚTEN",
		// 			"SEM LACTOSE",
		// 			"ZERO AÇUCAR",
		// 			"NATURAL"
		// 		],
		// 		"description": "<p>Se voc&ecirc; busca uma alimenta&ccedil;&atilde;o balanceada, al&eacute;m de fortalecimento do sistema imunol&oacute;gico, a <strong>CHLORELLA GREEN GEM&reg;</strong> &eacute; o alimento para voc&ecirc;! </p><br><p>Sendo uma alga unicelular de r&aacute;pida multiplica&ccedil;&atilde;o, a <strong>CHLORELLA</strong> &eacute; a planta com maior quantidade de clorofila identificada at&eacute; hoje, sendo por esse motivo de grande capacidade detox e antioxidante, retardando o envelhecimento. Comece ent&atilde;o o quanto antes a consumir diariamente o produto e mantenha por mais tempo sua apar&ecirc;ncia jovial! N&atilde;o perca tempo! Porque al&eacute;m disso, essa alga &eacute; considerada um superalimento por possuir uma grande quantidade de nutrientes e todos os amino&aacute;cidos essenciais para o seu corpo, proporcionando in&uacute;meros benef&iacute;cios que voc&ecirc; mal vai acreditar. </p><br><p>Estudos acerca do uso da <strong>CHLORELLA</strong> indicam que ela auxilia em grande medida na diminui&ccedil;&atilde;o da press&atilde;o sangu&iacute;nea e dos n&iacute;veis de colesterol do sangue, acelera a regenera&ccedil;&atilde;o, al&eacute;m de fortalecer todo o sistema imunol&oacute;gico. E, por sua alta capacidade detox e de eliminar a radia&ccedil;&atilde;o do corpo, a<strong> CHLORELLA </strong>tamb&eacute;m tem sido amplamente utilizada no tratamento do c&acirc;ncer para auxiliar na recupera&ccedil;&atilde;o dos pacientes que passam pela radioterapia. Em comprimidos, o consumo e transporte do seu superalimento <strong>CHLORELLA Green Gem</strong> ficam bem mais pr&aacute;ticos para o seu dia a dia, dispon&iacute;vel onde e quando quiser.<br></p><br><p>&nbsp;</p><br><p><strong>Benef&iacute;cios e Diferenciais:<br></strong></p><br><ul><br>  <li>- Aumento da imunidade;<br>  </li><br>  <li>- Preven&ccedil;&atilde;o do envelhecimento precoce das c&eacute;lulas;<br>  </li><br>  <li>- Regulagem do intestino;<br>  </li><br>  <li>- Melhora de capacidade de concentra&ccedil;&atilde;o;<br>  </li><br>  <li>- Sono mais repousante;<br>  </li><br>  <li>- Al&iacute;vio de depress&atilde;o e ansiedade;<br>  </li><br>  <li>- Melhora nas condi&ccedil;&otilde;es da pele;<br>  </li><br>  <li>- Aumento da vitalidade.  </li><br></ul><br><p>&nbsp;</p><br><p><strong>Informações complementares:</strong></p><br><p>Os principais benefícios da Chlorella são: aumentar a energia, regular o intestino, melhorar a capacidade de concentração, estimular e aumentar a resistência e imunidade do organismo, sono mais repousante, aliviar a depressão e a ansiedade, melhorar as condições da pele e aumentar a vitalidade.</p><br><p>A Chlorella Pyrenoidosa é uma alga unicelular que contêm um elemento especial: o C.G.F. (Fator de Crescimento Chlorella) - um complexo com nucleotídeo-peptídeo, polissacarídeos e ácidos nucleicos, 10% de RNA e 3% de DNA descoberto por um cientista japonês que permite a Chlorella crescer tão rapidamente, onde cada célula se multiplica em quatro novas células a cada vinte horas. O C.G.F. é responsável por estimular o crescimento, a reparação do material genético das células, fortalecer o sistema imunológico e suprir as células com energia necessária para responder as exigências diárias.</p><br><p>Na década de 1950, governantes dos países mais ricos do mundo criaram um projeto de desenvolvimento com o objetivo de produzir um alimento com alto valor nutritivo, entre mil plantas, a Chlorella foi selecionada.</p><br><p>O Fator de Crescimento Chlorella estimula a recuperação dos tecidos, protege a integridade das células, melhora a ingestão de nutrientes e regula a produção de energia. Ajuda também na recuperação de materiais genéticos lesados, protege a saúde dando suporte às funções celulares vitais e retarda o processo de envelhecimento.</p><br><p>O CGF é o fator na Chlorella que promove esta rápida taxa de reprodução. O Fator de Crescimento Chlorella aparece para aumentar as funções RNA/DNA, responsáveis pela produção de proteínas, enzimas e energia à nível celular, estimulando a reparação dos tecidos e protegendo as células contra substâncias tóxicas.</p><br><p><strong>Ingredientes: </strong></p><br><p>Chlorella Pyrenoidosa. N&Atilde;O CONT&Eacute;M GL&Uacute;TEN<br></p><br><p>&nbsp;</p><br><p><strong>Modo de Uso:</strong> </p><br><p>O consumo di&aacute;rio pode variar entre 10 a 20 comprimidos (2,5g &agrave; 5g) e costuma-se sentir seus efeitos positivos em cerca de 60 dias. Os comprimidos devem ser ingeridos com &aacute;gua, podendo ser consumidos pela manh&atilde; e &agrave; noite.<br></p><br><p>Para crianças com idade a partir de 6 meses, a dose padrão é de 50mg/kg de peso/dia. (ex. 12kg x 50mg = 600 = 2,4 comprimidos de chlorella)</p><br><p>&nbsp;</p><br><br><br><img src=\"http://lojaprojetoverao.vteximg.com.br/arquivos/green-gem-geral-01.jpg\"><br><br><br><a href=\"https://www.lojaprojetoverao.com.br/kit-2x-chlorella-green-gem-250mg-360-227901/p\"><img src=\"http://lojaprojetoverao.vteximg.com.br/arquivos/green-gem-kits-banner-2x-360-comprimidos.jpg\"></a><a href=\"https://www.lojaprojetoverao.com.br/kit-3x-chlorella---green-gem--250mg--1000-comprimidos/p\"><img src=\"http://lojaprojetoverao.vteximg.com.br/arquivos/green-gem-kits-3x-1000-comprimidos.jpg\"></a>",
		// 		"items": [
		// 			{
		// 				"itemId": "127701",
		// 				"name": "Chlorella Pura 1000 comprimidos - Green Gem",
		// 				"nameComplete": "Chlorella Pura 1000 comprimidos - Green Gem",
		// 				"complementName": "Leve para casa 1000 comprimidos do superalimento CHLORELLA GREEN GEM®! Por meio do consumo diário conquiste um sistema imunológico forte, disposição e nutrição balanceada.",
		// 				"ean": "4711245100290",
		// 				"referenceId": [
		// 					{
		// 						"Key": "RefId",
		// 						"Value": "1833_0_0_U"
		// 					}
		// 				],
		// 				"measurementUnit": "un",
		// 				"unitMultiplier": 1.0000,
		// 				"modalType": null,
		// 				"isKit": false,
		// 				"images": [
		// 					{
		// 						"imageId": "163330",
		// 						"imageLabel": "",
		// 						"imageTag": "<img src=\"~/arquivos/ids/163330-#width#-#height#/green-gem-kit-paversul-chlorella-1000-comprimidos-250mg-loja-projeto-verao.jpg?v=636633750111800000\" width=\"#width#\" height=\"#height#\" alt=\"green-gem-kit-paversul-chlorella-1000-comprimidos-250mg-loja-projeto-verao\" id=\"\" />",
		// 						"imageUrl": "http://lojaprojetoverao.vteximg.com.br/arquivos/ids/163330/green-gem-kit-paversul-chlorella-1000-comprimidos-250mg-loja-projeto-verao.jpg?v=636633750111800000",
		// 						"imageText": "green-gem-kit-paversul-chlorella-1000-comprimidos-250mg-loja-projeto-verao"
		// 					},
		// 					{
		// 						"imageId": "160899",
		// 						"imageLabel": "",
		// 						"imageTag": "<img src=\"~/arquivos/ids/160899-#width#-#height#/taiwan-chlorella-chlorella-green-gem-1000-comprimidos-L-loja-projeto-verao.jpg?v=636375566034000000\" width=\"#width#\" height=\"#height#\" alt=\"taiwan-chlorella-chlorella-green-gem-1000-comprimidos-L-loja-projeto-verao\" id=\"\" />",
		// 						"imageUrl": "http://lojaprojetoverao.vteximg.com.br/arquivos/ids/160899/taiwan-chlorella-chlorella-green-gem-1000-comprimidos-L-loja-projeto-verao.jpg?v=636375566034000000",
		// 						"imageText": "taiwan-chlorella-chlorella-green-gem-1000-comprimidos-L-loja-projeto-verao"
		// 					},
		// 					{
		// 						"imageId": "160900",
		// 						"imageLabel": "",
		// 						"imageTag": "<img src=\"~/arquivos/ids/160900-#width#-#height#/taiwan-chlorella-chlorella-green-gem-1000-comprimidos-D-loja-projeto-verao.jpg?v=636375566204930000\" width=\"#width#\" height=\"#height#\" alt=\"taiwan-chlorella-chlorella-green-gem-1000-comprimidos-D-loja-projeto-verao\" id=\"\" />",
		// 						"imageUrl": "http://lojaprojetoverao.vteximg.com.br/arquivos/ids/160900/taiwan-chlorella-chlorella-green-gem-1000-comprimidos-D-loja-projeto-verao.jpg?v=636375566204930000",
		// 						"imageText": "taiwan-chlorella-chlorella-green-gem-1000-comprimidos-D-loja-projeto-verao"
		// 					},
		// 					{
		// 						"imageId": "162950",
		// 						"imageLabel": "",
		// 						"imageTag": "<img src=\"~/arquivos/ids/162950-#width#-#height#/green-gem-chlorella-1000-comprimidos-250mg-01.jpg?v=636586271608770000\" width=\"#width#\" height=\"#height#\" alt=\"green-gem-chlorella-1000-comprimidos-250mg-01\" id=\"\" />",
		// 						"imageUrl": "http://lojaprojetoverao.vteximg.com.br/arquivos/ids/162950/green-gem-chlorella-1000-comprimidos-250mg-01.jpg?v=636586271608770000",
		// 						"imageText": "green-gem-chlorella-1000-comprimidos-250mg-01"
		// 					}
		// 				],
		// 				"sellers": [
		// 					{
		// 						"sellerId": "1",
		// 						"sellerName": "Projeto Verão",
		// 						"addToCartLink": "https://lojaprojetoverao.vtexcommercestable.com.br/checkout/cart/add?sku=127701&qty=1&seller=1&sc=1&price=20990&cv=5c810329fcfbf6e537fe730c5919dc46_&sc=1",
		// 						"sellerDefault": true,
		// 						"commertialOffer": {
		// 							"DeliverySlaSamplesPerRegion": {
		// 								"0": {
		// 									"DeliverySlaPerTypes": [],
		// 									"Region": null
		// 								}
		// 							},
		// 							"Installments": [
		// 								{
		// 									"Value": 209.9,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 209.9,
		// 									"NumberOfInstallments": 1,
		// 									"PaymentSystemName": "American Express",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "American Express à vista"
		// 								},
		// 								{
		// 									"Value": 104.95,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 209.9,
		// 									"NumberOfInstallments": 2,
		// 									"PaymentSystemName": "American Express",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "American Express 2 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 69.96,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 209.9,
		// 									"NumberOfInstallments": 3,
		// 									"PaymentSystemName": "American Express",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "American Express 3 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 52.47,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 209.9,
		// 									"NumberOfInstallments": 4,
		// 									"PaymentSystemName": "American Express",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "American Express 4 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 41.98,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 209.9,
		// 									"NumberOfInstallments": 5,
		// 									"PaymentSystemName": "American Express",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "American Express 5 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 34.98,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 209.9,
		// 									"NumberOfInstallments": 6,
		// 									"PaymentSystemName": "American Express",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "American Express 6 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 29.98,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 209.9,
		// 									"NumberOfInstallments": 7,
		// 									"PaymentSystemName": "American Express",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "American Express 7 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 26.23,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 209.9,
		// 									"NumberOfInstallments": 8,
		// 									"PaymentSystemName": "American Express",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "American Express 8 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 209.9,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 209.9,
		// 									"NumberOfInstallments": 1,
		// 									"PaymentSystemName": "Visa",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Visa à vista"
		// 								},
		// 								{
		// 									"Value": 104.95,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 209.9,
		// 									"NumberOfInstallments": 2,
		// 									"PaymentSystemName": "Visa",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Visa 2 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 69.96,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 209.9,
		// 									"NumberOfInstallments": 3,
		// 									"PaymentSystemName": "Visa",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Visa 3 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 52.47,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 209.9,
		// 									"NumberOfInstallments": 4,
		// 									"PaymentSystemName": "Visa",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Visa 4 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 41.98,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 209.9,
		// 									"NumberOfInstallments": 5,
		// 									"PaymentSystemName": "Visa",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Visa 5 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 34.98,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 209.9,
		// 									"NumberOfInstallments": 6,
		// 									"PaymentSystemName": "Visa",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Visa 6 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 29.98,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 209.9,
		// 									"NumberOfInstallments": 7,
		// 									"PaymentSystemName": "Visa",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Visa 7 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 26.23,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 209.9,
		// 									"NumberOfInstallments": 8,
		// 									"PaymentSystemName": "Visa",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Visa 8 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 209.9,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 209.9,
		// 									"NumberOfInstallments": 1,
		// 									"PaymentSystemName": "Diners",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Diners à vista"
		// 								},
		// 								{
		// 									"Value": 104.95,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 209.9,
		// 									"NumberOfInstallments": 2,
		// 									"PaymentSystemName": "Diners",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Diners 2 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 69.96,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 209.9,
		// 									"NumberOfInstallments": 3,
		// 									"PaymentSystemName": "Diners",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Diners 3 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 52.47,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 209.9,
		// 									"NumberOfInstallments": 4,
		// 									"PaymentSystemName": "Diners",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Diners 4 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 41.98,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 209.9,
		// 									"NumberOfInstallments": 5,
		// 									"PaymentSystemName": "Diners",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Diners 5 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 34.98,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 209.9,
		// 									"NumberOfInstallments": 6,
		// 									"PaymentSystemName": "Diners",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Diners 6 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 29.98,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 209.9,
		// 									"NumberOfInstallments": 7,
		// 									"PaymentSystemName": "Diners",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Diners 7 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 26.23,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 209.9,
		// 									"NumberOfInstallments": 8,
		// 									"PaymentSystemName": "Diners",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Diners 8 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 209.9,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 209.9,
		// 									"NumberOfInstallments": 1,
		// 									"PaymentSystemName": "Mastercard",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Mastercard à vista"
		// 								},
		// 								{
		// 									"Value": 104.95,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 209.9,
		// 									"NumberOfInstallments": 2,
		// 									"PaymentSystemName": "Mastercard",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Mastercard 2 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 69.96,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 209.9,
		// 									"NumberOfInstallments": 3,
		// 									"PaymentSystemName": "Mastercard",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Mastercard 3 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 52.47,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 209.9,
		// 									"NumberOfInstallments": 4,
		// 									"PaymentSystemName": "Mastercard",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Mastercard 4 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 41.98,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 209.9,
		// 									"NumberOfInstallments": 5,
		// 									"PaymentSystemName": "Mastercard",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Mastercard 5 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 34.98,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 209.9,
		// 									"NumberOfInstallments": 6,
		// 									"PaymentSystemName": "Mastercard",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Mastercard 6 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 29.98,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 209.9,
		// 									"NumberOfInstallments": 7,
		// 									"PaymentSystemName": "Mastercard",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Mastercard 7 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 26.23,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 209.9,
		// 									"NumberOfInstallments": 8,
		// 									"PaymentSystemName": "Mastercard",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Mastercard 8 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 209.9,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 209.9,
		// 									"NumberOfInstallments": 1,
		// 									"PaymentSystemName": "Hipercard",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Hipercard à vista"
		// 								},
		// 								{
		// 									"Value": 104.95,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 209.9,
		// 									"NumberOfInstallments": 2,
		// 									"PaymentSystemName": "Hipercard",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Hipercard 2 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 69.96,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 209.9,
		// 									"NumberOfInstallments": 3,
		// 									"PaymentSystemName": "Hipercard",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Hipercard 3 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 52.47,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 209.9,
		// 									"NumberOfInstallments": 4,
		// 									"PaymentSystemName": "Hipercard",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Hipercard 4 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 41.98,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 209.9,
		// 									"NumberOfInstallments": 5,
		// 									"PaymentSystemName": "Hipercard",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Hipercard 5 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 34.98,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 209.9,
		// 									"NumberOfInstallments": 6,
		// 									"PaymentSystemName": "Hipercard",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Hipercard 6 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 29.98,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 209.9,
		// 									"NumberOfInstallments": 7,
		// 									"PaymentSystemName": "Hipercard",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Hipercard 7 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 26.23,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 209.9,
		// 									"NumberOfInstallments": 8,
		// 									"PaymentSystemName": "Hipercard",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Hipercard 8 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 209.9,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 209.9,
		// 									"NumberOfInstallments": 1,
		// 									"PaymentSystemName": "Elo",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Elo à vista"
		// 								},
		// 								{
		// 									"Value": 104.95,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 209.9,
		// 									"NumberOfInstallments": 2,
		// 									"PaymentSystemName": "Elo",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Elo 2 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 69.96,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 209.9,
		// 									"NumberOfInstallments": 3,
		// 									"PaymentSystemName": "Elo",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Elo 3 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 52.47,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 209.9,
		// 									"NumberOfInstallments": 4,
		// 									"PaymentSystemName": "Elo",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Elo 4 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 41.98,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 209.9,
		// 									"NumberOfInstallments": 5,
		// 									"PaymentSystemName": "Elo",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Elo 5 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 34.98,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 209.9,
		// 									"NumberOfInstallments": 6,
		// 									"PaymentSystemName": "Elo",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Elo 6 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 29.98,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 209.9,
		// 									"NumberOfInstallments": 7,
		// 									"PaymentSystemName": "Elo",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Elo 7 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 26.23,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 209.9,
		// 									"NumberOfInstallments": 8,
		// 									"PaymentSystemName": "Elo",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Elo 8 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 209.9,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 209.9,
		// 									"NumberOfInstallments": 1,
		// 									"PaymentSystemName": "Vale",
		// 									"PaymentSystemGroupName": "giftCardPaymentGroup",
		// 									"Name": "Vale à vista"
		// 								},
		// 								{
		// 									"Value": 209.9,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 209.9,
		// 									"NumberOfInstallments": 1,
		// 									"PaymentSystemName": "BOLBRADESCO",
		// 									"PaymentSystemGroupName": "bankInvoicePaymentGroup",
		// 									"Name": "BOLBRADESCO à vista"
		// 								}
		// 							],
		// 							"DiscountHighLight": [
		// 								{
		// 									"<Name>k__BackingField": "Brinde Chlorella (250mg) 10 Comprimidos - Green Gem"
		// 								}
		// 							],
		// 							"GiftSkuIds": [
		// 								"582730225"
		// 							],
		// 							"Teasers": [],
		// 							"BuyTogether": [
		// 								"2000167",
		// 								"200701"
		// 							],
		// 							"Price": 209.9,
		// 							"ListPrice": 230.0,
		// 							"PriceWithoutDiscount": 209.9,
		// 							"RewardValue": 0.0,
		// 							"PriceValidUntil": "2019-06-30T03:00:00Z",
		// 							"AvailableQuantity": 105,
		// 							"Tax": 0.0,
		// 							"DeliverySlaSamples": [
		// 								{
		// 									"DeliverySlaPerTypes": [],
		// 									"Region": null
		// 								}
		// 							],
		// 							"GetInfoErrorMessage": null,
		// 							"CacheVersionUsedToCallCheckout": "5c810329fcfbf6e537fe730c5919dc46_"
		// 						}
		// 					}
		// 				],
		// 				"Videos": []
		// 			}
		// 		]
		// 	},
		// 	{
		// 		"productId": "183901",
		// 		"productName": "Chlorella Kenbi 100% Pura 1200 Comprimidos",
		// 		"brand": "Kenbi",
		// 		"linkText": "chlorella-kenbi---1200-comprimidos",
		// 		"productReference": "183901",
		// 		"categoryId": "1843463835",
		// 		"productTitle": "Chlorella Kenbi 100% Pura - 1200 Comprimidos",
		// 		"metaTagDescription": "A Chlorella nutre e ajuda a desintoxicar o organismo e consequentemente ajuda aumentar a resistencia imunologica.",
		// 		"clusterHighlights": {
		// 			"136": "Promo Relampago",
		// 			"158": "Frete Grátis - Produtos"
		// 		},
		// 		"productClusters": {
		// 			"136": "Promo Relampago",
		// 			"140": "Loja",
		// 			"141": "Comparadores",
		// 			"158": "Frete Grátis - Produtos",
		// 			"163": "Buscape",
		// 			"164": "Zoom",
		// 			"168": "Melhores Avaliados",
		// 			"170": "Facebook Catalogo",
		// 			"174": "Black Friday Chlorellas"
		// 		},
		// 		"searchableClusters": {
		// 			"136": "Promo Relampago",
		// 			"158": "Frete Grátis - Produtos"
		// 		},
		// 		"categories": [
		// 			"/Suplementos para emagrecer/",
		// 			"/Suplementos para emagrecer/Controladores de apetite naturais/Chorella/",
		// 			"/Suplementos para emagrecer/Controladores de apetite naturais/",
		// 			"/Super alimentos e digestão/Detox/",
		// 			"/Super alimentos e digestão/",
		// 			"/Super alimentos e digestão/Super alimentos naturais verdes/",
		// 			"/Super alimentos e digestão/Super alimentos naturais verdes/Clorofila/",
		// 			"/Super alimentos e digestão/Super alimentos naturais verdes/Chlorella/"
		// 		],
		// 		"categoriesIds": [
		// 			"/1843463835/",
		// 			"/1843463835/655457002/348140705/",
		// 			"/1843463835/655457002/",
		// 			"/715546402/523554888/",
		// 			"/715546402/",
		// 			"/715546402/904091387/",
		// 			"/715546402/904091387/1187776231/",
		// 			"/715546402/904091387/1587129881/"
		// 		],
		// 		"link": "https://lojaprojetoverao.vtexcommercestable.com.br/chlorella-kenbi---1200-comprimidos/p",
		// 		"SELOS": [
		// 			"SEM GLÚTEN",
		// 			"SEM LACTOSE",
		// 			"ZERO AÇÚCAR (DIET)",
		// 			"SEM CORANTES",
		// 			"SEM AROMATIZANTES",
		// 			"SEM CONSERVANTES",
		// 			"NÃO TRANSGÊNICO",
		// 			"NATURAL",
		// 			"PRODUTO EM TABLETES",
		// 			"PRODUTO VEGETARIANO"
		// 		],
		// 		"Especificações": [
		// 			"SELOS"
		// 		],
		// 		"SEXO": [
		// 			"HOMEM",
		// 			"MULHER"
		// 		],
		// 		"ORGÂNICO": [
		// 			"SIM"
		// 		],
		// 		"ORIGEM": [
		// 			"5.6484.0007.001-4"
		// 		],
		// 		"PREÇO": [
		// 			"A PARTIR DE 300"
		// 		],
		// 		"Personal Filtros": [
		// 			"SEXO",
		// 			"ORGÂNICO",
		// 			"ORIGEM",
		// 			"PREÇO"
		// 		],
		// 		"MERCADOLIVRE": [
		// 			"Você sabia que a CHLORELLA é uma alga? Uma alga verde unicelular, cultivada em água doce e que atualmente tem sido alvo de inúmeras pesquisas devido ao seu alto valor nutritivo e suas propriedades benéficas à saúde. Alguns desses estudos são da NASA (National Aeronautics and Space Administration), a mesma agência responsável por levar o homem pela primeira vez à Lua! E eles mostram como a Chlorella é rica e completa em nutrientes, o que explica porque a NASA incluiu essa alga no cardápio de seus astronautas. Isso porque ela fornece proteínas, carboidratos, gorduras boas, vitaminas, minerais, fitonutrientes como os pigmentos carotenoides (astaxantina, cantaxantina, loraxantina, flavoxantina e neoxantina) e a clorofila, importantes para o funcionamento do corpo humano.<br> <br>Alguns dizem que ela possui todos os elementos necessários para dar sustento à vida na Terra. Com tudo isso se o dilúvio acontecer hoje, já sabemos agora o que levar em nossa arca de Noé, não é mesmo? Vale também ressaltar um importantíssimo nutriente natural especial presente unicamente na CHLORELLA chamado Chlorella Growth Factor, o C.G.F. Um complexo nucleotídio-peptídio, com polissacarídios e ácidos nucleicos, 10% de RNA e 3% de DNA. Responsáveis por estimular o crescimento e a reparação do material genético das células, fortalecer o sistema imunológico do seu corpo e suprir as células de energia, o que faz com que o C.G.F seja um importante aliado do vigor físico e da sua saúde. Dessa forma, você vai perceber que o consumo diário da CHLORELLA com C.G.F tem como resultados mais comuns a energia aumentada, sono mais repousante, alívio de depressão e ansiedade, melhora na capacidade de concentração, hálito melhor, alívio de constipação e melhora nas condições da pele. E o que tudo isso significa?<br> <br>Quer dizer que a ingestão de CHLORELLA, de maneira frequente e diária, funciona como desintoxicante e regulador do intestino, além de proteger o sistema imunológico do seu corpo, o que fortalece o organismo e previne doenças. O consumo de CHLORELLA ajuda também a fortalecer ossos, prevenir fraturas e osteoporose, pois ela possui boa concentração de cálcio em sua composição, além de magnésio e clorofila. E, devido às altas taxas de fósforo, a CHLORELLA atua no cérebro promovendo melhor atividade, além de prevenir hipertensão, colesterol e triglicerídeos. Viu só quantos benefícios ela pode trazer para sua saúde? Por que não começar hoje a cuidar da sua saúde com a CHLORELLA KENBI 100% PURA? <br> <br>Benefícios e Diferenciais<br>- Desintoxicar o organismo, eliminando os metais pesados e as substâncias químicas tóxicas;<br>- Melhorar o funcionamento do intestino, graças a sua elevada concentração de clorofila;<br>- Estimular a atividade dos macrófagos e dos linfócitos reforçando a capacidade do sistema imunitário para combater vírus, bactérias, proteínas estranhas ou produtos químicos;<br>- Oxigenar as células;<br>- Equilibrar o pH do organismo, dado que é alcalina;<br>- Emagrecimento;<br>- Fortalecimento do sistema imunológico;<br>- Aumento dos níveis de energia e disposição;<br>- Diminuição dos níveis de colesterol;<br>- Controle da pressão arterial;<br>- Previne a anemia;<br>- Fortalecimento do Sistema Imunológico;<br>- Diminui as dores musculares;<br>- Auxilia na saúde do coração.<br> <br>Informações Complementares<br><br>A CHLORELLA acabou se tornando um dos suplementos alimentares mais estudados para complementar a alimentação humana por seu alto valor nutritivo e por isso recomenda-se o seu consumo diário. “Mas tudo em excesso faz mal!” ou pelo menos é o que dizem, mas na verdade a CHLORELLA consegue abrir uma exceção nesse caso, porque alguns médicos a recomendam em grandes doses para o auxílio no tratamento de câncer, ou seja, em situações especiais uma grande quantidade pode ser benéfica. Existem até relatos de muitos usuários sobre a melhora que a CHLORELLA fez para a sua recuperação.<br> <br>Ingredientes<br><br>Chlorella Pyrenoidosa. NÃO CONTÉM GLÚTEN.<br> <br>Modo de Uso<br><br>Ingerir de 8 a 15 comprimidos por dia com líquido. Crianças: 50mg por quilo de peso. (Cada 15 comprimidos = 3g) ansiedade, melhora na capacidade de concentração, hálito melhor, alívio de constipação e melhora nas condições da pele.<br><br>E o que tudo isso significa? Quer dizer que a ingestão de CHLORELLA, de maneira frequente e diária, funciona como desintoxicante e regulador do intestino, além de proteger o sistema imunológico do seu corpo, o que fortalece o organismo e previne doenças. O consumo de CHLORELLA ajuda também a fortalecer ossos, prevenir fraturas e osteoporose, pois ela possui boa concentração de cálcio em sua composição, além de magnésio e clorofila. E, devido às altas taxas de fósforo, a CHLORELLA atua no cérebro promovendo melhor atividade, além de prevenir hipertensão, colesterol e triglicerídeos. Viu só quantos benefícios ela pode trazer para sua saúde? Por que não começar hoje a cuidar da sua saúde com a CHLORELLA KENBI 100% PURA?<br><br></p><br><br><br><b>Benefícios e Diferenciais</b><br><br><br>- Desintoxicar o organismo, eliminando os metais pesados e as substâncias químicas tóxicas;<br><br>- Melhorar o funcionamento do intestino, graças a sua elevada concentração de clorofila;<br><br>- Estimular a atividade dos macrófagos e dos linfócitos reforçando a capacidade do sistema imunitário para combater vírus, bactérias, proteínas estranhas ou produtos químicos;<br><br>- Oxigenar as células;<br><br>- Equilibrar o pH do organismo, dado que é alcalina;<br><br>- Emagrecimento;<br><br>- Fortalecimento do sistema imunológico;<br><br>- Aumento dos níveis de energia e disposição;<br><br>- Diminuição dos níveis de colesterol;<br><br>- Controle da pressão arterial;<br><br>- Previne a anemia;<br><br>- Fortalecimento do Sistema Imunológico;<br><br>- Diminui as dores musculares;<br><br>- Auxilia na saúde do coração;<br><br></p><br><br><br><b>Informações Complementares</b><br><br><br><p> <br>A CHLORELLA acabou se tornando um dos suplementos alimentares mais estudados para complementar a alimentação humana por seu alto valor nutritivo e por isso recomenda-se o seu consumo diário. “Mas tudo em excesso faz mal!” ou pelo menos é o que dizem, mas na verdade a CHLORELLA consegue abrir uma exceção nesse caso, porque alguns médicos a recomendam em grandes doses para o auxílio no tratamento de câncer, ou seja, em situações especiais uma grande quantidade pode ser benéfica. Existem até relatos de muitos usuários sobre a melhora que a CHLORELLA fez para a sua recuperação.<br><br><br></p> <br><br><b>Ingredientes</b><br><br><p> <br>Chlorella Pyrenoidosa. NÃO CONTÉM GLÚTEN<br><br></p><br><br><br><b>Modo de Uso</b><br><br><p> <br>Ingerir de 8 a 15 comprimidos por dia com líquido. Crianças: 50mg por quilo de peso. (Cada 15 comprimidos = 3g)<br><br></p>"
		// 		],
		// 		"MEUS NUTRIENTES": [
		// 			"<div class=\"nutrientes\"><br><div class=\"informacao\"><br /><br><table style=\"overflow: hidden; display: block; border-collapse: collapse;\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\"><br><tbody><br><tr><br><td><br><h3>Informa&ccedil;&otilde;es Nutricionais</h3><br></td><br></tr><br><tr><br><td><br><p>Por&ccedil;&atilde;o de 3g (15 comprimidos)</p><br></td><br></tr><br><tr><br><td><br><div class=\"quantidade\">Quantidade por por&ccedil;&atilde;o</div><br><div class=\"vd\">%V.D*</div><br></td><br></tr><br><tr><br><td><br /><br /><br /><br><table style=\"overflow: hidden; display: block; border-collapse: collapse;\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\"><br><tbody><br><tr><br><td class=\"first\"><br><p>Valor energ&eacute;tico</p><br></td><br><td><br><p>12,6Kcal=54kJ</p><br></td><br><td class=\"last\"><br><p>1%</p><br></td><br></tr><br><tr><br><td class=\"first\"><br><p>Carboidratos</p><br></td><br><td><br><p>0,5g</p><br></td><br><td class=\"last\"><br><p>0%</p><br></td><br></tr><br><tr><br><td class=\"first\"><br><p>Prote&iacute;nas</p><br></td><br><td><br><p>2g</p><br></td><br><td class=\"last\"><br><p>3%</p><br></td><br></tr><br><tr><br><td class=\"first\"><br><p>Gorduras Totais</p><br></td><br><td><br><p>0,5g</p><br></td><br><td class=\"last\"><br><p>0%</p><br></td><br></tr><br><tr><br><td class=\"first\"><br><p>Ferro</p><br></td><br><td><br><p>5,4mg</p><br></td><br><td class=\"last\"><br><p>38%</p><br></td><br></tr><br><tr><br><td class=\"first\"><br><p>S&oacute;dio</p><br></td><br><td><br><p>2,8mg</p><br></td><br><td class=\"last\"><br><p>0%</p><br></td><br></tr><br></tbody><br></table><br><br /><br /><br /></td><br></tr><br></tbody><br></table><br><p>*% Valores di&aacute;rios de refer&ecirc;ncia com base em uma dieta de 2000Kcal ou 8400kJ.&nbsp;Seus valores di&aacute;rios podem ser maiores ou menores dependendo de suas necessidades energ&eacute;ticas.<br /><br />N&atilde;o cont&eacute;m quantidade significativa de gorduras saturadas, gorduras trans e fibra alimentar.</p><br><p>&nbsp;</p><br></div><br><div class=\"nota\"><br><h3>Tome nota:</h3><br><div class=\"fundo\"><br><div><br><h3>Prote&iacute;nas</h3><br><p>2g</p><br></div><br><div><br><h3>Ferro</h3><br><p>5,4mg</p><br></div><br><div><br><h3>S&oacute;dio</h3><br><p>2,8mg</p><br></div><br><div class=\"last\"><br><h3>Carboidratos</h3><br><p>12,6</p><br><p>Kcal</p><br></div><br></div><br><p><strong>Ingredientes:&nbsp;</strong>Chlorella Pyrenoidosa Org&acirc;nica. N&Atilde;O CONT&Eacute;M GL&Uacute;TEN.</p><br></div><br><div class=\"advertencias\"><br><h3>Advert&ecirc;ncias:</h3><br><p>Manter longe do alcance das crian&ccedil;as.</p><br><p>Minist&eacute;rio da Sa&uacute;de adverte: N&atilde;o existem evid&ecirc;ncias cient&iacute;ficas comprovadas de que este alimento previna, trate ou cure doen&ccedil;as.</p><br></div><br><div class=\"qntdos\"><br><div><br><h3>Quantidade</h3><br><h3 class=\"last\">Doses</h3><br></div><br><div><br><p>1200 Comprimidos</p><br><p class=\"last\">150</p><br></div><br></div><br><div class=\"instrucoes\"><br><h3>Instru&ccedil;&otilde;es de uso:</h3><br><p>Ingerir de 8 a 15 comprimidos por dia com l&iacute;quido. Crian&ccedil;as: 50mg por quilo de peso. (Cada 15 comprimidos = 3g)</p><br><br /><br /><br /></div><br><br /><br /></div>"
		// 		],
		// 		"O QUE FALAM DE MIM?": [
		// 			"<h3>O que falam de mim?</h3>"
		// 		],
		// 		"ONDE NASCI": [
		// 			"<p>KENBI é uma empresa especializada em suplementos alimentares com tecnologia japonesa. Ela faz parte do grupo TRD, com sede em Tóquio e com 15 anos de história na produção e terceirização de suplementos nutricionais, com a mais avançada tecnologia. Ela seleciona matérias-primas diferenciadas de excelente qualidade como é o caso da  Chlorella Kenbi. Eles enviam a matéria prima em pó para a Token-Jitsugyou, maior empresa de alimentos em Taiwan, para produção dos comprimidos, seguindo as normas de segurança exigidos pelo governo do Japão. Assim, a KENBI consegue produzir Chlorella com alto padrão de qualidade. E esse mesmo produto comercializado no japão é que vem para o Brasil. Este é o diferencial da Chlorella Kenbi que além de ser produzido sobre o rígido controle de qualidade do Japão, ela é 100% pura e natural, sem misturas ou aditivos químicos, com alta digestibilidade.</p>"
		// 		],
		// 		"CÓDIGO ANVISA": [
		// 			"5.6484.0007.001-4"
		// 		],
		// 		"VÍDEO": [
		// 			"<iframe width=\"370\" height=\"370\" src=\"//www.youtube.com/embed/EBCQHQYKqDs\" frameborder=\"0\" allowfullscreen></iframe><br><br>"
		// 		],
		// 		"Descrição": [
		// 			"MERCADOLIVRE",
		// 			"MEUS NUTRIENTES",
		// 			"O QUE FALAM DE MIM?",
		// 			"ONDE NASCI",
		// 			"CÓDIGO ANVISA",
		// 			"VÍDEO"
		// 		],
		// 		"DESCRICAO MERCADOLIVRE": [
		// 			"Produto Natural."
		// 		],
		// 		"Mercadolivre": [
		// 			"DESCRICAO MERCADOLIVRE"
		// 		],
		// 		"OBJETIVOS": [
		// 			"FORTALECER A IMUNIDADE"
		// 		],
		// 		"FORMA": [
		// 			"COMPRIMIDOS"
		// 		],
		// 		"PRODUTOS ORGÂNICOS": [
		// 			"SIM"
		// 		],
		// 		"PRODUTOS VEGETARIANOS": [
		// 			"SIM"
		// 		],
		// 		"LIVRE DE GLÚTEN": [
		// 			"SIM"
		// 		],
		// 		"SEM LACTOSE": [
		// 			"SIM"
		// 		],
		// 		"ZERO AÇUCAR": [
		// 			"SIM"
		// 		],
		// 		"NATURAL": [
		// 			"SIM"
		// 		],
		// 		"Filtros Departamentos/Categorias": [
		// 			"OBJETIVOS",
		// 			"FORMA",
		// 			"PRODUTOS ORGÂNICOS",
		// 			"PRODUTOS VEGETARIANOS",
		// 			"LIVRE DE GLÚTEN",
		// 			"SEM LACTOSE",
		// 			"ZERO AÇUCAR",
		// 			"NATURAL"
		// 		],
		// 		"allSpecifications": [
		// 			"SELOS",
		// 			"SEXO",
		// 			"ORGÂNICO",
		// 			"ORIGEM",
		// 			"PREÇO",
		// 			"MERCADOLIVRE",
		// 			"MEUS NUTRIENTES",
		// 			"O QUE FALAM DE MIM?",
		// 			"ONDE NASCI",
		// 			"CÓDIGO ANVISA",
		// 			"VÍDEO",
		// 			"DESCRICAO MERCADOLIVRE",
		// 			"OBJETIVOS",
		// 			"FORMA",
		// 			"PRODUTOS ORGÂNICOS",
		// 			"PRODUTOS VEGETARIANOS",
		// 			"LIVRE DE GLÚTEN",
		// 			"SEM LACTOSE",
		// 			"ZERO AÇUCAR",
		// 			"NATURAL"
		// 		],
		// 		"description": "<p>Voc&ecirc; sabia que a <strong>CHLORELLA</strong> &eacute; uma alga? Uma alga verde unicelular, cultivada em &aacute;gua doce e que atualmente tem sido alvo de in&uacute;meras pesquisas devido ao seu alto valor nutritivo e suas propriedades ben&eacute;ficas &agrave; sa&uacute;de. Alguns desses estudos s&atilde;o da NASA (National Aeronautics and Space Administration), a mesma ag&ecirc;ncia respons&aacute;vel por levar o homem pela primeira vez &agrave; Lua! E eles mostram como a <strong>Chlorella</strong> &eacute; rica e completa em nutrientes, o que explica porque a NASA incluiu essa alga no card&aacute;pio de seus astronautas. Isso porque ela fornece prote&iacute;nas, carboidratos, gorduras boas, vitaminas, minerais, fitonutrientes como os pigmentos carotenoides (astaxantina, cantaxantina, loraxantina, flavoxantina e neoxantina) e a clorofila, importantes para o funcionamento do corpo humano.</p><br><p>&nbsp;</p><br><br><p>Alguns dizem que ela possui todos os elementos necess&aacute;rios para dar sustento &agrave; vida na Terra. Com tudo isso se o dil&uacute;vio acontecer hoje, j&aacute; sabemos agora o que levar em nossa arca de No&eacute;, n&atilde;o &eacute; mesmo? Vale tamb&eacute;m ressaltar um important&iacute;ssimo nutriente natural especial presente unicamente na <strong>CHLORELLA</strong> chamado <strong>Chlorella Growth Factor</strong>, o <strong>C.G.F.</strong> Um complexo nucleot&iacute;dio-pept&iacute;dio, com polissacar&iacute;dios e &aacute;cidos nucleicos, 10% de RNA e 3% de DNA. Respons&aacute;veis por estimular o crescimento e a repara&ccedil;&atilde;o do material gen&eacute;tico das c&eacute;lulas, fortalecer o sistema imunol&oacute;gico do seu corpo e suprir as c&eacute;lulas de energia, o que faz com que o<strong> C.G.F</strong> seja um importante aliado do vigor f&iacute;sico e da sua sa&uacute;de. Dessa forma, voc&ecirc; vai perceber que o consumo di&aacute;rio da <strong>CHLORELLA com C.G.F</strong> tem como resultados mais comuns a energia aumentada, sono mais repousante, al&iacute;vio de depress&atilde;o e ansiedade, melhora na capacidade de concentra&ccedil;&atilde;o, h&aacute;lito melhor, al&iacute;vio de constipa&ccedil;&atilde;o e melhora nas condi&ccedil;&otilde;es da pele. E o que tudo isso significa?</p><br><p>&nbsp;</p><br><p>Quer dizer que a ingest&atilde;o de <strong>CHLORELLA</strong>, de maneira frequente e di&aacute;ria, funciona como desintoxicante e regulador do intestino, al&eacute;m de proteger o sistema imunol&oacute;gico do seu corpo, o que fortalece o organismo e previne doen&ccedil;as. O consumo de <strong>CHLORELLA</strong> ajuda tamb&eacute;m a fortalecer ossos, prevenir fraturas e osteoporose, pois ela possui boa concentra&ccedil;&atilde;o de c&aacute;lcio em sua composi&ccedil;&atilde;o, al&eacute;m de magn&eacute;sio e clorofila. E, devido &agrave;s altas taxas de f&oacute;sforo, a <strong>CHLORELLA</strong> atua no c&eacute;rebro promovendo melhor atividade, al&eacute;m de prevenir hipertens&atilde;o, colesterol e triglicer&iacute;deos. Viu s&oacute; quantos benef&iacute;cios ela pode trazer para sua sa&uacute;de? Por que n&atilde;o come&ccedil;ar hoje a cuidar da sua sa&uacute;de com a <strong>CHLORELLA KENBI 100% PURA</strong>?&nbsp;</p><br><p>&nbsp;</p><br><p><strong>Benef&iacute;cios e Diferenciais</strong></p><br><ul><br>  <li>- Desintoxicar o organismo, eliminando os metais pesados e as subst&acirc;ncias qu&iacute;micas t&oacute;xicas;</li><br>  <li>- Melhorar o funcionamento do intestino, gra&ccedil;as a sua elevada concentra&ccedil;&atilde;o de clorofila;</li><br>  <li>- Estimular a atividade dos macr&oacute;fagos e dos linf&oacute;citos refor&ccedil;ando a capacidade do sistema imunit&aacute;rio para combater v&iacute;rus, bact&eacute;rias, prote&iacute;nas estranhas ou produtos qu&iacute;micos;</li><br>  <li>- Oxigenar as c&eacute;lulas;</li><br>  <li>- Equilibrar o pH do organismo, dado que &eacute; alcalina;</li><br>  <li>- Emagrecimento;</li><br>  <li>- Fortalecimento do sistema imunol&oacute;gico;</li><br>  <li>- Aumento dos n&iacute;veis de energia e disposi&ccedil;&atilde;o;</li><br>  <li>- Diminui&ccedil;&atilde;o dos n&iacute;veis de colesterol;</li><br>  <li>- Controle da press&atilde;o arterial;</li><br>  <li>- Previne a anemia;</li><br>  <li>- Fortalecimento do Sistema Imunol&oacute;gico;</li><br>  <li>- Diminui as dores musculares;</li><br>  <li>- Auxilia na sa&uacute;de do cora&ccedil;&atilde;o.</li><br></ul><br><p>&nbsp;</p><br><p><strong>Informa&ccedil;&otilde;es Complementares</strong></p><br><p><br />A CHLORELLA acabou se tornando um dos suplementos alimentares mais estudados para complementar a alimenta&ccedil;&atilde;o humana por seu alto valor nutritivo e por isso recomenda-se o seu consumo di&aacute;rio. &ldquo;Mas tudo em excesso faz mal!&rdquo; ou pelo menos &eacute; o que dizem, mas na verdade a CHLORELLA consegue abrir uma exce&ccedil;&atilde;o nesse caso, porque alguns m&eacute;dicos a recomendam em grandes doses para o aux&iacute;lio no tratamento de c&acirc;ncer, ou seja, em situa&ccedil;&otilde;es especiais uma grande quantidade pode ser ben&eacute;fica. Existem at&eacute; relatos de muitos usu&aacute;rios sobre a melhora que a CHLORELLA fez para a sua recupera&ccedil;&atilde;o.</p><br><p>&nbsp;</p><br><p><strong>Ingredientes</strong></p><br><p><br />Chlorella Pyrenoidosa. N&Atilde;O CONT&Eacute;M GL&Uacute;TEN.</p><br><p>&nbsp;</p><br><p><strong>Modo de Uso</strong></p><br><p><br />Ingerir de 8 a 15 comprimidos por dia com l&iacute;quido.</p><p>Para crianças com idade a partir de 6 meses, a dose padrão é de 50mg/kg de peso/dia. (ex. 12kg x 50mg = 600 = 3 comprimidos de chlorella)</p><br><p>&nbsp;</p><br><p><img title=\"Chlorella_Kenbi_tabela_Loja_Projeto_Verao\" src=\"http://lojaprojetoverao.vteximg.com.br/arquivos/kenbi-geral-05.jpg\" alt=\"Chlorella_Kenbi_tabela_Loja_Projeto_Verao\" /></p><br><br><br><a href=\"https://www.lojaprojetoverao.com.br/kit-3x-chlorella-kenbi-100-pura-1200-comprimidos/p\"><img src=\"http://lojaprojetoverao.vteximg.com.br/arquivos/kenbi-kits-3x-banner-1200-comprimidos.jpg\"></a>",
		// 		"items": [
		// 			{
		// 				"itemId": "192301",
		// 				"name": "Chlorella Kenbi 100% Pura 1200 Comprimidos",
		// 				"nameComplete": "Chlorella Kenbi 100% Pura 1200 Comprimidos",
		// 				"complementName": "Experimente inserir em sua dieta diária a CHLORELLA e sinta o resultado que esse superalimento irá te trazer. Chlorella Kenbi 100% Pura em 1200 comprimidos.",
		// 				"ean": "7896183844868",
		// 				"referenceId": [
		// 					{
		// 						"Key": "RefId",
		// 						"Value": "2023_0_0_U"
		// 					}
		// 				],
		// 				"measurementUnit": "un",
		// 				"unitMultiplier": 1.0000,
		// 				"modalType": null,
		// 				"isKit": false,
		// 				"images": [
		// 					{
		// 						"imageId": "163345",
		// 						"imageLabel": "",
		// 						"imageTag": "<img src=\"~/arquivos/ids/163345-#width#-#height#/kenbi-chlorella-1200-comprimidos-loja-projeto-verao.jpg?v=636633768220500000\" width=\"#width#\" height=\"#height#\" alt=\"kenbi-chlorella-1200-comprimidos-loja-projeto-verao\" id=\"\" />",
		// 						"imageUrl": "http://lojaprojetoverao.vteximg.com.br/arquivos/ids/163345/kenbi-chlorella-1200-comprimidos-loja-projeto-verao.jpg?v=636633768220500000",
		// 						"imageText": "kenbi-chlorella-1200-comprimidos-loja-projeto-verao"
		// 					},
		// 					{
		// 						"imageId": "161068",
		// 						"imageLabel": "",
		// 						"imageTag": "<img src=\"~/arquivos/ids/161068-#width#-#height#/kenbi-chlorella-100--pura-1200-comprimidos-L-loja-projeto-verao.jpg?v=636376318909230000\" width=\"#width#\" height=\"#height#\" alt=\"kenbi-chlorella-100--pura-1200-comprimidos-L-loja-projeto-verao\" id=\"\" />",
		// 						"imageUrl": "http://lojaprojetoverao.vteximg.com.br/arquivos/ids/161068/kenbi-chlorella-100--pura-1200-comprimidos-L-loja-projeto-verao.jpg?v=636376318909230000",
		// 						"imageText": "kenbi-chlorella-100--pura-1200-comprimidos-L-loja-projeto-verao"
		// 					},
		// 					{
		// 						"imageId": "161069",
		// 						"imageLabel": "",
		// 						"imageTag": "<img src=\"~/arquivos/ids/161069-#width#-#height#/kenbi-chlorella-100--pura-1200-comprimidos-D-loja-projeto-verao.jpg?v=636376319111670000\" width=\"#width#\" height=\"#height#\" alt=\"kenbi-chlorella-100--pura-1200-comprimidos-D-loja-projeto-verao\" id=\"\" />",
		// 						"imageUrl": "http://lojaprojetoverao.vteximg.com.br/arquivos/ids/161069/kenbi-chlorella-100--pura-1200-comprimidos-D-loja-projeto-verao.jpg?v=636376319111670000",
		// 						"imageText": "kenbi-chlorella-100--pura-1200-comprimidos-D-loja-projeto-verao"
		// 					},
		// 					{
		// 						"imageId": "161070",
		// 						"imageLabel": "",
		// 						"imageTag": "<img src=\"~/arquivos/ids/161070-#width#-#height#/kenbi-chlorella-100--pura-1200-comprimidos-C-loja-projeto-verao.jpg?v=636376319265000000\" width=\"#width#\" height=\"#height#\" alt=\"kenbi-chlorella-100--pura-1200-comprimidos-C-loja-projeto-verao\" id=\"\" />",
		// 						"imageUrl": "http://lojaprojetoverao.vteximg.com.br/arquivos/ids/161070/kenbi-chlorella-100--pura-1200-comprimidos-C-loja-projeto-verao.jpg?v=636376319265000000",
		// 						"imageText": "kenbi-chlorella-100--pura-1200-comprimidos-C-loja-projeto-verao"
		// 					}
		// 				],
		// 				"sellers": [
		// 					{
		// 						"sellerId": "1",
		// 						"sellerName": "Projeto Verão",
		// 						"addToCartLink": "https://lojaprojetoverao.vtexcommercestable.com.br/checkout/cart/add?sku=192301&qty=1&seller=1&sc=1&price=27990&cv=7b4d0ab46ef0fbfae4d5588dc37e8a66_&sc=1",
		// 						"sellerDefault": true,
		// 						"commertialOffer": {
		// 							"DeliverySlaSamplesPerRegion": {
		// 								"0": {
		// 									"DeliverySlaPerTypes": [],
		// 									"Region": null
		// 								}
		// 							},
		// 							"Installments": [
		// 								{
		// 									"Value": 279.9,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 279.9,
		// 									"NumberOfInstallments": 1,
		// 									"PaymentSystemName": "American Express",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "American Express à vista"
		// 								},
		// 								{
		// 									"Value": 139.95,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 279.9,
		// 									"NumberOfInstallments": 2,
		// 									"PaymentSystemName": "American Express",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "American Express 2 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 93.3,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 279.9,
		// 									"NumberOfInstallments": 3,
		// 									"PaymentSystemName": "American Express",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "American Express 3 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 69.97,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 279.9,
		// 									"NumberOfInstallments": 4,
		// 									"PaymentSystemName": "American Express",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "American Express 4 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 55.98,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 279.9,
		// 									"NumberOfInstallments": 5,
		// 									"PaymentSystemName": "American Express",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "American Express 5 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 46.65,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 279.9,
		// 									"NumberOfInstallments": 6,
		// 									"PaymentSystemName": "American Express",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "American Express 6 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 39.98,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 279.9,
		// 									"NumberOfInstallments": 7,
		// 									"PaymentSystemName": "American Express",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "American Express 7 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 34.98,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 279.9,
		// 									"NumberOfInstallments": 8,
		// 									"PaymentSystemName": "American Express",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "American Express 8 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 279.9,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 279.9,
		// 									"NumberOfInstallments": 1,
		// 									"PaymentSystemName": "Visa",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Visa à vista"
		// 								},
		// 								{
		// 									"Value": 139.95,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 279.9,
		// 									"NumberOfInstallments": 2,
		// 									"PaymentSystemName": "Visa",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Visa 2 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 93.3,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 279.9,
		// 									"NumberOfInstallments": 3,
		// 									"PaymentSystemName": "Visa",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Visa 3 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 69.97,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 279.9,
		// 									"NumberOfInstallments": 4,
		// 									"PaymentSystemName": "Visa",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Visa 4 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 55.98,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 279.9,
		// 									"NumberOfInstallments": 5,
		// 									"PaymentSystemName": "Visa",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Visa 5 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 46.65,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 279.9,
		// 									"NumberOfInstallments": 6,
		// 									"PaymentSystemName": "Visa",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Visa 6 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 39.98,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 279.9,
		// 									"NumberOfInstallments": 7,
		// 									"PaymentSystemName": "Visa",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Visa 7 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 34.98,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 279.9,
		// 									"NumberOfInstallments": 8,
		// 									"PaymentSystemName": "Visa",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Visa 8 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 279.9,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 279.9,
		// 									"NumberOfInstallments": 1,
		// 									"PaymentSystemName": "Diners",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Diners à vista"
		// 								},
		// 								{
		// 									"Value": 139.95,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 279.9,
		// 									"NumberOfInstallments": 2,
		// 									"PaymentSystemName": "Diners",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Diners 2 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 93.3,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 279.9,
		// 									"NumberOfInstallments": 3,
		// 									"PaymentSystemName": "Diners",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Diners 3 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 69.97,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 279.9,
		// 									"NumberOfInstallments": 4,
		// 									"PaymentSystemName": "Diners",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Diners 4 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 55.98,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 279.9,
		// 									"NumberOfInstallments": 5,
		// 									"PaymentSystemName": "Diners",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Diners 5 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 46.65,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 279.9,
		// 									"NumberOfInstallments": 6,
		// 									"PaymentSystemName": "Diners",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Diners 6 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 39.98,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 279.9,
		// 									"NumberOfInstallments": 7,
		// 									"PaymentSystemName": "Diners",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Diners 7 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 34.98,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 279.9,
		// 									"NumberOfInstallments": 8,
		// 									"PaymentSystemName": "Diners",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Diners 8 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 279.9,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 279.9,
		// 									"NumberOfInstallments": 1,
		// 									"PaymentSystemName": "Mastercard",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Mastercard à vista"
		// 								},
		// 								{
		// 									"Value": 139.95,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 279.9,
		// 									"NumberOfInstallments": 2,
		// 									"PaymentSystemName": "Mastercard",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Mastercard 2 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 93.3,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 279.9,
		// 									"NumberOfInstallments": 3,
		// 									"PaymentSystemName": "Mastercard",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Mastercard 3 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 69.97,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 279.9,
		// 									"NumberOfInstallments": 4,
		// 									"PaymentSystemName": "Mastercard",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Mastercard 4 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 55.98,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 279.9,
		// 									"NumberOfInstallments": 5,
		// 									"PaymentSystemName": "Mastercard",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Mastercard 5 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 46.65,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 279.9,
		// 									"NumberOfInstallments": 6,
		// 									"PaymentSystemName": "Mastercard",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Mastercard 6 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 39.98,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 279.9,
		// 									"NumberOfInstallments": 7,
		// 									"PaymentSystemName": "Mastercard",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Mastercard 7 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 34.98,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 279.9,
		// 									"NumberOfInstallments": 8,
		// 									"PaymentSystemName": "Mastercard",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Mastercard 8 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 279.9,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 279.9,
		// 									"NumberOfInstallments": 1,
		// 									"PaymentSystemName": "Hipercard",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Hipercard à vista"
		// 								},
		// 								{
		// 									"Value": 139.95,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 279.9,
		// 									"NumberOfInstallments": 2,
		// 									"PaymentSystemName": "Hipercard",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Hipercard 2 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 93.3,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 279.9,
		// 									"NumberOfInstallments": 3,
		// 									"PaymentSystemName": "Hipercard",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Hipercard 3 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 69.97,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 279.9,
		// 									"NumberOfInstallments": 4,
		// 									"PaymentSystemName": "Hipercard",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Hipercard 4 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 55.98,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 279.9,
		// 									"NumberOfInstallments": 5,
		// 									"PaymentSystemName": "Hipercard",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Hipercard 5 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 46.65,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 279.9,
		// 									"NumberOfInstallments": 6,
		// 									"PaymentSystemName": "Hipercard",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Hipercard 6 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 39.98,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 279.9,
		// 									"NumberOfInstallments": 7,
		// 									"PaymentSystemName": "Hipercard",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Hipercard 7 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 34.98,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 279.9,
		// 									"NumberOfInstallments": 8,
		// 									"PaymentSystemName": "Hipercard",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Hipercard 8 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 279.9,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 279.9,
		// 									"NumberOfInstallments": 1,
		// 									"PaymentSystemName": "Elo",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Elo à vista"
		// 								},
		// 								{
		// 									"Value": 139.95,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 279.9,
		// 									"NumberOfInstallments": 2,
		// 									"PaymentSystemName": "Elo",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Elo 2 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 93.3,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 279.9,
		// 									"NumberOfInstallments": 3,
		// 									"PaymentSystemName": "Elo",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Elo 3 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 69.97,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 279.9,
		// 									"NumberOfInstallments": 4,
		// 									"PaymentSystemName": "Elo",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Elo 4 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 55.98,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 279.9,
		// 									"NumberOfInstallments": 5,
		// 									"PaymentSystemName": "Elo",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Elo 5 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 46.65,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 279.9,
		// 									"NumberOfInstallments": 6,
		// 									"PaymentSystemName": "Elo",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Elo 6 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 39.98,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 279.9,
		// 									"NumberOfInstallments": 7,
		// 									"PaymentSystemName": "Elo",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Elo 7 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 34.98,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 279.9,
		// 									"NumberOfInstallments": 8,
		// 									"PaymentSystemName": "Elo",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Elo 8 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 279.9,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 279.9,
		// 									"NumberOfInstallments": 1,
		// 									"PaymentSystemName": "Vale",
		// 									"PaymentSystemGroupName": "giftCardPaymentGroup",
		// 									"Name": "Vale à vista"
		// 								},
		// 								{
		// 									"Value": 279.9,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 279.9,
		// 									"NumberOfInstallments": 1,
		// 									"PaymentSystemName": "BOLBRADESCO",
		// 									"PaymentSystemGroupName": "bankInvoicePaymentGroup",
		// 									"Name": "BOLBRADESCO à vista"
		// 								}
		// 							],
		// 							"DiscountHighLight": [],
		// 							"GiftSkuIds": [],
		// 							"Teasers": [],
		// 							"BuyTogether": [],
		// 							"Price": 279.9,
		// 							"ListPrice": 330.0,
		// 							"PriceWithoutDiscount": 279.9,
		// 							"RewardValue": 0.0,
		// 							"PriceValidUntil": "2020-02-28T22:39:28Z",
		// 							"AvailableQuantity": 23,
		// 							"Tax": 0.0,
		// 							"DeliverySlaSamples": [
		// 								{
		// 									"DeliverySlaPerTypes": [],
		// 									"Region": null
		// 								}
		// 							],
		// 							"GetInfoErrorMessage": null,
		// 							"CacheVersionUsedToCallCheckout": "7b4d0ab46ef0fbfae4d5588dc37e8a66_"
		// 						}
		// 					}
		// 				],
		// 				"Videos": []
		// 			}
		// 		]
		// 	},
		// 	{
		// 		"productId": "1522",
		// 		"productName": "Magnésio Dimalato Puro (500mg) 120 Cápsulas - Meissen",
		// 		"brand": "Meissen",
		// 		"linkText": "magnesio-dimalato-550mg-120-capsulas-meissen",
		// 		"productReference": "0001574",
		// 		"categoryId": "1272483216",
		// 		"productTitle": "",
		// 		"metaTagDescription": "O Magnesio Dimalato e uma otima fonte de magnesio e acido malico com alta biodisponibilidade, ou seja, garante uma boa absorcao pelo nosso corpo.",
		// 		"clusterHighlights": {},
		// 		"productClusters": {
		// 			"140": "Loja",
		// 			"141": "Comparadores",
		// 			"164": "Zoom",
		// 			"177": "Black Friday Meissen"
		// 		},
		// 		"searchableClusters": {},
		// 		"categories": [
		// 			"/Vitaminas e minerais/Minerais/Magnésio/",
		// 			"/Vitaminas e minerais/Minerais/",
		// 			"/Vitaminas e minerais/"
		// 		],
		// 		"categoriesIds": [
		// 			"/1521962469/1205244504/1272483216/",
		// 			"/1521962469/1205244504/",
		// 			"/1521962469/"
		// 		],
		// 		"link": "https://lojaprojetoverao.vtexcommercestable.com.br/magnesio-dimalato-550mg-120-capsulas-meissen/p",
		// 		"description": "<p>O&nbsp;magn&eacute;sio&nbsp;&eacute; um dos <strong>minerais essenciais</strong> para a regenera&ccedil;&atilde;o celular, e &eacute; utilizado em mais de <strong>350 rea&ccedil;&otilde;es enzim&aacute;ticas</strong> no organismo, mais do que qualquer outro mineral. Ao lado de oxig&ecirc;nio e iodo, o magn&eacute;sio &eacute; o terceiro elemento mais importante para sustentar a vida, assim como para reverter as doen&ccedil;as e o envelhecimento.</p><br><p>O magn&eacute;sio ainda favorece a absor&ccedil;&atilde;o do c&aacute;lcio da alimenta&ccedil;&atilde;o e reduz a incid&ecirc;ncia de <strong>c&acirc;imbras</strong> e <strong>fraqueza muscular</strong>.</p><br><p>O Magn&eacute;sio Dimalato &eacute; uma &oacute;tima fonte de magn&eacute;sio e <strong>&aacute;cido m&aacute;lico</strong> com alta biodisponibilidade, ou seja, garante uma boa absor&ccedil;&atilde;o pelo nosso corpo.</p><br><p>Um dos estudos demonstrou que a ingest&atilde;o de Magn&eacute;sio Dimalato duas vezes por dia durante 2 a 6 meses melhoram significativamente os n&iacute;veis de energia e a fun&ccedil;&atilde;o muscular e reduzem o n&iacute;vel de dor de pacientes com&nbsp;<strong>fibromialgia.</strong>&nbsp;Pacientes com fibromialgia possuem redu&ccedil;&atilde;o de oxig&ecirc;nio e Magn&eacute;sio Dimalato demostrou benef&iacute;cios significativos por melhorar a&nbsp;<strong>produ&ccedil;&atilde;o de energia</strong>.</p><br><p><strong>Magn&eacute;sio Dimalato Meissen</strong> vem em Potes com c&aacute;psulas transparente.</p><br><p>&nbsp;</p><br><p><strong>Benefícios e Diferenciais:</strong></p><br><p>- Ácido Málico e Magnésio</p><br><p>- Auxilia no do combate a Fibromialgia</p><br><p>- Auxilia no combate ao cansaço crônico</p><br><p>- Ácido Málico é natural</p><br><p>- Boa absorção pelo organismo</p><br><p>- Preferencial ao Cloreto de Magnésio para pessoas com distúrbio digestivo</p><br><p>&nbsp;</p><br><p><strong>Ingredientes</strong>: </p><br><p>Magnésio Dimalto. </p><br><p>Cápsula: Gelatina e água purificada.</p><br><p>NÂO CONTÉM GLÚTEN.</p><br><p>&nbsp;</p><br><p><strong>Recomenda&ccedil;&atilde;o de Uso: </strong></p><br><p>Ingerir 2(duas) c&aacute;psula ao dia com l&iacute;quido.</p><br><p>&nbsp;</p><br><center><img src=\"http://lojaprojetoverao.vteximg.com.br/arquivos/magnesio-dimalato-meissen-120caps.jpg\"></center><br><br><br><br><a href=\"https://www.lojaprojetoverao.com.br/kit-3x-cloreto-de-magnesio-pa-display-10-saches-33-meissen/p\"><img src=\"http://lojaprojetoverao.vteximg.com.br/arquivos/meissen-cloreto-magnesio-kits-3x-10saches-33g.jpg\"></a><br><a href=\"https://www.lojaprojetoverao.com.br/kit-3x-cloreto-de-magnesio-pa-500mg-60-capsulas-meissen/p\"><img src=\"http://lojaprojetoverao.vteximg.com.br/arquivos/meissen-cloreto-magnesio-kits-3x-60vcaps.jpg\"></a><br><a href=\"https://www.lojaprojetoverao.com.br/kit-3x-cloreto-de-magnesio-pa-500mg-120-capsulas-meissen/p\"><img src=\"http://lojaprojetoverao.vteximg.com.br/arquivos/meissen-cloreto-magnesio-kits-3x-120vcaps.jpg\"></a><br><a href=\"https://www.lojaprojetoverao.com.br/kit-3x-magnesio-dimalato-500mg-60-capsulas-gelatinosas-meissen/p\"><img src=\"http://lojaprojetoverao.vteximg.com.br/arquivos/meissen-magnesio-dimalato-kits-3x-60caps.jpg\"></a><br><a href=\"https://www.lojaprojetoverao.com.br/kit-6x-magnesio-dimalato-500mg-60-capsulas-gelatinosas-meissen/p\"><img src=\"http://lojaprojetoverao.vteximg.com.br/arquivos/meissen-magnesio-dimalato-kits-6x-60caps.jpg\"></a><br><a href=\"https://www.lojaprojetoverao.com.br/kit-3x-magnesio-quelato-433mg-120-capsulas-meissen/p\"><img src=\"http://lojaprojetoverao.vteximg.com.br/arquivos/meissen-magnesio-quelato-kits-3x-120caps.jpg\"></a><br><a href=\"https://www.lojaprojetoverao.com.br/kit-6x-magnesio-quelato-433mg-120-capsulas-meissen/p\"><img src=\"http://lojaprojetoverao.vteximg.com.br/arquivos/meissen-magnesio-quelato-kits-6x-120caps.jpg\"></a>",
		// 		"items": [
		// 			{
		// 				"itemId": "531203056",
		// 				"name": "Magnésio Dimalato Puro (500mg) 120 Cápsulas - Meissen",
		// 				"nameComplete": "Magnésio Dimalato Puro (500mg) 120 Cápsulas - Meissen",
		// 				"complementName": "O Magnésio Dimalato é uma ótima fonte de magnésio e ácido málico com alta biodisponibilidade, ou seja, garante uma boa absorção pelo nosso corpo.",
		// 				"ean": "7898047200711",
		// 				"referenceId": [
		// 					{
		// 						"Key": "RefId",
		// 						"Value": "1522_0_0_U"
		// 					}
		// 				],
		// 				"measurementUnit": "un",
		// 				"unitMultiplier": 1.0000,
		// 				"modalType": null,
		// 				"isKit": false,
		// 				"images": [
		// 					{
		// 						"imageId": "164830",
		// 						"imageLabel": "",
		// 						"imageTag": "<img src=\"~/arquivos/ids/164830-#width#-#height#/meissen-magnesio-dimalato-120-capsulas-500mg-loja-projeto-verao-01.jpg?v=636742560848670000\" width=\"#width#\" height=\"#height#\" alt=\"meissen-magnesio-dimalato-120-capsulas-500mg-loja-projeto-verao-01\" id=\"\" />",
		// 						"imageUrl": "http://lojaprojetoverao.vteximg.com.br/arquivos/ids/164830/meissen-magnesio-dimalato-120-capsulas-500mg-loja-projeto-verao-01.jpg?v=636742560848670000",
		// 						"imageText": "meissen-magnesio-dimalato-120-capsulas-500mg-loja-projeto-verao-01"
		// 					},
		// 					{
		// 						"imageId": "164784",
		// 						"imageLabel": "",
		// 						"imageTag": "<img src=\"~/arquivos/ids/164784-#width#-#height#/meissen-magnesio-dimalato-120-capsulas-500mg-loja-projeto-verao.jpg?v=636739819620300000\" width=\"#width#\" height=\"#height#\" alt=\"meissen-magnesio-dimalato-120-capsulas-500mg-loja-projeto-verao\" id=\"\" />",
		// 						"imageUrl": "http://lojaprojetoverao.vteximg.com.br/arquivos/ids/164784/meissen-magnesio-dimalato-120-capsulas-500mg-loja-projeto-verao.jpg?v=636739819620300000",
		// 						"imageText": "meissen-magnesio-dimalato-120-capsulas-500mg-loja-projeto-verao"
		// 					},
		// 					{
		// 						"imageId": "164831",
		// 						"imageLabel": "",
		// 						"imageTag": "<img src=\"~/arquivos/ids/164831-#width#-#height#/meissen-magnesio-dimalato-120-capsulas-500mg-loja-projeto-verao-02.jpg?v=636742565433970000\" width=\"#width#\" height=\"#height#\" alt=\"meissen-magnesio-dimalato-120-capsulas-500mg-loja-projeto-verao-02\" id=\"\" />",
		// 						"imageUrl": "http://lojaprojetoverao.vteximg.com.br/arquivos/ids/164831/meissen-magnesio-dimalato-120-capsulas-500mg-loja-projeto-verao-02.jpg?v=636742565433970000",
		// 						"imageText": "meissen-magnesio-dimalato-120-capsulas-500mg-loja-projeto-verao-02"
		// 					},
		// 					{
		// 						"imageId": "164832",
		// 						"imageLabel": "",
		// 						"imageTag": "<img src=\"~/arquivos/ids/164832-#width#-#height#/meissen-magnesio-dimalato-120-capsulas-500mg-loja-projeto-verao-03.jpg?v=636742565608400000\" width=\"#width#\" height=\"#height#\" alt=\"meissen-magnesio-dimalato-120-capsulas-500mg-loja-projeto-verao-03\" id=\"\" />",
		// 						"imageUrl": "http://lojaprojetoverao.vteximg.com.br/arquivos/ids/164832/meissen-magnesio-dimalato-120-capsulas-500mg-loja-projeto-verao-03.jpg?v=636742565608400000",
		// 						"imageText": "meissen-magnesio-dimalato-120-capsulas-500mg-loja-projeto-verao-03"
		// 					}
		// 				],
		// 				"sellers": [
		// 					{
		// 						"sellerId": "1",
		// 						"sellerName": "Projeto Verão",
		// 						"addToCartLink": "https://lojaprojetoverao.vtexcommercestable.com.br/checkout/cart/add?sku=531203056&qty=1&seller=1&sc=1&price=4385&cv=dbd1cb6324a1fb25367e9155c79ec044_&sc=1",
		// 						"sellerDefault": true,
		// 						"commertialOffer": {
		// 							"DeliverySlaSamplesPerRegion": {
		// 								"0": {
		// 									"DeliverySlaPerTypes": [],
		// 									"Region": null
		// 								}
		// 							},
		// 							"Installments": [
		// 								{
		// 									"Value": 43.85,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 43.85,
		// 									"NumberOfInstallments": 1,
		// 									"PaymentSystemName": "American Express",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "American Express à vista"
		// 								},
		// 								{
		// 									"Value": 21.92,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 43.85,
		// 									"NumberOfInstallments": 2,
		// 									"PaymentSystemName": "American Express",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "American Express 2 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 14.61,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 43.85,
		// 									"NumberOfInstallments": 3,
		// 									"PaymentSystemName": "American Express",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "American Express 3 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 10.96,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 43.85,
		// 									"NumberOfInstallments": 4,
		// 									"PaymentSystemName": "American Express",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "American Express 4 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 8.77,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 43.85,
		// 									"NumberOfInstallments": 5,
		// 									"PaymentSystemName": "American Express",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "American Express 5 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 7.3,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 43.85,
		// 									"NumberOfInstallments": 6,
		// 									"PaymentSystemName": "American Express",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "American Express 6 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 6.26,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 43.85,
		// 									"NumberOfInstallments": 7,
		// 									"PaymentSystemName": "American Express",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "American Express 7 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 5.48,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 43.85,
		// 									"NumberOfInstallments": 8,
		// 									"PaymentSystemName": "American Express",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "American Express 8 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 43.85,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 43.85,
		// 									"NumberOfInstallments": 1,
		// 									"PaymentSystemName": "Visa",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Visa à vista"
		// 								},
		// 								{
		// 									"Value": 21.92,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 43.85,
		// 									"NumberOfInstallments": 2,
		// 									"PaymentSystemName": "Visa",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Visa 2 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 14.61,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 43.85,
		// 									"NumberOfInstallments": 3,
		// 									"PaymentSystemName": "Visa",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Visa 3 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 10.96,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 43.85,
		// 									"NumberOfInstallments": 4,
		// 									"PaymentSystemName": "Visa",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Visa 4 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 8.77,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 43.85,
		// 									"NumberOfInstallments": 5,
		// 									"PaymentSystemName": "Visa",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Visa 5 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 7.3,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 43.85,
		// 									"NumberOfInstallments": 6,
		// 									"PaymentSystemName": "Visa",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Visa 6 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 6.26,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 43.85,
		// 									"NumberOfInstallments": 7,
		// 									"PaymentSystemName": "Visa",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Visa 7 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 5.48,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 43.85,
		// 									"NumberOfInstallments": 8,
		// 									"PaymentSystemName": "Visa",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Visa 8 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 43.85,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 43.85,
		// 									"NumberOfInstallments": 1,
		// 									"PaymentSystemName": "Diners",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Diners à vista"
		// 								},
		// 								{
		// 									"Value": 21.92,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 43.85,
		// 									"NumberOfInstallments": 2,
		// 									"PaymentSystemName": "Diners",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Diners 2 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 14.61,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 43.85,
		// 									"NumberOfInstallments": 3,
		// 									"PaymentSystemName": "Diners",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Diners 3 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 10.96,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 43.85,
		// 									"NumberOfInstallments": 4,
		// 									"PaymentSystemName": "Diners",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Diners 4 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 8.77,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 43.85,
		// 									"NumberOfInstallments": 5,
		// 									"PaymentSystemName": "Diners",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Diners 5 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 7.3,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 43.85,
		// 									"NumberOfInstallments": 6,
		// 									"PaymentSystemName": "Diners",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Diners 6 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 6.26,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 43.85,
		// 									"NumberOfInstallments": 7,
		// 									"PaymentSystemName": "Diners",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Diners 7 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 5.48,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 43.85,
		// 									"NumberOfInstallments": 8,
		// 									"PaymentSystemName": "Diners",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Diners 8 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 43.85,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 43.85,
		// 									"NumberOfInstallments": 1,
		// 									"PaymentSystemName": "Mastercard",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Mastercard à vista"
		// 								},
		// 								{
		// 									"Value": 21.92,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 43.85,
		// 									"NumberOfInstallments": 2,
		// 									"PaymentSystemName": "Mastercard",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Mastercard 2 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 14.61,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 43.85,
		// 									"NumberOfInstallments": 3,
		// 									"PaymentSystemName": "Mastercard",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Mastercard 3 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 10.96,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 43.85,
		// 									"NumberOfInstallments": 4,
		// 									"PaymentSystemName": "Mastercard",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Mastercard 4 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 8.77,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 43.85,
		// 									"NumberOfInstallments": 5,
		// 									"PaymentSystemName": "Mastercard",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Mastercard 5 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 7.3,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 43.85,
		// 									"NumberOfInstallments": 6,
		// 									"PaymentSystemName": "Mastercard",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Mastercard 6 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 6.26,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 43.85,
		// 									"NumberOfInstallments": 7,
		// 									"PaymentSystemName": "Mastercard",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Mastercard 7 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 5.48,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 43.85,
		// 									"NumberOfInstallments": 8,
		// 									"PaymentSystemName": "Mastercard",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Mastercard 8 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 43.85,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 43.85,
		// 									"NumberOfInstallments": 1,
		// 									"PaymentSystemName": "Hipercard",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Hipercard à vista"
		// 								},
		// 								{
		// 									"Value": 21.92,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 43.85,
		// 									"NumberOfInstallments": 2,
		// 									"PaymentSystemName": "Hipercard",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Hipercard 2 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 14.61,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 43.85,
		// 									"NumberOfInstallments": 3,
		// 									"PaymentSystemName": "Hipercard",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Hipercard 3 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 10.96,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 43.85,
		// 									"NumberOfInstallments": 4,
		// 									"PaymentSystemName": "Hipercard",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Hipercard 4 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 8.77,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 43.85,
		// 									"NumberOfInstallments": 5,
		// 									"PaymentSystemName": "Hipercard",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Hipercard 5 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 7.3,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 43.85,
		// 									"NumberOfInstallments": 6,
		// 									"PaymentSystemName": "Hipercard",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Hipercard 6 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 6.26,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 43.85,
		// 									"NumberOfInstallments": 7,
		// 									"PaymentSystemName": "Hipercard",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Hipercard 7 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 5.48,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 43.85,
		// 									"NumberOfInstallments": 8,
		// 									"PaymentSystemName": "Hipercard",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Hipercard 8 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 43.85,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 43.85,
		// 									"NumberOfInstallments": 1,
		// 									"PaymentSystemName": "Elo",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Elo à vista"
		// 								},
		// 								{
		// 									"Value": 21.92,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 43.85,
		// 									"NumberOfInstallments": 2,
		// 									"PaymentSystemName": "Elo",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Elo 2 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 14.61,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 43.85,
		// 									"NumberOfInstallments": 3,
		// 									"PaymentSystemName": "Elo",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Elo 3 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 10.96,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 43.85,
		// 									"NumberOfInstallments": 4,
		// 									"PaymentSystemName": "Elo",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Elo 4 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 8.77,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 43.85,
		// 									"NumberOfInstallments": 5,
		// 									"PaymentSystemName": "Elo",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Elo 5 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 7.3,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 43.85,
		// 									"NumberOfInstallments": 6,
		// 									"PaymentSystemName": "Elo",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Elo 6 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 6.26,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 43.85,
		// 									"NumberOfInstallments": 7,
		// 									"PaymentSystemName": "Elo",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Elo 7 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 5.48,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 43.85,
		// 									"NumberOfInstallments": 8,
		// 									"PaymentSystemName": "Elo",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Elo 8 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 43.85,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 43.85,
		// 									"NumberOfInstallments": 1,
		// 									"PaymentSystemName": "Vale",
		// 									"PaymentSystemGroupName": "giftCardPaymentGroup",
		// 									"Name": "Vale à vista"
		// 								},
		// 								{
		// 									"Value": 43.85,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 43.85,
		// 									"NumberOfInstallments": 1,
		// 									"PaymentSystemName": "BOLBRADESCO",
		// 									"PaymentSystemGroupName": "bankInvoicePaymentGroup",
		// 									"Name": "BOLBRADESCO à vista"
		// 								}
		// 							],
		// 							"DiscountHighLight": [],
		// 							"GiftSkuIds": [],
		// 							"Teasers": [],
		// 							"BuyTogether": [],
		// 							"Price": 43.85,
		// 							"ListPrice": 43.85,
		// 							"PriceWithoutDiscount": 43.85,
		// 							"RewardValue": 0.0,
		// 							"PriceValidUntil": "2020-02-28T22:38:20Z",
		// 							"AvailableQuantity": 114,
		// 							"Tax": 0.0,
		// 							"DeliverySlaSamples": [
		// 								{
		// 									"DeliverySlaPerTypes": [],
		// 									"Region": null
		// 								}
		// 							],
		// 							"GetInfoErrorMessage": null,
		// 							"CacheVersionUsedToCallCheckout": "dbd1cb6324a1fb25367e9155c79ec044_"
		// 						}
		// 					}
		// 				],
		// 				"Videos": []
		// 			}
		// 		]
		// 	},
		// 	{
		// 		"productId": "2000167",
		// 		"productName": "Spirulina Orgânica Certificada 180g 360 comprimidos - Fazenda Tamanduá",
		// 		"brand": "Fazenda Tamanduá",
		// 		"linkText": "spirulina-500mg-organica-180-fazenda-tamandua",
		// 		"productReference": "123456",
		// 		"categoryId": "715546402",
		// 		"productTitle": "",
		// 		"metaTagDescription": "A Spirulina e um dos poucos organismos capazes de sintetizar vitamina B12, ela tem sido indicada na alimentacao humana e e considerada o alimento do futuro.",
		// 		"clusterHighlights": {},
		// 		"productClusters": {
		// 			"140": "Loja",
		// 			"141": "Comparadores",
		// 			"163": "Buscape",
		// 			"164": "Zoom"
		// 		},
		// 		"searchableClusters": {},
		// 		"categories": [
		// 			"/Super alimentos e digestão/",
		// 			"/Suplementos para emagrecer/Controladores de apetite naturais/",
		// 			"/Suplementos para emagrecer/",
		// 			"/Super alimentos e digestão/Super alimentos naturais verdes/Spirulina/",
		// 			"/Super alimentos e digestão/Super alimentos naturais verdes/",
		// 			"/Suplementos para emagrecer/Controladores de apetite naturais/Spirulina/",
		// 			"/Super alimentos e digestão/Super alimentos naturais verdes/Clorofila/"
		// 		],
		// 		"categoriesIds": [
		// 			"/715546402/",
		// 			"/1843463835/655457002/",
		// 			"/1843463835/",
		// 			"/715546402/904091387/680702743/",
		// 			"/715546402/904091387/",
		// 			"/1843463835/655457002/1155379222/",
		// 			"/715546402/904091387/1187776231/"
		// 		],
		// 		"link": "https://lojaprojetoverao.vtexcommercestable.com.br/spirulina-500mg-organica-180-fazenda-tamandua/p",
		// 		"SEXO": [
		// 			"HOMEM",
		// 			"MULHER"
		// 		],
		// 		"ORGÂNICO": [
		// 			"SIM"
		// 		],
		// 		"FINALIDADE": [
		// 			"FORTALECER A IMUNIDADE"
		// 		],
		// 		"ORIGEM": [
		// 			"NACIONAL"
		// 		],
		// 		"PREÇO": [
		// 			"DE 100 ATÉ 199"
		// 		],
		// 		"Personal Filtros": [
		// 			"SEXO",
		// 			"ORGÂNICO",
		// 			"FINALIDADE",
		// 			"ORIGEM",
		// 			"PREÇO"
		// 		],
		// 		"MERCADOLIVRE": [
		// 			"Para uma melhor alimentação conheça a alga fotossintetizante verde-azul SPIRULINA, capaz de produzir proteínas de qualidade e em grande quantidade (cerca de 60 á 70%). Além disso, ela possui todos os aminoácidos essenciais em perfeito equilíbrio para você. Ela ainda tem a habilidade natural rara de produzir a vitamina B12, que ajuda a manter o metabolismo do sistema nervoso e as células do nosso sangue saudáveis. <br><br>Alguns pesquisadores até a consideram como um superalimento pois ela contém vitaminas A, B1, B2, B3, B5, B6, B8, B9 e B12 como também é uma ótima fonte de minerais como ferro, fósforo, zinco, cálcio, potássio, magnésio, sódio e selênio. Sem contar que o tão bem falado ômega 3 faz parte dessa alga, mas não somente o ômega 3 como também o ômega 6,7 e 9. Além disso, seu consumo traz ácidos nucléicos (RNA e DNA) de onde os nutrientes são melhores absorvidos pelo organismo, pois em seu processo poupa energia do corpo. E por essas e outras razões é que a SPIRULINA é considerada o alimento do futuro! Alguns até apontam ela como uma excelente aliada ao combate da desnutrição.<br><br>A SPIRULINA em tabletes é uma forma prática para você que leva uma vida agitada. Com 180, você garante 2 meses de suplementação nutricional natural com a SPIRULINA, para levar aonde quiser.<br><br><br><br><br><br><br>Benefícios e Diferenciais<br><br><br>- Proteínas de alto valor biológico;<br><br><br>- Minerais como fósforo, potássio e cálcio;<br><br><br>- Ácidos graxos poli-insaturados;<br><br><br>- Substancias com poderosa ação antioxidante como o betacaroteno e vitamina E;<br><br><br>- Vitaminas do complexo B.<br><br><br>- Auxílio na redução do colesterol<br><br><br>- Controle da saciedade<br><br><br>- Redução dos níveis de glicemia<br><br><br>- Eliminação de toxinas acumuladas<br><br><br><br><br><br><br><br>Informações Complementares<br><br><br>Você sabe por que essa alga se chama SPIRULINA?<br><br><br>Esse nome vem de sua aparência pois vista pelo microscópio, essa alga se parece com uma espiral de longos e finos filamentos.<br><br><br>E se você está procurando um alimento completo e rico em proteínas de origem vegetal, achou o produto que queria. A SPIRULINA possui uma concentração de proteínas de 50% a 70% de proteína por peso, maior que a da carne vermelha, que tem cerca de 27%.  Além disso ela é uma alga rica em nutrientes, fazendo parte até do cardápio de atletas que colocam seu corpo ao limite.<br><br><br><br><br><br><br><br>Ingredientes<br><br><br>Spirulina em comprimido (Spirulina platensis). <br><br><br><br><br><br><br><br>Modo de Uso<br><br><br>Aconselha-se 01 colher de chá, três vezes ao dia, 20 minutos antes das refeições, ingerindo com líquidos."
		// 		],
		// 		"MEUS NUTRIENTES": [
		// 			"<div class=\"nutrientes\"> <br><br><br>    <div class=\"informacao\"> <br><br><br>        <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"overflow:hidden;display:block;border-collapse:collapse;\"> <br><br><br>            <tr> <br><br><br>                <td><h3>Informações Nutricionais</h3></td> <br><br><br>            </tr> <br><br><br>            <tr> <br><br><br>                <td><p>Porção de 3 comprimidos (1,5g)</p></td> <br><br><br>            </tr> <br><br><br>            <tr> <br><br><br>                <td><div class=\"quantidade\">Quantidade por porção</div><div class=\"vd\">%V.D*</div></td> <br><br><br>            </tr> <br><br><br>            <tr> <br><br><br>             <td> <br><br><br>                 <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"overflow:hidden;display:block;border-collapse:collapse;\"> <br><br><br>                        <tr> <br><br><br>                            <td class=\"first\"><p>Valor Calórico</p></td> <br><br><br>                            <td><p> 5kcal</p></td> <br><br><br>                            <td class=\"last\"><p>0%</p></td> <br><br><br>                        </tr> <br><br><br><tr> <br><br><br>                            <td class=\"first\"><p>Carboidratos</p></td> <br><br><br>                            <td><p>0,3g</p></td> <br><br><br>                            <td class=\"last\"><p>0%</p></td> <br><br><br>                        </tr> <br><br><br><tr> <br><br><br>                            <td class=\"first\"><p>Proteínas</p></td> <br><br><br>                            <td><p>0,8g</p></td> <br><br><br>                            <td class=\"last\"><p>1%</p></td> <br><br><br>                        </tr> <br><br><br><tr> <br><br><br>                            <td class=\"first\"><p>Gorduras Totais</p></td> <br><br><br>                            <td><p>0,1g</p></td> <br><br><br>                            <td class=\"last\"><p>0%</p></td> <br><br><br>                        </tr> <br><br><br><tr> <br><br><br>                            <td class=\"first\"><p>Gorduras Saturadas</p></td> <br><br><br>                            <td><p>0,04g</p></td> <br><br><br>                            <td class=\"last\"><p>0%</p></td> <br><br><br>                        </tr> <br><br><br><tr> <br><br><br>                            <td class=\"first\"><p>Fibra Alimentar</p></td> <br><br><br>                            <td><p>0,09g</p></td> <br><br><br>                            <td class=\"last\"><p>0%</p></td> <br><br><br>                        </tr> <br><br><br><tr> <br><br><br>                            <td class=\"first\"><p>Cálcio</p></td> <br><br><br>                            <td><p>3mg</p></td> <br><br><br>                            <td class=\"last\"><p>0%</p></td> <br><br><br>                        </tr> <br><br><br><tr> <br><br><br>                            <td class=\"first\"><p>Ferro</p></td> <br><br><br>                            <td><p>0,3mg</p></td> <br><br><br>                            <td class=\"last\"><p>2%</p></td> <br><br><br>                        </tr> <br><br><br><tr> <br><br><br>                            <td class=\"first\"><p>Sódio</p></td> <br><br><br>                            <td><p>19mg</p></td> <br><br><br>                            <td class=\"last\"><p>1%</p></td> <br><br><br>                        </tr> <br><br><br>                       <br><br><br>                                          </table> <br><br><br>                </td> <br><br><br>            </tr> <br><br><br>  </table> <br><br><br>        <p> Não contém quantidades significativas de Valor Energético, Proteínas, Carboidratos, Gorduras Totais, Gorduras Saturadas, Gorduras Trans, Fibra Alimentar e Sódio. </p> <p><br><br><br>(%VD) Valores diários de referência com base em uma dieta de 2000 Kcal ou 8400kJ. Seus valores diários podem ser maiores ou menores dependendo de suas necessidades energéticas.<br><br><br></p> <br><br><br>    </div> <br><br><br>     <br><br><br>    <div class=\"nota\"> <br><br><br>        <h3>Tome nota:</h3> <br><br><br>        <div class=\"fundo\"> <br><br><br>            <div> <br><br><br>                <h3>Cálcio</h3> <br><br><br>                <p>3mg</p> <br><br><br>            </div> <br><br><br>            <div> <br><br><br>                <h3>Lactose</h3> <br><br><br>                <p>0g</p> <br><br><br>            </div> <br><br><br>            <div> <br><br><br>                <h3>Glúten</h3> <br><br><br>                <p>0g</p> <br><br><br>            </div> <br><br><br>            <div class=\"last\"> <br><br><br>                <h3>Carboidratos</h3> <br><br><br>                <p>5</p>     <br><br><br><p>Kcal</p>                           <br><br><br>            </div> <br><br><br>        </div> <br><br><br>        <p><strong>Ingredientes:</Strong>Spirulina em comprimido (Spirulina platensis). NÃO CONTÉM GLÚTEN.     </p> <br><br><br>    </div> <br><br><br>     <br><br><br>    <div class=\"advertencias\"> <br><br><br>        <h3>Advertências:</h3> <br><br><p> Contém Fenilalanina</p><br>        <p> A SPIRULINA precisa ser consumida junto de líquidos. Consumir sob orientação de médico ou do nutricionista. Não é indicado o seu uso para mulheres grávidas ou amamentando e crianças. </p> <br><br><br></div> <br><br><br>     <br><br><br>    <div class=\"qntdos\"> <br><br><br>        <div> <br><br><br>            <h3>Quantidade</h3> <br><br><br>            <h3 class=\"last\">Doses</h3> <br><br><br>        </div> <br><br><br>        <div> <br><br><br>            <p>180 comprimidos</p> <br><br><br>            <p class=\"last\">60</p> <br><br><br>        </div> <br><br><br>    </div> <br><br><br>     <br><br><br>    <div class=\"instrucoes\"> <br><br><br>        <h3>Instruções de uso:</h3> <br><br><br>        <p>Aconselha-se 01 comprimido, três vezes ao dia, 20 minutos antes das refeições, ingerindo com líquidos.</p>     <br><br><br></div>"
		// 		],
		// 		"O QUE FALAM DE MIM?": [
		// 			"<h3>O que falam de mim?</h3>"
		// 		],
		// 		"ONDE NASCI": [
		// 			"<p>A Fazenda Tamanduá é uma marca brasileira e está situada no Município de Santa Terezinha, no Estado da Paraíba. O clima é característico das regiões tropicais semiáridas, com as chuvas anuais concentradas num pequeno período de 2 a 4 meses, seguidas por um longo período de seca, que pode durar de 8 a 12 meses. <br><br><br></p><br><br><br><p><br><br><br>A presença de uma elevada formação rochosa típica do sertão, o “inselberg” denominado Serrote Tamanduá, originou o nome da Fazenda. Desde 1977 a Fazenda Tamanduá pertence a Mocó Agropecuária Ltda. <br><br><br></p><br><br><br><p><br><br><br>Com o objetivo inicial de trazer mais tecnologia para as atividades tradicionais do sertão (como o gado e a plantação de algodão), focando na divulgação de técnicas mais adaptadas para a região. Hoje, a Fazenda Tamanduá, busca também aproveitar suas próprias matérias-primas, com seus produtos orgânicos, que trazem um equilíbrio entre meio ambiente e a produção, e cada vez mais investe em alternativas onde preservação e produtividade caminham juntas. Ela possui o certificado de alimento orgânico do Instituto Biodinâmico (IBD), uma certificação que garante ao consumidor que o produto é isento de todo e qualquer risco de contaminação, principalmente da água, por metais pesados, pesticidas ou hormônios.<br><br><br></p>"
		// 		],
		// 		"CÓDIGO ANVISA": [
		// 			"6.1256.0006.001-7"
		// 		],
		// 		"VÍDEO": [
		// 			"Para uma melhor alimentação conheça a alga fotossintetizante verde-azul SPIRULINA, capaz de produzir proteínas de qualidade e em grande quantidade (cerca de 60 á 70%). Além disso, ela possui todos os aminoácidos essenciais em perfeito equilíbrio para você. Ela ainda tem a habilidade natural rara de produzir a vitamina B12, que ajuda a manter o metabolismo do sistema nervoso e as células do nosso sangue saudáveis. Alguns pesquisadores até a consideram como um superalimento pois ela contém vitaminas A, B1, B2, B3, B5, B6, B8, B9 e B12 como também é uma ótima fonte de minerais como ferro, fósforo, zinco, cálcio, potássio, magnésio, sódio e selênio. Sem contar que o tão bem falado ômega 3 faz parte dessa alga, mas não somente o ômega 3 como também o ômega 6,7 e 9. Além disso, seu consumo traz ácidos nucléicos (RNA e DNA) de onde os nutrientes são melhores absorvidos pelo organismo, pois em seu processo poupa energia do corpo. E por essas e outras razões é que a SPIRULINA é considerada o alimento do futuro! Alguns até apontam ela como uma excelente aliada ao combate da desnutrição. A SPIRULINA em tabletes é uma forma prática para você que leva uma vida agitada. Com 180, você garante 2 meses de suplementação nutricional natural com a SPIRULINA, para levar aonde quiser.<br>Benefícios e Diferenciais<br>- Proteínas de alto valor biológico; - Minerais como fósforo, potássio e cálcio; - Ácidos graxos poli-insaturados; - Substancias com poderosa ação antioxidante como o betacaroteno e vitamina E; - Vitaminas do complexo B. - Auxílio na redução do colesterol - Controle da saciedade - Redução dos níveis de glicemia - Eliminação de toxinas acumuladas<br>I<br>nformações Complementares<br><br>Você sabe por que essa alga se chama SPIRULINA? Esse nome vem de sua aparência pois vista pelo microscópio, essa alga se parece com uma espiral de longos e finos filamentos. E se você está procurando um alimento completo e rico em proteínas de origem vegetal, achou o produto que queria. A SPIRULINA possui uma concentração de proteínas de 50% a 70% de proteína por peso, maior que a da carne vermelha, que tem cerca de 27%. Além disso ela é uma alga rica em nutrientes, fazendo parte até do cardápio de atletas que colocam seu corpo ao limite.<br><br>Ingredientes<br><br>Spirulina em comprimido (Spirulina platensis).<br><br>Modo de Uso<br><br>Aconselha-se 01 colher de chá, três vezes ao dia, 20 minutos antes das refeições, ingerindo com líquidos.<br><br><br>- Controle da saciedade<br><br><br>- Redução dos níveis de glicemia<br><br><br>- Eliminação de toxinas acumuladas<br><br><br></p><br><br><br><br><br><b>Informações Complementares</b><br><br><br><p> <br>Você sabe por que essa alga se chama SPIRULINA?<br><br><br>Esse nome vem de sua aparência pois vista pelo microscópio, essa alga se parece com uma espiral de longos e finos filamentos.<br><br><br>E se você está procurando um alimento completo e rico em proteínas de origem vegetal, achou o produto que queria. A SPIRULINA possui uma concentração de proteínas de 50% a 70% de proteína por peso, maior que a da carne vermelha, que tem cerca de 27%.  Além disso ela é uma alga rica em nutrientes, fazendo parte até do cardápio de atletas que colocam seu corpo ao limite.<br><br><br></p> <br><br><br><br><br><b>Ingredientes</b><br><br><br><p> <br>Spirulina em comprimido (Spirulina platensis). <br><br><br></p><br><br><br><br><br><b>Modo de Uso</b><br><br><br><p> <br>Aconselha-se 01 colher de chá, três vezes ao dia, 20 minutos antes das refeições, ingerindo com líquidos.<br><br><br></p><br><br><br><br><br><img src=\"/arquivos/tabela spirulina co.jpg\" title=\"spirulina\" alt=\"spirulina\" />"
		// 		],
		// 		"Descrição": [
		// 			"MERCADOLIVRE",
		// 			"MEUS NUTRIENTES",
		// 			"O QUE FALAM DE MIM?",
		// 			"ONDE NASCI",
		// 			"CÓDIGO ANVISA",
		// 			"VÍDEO"
		// 		],
		// 		"OBJETIVOS": [
		// 			"FORTALECER A IMUNIDADE"
		// 		],
		// 		"FORMA": [
		// 			"TABLETES"
		// 		],
		// 		"PRODUTOS ORGÂNICOS": [
		// 			"SIM"
		// 		],
		// 		"PRODUTOS VEGETARIANOS": [
		// 			"SIM"
		// 		],
		// 		"LIVRE DE GLÚTEN": [
		// 			"SIM"
		// 		],
		// 		"SEM LACTOSE": [
		// 			"SIM"
		// 		],
		// 		"ZERO AÇUCAR": [
		// 			"SIM"
		// 		],
		// 		"Filtros Departamentos/Categorias": [
		// 			"OBJETIVOS",
		// 			"FORMA",
		// 			"PRODUTOS ORGÂNICOS",
		// 			"PRODUTOS VEGETARIANOS",
		// 			"LIVRE DE GLÚTEN",
		// 			"SEM LACTOSE",
		// 			"ZERO AÇUCAR"
		// 		],
		// 		"allSpecifications": [
		// 			"SEXO",
		// 			"ORGÂNICO",
		// 			"FINALIDADE",
		// 			"ORIGEM",
		// 			"PREÇO",
		// 			"MERCADOLIVRE",
		// 			"MEUS NUTRIENTES",
		// 			"O QUE FALAM DE MIM?",
		// 			"ONDE NASCI",
		// 			"CÓDIGO ANVISA",
		// 			"VÍDEO",
		// 			"OBJETIVOS",
		// 			"FORMA",
		// 			"PRODUTOS ORGÂNICOS",
		// 			"PRODUTOS VEGETARIANOS",
		// 			"LIVRE DE GLÚTEN",
		// 			"SEM LACTOSE",
		// 			"ZERO AÇUCAR"
		// 		],
		// 		"description": "<p>Para uma melhor alimentação conheça a alga fotossintetizante verde-azul<strong> SPIRULINA</strong>, capaz de produzir proteínas de qualidade e em grande quantidade (cerca de 60 á 70%). Além disso, ela possui todos os aminoácidos essenciais em perfeito equilíbrio para você. Ela ainda tem a habilidade natural rara de produzir a vitamina B12, que ajuda a manter o metabolismo do sistema nervoso e as células do nosso sangue saudáveis.</p><br><p>&nbsp;</p><br><p>Alguns pesquisadores até a consideram como um superalimento pois ela contém vitaminas A, B1, B2, B3, B5, B6, B8, B9 e B12 como também é uma ótima fonte de minerais como ferro, fósforo, zinco, cálcio, potássio, magnésio, sódio e selênio. Sem contar que o tão bem falado ômega 3 faz parte dessa alga, mas não somente o ômega 3 como também o ômega 6,7 e 9. Além disso, seu consumo traz ácidos nucléicos (RNA e DNA) de onde os nutrientes são melhores absorvidos pelo organismo, pois em seu processo poupa energia do corpo. E por essas e outras razões é que a <strong>SPIRULINA</strong> é considerada o alimento do futuro! </p><br><p>&nbsp;</p><br><p>Alguns até apontam ela como uma excelente aliada ao combate da desnutrição.A <strong>SPIRULINA</strong> em tabletes é uma forma prática para você que leva uma vida agitada. Se for viajar, não deixe de levar seu suplemento nutricional natural, invista nessa forma em comprimido.</p><br><p>&nbsp;</p><br><br><br><br><br><p><b>Benefícios e Diferenciais</b><br>  <br>  <br></p><br><ul><br>  <li><br>    <br>    <br>    - Proteínas de alto valor biológico;<br>    <br>    <br>  </li><br>  <li>- Minerais como fósforo, potássio e cálcio;  </li><br>  <li>- Ácidos graxos poli-insaturados;  </li><br>  <li>- Substancias com poderosa ação antioxidante como o betacaroteno e vitamina E;  </li><br>  <li>- Vitaminas do complexo B.<br>    <br>    <br>    - Auxílio na redução do colesterol  </li><br>  <li>- Controle da saciedade<br>    <br>    <br>    - Redução dos níveis de glicemia  </li><br>  <li>- Eliminação de toxinas acumuladas </li><br></ul><br><p>&nbsp;</p><br><p><b>Informações Complementares</b><br>  <br>  <br></p><br><p> <br><br>Você sabe por que essa alga se chama SPIRULINA?<br><br><br>Esse nome vem de sua aparência pois vista pelo microscópio, essa alga se parece com uma espiral de longos e finos filamentos.<br><br><br><br><br>E se você está procurando um alimento completo e rico em proteínas de origem vegetal, achou o produto que queria. A SPIRULINA possui uma concentração de proteínas de 50% a 70% de proteína por peso, maior que a da carne vermelha, que tem cerca de 27%.  Além disso ela é uma alga rica em nutrientes, fazendo parte até do cardápio de atletas que colocam seu corpo ao limite.<br><br><br></p><br><p>&nbsp;</p> <br><br><br><br><br><p><b>Ingredientes</b><br>  <br>  <br></p><br><p> <br><br>Spirulina em comprimido (Spirulina platensis).</p><br><p>&nbsp;</p><br><br><br><br><br><p><b>Modo de Uso</b><br>  <br>  <br></p><br><p> <br><br>Aconselha-se 01 comprimido, três vezes ao dia, 20 minutos antes das refeições, ingerindo com líquidos.</p><br><p></p><br><img src=\"http://lojaprojetoverao.vteximg.com.br/arquivos/Spirulina_fazenda_tamandua_banner-00_01.jpg\" title=\"Spirulina Fazenda Tamanduá\" alt-\"spirulina\"><img src=\"http://lojaprojetoverao.vteximg.com.br/arquivos/Spirulina_fazenda_tamandua_banner-00_02.jpg\" title=\"Spirulina Fazenda Tamanduá\" alt-\"spirulina\"><img src=\"http://lojaprojetoverao.vteximg.com.br/arquivos/Spirulina_fazenda_tamandua_banner-00_03.jpg\" title=\"Spirulina Fazenda Tamanduá\" alt-\"spirulina\"><img src=\"http://lojaprojetoverao.vteximg.com.br/arquivos/Spirulina_fazenda_tamandua_banner-00_04.jpg\" title=\"Spirulina Fazenda Tamanduá\" alt-\"spirulina\"><img src=\"http://lojaprojetoverao.vteximg.com.br/arquivos/Spirulina_fazenda_tamandua_banner-00_05.jpg\" title=\"Spirulina Fazenda Tamanduá\" alt-\"spirulina\"><img src=\"http://lojaprojetoverao.vteximg.com.br/arquivos/Spirulina_fazenda_tamandua_banner-00_06.jpg\" title=\"Spirulina Fazenda Tamanduá\" alt-\"spirulina\"><img src=\"http://lojaprojetoverao.vteximg.com.br/arquivos/Spirulina_fazenda_tamandua_banner-00_07.jpg\" title=\"Spirulina Fazenda Tamanduá\" alt-\"spirulina\"><br><br><br><a href=\"https://www.lojaprojetoverao.com.br/kit-3x-spirulina-organica-500mg-180g-em-tabletes-fazenda-tamandua/p\"><img src=\"http://lojaprojetoverao.vteximg.com.br/arquivos/spirulina-fazenda-tamandua-banner-kits-180g.jpg\"></a>",
		// 		"items": [
		// 			{
		// 				"itemId": "2000167",
		// 				"name": "Spirulina Orgânica Certificada 180g 360 comprimidos - Fazenda Tamanduá",
		// 				"nameComplete": "Spirulina Orgânica Certificada 180g 360 comprimidos - Fazenda Tamanduá",
		// 				"complementName": "A Spirulina é um dos poucos organismos capazes de sintetizar vitamina B12, ela tem sido indicada na alimentação humana e é considerada o alimento do futuro.",
		// 				"ean": "7898142064584",
		// 				"referenceId": [
		// 					{
		// 						"Key": "RefId",
		// 						"Value": "2725_0_0_U"
		// 					}
		// 				],
		// 				"measurementUnit": "un",
		// 				"unitMultiplier": 1.0000,
		// 				"modalType": null,
		// 				"isKit": false,
		// 				"images": [
		// 					{
		// 						"imageId": "162525",
		// 						"imageLabel": "",
		// 						"imageTag": "<img src=\"~/arquivos/ids/162525-#width#-#height#/fazenda-tamandua-spirulina-180g-comprimidos-500mg-360-aprox-loja-projeto-verao-b2w.jpg?v=636536943294800000\" width=\"#width#\" height=\"#height#\" alt=\"fazenda-tamandua-spirulina-180g-comprimidos-500mg-360-aprox-loja-projeto-verao-b2w\" id=\"\" />",
		// 						"imageUrl": "http://lojaprojetoverao.vteximg.com.br/arquivos/ids/162525/fazenda-tamandua-spirulina-180g-comprimidos-500mg-360-aprox-loja-projeto-verao-b2w.jpg?v=636536943294800000",
		// 						"imageText": "fazenda-tamandua-spirulina-180g-comprimidos-500mg-360-aprox-loja-projeto-verao-b2w"
		// 					},
		// 					{
		// 						"imageId": "161630",
		// 						"imageLabel": "",
		// 						"imageTag": "<img src=\"~/arquivos/ids/161630-#width#-#height#/fazenda-tamandua-spirulina-500mg-organica-360-tabletes-F-loja-projeto-verao.jpg?v=636380846230230000\" width=\"#width#\" height=\"#height#\" alt=\"fazenda-tamandua-spirulina-500mg-organica-360-tabletes-F-loja-projeto-verao\" id=\"\" />",
		// 						"imageUrl": "http://lojaprojetoverao.vteximg.com.br/arquivos/ids/161630/fazenda-tamandua-spirulina-500mg-organica-360-tabletes-F-loja-projeto-verao.jpg?v=636380846230230000",
		// 						"imageText": "fazenda-tamandua-spirulina-500mg-organica-360-tabletes-F-loja-projeto-verao"
		// 					},
		// 					{
		// 						"imageId": "161631",
		// 						"imageLabel": "",
		// 						"imageTag": "<img src=\"~/arquivos/ids/161631-#width#-#height#/fazenda-tamandua-spirulina-500mg-organica-360-tabletes-L-loja-projeto-verao.jpg?v=636380846478300000\" width=\"#width#\" height=\"#height#\" alt=\"fazenda-tamandua-spirulina-500mg-organica-360-tabletes-L-loja-projeto-verao\" id=\"\" />",
		// 						"imageUrl": "http://lojaprojetoverao.vteximg.com.br/arquivos/ids/161631/fazenda-tamandua-spirulina-500mg-organica-360-tabletes-L-loja-projeto-verao.jpg?v=636380846478300000",
		// 						"imageText": "fazenda-tamandua-spirulina-500mg-organica-360-tabletes-L-loja-projeto-verao"
		// 					},
		// 					{
		// 						"imageId": "161632",
		// 						"imageLabel": "",
		// 						"imageTag": "<img src=\"~/arquivos/ids/161632-#width#-#height#/fazenda-tamandua-spirulina-500mg-organica-360-tabletes-D-loja-projeto-verao.jpg?v=636380846821200000\" width=\"#width#\" height=\"#height#\" alt=\"fazenda-tamandua-spirulina-500mg-organica-360-tabletes-D-loja-projeto-verao\" id=\"\" />",
		// 						"imageUrl": "http://lojaprojetoverao.vteximg.com.br/arquivos/ids/161632/fazenda-tamandua-spirulina-500mg-organica-360-tabletes-D-loja-projeto-verao.jpg?v=636380846821200000",
		// 						"imageText": "fazenda-tamandua-spirulina-500mg-organica-360-tabletes-D-loja-projeto-verao"
		// 					},
		// 					{
		// 						"imageId": "161633",
		// 						"imageLabel": "",
		// 						"imageTag": "<img src=\"~/arquivos/ids/161633-#width#-#height#/fazenda-tamandua-spirulina-500mg-organica-360-tabletes-C-loja-projeto-verao-Editar.jpg?v=636380847068930000\" width=\"#width#\" height=\"#height#\" alt=\"fazenda-tamandua-spirulina-500mg-organica-360-tabletes-C-loja-projeto-verao\" id=\"\" />",
		// 						"imageUrl": "http://lojaprojetoverao.vteximg.com.br/arquivos/ids/161633/fazenda-tamandua-spirulina-500mg-organica-360-tabletes-C-loja-projeto-verao-Editar.jpg?v=636380847068930000",
		// 						"imageText": "fazenda-tamandua-spirulina-500mg-organica-360-tabletes-C-loja-projeto-verao"
		// 					}
		// 				],
		// 				"sellers": [
		// 					{
		// 						"sellerId": "1",
		// 						"sellerName": "Projeto Verão",
		// 						"addToCartLink": "https://lojaprojetoverao.vtexcommercestable.com.br/checkout/cart/add?sku=2000167&qty=1&seller=1&sc=1&price=10500&cv=4245bae4a4ba88e6e401a3077d07a685_&sc=1",
		// 						"sellerDefault": true,
		// 						"commertialOffer": {
		// 							"DeliverySlaSamplesPerRegion": {
		// 								"0": {
		// 									"DeliverySlaPerTypes": [],
		// 									"Region": null
		// 								}
		// 							},
		// 							"Installments": [
		// 								{
		// 									"Value": 105.0,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 105.0,
		// 									"NumberOfInstallments": 1,
		// 									"PaymentSystemName": "American Express",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "American Express à vista"
		// 								},
		// 								{
		// 									"Value": 52.5,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 105.0,
		// 									"NumberOfInstallments": 2,
		// 									"PaymentSystemName": "American Express",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "American Express 2 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 35.0,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 105.0,
		// 									"NumberOfInstallments": 3,
		// 									"PaymentSystemName": "American Express",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "American Express 3 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 26.25,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 105.0,
		// 									"NumberOfInstallments": 4,
		// 									"PaymentSystemName": "American Express",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "American Express 4 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 21.0,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 105.0,
		// 									"NumberOfInstallments": 5,
		// 									"PaymentSystemName": "American Express",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "American Express 5 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 17.5,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 105.0,
		// 									"NumberOfInstallments": 6,
		// 									"PaymentSystemName": "American Express",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "American Express 6 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 15.0,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 105.0,
		// 									"NumberOfInstallments": 7,
		// 									"PaymentSystemName": "American Express",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "American Express 7 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 13.12,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 105.0,
		// 									"NumberOfInstallments": 8,
		// 									"PaymentSystemName": "American Express",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "American Express 8 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 105.0,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 105.0,
		// 									"NumberOfInstallments": 1,
		// 									"PaymentSystemName": "Visa",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Visa à vista"
		// 								},
		// 								{
		// 									"Value": 52.5,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 105.0,
		// 									"NumberOfInstallments": 2,
		// 									"PaymentSystemName": "Visa",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Visa 2 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 35.0,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 105.0,
		// 									"NumberOfInstallments": 3,
		// 									"PaymentSystemName": "Visa",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Visa 3 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 26.25,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 105.0,
		// 									"NumberOfInstallments": 4,
		// 									"PaymentSystemName": "Visa",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Visa 4 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 21.0,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 105.0,
		// 									"NumberOfInstallments": 5,
		// 									"PaymentSystemName": "Visa",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Visa 5 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 17.5,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 105.0,
		// 									"NumberOfInstallments": 6,
		// 									"PaymentSystemName": "Visa",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Visa 6 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 15.0,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 105.0,
		// 									"NumberOfInstallments": 7,
		// 									"PaymentSystemName": "Visa",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Visa 7 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 13.12,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 105.0,
		// 									"NumberOfInstallments": 8,
		// 									"PaymentSystemName": "Visa",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Visa 8 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 105.0,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 105.0,
		// 									"NumberOfInstallments": 1,
		// 									"PaymentSystemName": "Diners",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Diners à vista"
		// 								},
		// 								{
		// 									"Value": 52.5,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 105.0,
		// 									"NumberOfInstallments": 2,
		// 									"PaymentSystemName": "Diners",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Diners 2 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 35.0,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 105.0,
		// 									"NumberOfInstallments": 3,
		// 									"PaymentSystemName": "Diners",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Diners 3 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 26.25,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 105.0,
		// 									"NumberOfInstallments": 4,
		// 									"PaymentSystemName": "Diners",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Diners 4 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 21.0,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 105.0,
		// 									"NumberOfInstallments": 5,
		// 									"PaymentSystemName": "Diners",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Diners 5 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 17.5,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 105.0,
		// 									"NumberOfInstallments": 6,
		// 									"PaymentSystemName": "Diners",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Diners 6 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 15.0,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 105.0,
		// 									"NumberOfInstallments": 7,
		// 									"PaymentSystemName": "Diners",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Diners 7 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 13.12,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 105.0,
		// 									"NumberOfInstallments": 8,
		// 									"PaymentSystemName": "Diners",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Diners 8 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 105.0,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 105.0,
		// 									"NumberOfInstallments": 1,
		// 									"PaymentSystemName": "Mastercard",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Mastercard à vista"
		// 								},
		// 								{
		// 									"Value": 52.5,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 105.0,
		// 									"NumberOfInstallments": 2,
		// 									"PaymentSystemName": "Mastercard",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Mastercard 2 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 35.0,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 105.0,
		// 									"NumberOfInstallments": 3,
		// 									"PaymentSystemName": "Mastercard",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Mastercard 3 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 26.25,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 105.0,
		// 									"NumberOfInstallments": 4,
		// 									"PaymentSystemName": "Mastercard",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Mastercard 4 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 21.0,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 105.0,
		// 									"NumberOfInstallments": 5,
		// 									"PaymentSystemName": "Mastercard",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Mastercard 5 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 17.5,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 105.0,
		// 									"NumberOfInstallments": 6,
		// 									"PaymentSystemName": "Mastercard",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Mastercard 6 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 15.0,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 105.0,
		// 									"NumberOfInstallments": 7,
		// 									"PaymentSystemName": "Mastercard",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Mastercard 7 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 13.12,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 105.0,
		// 									"NumberOfInstallments": 8,
		// 									"PaymentSystemName": "Mastercard",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Mastercard 8 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 105.0,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 105.0,
		// 									"NumberOfInstallments": 1,
		// 									"PaymentSystemName": "Hipercard",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Hipercard à vista"
		// 								},
		// 								{
		// 									"Value": 52.5,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 105.0,
		// 									"NumberOfInstallments": 2,
		// 									"PaymentSystemName": "Hipercard",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Hipercard 2 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 35.0,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 105.0,
		// 									"NumberOfInstallments": 3,
		// 									"PaymentSystemName": "Hipercard",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Hipercard 3 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 26.25,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 105.0,
		// 									"NumberOfInstallments": 4,
		// 									"PaymentSystemName": "Hipercard",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Hipercard 4 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 21.0,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 105.0,
		// 									"NumberOfInstallments": 5,
		// 									"PaymentSystemName": "Hipercard",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Hipercard 5 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 17.5,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 105.0,
		// 									"NumberOfInstallments": 6,
		// 									"PaymentSystemName": "Hipercard",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Hipercard 6 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 15.0,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 105.0,
		// 									"NumberOfInstallments": 7,
		// 									"PaymentSystemName": "Hipercard",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Hipercard 7 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 13.12,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 105.0,
		// 									"NumberOfInstallments": 8,
		// 									"PaymentSystemName": "Hipercard",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Hipercard 8 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 105.0,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 105.0,
		// 									"NumberOfInstallments": 1,
		// 									"PaymentSystemName": "Elo",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Elo à vista"
		// 								},
		// 								{
		// 									"Value": 52.5,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 105.0,
		// 									"NumberOfInstallments": 2,
		// 									"PaymentSystemName": "Elo",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Elo 2 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 35.0,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 105.0,
		// 									"NumberOfInstallments": 3,
		// 									"PaymentSystemName": "Elo",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Elo 3 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 26.25,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 105.0,
		// 									"NumberOfInstallments": 4,
		// 									"PaymentSystemName": "Elo",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Elo 4 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 21.0,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 105.0,
		// 									"NumberOfInstallments": 5,
		// 									"PaymentSystemName": "Elo",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Elo 5 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 17.5,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 105.0,
		// 									"NumberOfInstallments": 6,
		// 									"PaymentSystemName": "Elo",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Elo 6 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 15.0,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 105.0,
		// 									"NumberOfInstallments": 7,
		// 									"PaymentSystemName": "Elo",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Elo 7 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 13.12,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 105.0,
		// 									"NumberOfInstallments": 8,
		// 									"PaymentSystemName": "Elo",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Elo 8 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 105.0,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 105.0,
		// 									"NumberOfInstallments": 1,
		// 									"PaymentSystemName": "Vale",
		// 									"PaymentSystemGroupName": "giftCardPaymentGroup",
		// 									"Name": "Vale à vista"
		// 								},
		// 								{
		// 									"Value": 105.0,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 105.0,
		// 									"NumberOfInstallments": 1,
		// 									"PaymentSystemName": "BOLBRADESCO",
		// 									"PaymentSystemGroupName": "bankInvoicePaymentGroup",
		// 									"Name": "BOLBRADESCO à vista"
		// 								}
		// 							],
		// 							"DiscountHighLight": [],
		// 							"GiftSkuIds": [],
		// 							"Teasers": [],
		// 							"BuyTogether": [],
		// 							"Price": 105.0,
		// 							"ListPrice": 105.0,
		// 							"PriceWithoutDiscount": 105.0,
		// 							"RewardValue": 0.0,
		// 							"PriceValidUntil": "2020-02-28T22:39:55Z",
		// 							"AvailableQuantity": 15,
		// 							"Tax": 0.0,
		// 							"DeliverySlaSamples": [
		// 								{
		// 									"DeliverySlaPerTypes": [],
		// 									"Region": null
		// 								}
		// 							],
		// 							"GetInfoErrorMessage": null,
		// 							"CacheVersionUsedToCallCheckout": "4245bae4a4ba88e6e401a3077d07a685_"
		// 						}
		// 					}
		// 				],
		// 				"Videos": []
		// 			}
		// 		]
		// 	},
		// 	{
		// 		"productId": "2000082",
		// 		"productName": "Cloreto de Magnésio PA Puro (500mg) de 60 Cápsulas Vegetarianas - Meissen",
		// 		"brand": "Meissen",
		// 		"linkText": "cloreto-de-magnesio-pa-500mg-60-capsulas-meissen",
		// 		"productReference": "2000082",
		// 		"categoryId": "537399643",
		// 		"productTitle": "",
		// 		"metaTagDescription": "O &lt;strong&gt;cloreto de magnesio PA&lt;/strong&gt;  funciona como um suplemento alimentar cheio de beneficios para a saude, que nos ajuda a manter o corpo jovem e vigorante, alem de colaborar no combate e prevencao de muitas infeccoes.",
		// 		"clusterHighlights": {},
		// 		"productClusters": {
		// 			"140": "Loja",
		// 			"141": "Comparadores",
		// 			"164": "Zoom",
		// 			"177": "Black Friday Meissen"
		// 		},
		// 		"searchableClusters": {},
		// 		"categories": [
		// 			"/Suplementos funcionais e ômegas/",
		// 			"/Suplementos funcionais e ômegas/Suplementos funcionais e naturais/",
		// 			"/Objetivos/Saúde dos homens/",
		// 			"/Objetivos/",
		// 			"/Vitaminas e minerais/Minerais/",
		// 			"/Vitaminas e minerais/",
		// 			"/Vitaminas e minerais/Minerais/Magnésio/",
		// 			"/Suplementos funcionais e ômegas/Suplementos funcionais e naturais/Cloreto de magnésio/",
		// 			"/Objetivos/Saúde feminina/"
		// 		],
		// 		"categoriesIds": [
		// 			"/537399643/",
		// 			"/537399643/186013572/",
		// 			"/36144580/750627591/",
		// 			"/36144580/",
		// 			"/1521962469/1205244504/",
		// 			"/1521962469/",
		// 			"/1521962469/1205244504/1272483216/",
		// 			"/537399643/186013572/1948145876/",
		// 			"/36144580/1953866447/"
		// 		],
		// 		"link": "https://lojaprojetoverao.vtexcommercestable.com.br/cloreto-de-magnesio-pa-500mg-60-capsulas-meissen/p",
		// 		"SELOS": [
		// 			"SEM GLÚTEN",
		// 			"SEM LACTOSE",
		// 			"ZERO AÇÚCAR (DIET)",
		// 			"SEM CORANTES",
		// 			"SEM AROMATIZANTES",
		// 			"SEM CONSERVANTES",
		// 			"NÃO TRANSGÊNICO",
		// 			"NATURAL",
		// 			"REGISTRO ANVISA",
		// 			"PRODUTO EM PÓ",
		// 			"PRODUTO VEGETARIANO"
		// 		],
		// 		"Especificações": [
		// 			"SELOS"
		// 		],
		// 		"SEXO": [
		// 			"HOMEM",
		// 			"MULHER"
		// 		],
		// 		"ORGÂNICO": [
		// 			"NÃO"
		// 		],
		// 		"FINALIDADE": [
		// 			"SAÚDE DAS ARTICULAÇÕES E OSSOS SAUDÁVEIS",
		// 			"FORTALECER A IMUNIDADE",
		// 			"QUALIDADE DO SONO"
		// 		],
		// 		"ORIGEM": [
		// 			"NACIONAL"
		// 		],
		// 		"PREÇO": [
		// 			"ATÉ 99"
		// 		],
		// 		"Personal Filtros": [
		// 			"SEXO",
		// 			"ORGÂNICO",
		// 			"FINALIDADE",
		// 			"ORIGEM",
		// 			"PREÇO"
		// 		],
		// 		"MERCADOLIVRE": [
		// 			"Não é à toa que o magnésio é chamado de “mineral da vida”, tamanha é a quantidade de benefícios que ele pode proporcionar! O CLORETO DE MAGNÉSIO P.A. da Meissen é um grande reforço nutricional, ideal para quem tem deficiência desse mineral tão importante. Isso pode acontecer por efeitos colaterais de tratamentos médicos ou por problemas gástrico, portanto, o seu uso deve ser consciente e controlado para que se possa aproveitar todos os benefícios de maneira saudável. Mas por que é tão benéfico? Pela forma como o produto é vendido (como cloreto de magnésio), tem-se a melhor absorção e biodisponibilidade comparado às outras variações de suplementos de magnésio. Isso significa que há um amplo aproveitamento na absorção e síntese pelo seu organismo.<br>Absorvendo melhor esse mineral, o seu corpo conta com um excelente reforço para as mais de 300 reações bioquímicas as quais o magnésio é responsável, beneficiando diretamente o sistema circulatório, sistema renal, sistema gastrointestinal, sistema imunológico, músculos, ossos e até mesmo o cérebro! CLORETO DE MAGNÉSIO P.A. da Meissen é ideal para tratar deficiência de magnésio mas os benefícios à saúde decorrentes do seu consumo são muito maiores.<br> <br>Benefícios e Diferenciais<br>•\t- Cápsula vegetal;<br>•\t- Estabiliza o pH sanguíneo;<br>•\t- Alta biodisponibilidade;<br>•\t- Prevenção de lesão muscular;<br>•\t- Benefícios ao sistema circulatório;<br>•\t- Reforço ao sistema gastrointestinal;<br>•\t- Atua na prevenção à osteoporose;<br>•\t- Contém íons de magnésio essenciais para o bom funcionamento do cérebro;<br>•\t- Contém magnésio responsável por mais de 300 reações bioquímicas.<br> <br> <br>Informações Complementares<br><br>Com o passar do tempo ou por causas médicas é normal o corpo sofrer com variações do seu estado normal. Um exemplo é a diminuição da síntese de ácido clorídrico do estômago, responsável por importante etapa no processo digestivo. Com o CLORETO DE MAGNÉSIO P.A. os íons de cloro presentes no produto se juntam com hidrogênio auxiliando na produção dessa importante enzima digestiva (o ácido clorídrico), melhorando inclusive a absorção de nutrientes e minerais. Isso impacta diretamente a saúde do seu sistema imunológico, que passa a estar mais bem nutrido e reforçado e na saúde de seus ossos, pois o magnésio também atua como um fixador de cálcio.<br>A falta de magnésio em concentração adequada no corpo também implica em desregulação dos níveis de potássio, portanto a suplementação de magnésio se mostra importantíssima para o bom funcionamento do cérebro e dos músculos que dependem destes minerais, na transmissão de impulsos nervosos e na prevenção de lesões respectivamente. Veja como o magnésio é importante em nossas vidas! Realmente não é por nada que chamamos de “mineral da vida”. Não bastasse isso, com CLORETO DE MAGNÉSIO P.A. você assegura que os níveis de colesterol ruim no sistema circulatório (LDL) não se excedam, mantém os níveis de pH do sangue estáveis e previne a formação de cálculos renais!<br>Tudo isso não poderia resultar em algo diferente de uma vida mais longeva, com mais saúde e mais preparada para os sintomas do envelhecimento. Aproveite um produto de qualidade da Meissen, prático e com excelente custo benefício.<br> <br>Ingredientes<br><br>Cloreto de magnésio P.A., antiumectante(celulose microcristalina e dióxido de silício); cápsula vegetal (hipromelose, dióxido de titânio e água purificada). NÃO CONTÉM GLÚTEN.<br> <br>Modo de Uso<br><br>Ingerir 2(duas) cápsulas ao dia."
		// 		],
		// 		"MEUS NUTRIENTES": [
		// 			"<div class=\"nutrientes\"><br><div class=\"informacao\"><br><table style=\"overflow: hidden; display: block; border-collapse: collapse;\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\"><br><tbody><br><tr><br><td><br><h3>Informa&ccedil;&otilde;es Nutricionais</h3><br></td><br></tr><br><tr><br><td><br><p>Por&ccedil;&atilde;o de 1g (2 c&aacute;psulas)</p><br></td><br></tr><br><tr><br><td><br><div class=\"quantidade\">Quantidade por por&ccedil;&atilde;o</div><br><div class=\"vd\">%V.D*</div><br></td><br></tr><br><tr><br><td><br><table style=\"overflow: hidden; display: block; border-collapse: collapse;\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\"><br><tbody><br><tr><br><td class=\"first\"><br><p>Valor energ&eacute;tico</p><br></td><br><td><br><p>0cal=0kJ</p><br></td><br><td class=\"last\"><br><p>0%</p><br></td><br></tr><br><tr><br><td class=\"first\"><br><p>Carboidratos</p><br></td><br><td><br><p>0g</p><br></td><br><td class=\"last\"><br><p>0%</p><br></td><br></tr><br><tr><br><td class=\"first\"><br><p>Prote&iacute;nas</p><br></td><br><td><br><p>0g</p><br></td><br><td class=\"last\"><br><p>0%</p><br></td><br></tr><br><tr><br><td class=\"first\"><br><p>Gorduras totais</p><br></td><br><td><br><p>0g</p><br></td><br><td class=\"last\"><br><p>0%</p><br></td><br></tr><br><tr><br><td class=\"first\"><br><p>Gorduras Saturadas</p><br></td><br><td><br><p>0g</p><br></td><br><td class=\"last\"><br><p>0%</p><br></td><br></tr><br><tr><br><td class=\"first\"><br><p>Gorduras Trans</p><br></td><br><td><br><p>0g</p><br></td><br><td class=\"last\"><br><p>**</p><br></td><br></tr><br><tr><br>  <td class=\"first\"><br>  <p>Fibra Alimentar</p><br>  </td><br>  <td><br>  <p>0g</p><br>  </td><br>  <td class=\"last\"><br>  <p>0%</p><br>  </td><br></tr><br><tr><br><td class=\"first\"><br><p>Sódio</p><br></td><br><td><br><p>0mg</p><br></td><br><td class=\"last\"><br><p>0%</p><br></td><br></tr><br><tr><br><td class=\"first\"><br><p>Magnésio</p><br></td><br><td><br><p>75mg</p><br></td><br><td class=\"last\"><br><p>29%</p><br></td><br></tr><br></tbody><br></table><br></td><br></tr><br></tbody><br></table><br><p>% *Valores di&aacute;rios de refer&ecirc;ncia com base em uma dieta de 2000kcal ou 8400kJ. Seus valores di&aacute;rios podem ser maiores ou menores dependendo de suas necessidades energ&eacute;ticas. **Valores de referência n&atilde;o estabelecidos.</p><br></div><br><div class=\"nota\"><br><h3>Tome nota:</h3><br><div class=\"fundo\"><br><div><br><h3>Magnésio</h3><br><p>75mg</p><br></div><br><div><br><h3>Carboidratos</h3><br><p>0g</p><br></div><br><div><br><h3>Glúten</h3><br><p>0g</p><br></div><br><div class=\"last\"><br><h3>Calorias</h3><br><p>0</p><br><p>Kcal </p><br></div><br></div><br><p><strong>Ingredientes: </strong>Cloreto de magnésio P.A., antiumectante(celulose microcristalina e dióxido de silício); cápsula vegetal (hipromelose, dióxido de titânio e água purificada). </p><br><p>N&Atilde;O CONT&Eacute;M GL&Uacute;TEN.</p><br></div><br><div class=\"advertencias\"><br><h3>Advert&ecirc;ncias:</h3><br><p>Gestantes, nutrizes e crianças até 3 anos, somente devem consumir esse produto sob orientação de nutricionista ou médico.</p><br><p>Consumir este produto conforme a recomendação diária constante na embalagem. </p><br><p>Conservar a embalagem original bem fechada, em lugar fresco e arejado.</p><br></div><br><div class=\"qntdos\"><br><div><br><h3>Quantidade</h3><br><h3 class=\"last\">Doses</h3><br></div><br><div><br><p>60 C&aacute;psulas</p><br><p class=\"last\">30</p><br></div><br></div><br><div class=\"instrucoes\"><br><h3>Instru&ccedil;&otilde;es de uso:</h3><br><p>Ingerir 2(duas) c&aacute;psulas ao dia.</p><br></div><br></div>"
		// 		],
		// 		"ONDE NASCI": [
		// 			"<p>A MEISSEN é uma empresa brasileira fundada em 1961 e atua no mercado desde então, oferecendo produtos de qualidade usando matérias primas selecionadas e de origem comprovada. Os produtos não têm adição de qualquer tipo de conservantes ou estabilizantes, mantendo suas propriedades naturais. </p><br><p>Os processos produtivos são acompanhados por rígidos controles de qualidade além de ter uma séria preocupação com o meio ambiente. Um exemplo disso é o uso de fibras de poliéster provenientes da reciclagem de garrafas PET e a doação de resíduos recicláveis gerados na produção, para moradores da comunidade local na região de Cotia.</p><br><p>Confie na seriedade de uma tradicionalíssima marca, preocupada em aliar responsabilidade social e ambiental com qualidade de produtos genuinamente naturais e de procedência comprovada, assim como tem feito em toda a sua história.</p>"
		// 		],
		// 		"CÓDIGO ANVISA": [
		// 			"Produto Dispensado de Registro conforme RDC 27/2010"
		// 		],
		// 		"Descrição": [
		// 			"MERCADOLIVRE",
		// 			"MEUS NUTRIENTES",
		// 			"ONDE NASCI",
		// 			"CÓDIGO ANVISA"
		// 		],
		// 		"OBJETIVOS": [
		// 			"SAÚDE DAS ARTICULAÇÕES E OSSOS SAUDÁVEIS",
		// 			"FORTALECER A IMUNIDADE",
		// 			"QUALIDADE DO SONO"
		// 		],
		// 		"FORMA": [
		// 			"CÁPSULAS"
		// 		],
		// 		"PRODUTOS ORGÂNICOS": [
		// 			"NÃO"
		// 		],
		// 		"PRODUTOS VEGETARIANOS": [
		// 			"SIM"
		// 		],
		// 		"LIVRE DE GLÚTEN": [
		// 			"SIM"
		// 		],
		// 		"SEM LACTOSE": [
		// 			"SIM"
		// 		],
		// 		"ZERO AÇUCAR": [
		// 			"SIM"
		// 		],
		// 		"Filtros Departamentos/Categorias": [
		// 			"OBJETIVOS",
		// 			"FORMA",
		// 			"PRODUTOS ORGÂNICOS",
		// 			"PRODUTOS VEGETARIANOS",
		// 			"LIVRE DE GLÚTEN",
		// 			"SEM LACTOSE",
		// 			"ZERO AÇUCAR"
		// 		],
		// 		"allSpecifications": [
		// 			"SELOS",
		// 			"SEXO",
		// 			"ORGÂNICO",
		// 			"FINALIDADE",
		// 			"ORIGEM",
		// 			"PREÇO",
		// 			"MERCADOLIVRE",
		// 			"MEUS NUTRIENTES",
		// 			"ONDE NASCI",
		// 			"CÓDIGO ANVISA",
		// 			"OBJETIVOS",
		// 			"FORMA",
		// 			"PRODUTOS ORGÂNICOS",
		// 			"PRODUTOS VEGETARIANOS",
		// 			"LIVRE DE GLÚTEN",
		// 			"SEM LACTOSE",
		// 			"ZERO AÇUCAR"
		// 		],
		// 		"description": "<p>N&atilde;o &eacute; &agrave; toa que o magn&eacute;sio &eacute; chamado de &ldquo;mineral da vida&rdquo;, tamanha &eacute; a quantidade de benef&iacute;cios que ele pode proporcionar! O <strong>CLORETO DE MAGN&Eacute;SIO P.A. da Meissen</strong> &eacute; um grande refor&ccedil;o nutricional, ideal para quem tem defici&ecirc;ncia desse mineral t&atilde;o importante. Isso pode acontecer por efeitos colaterais de tratamentos m&eacute;dicos ou por problemas g&aacute;strico, portanto, o seu uso deve ser consciente e controlado para que se possa aproveitar todos os benef&iacute;cios de maneira saud&aacute;vel. Mas por que &eacute; t&atilde;o ben&eacute;fico? Pela forma como o produto &eacute; vendido (como cloreto de magn&eacute;sio), tem-se a melhor absor&ccedil;&atilde;o e biodisponibilidade comparado &agrave;s outras varia&ccedil;&otilde;es de suplementos de magn&eacute;sio. Isso significa que h&aacute; um amplo aproveitamento na absor&ccedil;&atilde;o e s&iacute;ntese pelo seu organismo. </p><br><p>Absorvendo melhor esse mineral, o seu corpo conta com um excelente refor&ccedil;o para as mais de 300 rea&ccedil;&otilde;es bioqu&iacute;micas as quais o magn&eacute;sio &eacute; respons&aacute;vel, beneficiando diretamente o sistema circulat&oacute;rio, sistema renal, sistema gastrointestinal, sistema imunol&oacute;gico, m&uacute;sculos, ossos e at&eacute; mesmo o c&eacute;rebro! <strong>CLORETO DE MAGN&Eacute;SIO P.A. da Meissen</strong> &eacute; ideal para tratar defici&ecirc;ncia de magn&eacute;sio mas os benef&iacute;cios &agrave; sa&uacute;de decorrentes do seu consumo s&atilde;o muito maiores.</p><br><p>&nbsp;</p><br><p><strong>Benef&iacute;cios e Diferenciais</strong></p><br><ul><br>  <li>- C&aacute;psula vegetal;</li><br>  <li>- Estabiliza o pH sangu&iacute;neo;</li><br>  <li>- Alta biodisponibilidade;</li><br>  <li>- Preven&ccedil;&atilde;o de les&atilde;o muscular;</li><br>  <li>- Benef&iacute;cios ao sistema circulat&oacute;rio;</li><br>  <li>- Refor&ccedil;o ao sistema gastrointestinal;</li><br>  <li>- Atua na preven&ccedil;&atilde;o &agrave; osteoporose;</li><br>  <li>- Cont&eacute;m &iacute;ons de magn&eacute;sio essenciais para o bom funcionamento do c&eacute;rebro;</li><br>  <li>- Cont&eacute;m magn&eacute;sio respons&aacute;vel por mais de 300 rea&ccedil;&otilde;es bioqu&iacute;micas.</li><br></ul><br><p style=\"margin-left: 20px;\">&nbsp;</p><br><p style=\"margin-left: 20px;\">&nbsp;</p><br><p><strong>Informa&ccedil;&otilde;es Complementares</strong></p><br><p><br />Com o passar do tempo ou por causas m&eacute;dicas &eacute; normal o corpo sofrer com varia&ccedil;&otilde;es do seu estado normal. Um exemplo &eacute; a diminui&ccedil;&atilde;o da s&iacute;ntese de &aacute;cido clor&iacute;drico do est&ocirc;mago, respons&aacute;vel por importante etapa no processo digestivo. Com o <strong>CLORETO DE MAGN&Eacute;SIO P.A.</strong> os &iacute;ons de cloro presentes no produto se juntam com hidrog&ecirc;nio auxiliando na produ&ccedil;&atilde;o dessa importante enzima digestiva (o &aacute;cido clor&iacute;drico), melhorando inclusive a absor&ccedil;&atilde;o de nutrientes e minerais. Isso impacta diretamente a sa&uacute;de do seu sistema imunol&oacute;gico, que passa a estar mais bem nutrido e refor&ccedil;ado e na sa&uacute;de de seus ossos, pois o magn&eacute;sio tamb&eacute;m atua como um fixador de c&aacute;lcio. </p><br><p>A falta de magn&eacute;sio em concentra&ccedil;&atilde;o adequada no corpo tamb&eacute;m implica em desregula&ccedil;&atilde;o dos n&iacute;veis de pot&aacute;ssio, portanto a suplementa&ccedil;&atilde;o de magn&eacute;sio se mostra important&iacute;ssima para o bom funcionamento do c&eacute;rebro e dos m&uacute;sculos que dependem destes minerais, na transmiss&atilde;o de impulsos nervosos e na preven&ccedil;&atilde;o de les&otilde;es respectivamente. Veja como o magn&eacute;sio &eacute; importante em nossas vidas! Realmente n&atilde;o &eacute; por nada que chamamos de &ldquo;mineral da vida&rdquo;. N&atilde;o bastasse isso, com <strong>CLORETO DE MAGN&Eacute;SIO P.A.</strong> voc&ecirc; assegura que os n&iacute;veis de colesterol ruim no sistema circulat&oacute;rio (LDL) n&atilde;o se excedam, mant&eacute;m os n&iacute;veis de pH do sangue est&aacute;veis e previne a forma&ccedil;&atilde;o de c&aacute;lculos renais! </p><br><p>Tudo isso n&atilde;o poderia resultar em algo diferente de uma vida mais longeva, com mais sa&uacute;de e mais preparada para os sintomas do envelhecimento. Aproveite um produto de qualidade da Meissen, pr&aacute;tico e com excelente custo benef&iacute;cio.</p><br><p>&nbsp;</p><br><p><strong>Ingredientes</strong></p><br><p><br /><br>Cloreto de magn&eacute;sio P.A., antiumectante(celulose microcristalina e di&oacute;xido de sil&iacute;cio); cápsula vegetal (hipromelose, dióxido de titânio e água purificada). N&Atilde;O CONT&Eacute;M GL&Uacute;TEN.</p><br><p>&nbsp;</p><br><p><strong>Modo de Uso</strong></p><br><p><br /><br>Ingerir 2(duas) c&aacute;psulas ao dia.</p><br><center><img src=\"http://lojaprojetoverao.vteximg.com.br/arquivos/Cloreto-magnesio-pa-meissen.jpg\"></center><br><br><br><a href=\"https://www.lojaprojetoverao.com.br/kit-3x-cloreto-de-magnesio-pa-display-10-saches-33-meissen/p\"><img src=\"http://lojaprojetoverao.vteximg.com.br/arquivos/meissen-cloreto-magnesio-kits-3x-10saches-33g.jpg\"></a><br><a href=\"https://www.lojaprojetoverao.com.br/kit-3x-cloreto-de-magnesio-pa-500mg-60-capsulas-meissen/p\"><img src=\"http://lojaprojetoverao.vteximg.com.br/arquivos/meissen-cloreto-magnesio-kits-3x-60vcaps.jpg\"></a><br><a href=\"https://www.lojaprojetoverao.com.br/kit-3x-cloreto-de-magnesio-pa-500mg-120-capsulas-meissen/p\"><img src=\"http://lojaprojetoverao.vteximg.com.br/arquivos/meissen-cloreto-magnesio-kits-3x-120vcaps.jpg\"></a><br><a href=\"https://www.lojaprojetoverao.com.br/kit-3x-magnesio-dimalato-500mg-60-capsulas-gelatinosas-meissen/p\"><img src=\"http://lojaprojetoverao.vteximg.com.br/arquivos/meissen-magnesio-dimalato-kits-3x-60caps.jpg\"></a><br><a href=\"https://www.lojaprojetoverao.com.br/kit-6x-magnesio-dimalato-500mg-60-capsulas-gelatinosas-meissen/p\"><img src=\"http://lojaprojetoverao.vteximg.com.br/arquivos/meissen-magnesio-dimalato-kits-6x-60caps.jpg\"></a><br><a href=\"https://www.lojaprojetoverao.com.br/kit-3x-magnesio-quelato-433mg-120-capsulas-meissen/p\"><img src=\"http://lojaprojetoverao.vteximg.com.br/arquivos/meissen-magnesio-quelato-kits-3x-120caps.jpg\"></a><br><a href=\"https://www.lojaprojetoverao.com.br/kit-6x-magnesio-quelato-433mg-120-capsulas-meissen/p\"><img src=\"http://lojaprojetoverao.vteximg.com.br/arquivos/meissen-magnesio-quelato-kits-6x-120caps.jpg\"></a>",
		// 		"items": [
		// 			{
		// 				"itemId": "2000082",
		// 				"name": "Cloreto de Magnésio PA Puro (500mg) de 60 Cápsulas Vegetarianas - Meissen",
		// 				"nameComplete": "Cloreto de Magnésio PA Puro (500mg) de 60 Cápsulas Vegetarianas - Meissen",
		// 				"complementName": "O <strong>cloreto de magnésio PA</strong>  funciona como um suplemento alimentar cheio de benefícios para a saúde, que nos ajuda a manter o corpo jovem e vigorante, além de colaborar no combate e prevenção de muitas infecções.",
		// 				"ean": "7898047200766",
		// 				"referenceId": [
		// 					{
		// 						"Key": "RefId",
		// 						"Value": "2611_0_0_U"
		// 					}
		// 				],
		// 				"measurementUnit": "un",
		// 				"unitMultiplier": 1.0000,
		// 				"modalType": null,
		// 				"isKit": false,
		// 				"images": [
		// 					{
		// 						"imageId": "163953",
		// 						"imageLabel": "",
		// 						"imageTag": "<img src=\"~/arquivos/ids/163953-#width#-#height#/meissen-cloreto-magnesio-500mg-60-capsulas-vegetais-loja-projeto-verao.jpg?v=636664755640430000\" width=\"#width#\" height=\"#height#\" alt=\"meissen-cloreto-magnesio-500mg-60-capsulas-vegetais-loja-projeto-verao\" id=\"\" />",
		// 						"imageUrl": "http://lojaprojetoverao.vteximg.com.br/arquivos/ids/163953/meissen-cloreto-magnesio-500mg-60-capsulas-vegetais-loja-projeto-verao.jpg?v=636664755640430000",
		// 						"imageText": "meissen-cloreto-magnesio-500mg-60-capsulas-vegetais-loja-projeto-verao"
		// 					}
		// 				],
		// 				"sellers": [
		// 					{
		// 						"sellerId": "1",
		// 						"sellerName": "Projeto Verão",
		// 						"addToCartLink": "https://lojaprojetoverao.vtexcommercestable.com.br/checkout/cart/add?sku=2000082&qty=1&seller=1&sc=1&price=2011&cv=a2a0e6a273bd23b919eec23114ff6a30_&sc=1",
		// 						"sellerDefault": true,
		// 						"commertialOffer": {
		// 							"DeliverySlaSamplesPerRegion": {
		// 								"0": {
		// 									"DeliverySlaPerTypes": [],
		// 									"Region": null
		// 								}
		// 							},
		// 							"Installments": [
		// 								{
		// 									"Value": 20.11,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 20.11,
		// 									"NumberOfInstallments": 1,
		// 									"PaymentSystemName": "American Express",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "American Express à vista"
		// 								},
		// 								{
		// 									"Value": 10.05,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 20.11,
		// 									"NumberOfInstallments": 2,
		// 									"PaymentSystemName": "American Express",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "American Express 2 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 6.7,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 20.11,
		// 									"NumberOfInstallments": 3,
		// 									"PaymentSystemName": "American Express",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "American Express 3 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 5.02,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 20.11,
		// 									"NumberOfInstallments": 4,
		// 									"PaymentSystemName": "American Express",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "American Express 4 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 4.02,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 20.11,
		// 									"NumberOfInstallments": 5,
		// 									"PaymentSystemName": "American Express",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "American Express 5 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 3.35,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 20.11,
		// 									"NumberOfInstallments": 6,
		// 									"PaymentSystemName": "American Express",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "American Express 6 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 2.87,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 20.11,
		// 									"NumberOfInstallments": 7,
		// 									"PaymentSystemName": "American Express",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "American Express 7 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 2.51,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 20.11,
		// 									"NumberOfInstallments": 8,
		// 									"PaymentSystemName": "American Express",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "American Express 8 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 20.11,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 20.11,
		// 									"NumberOfInstallments": 1,
		// 									"PaymentSystemName": "Visa",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Visa à vista"
		// 								},
		// 								{
		// 									"Value": 10.05,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 20.11,
		// 									"NumberOfInstallments": 2,
		// 									"PaymentSystemName": "Visa",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Visa 2 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 6.7,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 20.11,
		// 									"NumberOfInstallments": 3,
		// 									"PaymentSystemName": "Visa",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Visa 3 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 5.02,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 20.11,
		// 									"NumberOfInstallments": 4,
		// 									"PaymentSystemName": "Visa",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Visa 4 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 4.02,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 20.11,
		// 									"NumberOfInstallments": 5,
		// 									"PaymentSystemName": "Visa",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Visa 5 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 3.35,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 20.11,
		// 									"NumberOfInstallments": 6,
		// 									"PaymentSystemName": "Visa",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Visa 6 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 2.87,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 20.11,
		// 									"NumberOfInstallments": 7,
		// 									"PaymentSystemName": "Visa",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Visa 7 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 2.51,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 20.11,
		// 									"NumberOfInstallments": 8,
		// 									"PaymentSystemName": "Visa",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Visa 8 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 20.11,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 20.11,
		// 									"NumberOfInstallments": 1,
		// 									"PaymentSystemName": "Diners",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Diners à vista"
		// 								},
		// 								{
		// 									"Value": 10.05,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 20.11,
		// 									"NumberOfInstallments": 2,
		// 									"PaymentSystemName": "Diners",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Diners 2 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 6.7,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 20.11,
		// 									"NumberOfInstallments": 3,
		// 									"PaymentSystemName": "Diners",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Diners 3 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 5.02,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 20.11,
		// 									"NumberOfInstallments": 4,
		// 									"PaymentSystemName": "Diners",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Diners 4 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 4.02,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 20.11,
		// 									"NumberOfInstallments": 5,
		// 									"PaymentSystemName": "Diners",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Diners 5 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 3.35,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 20.11,
		// 									"NumberOfInstallments": 6,
		// 									"PaymentSystemName": "Diners",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Diners 6 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 2.87,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 20.11,
		// 									"NumberOfInstallments": 7,
		// 									"PaymentSystemName": "Diners",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Diners 7 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 2.51,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 20.11,
		// 									"NumberOfInstallments": 8,
		// 									"PaymentSystemName": "Diners",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Diners 8 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 20.11,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 20.11,
		// 									"NumberOfInstallments": 1,
		// 									"PaymentSystemName": "Mastercard",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Mastercard à vista"
		// 								},
		// 								{
		// 									"Value": 10.05,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 20.11,
		// 									"NumberOfInstallments": 2,
		// 									"PaymentSystemName": "Mastercard",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Mastercard 2 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 6.7,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 20.11,
		// 									"NumberOfInstallments": 3,
		// 									"PaymentSystemName": "Mastercard",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Mastercard 3 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 5.02,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 20.11,
		// 									"NumberOfInstallments": 4,
		// 									"PaymentSystemName": "Mastercard",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Mastercard 4 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 4.02,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 20.11,
		// 									"NumberOfInstallments": 5,
		// 									"PaymentSystemName": "Mastercard",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Mastercard 5 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 3.35,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 20.11,
		// 									"NumberOfInstallments": 6,
		// 									"PaymentSystemName": "Mastercard",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Mastercard 6 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 2.87,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 20.11,
		// 									"NumberOfInstallments": 7,
		// 									"PaymentSystemName": "Mastercard",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Mastercard 7 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 2.51,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 20.11,
		// 									"NumberOfInstallments": 8,
		// 									"PaymentSystemName": "Mastercard",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Mastercard 8 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 20.11,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 20.11,
		// 									"NumberOfInstallments": 1,
		// 									"PaymentSystemName": "Hipercard",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Hipercard à vista"
		// 								},
		// 								{
		// 									"Value": 10.05,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 20.11,
		// 									"NumberOfInstallments": 2,
		// 									"PaymentSystemName": "Hipercard",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Hipercard 2 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 6.7,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 20.11,
		// 									"NumberOfInstallments": 3,
		// 									"PaymentSystemName": "Hipercard",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Hipercard 3 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 5.02,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 20.11,
		// 									"NumberOfInstallments": 4,
		// 									"PaymentSystemName": "Hipercard",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Hipercard 4 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 4.02,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 20.11,
		// 									"NumberOfInstallments": 5,
		// 									"PaymentSystemName": "Hipercard",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Hipercard 5 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 3.35,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 20.11,
		// 									"NumberOfInstallments": 6,
		// 									"PaymentSystemName": "Hipercard",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Hipercard 6 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 2.87,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 20.11,
		// 									"NumberOfInstallments": 7,
		// 									"PaymentSystemName": "Hipercard",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Hipercard 7 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 2.51,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 20.11,
		// 									"NumberOfInstallments": 8,
		// 									"PaymentSystemName": "Hipercard",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Hipercard 8 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 20.11,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 20.11,
		// 									"NumberOfInstallments": 1,
		// 									"PaymentSystemName": "Elo",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Elo à vista"
		// 								},
		// 								{
		// 									"Value": 10.05,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 20.11,
		// 									"NumberOfInstallments": 2,
		// 									"PaymentSystemName": "Elo",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Elo 2 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 6.7,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 20.11,
		// 									"NumberOfInstallments": 3,
		// 									"PaymentSystemName": "Elo",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Elo 3 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 5.02,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 20.11,
		// 									"NumberOfInstallments": 4,
		// 									"PaymentSystemName": "Elo",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Elo 4 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 4.02,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 20.11,
		// 									"NumberOfInstallments": 5,
		// 									"PaymentSystemName": "Elo",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Elo 5 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 3.35,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 20.11,
		// 									"NumberOfInstallments": 6,
		// 									"PaymentSystemName": "Elo",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Elo 6 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 2.87,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 20.11,
		// 									"NumberOfInstallments": 7,
		// 									"PaymentSystemName": "Elo",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Elo 7 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 2.51,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 20.11,
		// 									"NumberOfInstallments": 8,
		// 									"PaymentSystemName": "Elo",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Elo 8 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 20.11,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 20.11,
		// 									"NumberOfInstallments": 1,
		// 									"PaymentSystemName": "Vale",
		// 									"PaymentSystemGroupName": "giftCardPaymentGroup",
		// 									"Name": "Vale à vista"
		// 								},
		// 								{
		// 									"Value": 20.11,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 20.11,
		// 									"NumberOfInstallments": 1,
		// 									"PaymentSystemName": "BOLBRADESCO",
		// 									"PaymentSystemGroupName": "bankInvoicePaymentGroup",
		// 									"Name": "BOLBRADESCO à vista"
		// 								}
		// 							],
		// 							"DiscountHighLight": [],
		// 							"GiftSkuIds": [],
		// 							"Teasers": [],
		// 							"BuyTogether": [],
		// 							"Price": 20.11,
		// 							"ListPrice": 25.16,
		// 							"PriceWithoutDiscount": 20.11,
		// 							"RewardValue": 0.0,
		// 							"PriceValidUntil": "2020-02-28T22:37:11Z",
		// 							"AvailableQuantity": 62,
		// 							"Tax": 0.0,
		// 							"DeliverySlaSamples": [
		// 								{
		// 									"DeliverySlaPerTypes": [],
		// 									"Region": null
		// 								}
		// 							],
		// 							"GetInfoErrorMessage": null,
		// 							"CacheVersionUsedToCallCheckout": "a2a0e6a273bd23b919eec23114ff6a30_"
		// 						}
		// 					}
		// 				],
		// 				"Videos": []
		// 			}
		// 		]
		// 	},
		// 	{
		// 		"productId": "185301",
		// 		"productName": "Kit 3x Chlorellas (250mg) 1000 Comprimidos - Green Gem",
		// 		"brand": "Green Gem Paversul",
		// 		"linkText": "kit-3x-chlorella---green-gem--250mg--1000-comprimidos",
		// 		"productReference": "185301",
		// 		"categoryId": "12001",
		// 		"productTitle": "Kit 3x Chlorella - Green Gem (250mg) 1000 Comprimidos",
		// 		"metaTagDescription": "A Chlorella Green Gem® e considerada um super alimento por se tratar de um dos mais completos alimentos da natureza. Possui uma enorme quantidade de nutrientes primordiais ao bom desempenho das funcoes biologicas do nosso organismo.",
		// 		"clusterHighlights": {
		// 			"136": "Promo Relampago",
		// 			"158": "Frete Grátis - Produtos",
		// 			"160": "Chlorella Viu Tambem"
		// 		},
		// 		"productClusters": {
		// 			"136": "Promo Relampago",
		// 			"140": "Loja",
		// 			"141": "Comparadores",
		// 			"158": "Frete Grátis - Produtos",
		// 			"160": "Chlorella Viu Tambem",
		// 			"163": "Buscape",
		// 			"164": "Zoom",
		// 			"170": "Facebook Catalogo",
		// 			"174": "Black Friday Chlorellas"
		// 		},
		// 		"searchableClusters": {
		// 			"136": "Promo Relampago",
		// 			"158": "Frete Grátis - Produtos"
		// 		},
		// 		"categories": [
		// 			"/Kit/",
		// 			"/Compra coletiva/Kits e combos/",
		// 			"/Compra coletiva/",
		// 			"/Suplementos para emagrecer/Controladores de apetite naturais/Chorella/",
		// 			"/Suplementos para emagrecer/Controladores de apetite naturais/",
		// 			"/Suplementos para emagrecer/",
		// 			"/Super alimentos e digestão/Detox/",
		// 			"/Super alimentos e digestão/",
		// 			"/Super alimentos e digestão/Super alimentos naturais verdes/",
		// 			"/Super alimentos e digestão/Super alimentos naturais verdes/Chlorella/"
		// 		],
		// 		"categoriesIds": [
		// 			"/12001/",
		// 			"/1768433969/191119192/",
		// 			"/1768433969/",
		// 			"/1843463835/655457002/348140705/",
		// 			"/1843463835/655457002/",
		// 			"/1843463835/",
		// 			"/715546402/523554888/",
		// 			"/715546402/",
		// 			"/715546402/904091387/",
		// 			"/715546402/904091387/1587129881/"
		// 		],
		// 		"link": "https://lojaprojetoverao.vtexcommercestable.com.br/kit-3x-chlorella---green-gem--250mg--1000-comprimidos/p",
		// 		"SELOS": [
		// 			"SEM GLÚTEN",
		// 			"SEM LACTOSE",
		// 			"ZERO AÇÚCAR (DIET)",
		// 			"SEM CORANTES",
		// 			"SEM AROMATIZANTES",
		// 			"SEM CONSERVANTES",
		// 			"NÃO TRANSGÊNICO",
		// 			"NATURAL",
		// 			"CERTIFICADO ORGÂNICO (USDA)",
		// 			"CERTIFICADO ORGÂNICO (JAS)",
		// 			"CERTIFICADO DE QUALIDADE (KOSHER)",
		// 			"CERTIFICADO DE QUALIDADE (GMP TAIWAN)",
		// 			"CERTIFICADO DE QUALIDADE (SGS HACCP)",
		// 			"CERTIFICADO DE QUALIDADE (A00101 TAIWAN)",
		// 			"REGISTRO ANVISA",
		// 			"PRODUTO EM TABLETES",
		// 			"CERTIFICADO HALAL",
		// 			"CERTIFICADO ORGÂNICO JONA MICROALGAS",
		// 			"CERTIFICADO UKAS 2200",
		// 			"CERTIFICADO UKAS 9001",
		// 			"CERTIFICADO DE QUALIDADE (SNQ TAIWAN)",
		// 			"PRODUTO VEGETARIANO"
		// 		],
		// 		"Especificações": [
		// 			"SELOS"
		// 		],
		// 		"SEXO": [
		// 			"HOMEM",
		// 			"MULHER"
		// 		],
		// 		"ORGÂNICO": [
		// 			"SIM"
		// 		],
		// 		"ORIGEM": [
		// 			"IMPORTADO"
		// 		],
		// 		"PREÇO": [
		// 			"A PARTIR DE 300"
		// 		],
		// 		"Personal Filtros": [
		// 			"SEXO",
		// 			"ORGÂNICO",
		// 			"ORIGEM",
		// 			"PREÇO"
		// 		],
		// 		"MERCADOLIVRE": [
		// 			"Se você busca uma alimentação balanceada, além de fortalecimento do sistema imunológico, a CHLORELLA GREEN GEM® é o alimento para você!<br>Sendo uma alga unicelular de rápida multiplicação, a CHLORELLA é a planta com maior quantidade de clorofila identificada até hoje, sendo por esse motivo de grande capacidade detox e antioxidante, retardando o envelhecimento. Comece então o quanto antes a consumir diariamente o produto e mantenha por mais tempo sua aparência jovial! Não perca tempo! Porque além disso, essa alga é considerada um superalimento por possuir uma grande quantidade de nutrientes e todos os aminoácidos essenciais para o seu corpo, proporcionando inúmeros benefícios que você mal vai acreditar.<br>Estudos acerca do uso da CHLORELLA indicam que ela auxilia em grande medida na diminuição da pressão sanguínea e dos níveis de colesterol do sangue, acelera a regeneração, além de fortalecer todo o sistema imunológico. E, por sua alta capacidade detox e de eliminar a radiação do corpo, a CHLORELLA também tem sido amplamente utilizada no tratamento do câncer para auxiliar na recuperação dos pacientes que passam pela radioterapia. Em comprimidos, o consumo e transporte do seu superalimento CHLORELLA Green Gem ficam bem mais práticos para o seu dia a dia, disponível onde e quando quiser.<br> <br>Benefícios e Diferenciais: <br>•\t- Aumento da imunidade;<br>•\t- Prevenção do envelhecimento precoce das células;<br>•\t- Regulagem do intestino;<br>•\t- Melhora de capacidade de concentração;<br>•\t- Sono mais repousante;<br>•\t- Alívio de depressão e ansiedade;<br>•\t- Melhora nas condições da pele;<br>•\t- Aumento da vitalidade.<br> <br>Informações complementares:<br>Os principais benefícios da Chlorella são: aumentar a energia, regular o intestino, melhorar a capacidade de concentração, estimular e aumentar a resistência e imunidade do organismo, sono mais repousante, aliviar a depressão e a ansiedade, melhorar as condições da pele e aumentar a vitalidade.<br>A Chlorella Pyrenoidosa é uma alga unicelular que contêm um elemento especial: o C.G.F. (Fator de Crescimento Chlorella) - um complexo com nucleotídeo-peptídeo, polissacarídeos e ácidos nucleicos, 10% de RNA e 3% de DNA descoberto por um cientista japonês que permite a Chlorella crescer tão rapidamente, onde cada célula se multiplica em quatro novas células a cada vinte horas. O C.G.F. é responsável por estimular o crescimento, a reparação do material genético das células, fortalecer o sistema imunológico e suprir as células com energia necessária para responder as exigências diárias.<br>Na década de 1950, governantes dos países mais ricos do mundo criaram um projeto de desenvolvimento com o objetivo de produzir um alimento com alto valor nutritivo, entre mil plantas, a Chlorella foi selecionada.<br>O Fator de Crescimento Chlorella estimula a recuperação dos tecidos, protege a integridade das células, melhora a ingestão de nutrientes e regula a produção de energia. Ajuda também na recuperação de materiais genéticos lesados, protege a saúde dando suporte às funções celulares vitais e retarda o processo de envelhecimento.<br>O CGF é o fator na Chlorella que promove esta rápida taxa de reprodução. O Fator de Crescimento Chlorella aparece para aumentar as funções RNA/DNA, responsáveis pela produção de proteínas, enzimas e energia à nível celular, estimulando a reparação dos tecidos e protegendo as células contra substâncias tóxicas.<br>Ingredientes: <br>Chlorella Pyrenoidosa. NÃO CONTÉM GLÚTEN<br> <br>Modo de Uso:<br>O consumo diário pode variar entre 10 a 20 comprimidos (2,5g à 5g) e costuma-se sentir seus efeitos positivos em cerca de 60 dias. Os comprimidos devem ser ingeridos com água, podendo ser consumidos pela manhã e à noite."
		// 		],
		// 		"MEUS NUTRIENTES": [
		// 			"<div class=\"nutrientes\"> <br><br><br>    <div class=\"informacao\"> <br><br><br>        <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"overflow:hidden;display:block;border-collapse:collapse;\"> <br><br><br>            <tr> <br><br><br>                <td><h3>Informações Nutricionais</h3></td> <br><br><br>            </tr> <br><br><br>            <tr> <br><br><br>                <td><p>Porção de 5g (20 comprimidos)</p></td> <br><br><br>            </tr> <br><br><br>            <tr> <br><br><br>                <td><div class=\"quantidade\">Quantidade por porção</div><div class=\"vd\">%V.D*</div></td> <br><br><br>            </tr> <br><br><br>            <tr> <br><br><br>             <td> <br><br><br>                 <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"overflow:hidden;display:block;border-collapse:collapse;\"> <br><br><br>                        <tr> <br><br><br>                            <td class=\"first\"><p>Valor energético</p></td> <br><br><br>                            <td><p> 18Kcal=75kJ</p></td> <br><br><br>                            <td class=\"last\"><p>1%</p></td> <br><br><br>                        </tr> <br><br><br>                        <br><br><br>                        <tr> <br><br><br>                            <td class=\"first\"><p>Carboidratos</p></td> <br><br><br>                            <td><p>0,6g</p></td> <br><br><br>                            <td class=\"last\"><p>0%</p></td> <br><br><br>                        </tr> <br><br><br>                    <tr> <br><br><br>                            <td class=\"first\"><p>Proteínas</p></td> <br><br><br>                            <td><p>3,0g</p></td> <br><br><br>                            <td class=\"last\"><p>4%</p></td> <br><br><br>                        </tr> <br><br><br><tr> <br><br><br>                            <td class=\"first\"><p> Gorduras Totais </p></td> <br><br><br>                            <td><p>0g</p></td> <br><br><br>                            <td class=\"last\"><p>0%</p></td> <br><br><br>                        </tr> <br><br><br><tr> <br><br><br>                            <td class=\"first\"><p>Ferro</p></td> <br><br><br>                            <td><p>5mg</p></td> <br><br><br>                            <td class=\"last\"><p>55%</p></td> <br><br><br>                        </tr> <br><br><br><tr> <br><br><br>                            <td class=\"first\"><p>Sódio</p></td> <br><br><br>                            <td><p>0mg</p></td> <br><br><br>                            <td class=\"last\"><p>0%</p></td> <br><br><br>                        </tr> <br><br><br>                    </table> <br><br><br>                </td> <br><br><br>            </tr> <br><br><br>  </table> <br><br><br>        <p> (%VD) Valores diários de referência com base em uma dieta de 2000 Kcal ou 8400kJ. </p><p>Seus valores diários podem ser maiores ou menores dependendo de suas necessidades energéticas.</p> <p>Não contém quantidade significativa de gorduras saturadas,gorduras trans.fibra alimentar e sódio. </p><br><br><br>    </div> <br><br><br>     <br><br><br>    <div class=\"nota\"> <br><br><br>        <h3>Tome nota:</h3> <br><br><br>        <div class=\"fundo\"> <br><br><br>            <div> <br><br><br>                <h3>Proteínas</h3> <br><br><br>                <p>3g</p> <br><br><br>            </div> <br><br><br>            <div> <br><br><br>                <h3>Ferro</h3> <br><br><br>                <p>5mg</p> <br><br><br>            </div> <br><br><br>            <div> <br><br><br>                <h3>Sódio</h3> <br><br><br>                <p>0mg</p> <br><br><br>            </div> <br><br><br>            <div class=\"last\"> <br><br><br>                <h3>Carboidratos</h3> <br><br><br>                <p>18</p> <br><br><br>                <p>Kcal</p> <br><br><br>            </div> <br><br><br>        </div> <br><br><br>        <p><strong>Ingredientes: </Strong> Chlorella Pyrenoidosa. NÃO CONTÉM GLÚTEN.</p> <br><br><br>    </div> <br><br><br>     <br><br><br>    <div class=\"advertencias\"> <br><br><br>        <h3>Advertências:</h3> <br><br><br>        <p> Manter longe do alcance das crianças. </p><p><br><br><br>Ministério da Saúde adverte: Não existem evidências científicas comprovadas de que este alimento previna, trate ou cure doenças. </p> <br><br><br>    </div> <br><br><br>     <br><br><br>    <div class=\"qntdos\"> <br><br><br>        <div> <br><br><br>            <h3>Quantidade</h3> <br><br><br>            <h3 class=\"last\">Doses</h3> <br><br><br>        </div> <br><br><br>        <div> <br><br><br>            <p>3000 Comprimidos</p> <br><br><br>            <p class=\"last\">375</p> <br><br><br>        </div> <br><br><br>    </div> <br><br><br>     <br><br><br>    <div class=\"instrucoes\"> <br><br><br>        <h3>Instruções de uso:</h3> <br><br><br>        <p>O consumo diário pode variar entre 10 a 20 comprimidos (2,5g à 5g) e costuma-se sentir seus efeitos positivos em cerca de 60 dias. Os comprimidos devem ser ingeridos com água, podendo ser consumidos pela manhã e a noite.</p>     <br><br><br></div> <br><br><br><div class=\"nutrientes2\"><br><br><br><table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"overflow:hidden;display:block;border-collapse:collapse;\"><br><br><br>    <tr><br><br><br>        <td valign=\"top\"><br><br><br>            <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" class=\"left\" style=\"overflow:hidden;display:block;border-collapse:collapse;\"><br><br><br>                <tr><td colspan=\"2\"><div class=\"fundo1\"></div></td></tr><br><br><br>                    <tr><td><p>Proteínas</p></td><td><p>60-65%</p></td></tr><br><br><br>                    <tr><td><p>Carboidratos</p></td><td><p>12-20%</p></td></tr><br><br><br>                    <tr><td><p>Gordura</p></td><td><p>10-15%</p></td></tr><br><br><br>                    <tr><td><p>Fibras</p></td><td><p>7,5%</p></td></tr><br><br><br>                    <tr><td><p>Minerais</p></td><td><p>7,2%</p></td></tr><br><br><br>                    <tr><td><p>Calorias</p></td><td><p>360Kcal(1512kJ)</p></td></tr><br><br><br>                    <tr><td><p>C.G.F</p></td><td><p>15%</p></td></tr><br><br><br>                </table><br><br><br>            </td><br><br><br>            <td valign=\"top\"><br><br><br>            <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" class=\"middle\" style=\"overflow:hidden;display:block;border-collapse:collapse;\"><br><br><br>                <tr><td colspan=\"2\"><div class=\"fundo2\">Vitaminas e Minerais (por 100g)</div></td></tr><br><br><br>                    <tr><td><p>Caroteno</p></td><td><p>106mg</p></td></tr><br><br><br>                    <tr><td><p>B caroteno</p></td><td><p>95,9mg</p></td></tr><br><br><br>                    <tr><td><p>Vitamina B1</p></td><td><p>1,8mg</p></td></tr><br><br><br>                    <tr><td><p>Vitamina B2</p></td><td><p>5,0mg</p></td></tr><br><br><br>                    <tr><td><p>Vitamina B5</p></td><td><p>4,6mg</p></td></tr><br><br><br>                    <tr><td><p>Vitamina B6</p></td><td><p>2,0mg</p></td></tr><br><br><br>                    <tr><td><p>Vitamina B12</p></td><td><p>830/mg</p></td></tr><br><br><br>                    <tr><td class=\"azul\"><p>Vitamina C</p></td><td class=\"azul\"><p>59,5mg</p></td></tr><br><br><br>                    <tr><td><p>Vitamina E</p></td><td><p>6,7mg</p></td></tr><br><br><br>                    <tr><td><p>Biotina</p></td><td><p>264mg</p></td></tr><br><br><br>                    <tr><td><p>Ácido Fólico</p></td><td><p>1,3mg</p></td></tr><br><br><br>                    <tr><td><p>Inositol</p></td><td><p>133mg</p></td></tr><br><br><br>                    <tr><td><p>Niacina</p></td><td><p>29,2mg</p></td></tr><br><br><br>                    <tr><td><p>Clorofila</p></td><td><p>2890mg</p></td></tr><br><br><br>                    <tr><td><p>Luteína</p></td><td><p>263mg</p></td></tr><br><br><br>                    <tr><td><p>Cálcio</p></td><td><p>315mg</p></td></tr><br><br><br>                    <tr><td><p>Ferro</p></td><td><p>153mg</p></td></tr><br><br><br>                    <tr><td><p>Cobre</p></td><td><p>3,1mg</p></td></tr><br><br><br>                    <tr><td><p>Fósforo</p></td><td><p>1,63mg</p></td></tr><br><br><br>                    <tr><td class=\"azul\"><p>Potássio</p></td><td class=\"azul\"><p>900mg</p></td></tr><br><br><br>                    <tr><td><p>Magnésio</p></td><td><p>348mg</p></td></tr><br><br><br>                    <tr><td><p>Zinco</p></td><td><p>7,6mg</p></td></tr><br><br><br>                    <tr><td><p>Selênio</p></td><td><p>8mg</p></td></tr>                    <br><br><br>                </table><br><br><br>            </td><br><br><br>            <td valign=\"top\"><br><br><br>            <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" class=\"right\" style=\"overflow:hidden;display:block;border-collapse:collapse;\"><br><br><br>                <tr><td colspan=\"2\"><div class=\"fundo1\">Aminoácidos Essenciais</div></td></tr><br><br><br>                    <tr><td><p>Arginina</p></td><td><p>3,55%</p></td></tr><br><br><br>                    <tr><td><p>Fenilalania</p></td><td><p>2,90%</p></td></tr><br><br><br>                    <tr><td><p>Histidina</p></td><td><p>1,25%</p></td></tr><br><br><br>                    <tr><td><p>Isoleucina</p></td><td><p>2,38%</p></td></tr><br><br><br>                    <tr><td class=\"azul\"><p>Leucina</p></td><td class=\"azul\"><p>5,05%</p></td></tr><br><br><br>                    <tr><td><p>Lisina</p></td><td><p>3,46%</p></td></tr><br><br><br>                    <tr><td><p>Melionina</p></td><td><p>1,49%</p></td></tr><br><br><br>                    <tr><td><p>Treonina</p></td><td><p>2,90%</p></td></tr><br><br><br>                    <tr><td><p>Triptofan</p></td><td><p>1,18%</p></td></tr><br><br><br>                    <tr><td colspan=\"2\"><div class=\"fundo1\">Aminoácidos Não Essenciais</div></td></tr><br><br><br>                    <tr><td><p>Alanina</p></td><td><p>4,80%</p></td></tr><br><br><br>                    <tr><td><p>Ácido Aspártico</p></td><td><p>5,35%</p></td></tr><br><br><br>                    <tr><td><p>Cistina</p></td><td><p>0,75%</p></td></tr><br><br><br>                    <tr><td class=\"azul\"><p>Ácido Glutâmico</p></td><td class=\"azul\"><p>6,71%</p></td></tr><br><br><br>                    <tr><td><p>Glicina</p></td><td><p>3,58%</p></td></tr><br><br><br>                    <tr><td><p>Prolina</p></td><td><p>2,87%</p></td></tr><br><br><br>                    <tr><td><p>Serina</p></td><td><p>2,42%</p></td></tr><br><br><br>                    <tr><td><p>Tirosina</p></td><td><p>2,16%</p></td></tr><br><br><br>                    <tr><td><p>Valina</p></td><td><p>3,60%</p></td></tr><br><br><br>                </table><br><br><br>            </td><br><br><br>        </tr><br><br><br>        <tr><br><br><br>        <td colspan=\"3\"><br><br><br>            <div class=\"aviso\">NÃO CONTÉM GLÚTEN, NÃO CONTÉM AÇÚCAR, SEM NENHUM ADITIVO ARTIFICIAL</div><br><br><br>            </td><br><br><br>        </tr><br><br><br>        <tr><br><br><br>        <td colspan=\"3\"><br><br><br>            <div class=\"aviso aviso2\"><a href=\"/arquivos/certificado_laboratorio-chlorella.jpg\" target=\"_blank\">Certificado do Teste de Laboratório</a></div><br><br><br>            </td><br><br><br>        </tr><br><br><br>    </table><br><br><br></div>"
		// 		],
		// 		"O QUE FALAM DE MIM?": [
		// 			"<h3>O que falam de mim?</h3>"
		// 		],
		// 		"ONDE NASCI": [
		// 			"<p> A Taiwan Chlorella Manufacturing cultiva a Chlorella Pyrenoidosa atingindo 70% do mercado global na comercialização do produto, investindo continuamente em pesquisas, técnicas de produção e atualizações no parque produtivo, tornando-se uma empresa responsável pelo bem-estar dos apreciadores da Chlorella Green Gem. </p> <p> <br><br><br>Toda a cadeia produtiva da Chlorella Green Gem está envolvida por métodos 100% naturais, permitindo a Taiwan receber as certificações internacionais mais importantes no setor de alimentos livres de aditivos químicos, como: GMP – ISO9001 – ISO22000 - HACCP KSA -KOSHER dentre outros que qualificaram a Chlorella Green Gem como alimento seguro e confiável. </p> <p> <br><br><br>Conforme legislação estabelecida, o Controle de Qualidade envolve os seguintes itens: Exame Bacteriano, Análise Nutricional, Inspeção de Cor, Teste de Pureza, Conteúdo de Clorofila e Verificação de Volume. Tais processos fazem com que só a Chlorella 100% pura possa ser compactada em forma de comprimidos.<br><br><br></p>"
		// 		],
		// 		"CÓDIGO ANVISA": [
		// 			"6.2184.0003.001-0"
		// 		],
		// 		"VÍDEO": [
		// 			"<iframe width=\"370\" height=\"370\" src=\"//www.youtube.com/embed/wI8EUCaKsZY\" frameborder=\"0\" allowfullscreen></iframe><br><br>"
		// 		],
		// 		"Descrição": [
		// 			"MERCADOLIVRE",
		// 			"MEUS NUTRIENTES",
		// 			"O QUE FALAM DE MIM?",
		// 			"ONDE NASCI",
		// 			"CÓDIGO ANVISA",
		// 			"VÍDEO"
		// 		],
		// 		"OBJETIVOS": [
		// 			"FORTALECER A IMUNIDADE"
		// 		],
		// 		"FORMA": [
		// 			"COMPRIMIDOS"
		// 		],
		// 		"PRODUTOS ORGÂNICOS": [
		// 			"SIM"
		// 		],
		// 		"PRODUTOS VEGETARIANOS": [
		// 			"SIM"
		// 		],
		// 		"LIVRE DE GLÚTEN": [
		// 			"SIM"
		// 		],
		// 		"SEM LACTOSE": [
		// 			"SIM"
		// 		],
		// 		"ZERO AÇUCAR": [
		// 			"SIM"
		// 		],
		// 		"NATURAL": [
		// 			"SIM"
		// 		],
		// 		"Filtros Departamentos/Categorias": [
		// 			"OBJETIVOS",
		// 			"FORMA",
		// 			"PRODUTOS ORGÂNICOS",
		// 			"PRODUTOS VEGETARIANOS",
		// 			"LIVRE DE GLÚTEN",
		// 			"SEM LACTOSE",
		// 			"ZERO AÇUCAR",
		// 			"NATURAL"
		// 		],
		// 		"allSpecifications": [
		// 			"SELOS",
		// 			"SEXO",
		// 			"ORGÂNICO",
		// 			"ORIGEM",
		// 			"PREÇO",
		// 			"MERCADOLIVRE",
		// 			"MEUS NUTRIENTES",
		// 			"O QUE FALAM DE MIM?",
		// 			"ONDE NASCI",
		// 			"CÓDIGO ANVISA",
		// 			"VÍDEO",
		// 			"OBJETIVOS",
		// 			"FORMA",
		// 			"PRODUTOS ORGÂNICOS",
		// 			"PRODUTOS VEGETARIANOS",
		// 			"LIVRE DE GLÚTEN",
		// 			"SEM LACTOSE",
		// 			"ZERO AÇUCAR",
		// 			"NATURAL"
		// 		],
		// 		"description": "<p>Se voc&ecirc; busca uma alimenta&ccedil;&atilde;o balanceada, al&eacute;m de fortalecimento do sistema imunol&oacute;gico, a <strong>CHLORELLA GREEN GEM&reg;</strong> &eacute; o alimento para voc&ecirc;! </p><br><p>Sendo uma alga unicelular de r&aacute;pida multiplica&ccedil;&atilde;o, a <strong>CHLORELLA</strong> &eacute; a planta com maior quantidade de clorofila identificada at&eacute; hoje, sendo por esse motivo de grande capacidade detox e antioxidante, retardando o envelhecimento. Comece ent&atilde;o o quanto antes a consumir diariamente o produto e mantenha por mais tempo sua apar&ecirc;ncia jovial! N&atilde;o perca tempo! Porque al&eacute;m disso, essa alga &eacute; considerada um superalimento por possuir uma grande quantidade de nutrientes e todos os amino&aacute;cidos essenciais para o seu corpo, proporcionando in&uacute;meros benef&iacute;cios que voc&ecirc; mal vai acreditar. </p><br><p>Estudos acerca do uso da <strong>CHLORELLA</strong> indicam que ela auxilia em grande medida na diminui&ccedil;&atilde;o da press&atilde;o sangu&iacute;nea e dos n&iacute;veis de colesterol do sangue, acelera a regenera&ccedil;&atilde;o, al&eacute;m de fortalecer todo o sistema imunol&oacute;gico. E, por sua alta capacidade detox e de eliminar a radia&ccedil;&atilde;o do corpo, a<strong> CHLORELLA </strong>tamb&eacute;m tem sido amplamente utilizada no tratamento do c&acirc;ncer para auxiliar na recupera&ccedil;&atilde;o dos pacientes que passam pela radioterapia. Em comprimidos, o consumo e transporte do seu superalimento <strong>CHLORELLA Green Gem</strong> ficam bem mais pr&aacute;ticos para o seu dia a dia, dispon&iacute;vel onde e quando quiser.<br></p><br><p>&nbsp;</p><br><p><strong>Benef&iacute;cios e Diferenciais:<br></strong></p><br><ul><br>  <li>- Aumento da imunidade;<br>  </li><br>  <li>- Preven&ccedil;&atilde;o do envelhecimento precoce das c&eacute;lulas;<br>  </li><br>  <li>- Regulagem do intestino;<br>  </li><br>  <li>- Melhora de capacidade de concentra&ccedil;&atilde;o;<br>  </li><br>  <li>- Sono mais repousante;<br>  </li><br>  <li>- Al&iacute;vio de depress&atilde;o e ansiedade;<br>  </li><br>  <li>- Melhora nas condi&ccedil;&otilde;es da pele;<br>  </li><br>  <li>- Aumento da vitalidade.  </li><br></ul><br><p>&nbsp;</p><br><p><strong>Informações complementares:</strong></p><br><p>Os principais benefícios da Chlorella são: aumentar a energia, regular o intestino, melhorar a capacidade de concentração, estimular e aumentar a resistência e imunidade do organismo, sono mais repousante, aliviar a depressão e a ansiedade, melhorar as condições da pele e aumentar a vitalidade.</p><br><p>A Chlorella Pyrenoidosa é uma alga unicelular que contêm um elemento especial: o C.G.F. (Fator de Crescimento Chlorella) - um complexo com nucleotídeo-peptídeo, polissacarídeos e ácidos nucleicos, 10% de RNA e 3% de DNA descoberto por um cientista japonês que permite a Chlorella crescer tão rapidamente, onde cada célula se multiplica em quatro novas células a cada vinte horas. O C.G.F. é responsável por estimular o crescimento, a reparação do material genético das células, fortalecer o sistema imunológico e suprir as células com energia necessária para responder as exigências diárias.</p><br><p>Na década de 1950, governantes dos países mais ricos do mundo criaram um projeto de desenvolvimento com o objetivo de produzir um alimento com alto valor nutritivo, entre mil plantas, a Chlorella foi selecionada.</p><br><p>O Fator de Crescimento Chlorella estimula a recuperação dos tecidos, protege a integridade das células, melhora a ingestão de nutrientes e regula a produção de energia. Ajuda também na recuperação de materiais genéticos lesados, protege a saúde dando suporte às funções celulares vitais e retarda o processo de envelhecimento.</p><br><p>O CGF é o fator na Chlorella que promove esta rápida taxa de reprodução. O Fator de Crescimento Chlorella aparece para aumentar as funções RNA/DNA, responsáveis pela produção de proteínas, enzimas e energia à nível celular, estimulando a reparação dos tecidos e protegendo as células contra substâncias tóxicas.</p><br><p><strong>Ingredientes: </strong></p><br><p>Chlorella Pyrenoidosa. N&Atilde;O CONT&Eacute;M GL&Uacute;TEN<br></p><br><p>&nbsp;</p><br><p><strong>Modo de Uso:</strong> </p><br><p>O consumo di&aacute;rio pode variar entre 10 a 20 comprimidos (2,5g &agrave; 5g) e costuma-se sentir seus efeitos positivos em cerca de 60 dias. Os comprimidos devem ser ingeridos com &aacute;gua, podendo ser consumidos pela manh&atilde; e &agrave; noite.<br></p><p>Para crianças com idade a partir de 6 meses, a dose padrão é de 50mg/kg de peso/dia. (ex. 12kg x 50mg = 600 = 2,4 comprimidos de chlorella)</p><br><p>&nbsp;</p><br><p><img src=\"http://lojaprojetoverao.vteximg.com.br/arquivos/green-gem-geral-01.jpg\"></p>",
		// 		"items": [
		// 			{
		// 				"itemId": "194001",
		// 				"name": "Kit 3x Chlorellas (250mg) 1000 Comprimidos - Green Gem",
		// 				"nameComplete": "Kit 3x Chlorellas (250mg) 1000 Comprimidos - Green Gem",
		// 				"complementName": "A Chlorella Green Gem® é considerada um super alimento por se tratar de um dos mais completos alimentos da natureza. Possui uma enorme quantidade de nutrientes primordiais ao bom desempenho das funções biológicas do nosso organismo.",
		// 				"ean": "7906204510226",
		// 				"referenceId": [
		// 					{
		// 						"Key": "RefId",
		// 						"Value": "2031_0_0_U"
		// 					}
		// 				],
		// 				"measurementUnit": "un",
		// 				"unitMultiplier": 1.0000,
		// 				"modalType": null,
		// 				"isKit": true,
		// 				"kitItems": [
		// 					{
		// 						"itemId": "127701",
		// 						"amount": 3
		// 					}
		// 				],
		// 				"images": [
		// 					{
		// 						"imageId": "162930",
		// 						"imageLabel": "",
		// 						"imageTag": "<img src=\"~/arquivos/ids/162930-#width#-#height#/green-gem-kit-3x-paversul-chlorella-1000-comprimidos-250mg-90g-loja-projeto-verao.jpg?v=636586081908600000\" width=\"#width#\" height=\"#height#\" alt=\"green-gem-kit-3x-paversul-chlorella-1000-comprimidos-250mg-90g-loja-projeto-verao\" id=\"\" />",
		// 						"imageUrl": "http://lojaprojetoverao.vteximg.com.br/arquivos/ids/162930/green-gem-kit-3x-paversul-chlorella-1000-comprimidos-250mg-90g-loja-projeto-verao.jpg?v=636586081908600000",
		// 						"imageText": "green-gem-kit-3x-paversul-chlorella-1000-comprimidos-250mg-90g-loja-projeto-verao"
		// 					},
		// 					{
		// 						"imageId": "159045",
		// 						"imageLabel": "",
		// 						"imageTag": "<img src=\"~/arquivos/ids/159045-#width#-#height#/Kit_3x_chlorella_green_gem_Loja_Projeto_Verao.jpg?v=635617598420800000\" width=\"#width#\" height=\"#height#\" alt=\"Kit_3x_chlorella_green_gem_Loja_Projeto_Verao\" id=\"\" />",
		// 						"imageUrl": "http://lojaprojetoverao.vteximg.com.br/arquivos/ids/159045/Kit_3x_chlorella_green_gem_Loja_Projeto_Verao.jpg?v=635617598420800000",
		// 						"imageText": "Kit_3x_chlorella_green_gem_Loja_Projeto_Verao"
		// 					},
		// 					{
		// 						"imageId": "162956",
		// 						"imageLabel": "",
		// 						"imageTag": "<img src=\"~/arquivos/ids/162956-#width#-#height#/green-gem-chlorella-1000-comprimidos-250mg-01.jpg?v=636586282970870000\" width=\"#width#\" height=\"#height#\" alt=\"green-gem-chlorella-1000-comprimidos-250mg-01\" id=\"\" />",
		// 						"imageUrl": "http://lojaprojetoverao.vteximg.com.br/arquivos/ids/162956/green-gem-chlorella-1000-comprimidos-250mg-01.jpg?v=636586282970870000",
		// 						"imageText": "green-gem-chlorella-1000-comprimidos-250mg-01"
		// 					}
		// 				],
		// 				"sellers": [
		// 					{
		// 						"sellerId": "1",
		// 						"sellerName": "Projeto Verão",
		// 						"addToCartLink": "https://lojaprojetoverao.vtexcommercestable.com.br/checkout/cart/add?sku=194001&qty=1&seller=1&sc=1&price=59821&cv=322ba6c1b09b9b9f1334ea1967c4fe9e_&sc=1",
		// 						"sellerDefault": true,
		// 						"commertialOffer": {
		// 							"DeliverySlaSamplesPerRegion": {
		// 								"0": {
		// 									"DeliverySlaPerTypes": [],
		// 									"Region": null
		// 								}
		// 							},
		// 							"Installments": [
		// 								{
		// 									"Value": 598.21,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 598.21,
		// 									"NumberOfInstallments": 1,
		// 									"PaymentSystemName": "American Express",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "American Express à vista"
		// 								},
		// 								{
		// 									"Value": 299.1,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 598.21,
		// 									"NumberOfInstallments": 2,
		// 									"PaymentSystemName": "American Express",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "American Express 2 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 199.4,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 598.21,
		// 									"NumberOfInstallments": 3,
		// 									"PaymentSystemName": "American Express",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "American Express 3 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 149.55,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 598.21,
		// 									"NumberOfInstallments": 4,
		// 									"PaymentSystemName": "American Express",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "American Express 4 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 119.64,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 598.21,
		// 									"NumberOfInstallments": 5,
		// 									"PaymentSystemName": "American Express",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "American Express 5 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 99.7,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 598.21,
		// 									"NumberOfInstallments": 6,
		// 									"PaymentSystemName": "American Express",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "American Express 6 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 85.45,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 598.21,
		// 									"NumberOfInstallments": 7,
		// 									"PaymentSystemName": "American Express",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "American Express 7 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 74.77,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 598.21,
		// 									"NumberOfInstallments": 8,
		// 									"PaymentSystemName": "American Express",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "American Express 8 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 598.21,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 598.21,
		// 									"NumberOfInstallments": 1,
		// 									"PaymentSystemName": "Visa",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Visa à vista"
		// 								},
		// 								{
		// 									"Value": 299.1,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 598.21,
		// 									"NumberOfInstallments": 2,
		// 									"PaymentSystemName": "Visa",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Visa 2 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 199.4,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 598.21,
		// 									"NumberOfInstallments": 3,
		// 									"PaymentSystemName": "Visa",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Visa 3 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 149.55,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 598.21,
		// 									"NumberOfInstallments": 4,
		// 									"PaymentSystemName": "Visa",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Visa 4 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 119.64,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 598.21,
		// 									"NumberOfInstallments": 5,
		// 									"PaymentSystemName": "Visa",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Visa 5 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 99.7,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 598.21,
		// 									"NumberOfInstallments": 6,
		// 									"PaymentSystemName": "Visa",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Visa 6 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 85.45,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 598.21,
		// 									"NumberOfInstallments": 7,
		// 									"PaymentSystemName": "Visa",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Visa 7 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 74.77,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 598.21,
		// 									"NumberOfInstallments": 8,
		// 									"PaymentSystemName": "Visa",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Visa 8 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 598.21,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 598.21,
		// 									"NumberOfInstallments": 1,
		// 									"PaymentSystemName": "Diners",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Diners à vista"
		// 								},
		// 								{
		// 									"Value": 299.1,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 598.21,
		// 									"NumberOfInstallments": 2,
		// 									"PaymentSystemName": "Diners",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Diners 2 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 199.4,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 598.21,
		// 									"NumberOfInstallments": 3,
		// 									"PaymentSystemName": "Diners",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Diners 3 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 149.55,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 598.21,
		// 									"NumberOfInstallments": 4,
		// 									"PaymentSystemName": "Diners",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Diners 4 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 119.64,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 598.21,
		// 									"NumberOfInstallments": 5,
		// 									"PaymentSystemName": "Diners",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Diners 5 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 99.7,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 598.21,
		// 									"NumberOfInstallments": 6,
		// 									"PaymentSystemName": "Diners",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Diners 6 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 85.45,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 598.21,
		// 									"NumberOfInstallments": 7,
		// 									"PaymentSystemName": "Diners",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Diners 7 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 74.77,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 598.21,
		// 									"NumberOfInstallments": 8,
		// 									"PaymentSystemName": "Diners",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Diners 8 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 598.21,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 598.21,
		// 									"NumberOfInstallments": 1,
		// 									"PaymentSystemName": "Mastercard",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Mastercard à vista"
		// 								},
		// 								{
		// 									"Value": 299.1,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 598.21,
		// 									"NumberOfInstallments": 2,
		// 									"PaymentSystemName": "Mastercard",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Mastercard 2 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 199.4,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 598.21,
		// 									"NumberOfInstallments": 3,
		// 									"PaymentSystemName": "Mastercard",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Mastercard 3 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 149.55,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 598.21,
		// 									"NumberOfInstallments": 4,
		// 									"PaymentSystemName": "Mastercard",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Mastercard 4 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 119.64,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 598.21,
		// 									"NumberOfInstallments": 5,
		// 									"PaymentSystemName": "Mastercard",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Mastercard 5 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 99.7,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 598.21,
		// 									"NumberOfInstallments": 6,
		// 									"PaymentSystemName": "Mastercard",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Mastercard 6 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 85.45,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 598.21,
		// 									"NumberOfInstallments": 7,
		// 									"PaymentSystemName": "Mastercard",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Mastercard 7 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 74.77,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 598.21,
		// 									"NumberOfInstallments": 8,
		// 									"PaymentSystemName": "Mastercard",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Mastercard 8 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 598.21,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 598.21,
		// 									"NumberOfInstallments": 1,
		// 									"PaymentSystemName": "Hipercard",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Hipercard à vista"
		// 								},
		// 								{
		// 									"Value": 299.1,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 598.21,
		// 									"NumberOfInstallments": 2,
		// 									"PaymentSystemName": "Hipercard",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Hipercard 2 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 199.4,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 598.21,
		// 									"NumberOfInstallments": 3,
		// 									"PaymentSystemName": "Hipercard",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Hipercard 3 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 149.55,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 598.21,
		// 									"NumberOfInstallments": 4,
		// 									"PaymentSystemName": "Hipercard",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Hipercard 4 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 119.64,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 598.21,
		// 									"NumberOfInstallments": 5,
		// 									"PaymentSystemName": "Hipercard",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Hipercard 5 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 99.7,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 598.21,
		// 									"NumberOfInstallments": 6,
		// 									"PaymentSystemName": "Hipercard",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Hipercard 6 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 85.45,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 598.21,
		// 									"NumberOfInstallments": 7,
		// 									"PaymentSystemName": "Hipercard",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Hipercard 7 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 74.77,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 598.21,
		// 									"NumberOfInstallments": 8,
		// 									"PaymentSystemName": "Hipercard",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Hipercard 8 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 598.21,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 598.21,
		// 									"NumberOfInstallments": 1,
		// 									"PaymentSystemName": "Elo",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Elo à vista"
		// 								},
		// 								{
		// 									"Value": 299.1,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 598.21,
		// 									"NumberOfInstallments": 2,
		// 									"PaymentSystemName": "Elo",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Elo 2 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 199.4,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 598.21,
		// 									"NumberOfInstallments": 3,
		// 									"PaymentSystemName": "Elo",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Elo 3 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 149.55,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 598.21,
		// 									"NumberOfInstallments": 4,
		// 									"PaymentSystemName": "Elo",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Elo 4 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 119.64,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 598.21,
		// 									"NumberOfInstallments": 5,
		// 									"PaymentSystemName": "Elo",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Elo 5 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 99.7,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 598.21,
		// 									"NumberOfInstallments": 6,
		// 									"PaymentSystemName": "Elo",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Elo 6 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 85.45,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 598.21,
		// 									"NumberOfInstallments": 7,
		// 									"PaymentSystemName": "Elo",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Elo 7 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 74.77,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 598.21,
		// 									"NumberOfInstallments": 8,
		// 									"PaymentSystemName": "Elo",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Elo 8 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 598.21,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 598.21,
		// 									"NumberOfInstallments": 1,
		// 									"PaymentSystemName": "Vale",
		// 									"PaymentSystemGroupName": "giftCardPaymentGroup",
		// 									"Name": "Vale à vista"
		// 								},
		// 								{
		// 									"Value": 598.21,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 598.21,
		// 									"NumberOfInstallments": 1,
		// 									"PaymentSystemName": "BOLBRADESCO",
		// 									"PaymentSystemGroupName": "bankInvoicePaymentGroup",
		// 									"Name": "BOLBRADESCO à vista"
		// 								}
		// 							],
		// 							"DiscountHighLight": [],
		// 							"GiftSkuIds": [],
		// 							"Teasers": [],
		// 							"BuyTogether": [],
		// 							"Price": 598.21,
		// 							"ListPrice": 598.21,
		// 							"PriceWithoutDiscount": 598.21,
		// 							"RewardValue": 0.0,
		// 							"PriceValidUntil": "2020-02-28T22:34:23Z",
		// 							"AvailableQuantity": 35,
		// 							"Tax": 0.0,
		// 							"DeliverySlaSamples": [
		// 								{
		// 									"DeliverySlaPerTypes": [],
		// 									"Region": null
		// 								}
		// 							],
		// 							"GetInfoErrorMessage": null,
		// 							"CacheVersionUsedToCallCheckout": "322ba6c1b09b9b9f1334ea1967c4fe9e_"
		// 						}
		// 					}
		// 				],
		// 				"Videos": []
		// 			}
		// 		]
		// 	},
		// 	{
		// 		"productId": "184101",
		// 		"productName": "Chlorella Kenbi 100% Pura 240 Comprimidos",
		// 		"brand": "Kenbi",
		// 		"linkText": "chlorella-kenbi-240",
		// 		"productReference": "184101",
		// 		"categoryId": "1843463835",
		// 		"productTitle": "Chlorella Kenbi 100% Pura - 240 Comprimidos",
		// 		"metaTagDescription": "A Chlorella nutre e ajuda a desintoxicar o organismo e consequentemente ajuda aumentar a resistencia imunologica.",
		// 		"clusterHighlights": {},
		// 		"productClusters": {
		// 			"140": "Loja",
		// 			"141": "Comparadores",
		// 			"163": "Buscape",
		// 			"164": "Zoom",
		// 			"170": "Facebook Catalogo",
		// 			"174": "Black Friday Chlorellas"
		// 		},
		// 		"searchableClusters": {},
		// 		"categories": [
		// 			"/Suplementos para emagrecer/",
		// 			"/Suplementos para emagrecer/Controladores de apetite naturais/Chorella/",
		// 			"/Suplementos para emagrecer/Controladores de apetite naturais/",
		// 			"/Super alimentos e digestão/Detox/",
		// 			"/Super alimentos e digestão/",
		// 			"/Super alimentos e digestão/Super alimentos naturais verdes/",
		// 			"/Super alimentos e digestão/Super alimentos naturais verdes/Clorofila/",
		// 			"/Super alimentos e digestão/Super alimentos naturais verdes/Chlorella/"
		// 		],
		// 		"categoriesIds": [
		// 			"/1843463835/",
		// 			"/1843463835/655457002/348140705/",
		// 			"/1843463835/655457002/",
		// 			"/715546402/523554888/",
		// 			"/715546402/",
		// 			"/715546402/904091387/",
		// 			"/715546402/904091387/1187776231/",
		// 			"/715546402/904091387/1587129881/"
		// 		],
		// 		"link": "https://lojaprojetoverao.vtexcommercestable.com.br/chlorella-kenbi-240/p",
		// 		"SELOS": [
		// 			"SEM GLÚTEN",
		// 			"SEM LACTOSE",
		// 			"ZERO AÇÚCAR (DIET)",
		// 			"SEM CORANTES",
		// 			"SEM AROMATIZANTES",
		// 			"SEM CONSERVANTES",
		// 			"NÃO TRANSGÊNICO",
		// 			"NATURAL",
		// 			"PRODUTO EM TABLETES",
		// 			"PRODUTO VEGETARIANO"
		// 		],
		// 		"Especificações": [
		// 			"SELOS"
		// 		],
		// 		"SEXO": [
		// 			"HOMEM",
		// 			"MULHER"
		// 		],
		// 		"ORGÂNICO": [
		// 			"SIM"
		// 		],
		// 		"ORIGEM": [
		// 			"IMPORTADO"
		// 		],
		// 		"PREÇO": [
		// 			"ATÉ 99"
		// 		],
		// 		"Personal Filtros": [
		// 			"SEXO",
		// 			"ORGÂNICO",
		// 			"ORIGEM",
		// 			"PREÇO"
		// 		],
		// 		"MERCADOLIVRE": [
		// 			"Você sabia que a CHLORELLA é uma alga? Uma alga verde unicelular, cultivada em água doce e que atualmente tem sido alvo de inúmeras pesquisas devido ao seu alto valor nutritivo e suas propriedades benéficas à saúde. Alguns desses estudos são da NASA (National Aeronautics and Space Administration), a mesma agência responsável por levar o homem pela primeira vez à Lua! E eles mostram como a Chlorella é rica e completa em nutrientes, o que explica porque a NASA incluiu essa alga no cardápio de seus astronautas. Isso porque ela fornece proteínas, carboidratos, gorduras boas, vitaminas, minerais, fitonutrientes como os pigmentos carotenoides (astaxantina, cantaxantina, loraxantina, flavoxantina e neoxantina) e a clorofila, importantes para o funcionamento do corpo humano.<br> <br>Alguns dizem que ela possui todos os elementos necessários para dar sustento à vida na Terra. Com tudo isso se o dilúvio acontecer hoje, já sabemos agora o que levar em nossa arca de Noé, não é mesmo? Vale também ressaltar um importantíssimo nutriente natural especial presente unicamente na CHLORELLA chamado Chlorella Growth Factor, o C.G.F. Um complexo nucleotídio-peptídio, com polissacarídios e ácidos nucleicos, 10% de RNA e 3% de DNA. Responsáveis por estimular o crescimento e a reparação do material genético das células, fortalecer o sistema imunológico do seu corpo e suprir as células de energia, o que faz com que o C.G.F seja um importante aliado do vigor físico e da sua saúde. Dessa forma, você vai perceber que o consumo diário da CHLORELLA com C.G.F tem como resultados mais comuns a energia aumentada, sono mais repousante, alívio de depressão e ansiedade, melhora na capacidade de concentração, hálito melhor, alívio de constipação e melhora nas condições da pele. E o que tudo isso significa?<br> <br>Quer dizer que a ingestão de CHLORELLA, de maneira frequente e diária, funciona como desintoxicante e regulador do intestino, além de proteger o sistema imunológico do seu corpo, o que fortalece o organismo e previne doenças. O consumo de CHLORELLA ajuda também a fortalecer ossos, prevenir fraturas e osteoporose, pois ela possui boa concentração de cálcio em sua composição, além de magnésio e clorofila. E, devido às altas taxas de fósforo, a CHLORELLA atua no cérebro promovendo melhor atividade, além de prevenir hipertensão, colesterol e triglicerídeos. Viu só quantos benefícios ela pode trazer para sua saúde? Por que não começar hoje a cuidar da sua saúde com a CHLORELLA KENBI 100% PURA? <br> <br>Benefícios e Diferenciais<br>•\t- Desintoxicar o organismo, eliminando os metais pesados e as substâncias químicas tóxicas;<br>•\t- Melhorar o funcionamento do intestino, graças a sua elevada concentração de clorofila;<br>•\t- Estimular a atividade dos macrófagos e dos linfócitos reforçando a capacidade do sistema imunitário para combater vírus, bactérias, proteínas estranhas ou produtos químicos;<br>•\t- Oxigenar as células;<br>•\t- Equilibrar o pH do organismo, dado que é alcalina;<br>•\t- Emagrecimento;<br>•\t- Fortalecimento do sistema imunológico;<br>•\t- Aumento dos níveis de energia e disposição;<br>•\t- Diminuição dos níveis de colesterol;<br>•\t- Controle da pressão arterial;<br>•\t- Previne a anemia;<br>•\t- Fortalecimento do Sistema Imunológico;<br>•\t- Diminui as dores musculares;<br>•\t- Auxilia na saúde do coração.<br> <br>Informações Complementares<br><br>A CHLORELLA acabou se tornando um dos suplementos alimentares mais estudados para complementar a alimentação humana por seu alto valor nutritivo e por isso recomenda-se o seu consumo diário. “Mas tudo em excesso faz mal!” ou pelo menos é o que dizem, mas na verdade a CHLORELLA consegue abrir uma exceção nesse caso, porque alguns médicos a recomendam em grandes doses para o auxílio no tratamento de câncer, ou seja, em situações especiais uma grande quantidade pode ser benéfica. Existem até relatos de muitos usuários sobre a melhora que a CHLORELLA fez para a sua recuperação.<br> <br>Ingredientes<br><br>Chlorella Pyrenoidosa. NÃO CONTÉM GLÚTEN.<br> <br>Modo de Uso<br><br>Ingerir de 8 a 15 comprimidos por dia com líquido. Crianças: 50mg por quilo de peso. (Cada 15 comprimidos = 3g)"
		// 		],
		// 		"MEUS NUTRIENTES": [
		// 			"<div class=\"nutrientes\"><br><div class=\"informacao\"><br /><br><table style=\"overflow: hidden; display: block; border-collapse: collapse;\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\"><br><tbody><br><tr><br><td><br><h3>Informa&ccedil;&otilde;es Nutricionais</h3><br></td><br></tr><br><tr><br><td><br><p>Por&ccedil;&atilde;o de 3g (15 comprimidos)</p><br></td><br></tr><br><tr><br><td><br><div class=\"quantidade\">Quantidade por por&ccedil;&atilde;o</div><br><div class=\"vd\">%V.D*</div><br></td><br></tr><br><tr><br><td><br /><br /><br /><br><table style=\"overflow: hidden; display: block; border-collapse: collapse;\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\"><br><tbody><br><tr><br><td class=\"first\"><br><p>Valor energ&eacute;tico</p><br></td><br><td><br><p>12,6Kcal=54kJ</p><br></td><br><td class=\"last\"><br><p>1%</p><br></td><br></tr><br><tr><br><td class=\"first\"><br><p>Carboidratos</p><br></td><br><td><br><p>0,5g</p><br></td><br><td class=\"last\"><br><p>0%</p><br></td><br></tr><br><tr><br><td class=\"first\"><br><p>Prote&iacute;nas</p><br></td><br><td><br><p>2g</p><br></td><br><td class=\"last\"><br><p>3%</p><br></td><br></tr><br><tr><br><td class=\"first\"><br><p>Gorduras Totais</p><br></td><br><td><br><p>0,5g</p><br></td><br><td class=\"last\"><br><p>0%</p><br></td><br></tr><br><tr><br><td class=\"first\"><br><p>Ferro</p><br></td><br><td><br><p>5,4mg</p><br></td><br><td class=\"last\"><br><p>38%</p><br></td><br></tr><br><tr><br><td class=\"first\"><br><p>S&oacute;dio</p><br></td><br><td><br><p>2,8mg</p><br></td><br><td class=\"last\"><br><p>0%</p><br></td><br></tr><br></tbody><br></table><br><br /><br /><br /></td><br></tr><br></tbody><br></table><br><p>*% Valores di&aacute;rios de refer&ecirc;ncia com base em uma dieta de 2000Kcal ou 8400kJ.&nbsp;Seus valores di&aacute;rios podem ser maiores ou menores dependendo de suas necessidades energ&eacute;ticas.<br /><br />N&atilde;o cont&eacute;m quantidade significativa de gorduras saturadas, gorduras trans e fibra alimentar.</p><br><p>&nbsp;</p><br></div><br><div class=\"nota\"><br><h3>Tome nota:</h3><br><div class=\"fundo\"><br><div><br><h3>Prote&iacute;nas</h3><br><p>2g</p><br></div><br><div><br><h3>Ferro</h3><br><p>5,4mg</p><br></div><br><div><br><h3>S&oacute;dio</h3><br><p>2,8mg</p><br></div><br><div class=\"last\"><br><h3>Carboidratos</h3><br><p>12,6</p><br><p>Kcal</p><br></div><br></div><br><p><strong>Ingredientes:&nbsp;</strong>Chlorella Pyrenoidosa Org&acirc;nica. N&Atilde;O CONT&Eacute;M GL&Uacute;TEN.</p><br></div><br><div class=\"advertencias\"><br><h3>Advert&ecirc;ncias:</h3><br><p>Manter longe do alcance das crian&ccedil;as.</p><br><p>Minist&eacute;rio da Sa&uacute;de adverte: N&atilde;o existem evid&ecirc;ncias cient&iacute;ficas comprovadas de que este alimento previna, trate ou cure doen&ccedil;as.</p><br></div><br><div class=\"qntdos\"><br><div><br><h3>Quantidade</h3><br><h3 class=\"last\">Doses</h3><br></div><br><div><br><p>240&nbsp;Comprimidos</p><br><p class=\"last\">30</p><br></div><br></div><br><div class=\"instrucoes\"><br><h3>Instru&ccedil;&otilde;es de uso:</h3><br><p>Ingerir de 8 a 15 comprimidos por dia com l&iacute;quido. Crian&ccedil;as: 50mg por quilo de peso. (Cada 15 comprimidos = 3g)</p><br><br /><br /><br /></div><br><br /><br /></div>"
		// 		],
		// 		"O QUE FALAM DE MIM?": [
		// 			"<h3>O que falam de mim?</h3>"
		// 		],
		// 		"ONDE NASCI": [
		// 			"<p>KENBI é uma empresa especializada em suplementos alimentares com tecnologia japonesa. Ela faz parte do grupo TRD, com sede em Tóquio e com 15 anos de história na produção e terceirização de suplementos nutricionais, com a mais avançada tecnologia. Ela seleciona matérias-primas diferenciadas de excelente qualidade como é o caso da  Chlorella Kenbi. Eles enviam a matéria prima em pó para a Token-Jitsugyou, maior empresa de alimentos em Taiwan, para produção dos comprimidos, seguindo as normas de segurança exigidos pelo governo do Japão. Assim, a KENBI consegue produzir Chlorella com alto padrão de qualidade. E esse mesmo produto comercializado no japão é que vem para o Brasil. Este é o diferencial da Chlorella Kenbi que além de ser produzido sobre o rígido controle de qualidade do Japão, ela é 100% pura e natural, sem misturas ou aditivos químicos, com alta digestibilidade.</p>"
		// 		],
		// 		"CÓDIGO ANVISA": [
		// 			"5.6484.0007.001-4"
		// 		],
		// 		"VÍDEO": [
		// 			"<iframe width=\"370\" height=\"370\" src=\"//www.youtube.com/embed/EBCQHQYKqDs\" frameborder=\"0\" allowfullscreen></iframe><br><br>"
		// 		],
		// 		"Descrição": [
		// 			"MERCADOLIVRE",
		// 			"MEUS NUTRIENTES",
		// 			"O QUE FALAM DE MIM?",
		// 			"ONDE NASCI",
		// 			"CÓDIGO ANVISA",
		// 			"VÍDEO"
		// 		],
		// 		"OBJETIVOS": [
		// 			"FORTALECER A IMUNIDADE"
		// 		],
		// 		"FORMA": [
		// 			"COMPRIMIDOS"
		// 		],
		// 		"PRODUTOS ORGÂNICOS": [
		// 			"SIM"
		// 		],
		// 		"PRODUTOS VEGETARIANOS": [
		// 			"SIM"
		// 		],
		// 		"LIVRE DE GLÚTEN": [
		// 			"SIM"
		// 		],
		// 		"SEM LACTOSE": [
		// 			"SIM"
		// 		],
		// 		"ZERO AÇUCAR": [
		// 			"SIM"
		// 		],
		// 		"NATURAL": [
		// 			"SIM"
		// 		],
		// 		"Filtros Departamentos/Categorias": [
		// 			"OBJETIVOS",
		// 			"FORMA",
		// 			"PRODUTOS ORGÂNICOS",
		// 			"PRODUTOS VEGETARIANOS",
		// 			"LIVRE DE GLÚTEN",
		// 			"SEM LACTOSE",
		// 			"ZERO AÇUCAR",
		// 			"NATURAL"
		// 		],
		// 		"allSpecifications": [
		// 			"SELOS",
		// 			"SEXO",
		// 			"ORGÂNICO",
		// 			"ORIGEM",
		// 			"PREÇO",
		// 			"MERCADOLIVRE",
		// 			"MEUS NUTRIENTES",
		// 			"O QUE FALAM DE MIM?",
		// 			"ONDE NASCI",
		// 			"CÓDIGO ANVISA",
		// 			"VÍDEO",
		// 			"OBJETIVOS",
		// 			"FORMA",
		// 			"PRODUTOS ORGÂNICOS",
		// 			"PRODUTOS VEGETARIANOS",
		// 			"LIVRE DE GLÚTEN",
		// 			"SEM LACTOSE",
		// 			"ZERO AÇUCAR",
		// 			"NATURAL"
		// 		],
		// 		"description": "<p>Voc&ecirc; sabia que a <strong>CHLORELLA</strong> &eacute; uma alga? Uma alga verde unicelular, cultivada em &aacute;gua doce e que atualmente tem sido alvo de in&uacute;meras pesquisas devido ao seu alto valor nutritivo e suas propriedades ben&eacute;ficas &agrave; sa&uacute;de. Alguns desses estudos s&atilde;o da NASA (National Aeronautics and Space Administration), a mesma ag&ecirc;ncia respons&aacute;vel por levar o homem pela primeira vez &agrave; Lua! E eles mostram como a <strong>Chlorella</strong> &eacute; rica e completa em nutrientes, o que explica porque a NASA incluiu essa alga no card&aacute;pio de seus astronautas. Isso porque ela fornece prote&iacute;nas, carboidratos, gorduras boas, vitaminas, minerais, fitonutrientes como os pigmentos carotenoides (astaxantina, cantaxantina, loraxantina, flavoxantina e neoxantina) e a clorofila, importantes para o funcionamento do corpo humano.</p><br><p>&nbsp;</p><br><br><p>Alguns dizem que ela possui todos os elementos necess&aacute;rios para dar sustento &agrave; vida na Terra. Com tudo isso se o dil&uacute;vio acontecer hoje, j&aacute; sabemos agora o que levar em nossa arca de No&eacute;, n&atilde;o &eacute; mesmo? Vale tamb&eacute;m ressaltar um important&iacute;ssimo nutriente natural especial presente unicamente na <strong>CHLORELLA</strong> chamado <strong>Chlorella Growth Factor</strong>, o <strong>C.G.F.</strong> Um complexo nucleot&iacute;dio-pept&iacute;dio, com polissacar&iacute;dios e &aacute;cidos nucleicos, 10% de RNA e 3% de DNA. Respons&aacute;veis por estimular o crescimento e a repara&ccedil;&atilde;o do material gen&eacute;tico das c&eacute;lulas, fortalecer o sistema imunol&oacute;gico do seu corpo e suprir as c&eacute;lulas de energia, o que faz com que o<strong> C.G.F</strong> seja um importante aliado do vigor f&iacute;sico e da sua sa&uacute;de. Dessa forma, voc&ecirc; vai perceber que o consumo di&aacute;rio da <strong>CHLORELLA com C.G.F</strong> tem como resultados mais comuns a energia aumentada, sono mais repousante, al&iacute;vio de depress&atilde;o e ansiedade, melhora na capacidade de concentra&ccedil;&atilde;o, h&aacute;lito melhor, al&iacute;vio de constipa&ccedil;&atilde;o e melhora nas condi&ccedil;&otilde;es da pele. E o que tudo isso significa?</p><br><p>&nbsp;</p><br><p>Quer dizer que a ingest&atilde;o de <strong>CHLORELLA</strong>, de maneira frequente e di&aacute;ria, funciona como desintoxicante e regulador do intestino, al&eacute;m de proteger o sistema imunol&oacute;gico do seu corpo, o que fortalece o organismo e previne doen&ccedil;as. O consumo de <strong>CHLORELLA</strong> ajuda tamb&eacute;m a fortalecer ossos, prevenir fraturas e osteoporose, pois ela possui boa concentra&ccedil;&atilde;o de c&aacute;lcio em sua composi&ccedil;&atilde;o, al&eacute;m de magn&eacute;sio e clorofila. E, devido &agrave;s altas taxas de f&oacute;sforo, a <strong>CHLORELLA</strong> atua no c&eacute;rebro promovendo melhor atividade, al&eacute;m de prevenir hipertens&atilde;o, colesterol e triglicer&iacute;deos. Viu s&oacute; quantos benef&iacute;cios ela pode trazer para sua sa&uacute;de? Por que n&atilde;o come&ccedil;ar hoje a cuidar da sua sa&uacute;de com a <strong>CHLORELLA KENBI 100% PURA</strong>?&nbsp;</p><br><p>&nbsp;</p><br><p><strong>Benef&iacute;cios e Diferenciais</strong></p><br><ul><br>  <li>- Desintoxicar o organismo, eliminando os metais pesados e as subst&acirc;ncias qu&iacute;micas t&oacute;xicas;</li><br>  <li>- Melhorar o funcionamento do intestino, gra&ccedil;as a sua elevada concentra&ccedil;&atilde;o de clorofila;</li><br>  <li>- Estimular a atividade dos macr&oacute;fagos e dos linf&oacute;citos refor&ccedil;ando a capacidade do sistema imunit&aacute;rio para combater v&iacute;rus, bact&eacute;rias, prote&iacute;nas estranhas ou produtos qu&iacute;micos;</li><br>  <li>- Oxigenar as c&eacute;lulas;</li><br>  <li>- Equilibrar o pH do organismo, dado que &eacute; alcalina;</li><br>  <li>- Emagrecimento;</li><br>  <li>- Fortalecimento do sistema imunol&oacute;gico;</li><br>  <li>- Aumento dos n&iacute;veis de energia e disposi&ccedil;&atilde;o;</li><br>  <li>- Diminui&ccedil;&atilde;o dos n&iacute;veis de colesterol;</li><br>  <li>- Controle da press&atilde;o arterial;</li><br>  <li>- Previne a anemia;</li><br>  <li>- Fortalecimento do Sistema Imunol&oacute;gico;</li><br>  <li>- Diminui as dores musculares;</li><br>  <li>- Auxilia na sa&uacute;de do cora&ccedil;&atilde;o.</li><br></ul><br><p>&nbsp;</p><br><p><strong>Informa&ccedil;&otilde;es Complementares</strong></p><br><p><br />A CHLORELLA acabou se tornando um dos suplementos alimentares mais estudados para complementar a alimenta&ccedil;&atilde;o humana por seu alto valor nutritivo e por isso recomenda-se o seu consumo di&aacute;rio. &ldquo;Mas tudo em excesso faz mal!&rdquo; ou pelo menos &eacute; o que dizem, mas na verdade a CHLORELLA consegue abrir uma exce&ccedil;&atilde;o nesse caso, porque alguns m&eacute;dicos a recomendam em grandes doses para o aux&iacute;lio no tratamento de c&acirc;ncer, ou seja, em situa&ccedil;&otilde;es especiais uma grande quantidade pode ser ben&eacute;fica. Existem at&eacute; relatos de muitos usu&aacute;rios sobre a melhora que a CHLORELLA fez para a sua recupera&ccedil;&atilde;o.</p><br><p>&nbsp;</p><br><p><strong>Ingredientes</strong></p><br><p><br />Chlorella Pyrenoidosa. N&Atilde;O CONT&Eacute;M GL&Uacute;TEN.</p><br><p>&nbsp;</p><br><p><strong>Modo de Uso</strong></p><br><p><br />Ingerir de 8 a 15 comprimidos por dia com l&iacute;quido.</p> <p>Para crianças com idade a partir de 6 meses, a dose padrão é de 50mg/kg de peso/dia. (ex. 12kg x 50mg = 600 = 3 comprimidos de chlorella)</p><br><p>&nbsp;</p><br><p><img title=\"Chlorella_Kenbi_tabela_Loja_Projeto_Verao\" src=\"http://lojaprojetoverao.vteximg.com.br/arquivos/kenbi-geral-05.jpg\" alt=\"Chlorella_Kenbi_tabela_Loja_Projeto_Verao\" /></p><br><br><br><br><a href=\"https://www.lojaprojetoverao.com.br/kit-3x-chlorella-100-pura-240-comprimidos-kenbi/p\"><img src=\"http://lojaprojetoverao.vteximg.com.br/arquivos/kenbi-kits-3x-banner-240-comprimidos-00.jpg\"></a>",
		// 		"items": [
		// 			{
		// 				"itemId": "192501",
		// 				"name": "Chlorella Kenbi 100% Pura 240 Comprimidos",
		// 				"nameComplete": "Chlorella Kenbi 100% Pura 240 Comprimidos",
		// 				"complementName": "Experimente inserir em sua dieta diária a CHLORELLA e sinta o resultado que esse superalimento irá te trazer. Chlorella Kenbi 100% Pura em 240 comprimidos garante 1 mês de suplementação.",
		// 				"ean": "7896183844875",
		// 				"referenceId": [
		// 					{
		// 						"Key": "RefId",
		// 						"Value": "2027_0_0_U"
		// 					}
		// 				],
		// 				"measurementUnit": "un",
		// 				"unitMultiplier": 1.0000,
		// 				"modalType": null,
		// 				"isKit": false,
		// 				"images": [
		// 					{
		// 						"imageId": "163344",
		// 						"imageLabel": "",
		// 						"imageTag": "<img src=\"~/arquivos/ids/163344-#width#-#height#/mkt-kenbi-chlorella-pyrenoidosa-240comprimidos.jpg?v=636633766977430000\" width=\"#width#\" height=\"#height#\" alt=\"mkt-kenbi-chlorella-pyrenoidosa-240comprimidos\" id=\"\" />",
		// 						"imageUrl": "http://lojaprojetoverao.vteximg.com.br/arquivos/ids/163344/mkt-kenbi-chlorella-pyrenoidosa-240comprimidos.jpg?v=636633766977430000",
		// 						"imageText": "mkt-kenbi-chlorella-pyrenoidosa-240comprimidos"
		// 					},
		// 					{
		// 						"imageId": "161063",
		// 						"imageLabel": "",
		// 						"imageTag": "<img src=\"~/arquivos/ids/161063-#width#-#height#/kenbi-chlorella-100--pura-240-comprimidos-L-loja-projeto-verao.jpg?v=636376313901530000\" width=\"#width#\" height=\"#height#\" alt=\"kenbi-chlorella-100--pura-240-comprimidos-L-loja-projeto-verao\" id=\"\" />",
		// 						"imageUrl": "http://lojaprojetoverao.vteximg.com.br/arquivos/ids/161063/kenbi-chlorella-100--pura-240-comprimidos-L-loja-projeto-verao.jpg?v=636376313901530000",
		// 						"imageText": "kenbi-chlorella-100--pura-240-comprimidos-L-loja-projeto-verao"
		// 					},
		// 					{
		// 						"imageId": "161065",
		// 						"imageLabel": "",
		// 						"imageTag": "<img src=\"~/arquivos/ids/161065-#width#-#height#/kenbi-chlorella-100--pura-240-comprimidos-C-loja-projeto-verao.jpg?v=636376314261100000\" width=\"#width#\" height=\"#height#\" alt=\"kenbi-chlorella-100--pura-240-comprimidos-C-loja-projeto-verao\" id=\"\" />",
		// 						"imageUrl": "http://lojaprojetoverao.vteximg.com.br/arquivos/ids/161065/kenbi-chlorella-100--pura-240-comprimidos-C-loja-projeto-verao.jpg?v=636376314261100000",
		// 						"imageText": "kenbi-chlorella-100--pura-240-comprimidos-C-loja-projeto-verao"
		// 					}
		// 				],
		// 				"sellers": [
		// 					{
		// 						"sellerId": "1",
		// 						"sellerName": "Projeto Verão",
		// 						"addToCartLink": "https://lojaprojetoverao.vtexcommercestable.com.br/checkout/cart/add?sku=192501&qty=1&seller=1&sc=1&price=7862&cv=7a513d48bcec5ab851a826de3d957a3a_&sc=1",
		// 						"sellerDefault": true,
		// 						"commertialOffer": {
		// 							"DeliverySlaSamplesPerRegion": {
		// 								"0": {
		// 									"DeliverySlaPerTypes": [],
		// 									"Region": null
		// 								}
		// 							},
		// 							"Installments": [
		// 								{
		// 									"Value": 78.62,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 78.62,
		// 									"NumberOfInstallments": 1,
		// 									"PaymentSystemName": "American Express",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "American Express à vista"
		// 								},
		// 								{
		// 									"Value": 39.31,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 78.62,
		// 									"NumberOfInstallments": 2,
		// 									"PaymentSystemName": "American Express",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "American Express 2 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 26.2,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 78.62,
		// 									"NumberOfInstallments": 3,
		// 									"PaymentSystemName": "American Express",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "American Express 3 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 19.65,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 78.62,
		// 									"NumberOfInstallments": 4,
		// 									"PaymentSystemName": "American Express",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "American Express 4 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 15.72,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 78.62,
		// 									"NumberOfInstallments": 5,
		// 									"PaymentSystemName": "American Express",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "American Express 5 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 13.1,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 78.62,
		// 									"NumberOfInstallments": 6,
		// 									"PaymentSystemName": "American Express",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "American Express 6 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 11.23,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 78.62,
		// 									"NumberOfInstallments": 7,
		// 									"PaymentSystemName": "American Express",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "American Express 7 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 9.82,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 78.62,
		// 									"NumberOfInstallments": 8,
		// 									"PaymentSystemName": "American Express",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "American Express 8 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 78.62,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 78.62,
		// 									"NumberOfInstallments": 1,
		// 									"PaymentSystemName": "Visa",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Visa à vista"
		// 								},
		// 								{
		// 									"Value": 39.31,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 78.62,
		// 									"NumberOfInstallments": 2,
		// 									"PaymentSystemName": "Visa",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Visa 2 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 26.2,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 78.62,
		// 									"NumberOfInstallments": 3,
		// 									"PaymentSystemName": "Visa",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Visa 3 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 19.65,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 78.62,
		// 									"NumberOfInstallments": 4,
		// 									"PaymentSystemName": "Visa",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Visa 4 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 15.72,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 78.62,
		// 									"NumberOfInstallments": 5,
		// 									"PaymentSystemName": "Visa",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Visa 5 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 13.1,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 78.62,
		// 									"NumberOfInstallments": 6,
		// 									"PaymentSystemName": "Visa",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Visa 6 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 11.23,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 78.62,
		// 									"NumberOfInstallments": 7,
		// 									"PaymentSystemName": "Visa",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Visa 7 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 9.82,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 78.62,
		// 									"NumberOfInstallments": 8,
		// 									"PaymentSystemName": "Visa",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Visa 8 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 78.62,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 78.62,
		// 									"NumberOfInstallments": 1,
		// 									"PaymentSystemName": "Diners",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Diners à vista"
		// 								},
		// 								{
		// 									"Value": 39.31,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 78.62,
		// 									"NumberOfInstallments": 2,
		// 									"PaymentSystemName": "Diners",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Diners 2 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 26.2,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 78.62,
		// 									"NumberOfInstallments": 3,
		// 									"PaymentSystemName": "Diners",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Diners 3 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 19.65,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 78.62,
		// 									"NumberOfInstallments": 4,
		// 									"PaymentSystemName": "Diners",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Diners 4 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 15.72,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 78.62,
		// 									"NumberOfInstallments": 5,
		// 									"PaymentSystemName": "Diners",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Diners 5 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 13.1,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 78.62,
		// 									"NumberOfInstallments": 6,
		// 									"PaymentSystemName": "Diners",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Diners 6 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 11.23,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 78.62,
		// 									"NumberOfInstallments": 7,
		// 									"PaymentSystemName": "Diners",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Diners 7 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 9.82,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 78.62,
		// 									"NumberOfInstallments": 8,
		// 									"PaymentSystemName": "Diners",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Diners 8 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 78.62,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 78.62,
		// 									"NumberOfInstallments": 1,
		// 									"PaymentSystemName": "Mastercard",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Mastercard à vista"
		// 								},
		// 								{
		// 									"Value": 39.31,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 78.62,
		// 									"NumberOfInstallments": 2,
		// 									"PaymentSystemName": "Mastercard",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Mastercard 2 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 26.2,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 78.62,
		// 									"NumberOfInstallments": 3,
		// 									"PaymentSystemName": "Mastercard",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Mastercard 3 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 19.65,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 78.62,
		// 									"NumberOfInstallments": 4,
		// 									"PaymentSystemName": "Mastercard",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Mastercard 4 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 15.72,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 78.62,
		// 									"NumberOfInstallments": 5,
		// 									"PaymentSystemName": "Mastercard",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Mastercard 5 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 13.1,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 78.62,
		// 									"NumberOfInstallments": 6,
		// 									"PaymentSystemName": "Mastercard",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Mastercard 6 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 11.23,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 78.62,
		// 									"NumberOfInstallments": 7,
		// 									"PaymentSystemName": "Mastercard",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Mastercard 7 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 9.82,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 78.62,
		// 									"NumberOfInstallments": 8,
		// 									"PaymentSystemName": "Mastercard",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Mastercard 8 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 78.62,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 78.62,
		// 									"NumberOfInstallments": 1,
		// 									"PaymentSystemName": "Hipercard",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Hipercard à vista"
		// 								},
		// 								{
		// 									"Value": 39.31,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 78.62,
		// 									"NumberOfInstallments": 2,
		// 									"PaymentSystemName": "Hipercard",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Hipercard 2 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 26.2,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 78.62,
		// 									"NumberOfInstallments": 3,
		// 									"PaymentSystemName": "Hipercard",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Hipercard 3 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 19.65,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 78.62,
		// 									"NumberOfInstallments": 4,
		// 									"PaymentSystemName": "Hipercard",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Hipercard 4 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 15.72,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 78.62,
		// 									"NumberOfInstallments": 5,
		// 									"PaymentSystemName": "Hipercard",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Hipercard 5 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 13.1,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 78.62,
		// 									"NumberOfInstallments": 6,
		// 									"PaymentSystemName": "Hipercard",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Hipercard 6 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 11.23,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 78.62,
		// 									"NumberOfInstallments": 7,
		// 									"PaymentSystemName": "Hipercard",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Hipercard 7 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 9.82,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 78.62,
		// 									"NumberOfInstallments": 8,
		// 									"PaymentSystemName": "Hipercard",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Hipercard 8 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 78.62,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 78.62,
		// 									"NumberOfInstallments": 1,
		// 									"PaymentSystemName": "Elo",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Elo à vista"
		// 								},
		// 								{
		// 									"Value": 39.31,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 78.62,
		// 									"NumberOfInstallments": 2,
		// 									"PaymentSystemName": "Elo",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Elo 2 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 26.2,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 78.62,
		// 									"NumberOfInstallments": 3,
		// 									"PaymentSystemName": "Elo",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Elo 3 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 19.65,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 78.62,
		// 									"NumberOfInstallments": 4,
		// 									"PaymentSystemName": "Elo",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Elo 4 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 15.72,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 78.62,
		// 									"NumberOfInstallments": 5,
		// 									"PaymentSystemName": "Elo",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Elo 5 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 13.1,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 78.62,
		// 									"NumberOfInstallments": 6,
		// 									"PaymentSystemName": "Elo",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Elo 6 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 11.23,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 78.62,
		// 									"NumberOfInstallments": 7,
		// 									"PaymentSystemName": "Elo",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Elo 7 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 9.82,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 78.62,
		// 									"NumberOfInstallments": 8,
		// 									"PaymentSystemName": "Elo",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Elo 8 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 78.62,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 78.62,
		// 									"NumberOfInstallments": 1,
		// 									"PaymentSystemName": "Vale",
		// 									"PaymentSystemGroupName": "giftCardPaymentGroup",
		// 									"Name": "Vale à vista"
		// 								},
		// 								{
		// 									"Value": 78.62,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 78.62,
		// 									"NumberOfInstallments": 1,
		// 									"PaymentSystemName": "BOLBRADESCO",
		// 									"PaymentSystemGroupName": "bankInvoicePaymentGroup",
		// 									"Name": "BOLBRADESCO à vista"
		// 								}
		// 							],
		// 							"DiscountHighLight": [],
		// 							"GiftSkuIds": [],
		// 							"Teasers": [],
		// 							"BuyTogether": [],
		// 							"Price": 78.62,
		// 							"ListPrice": 78.62,
		// 							"PriceWithoutDiscount": 78.62,
		// 							"RewardValue": 0.0,
		// 							"PriceValidUntil": "2020-02-28T22:38:20Z",
		// 							"AvailableQuantity": 33,
		// 							"Tax": 0.0,
		// 							"DeliverySlaSamples": [
		// 								{
		// 									"DeliverySlaPerTypes": [],
		// 									"Region": null
		// 								}
		// 							],
		// 							"GetInfoErrorMessage": null,
		// 							"CacheVersionUsedToCallCheckout": "7a513d48bcec5ab851a826de3d957a3a_"
		// 						}
		// 					}
		// 				],
		// 				"Videos": []
		// 			}
		// 		]
		// 	},
		// 	{
		// 		"productId": "184001",
		// 		"productName": "Chlorella Kenbi 100% Pura 450 Comprimidos",
		// 		"brand": "Kenbi",
		// 		"linkText": "chlorella-kenbi---450-comprimidos",
		// 		"productReference": "184001",
		// 		"categoryId": "1843463835",
		// 		"productTitle": "Chlorella Kenbi 100% Pura - 450 Comprimidos",
		// 		"metaTagDescription": "A Chlorella nutre e ajuda a desintoxicar o organismo e consequentemente ajuda aumentar a resistencia imunologica.",
		// 		"clusterHighlights": {},
		// 		"productClusters": {
		// 			"140": "Loja",
		// 			"141": "Comparadores",
		// 			"163": "Buscape",
		// 			"164": "Zoom",
		// 			"170": "Facebook Catalogo",
		// 			"174": "Black Friday Chlorellas"
		// 		},
		// 		"searchableClusters": {},
		// 		"categories": [
		// 			"/Suplementos para emagrecer/",
		// 			"/Suplementos para emagrecer/Controladores de apetite naturais/Chorella/",
		// 			"/Suplementos para emagrecer/Controladores de apetite naturais/",
		// 			"/Super alimentos e digestão/Detox/",
		// 			"/Super alimentos e digestão/",
		// 			"/Super alimentos e digestão/Super alimentos naturais verdes/",
		// 			"/Super alimentos e digestão/Super alimentos naturais verdes/Clorofila/",
		// 			"/Super alimentos e digestão/Super alimentos naturais verdes/Chlorella/"
		// 		],
		// 		"categoriesIds": [
		// 			"/1843463835/",
		// 			"/1843463835/655457002/348140705/",
		// 			"/1843463835/655457002/",
		// 			"/715546402/523554888/",
		// 			"/715546402/",
		// 			"/715546402/904091387/",
		// 			"/715546402/904091387/1187776231/",
		// 			"/715546402/904091387/1587129881/"
		// 		],
		// 		"link": "https://lojaprojetoverao.vtexcommercestable.com.br/chlorella-kenbi---450-comprimidos/p",
		// 		"SELOS": [
		// 			"SEM GLÚTEN",
		// 			"SEM LACTOSE",
		// 			"ZERO AÇÚCAR (DIET)",
		// 			"SEM CORANTES",
		// 			"SEM AROMATIZANTES",
		// 			"SEM CONSERVANTES",
		// 			"NÃO TRANSGÊNICO",
		// 			"NATURAL",
		// 			"PRODUTO EM TABLETES",
		// 			"PRODUTO VEGETARIANO"
		// 		],
		// 		"Especificações": [
		// 			"SELOS"
		// 		],
		// 		"SEXO": [
		// 			"HOMEM",
		// 			"MULHER"
		// 		],
		// 		"ORGÂNICO": [
		// 			"SIM"
		// 		],
		// 		"ORIGEM": [
		// 			"IMPORTADO"
		// 		],
		// 		"PREÇO": [
		// 			"DE 100 ATÉ 199"
		// 		],
		// 		"Personal Filtros": [
		// 			"SEXO",
		// 			"ORGÂNICO",
		// 			"ORIGEM",
		// 			"PREÇO"
		// 		],
		// 		"MERCADOLIVRE": [
		// 			"<p>Você sabia que a CHLORELLA é uma alga? Uma alga verde unicelular, cultivada em água doce e que atualmente tem sido alvo de inúmeras pesquisas devido ao seu alto valor nutritivo e suas propriedades benéficas à saúde. Alguns desses estudos são da NASA (National Aeronautics and Space Administration), a mesma agência responsável por levar o homem pela primeira vez à Lua! E eles mostram como a Chlorella é rica e completa em nutrientes, o que explica porque a NASA incluiu essa alga no cardápio de seus astronautas.<br><br>Isso porque ela fornece proteínas, carboidratos, gorduras boas, vitaminas, minerais, fitonutrientes como os pigmentos carotenoides (astaxantina, cantaxantina, loraxantina, flavoxantina e neoxantina) e a clorofila, importantes para o funcionamento do corpo humano. Alguns dizem que ela possui todos os elementos necessários para dar sustento à vida na Terra. Com tudo isso se o dilúvio acontecer hoje, já sabemos agora o que levar em nossa arca de Noé, não é mesmo? <br><br>Vale também ressaltar um importantíssimo nutriente natural especial presente unicamente na CHLORELLA chamado Chlorella Growth Factor, o C.G.F. Um complexo nucleotídio-peptídio, com polissacarídios e ácidos nucleicos, 10% de RNA e 3% de DNA.  Responsáveis por estimular o crescimento e a reparação do material genético das células, fortalecer o sistema imunológico do seu corpo e suprir as células de energia, o que faz com que o C.G.F seja um importante aliado do vigor físico e da sua saúde. Dessa forma, você vai perceber que o consumo diário da CHLORELLA com C.G.F tem como resultados mais comuns a energia aumentada, sono mais repousante, alívio de depressão e ansiedade, melhora na capacidade de concentração, hálito melhor, alívio de constipação e melhora nas condições da pele.<br><br>E o que tudo isso significa? Quer dizer que a ingestão de CHLORELLA, de maneira frequente e diária, funciona como desintoxicante e regulador do intestino, além de proteger o sistema imunológico do seu corpo, o que fortalece o organismo e previne doenças. O consumo de CHLORELLA ajuda também a fortalecer ossos, prevenir fraturas e osteoporose, pois ela possui boa concentração de cálcio em sua composição, além de magnésio e clorofila. E, devido às altas taxas de fósforo, a CHLORELLA atua no cérebro promovendo melhor atividade, além de prevenir hipertensão, colesterol e triglicerídeos. Viu só quantos benefícios ela pode trazer para sua saúde? Por que não começar hoje a cuidar da sua saúde com a CHLORELLA KENBI 100% PURA?<br><br>Um produto em 450 comprimidos que garante a você quase 2 meses dessa riquíssima suplementação alimentar.<br><br></p><br><br><br><b>Benefícios e Diferenciais</b><br><br>- Desintoxicar o organismo, eliminando os metais pesados e as substâncias químicas tóxicas;<br><br>- Melhorar o funcionamento do intestino, graças a sua elevada concentração de clorofila;<br><br>- Estimular a atividade dos macrófagos e dos linfócitos reforçando a capacidade do sistema imunitário para combater vírus, bactérias, -proteínas estranhas ou produtos químicos;<br><br>- Oxigenar as células;<br><br>- Equilibrar o pH do organismo, dado que é alcalina;<br><br>- Emagrecimento;<br><br>- Fortalecimento do sistema imunológico;<br><br>- Aumento dos níveis de energia e disposição;<br><br>- Diminuição dos níveis de colesterol;<br><br>- Controle da pressão arterial;<br><br>- Previne a anemia;<br><br>- Fortalecimento do Sistema Imunológico;<br><br>- Diminui as dores musculares;<br><br>- Auxilia na saúde do coração;<br><br></p><br><br><br><br><br><b>Informações Complementares</b><br><br><br><p> <br>A CHLORELLA acabou se tornando um dos suplementos alimentares mais estudados para complementar a alimentação humana por seu alto valor nutritivo e por isso recomenda-se o seu consumo diário. “Mas tudo em excesso faz mal!” ou pelo menos é o que dizem, mas na verdade a CHLORELLA consegue abrir uma exceção nesse caso, porque alguns médicos a recomendam em grandes doses para o auxílio no tratamento de câncer, ou seja, em situações especiais uma grande quantidade pode ser benéfica. Existem até relatos de muitos usuários sobre a melhora que a CHLORELLA fez para a sua recuperação.<br><br><br></p> <br><br><br><br><br><b>Ingredientes</b><br><br><br><p> <br>Chlorella Pyrenoidosa. NÃO CONTÉM GLÚTEN<br><br><br></p><br><br><br><br><br><b>Modo de Uso</b><br><br><br><p> <br>Ingerir de 8 a 15 comprimidos por dia com líquido. Crianças: 50mg por quilo de peso. (Cada 15 comprimidos = 3g)<br><br><br></p><br><br><br><br><br><img src=/arquivos/Chlorella_Kenbi_tabela_Loja_Projeto_Verao.jpg title=Chlorella_Kenbi_tabela_Loja_Projeto_Verao alt=Chlorella_Kenbi_tabela_Loja_Projeto_Verao />"
		// 		],
		// 		"MEUS NUTRIENTES": [
		// 			"<div class=\"nutrientes\"><br><div class=\"informacao\"><br /><br><table style=\"overflow: hidden; display: block; border-collapse: collapse;\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\"><br><tbody><br><tr><br><td><br><h3>Informa&ccedil;&otilde;es Nutricionais</h3><br></td><br></tr><br><tr><br><td><br><p>Por&ccedil;&atilde;o de 3g (15 comprimidos)</p><br></td><br></tr><br><tr><br><td><br><div class=\"quantidade\">Quantidade por por&ccedil;&atilde;o</div><br><div class=\"vd\">%V.D*</div><br></td><br></tr><br><tr><br><td><br /><br /><br /><br><table style=\"overflow: hidden; display: block; border-collapse: collapse;\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\"><br><tbody><br><tr><br><td class=\"first\"><br><p>Valor energ&eacute;tico</p><br></td><br><td><br><p>12,6Kcal=54kJ</p><br></td><br><td class=\"last\"><br><p>1%</p><br></td><br></tr><br><tr><br><td class=\"first\"><br><p>Carboidratos</p><br></td><br><td><br><p>0,5g</p><br></td><br><td class=\"last\"><br><p>0%</p><br></td><br></tr><br><tr><br><td class=\"first\"><br><p>Prote&iacute;nas</p><br></td><br><td><br><p>2g</p><br></td><br><td class=\"last\"><br><p>3%</p><br></td><br></tr><br><tr><br><td class=\"first\"><br><p>Gorduras Totais</p><br></td><br><td><br><p>0,5g</p><br></td><br><td class=\"last\"><br><p>0%</p><br></td><br></tr><br><tr><br><td class=\"first\"><br><p>Ferro</p><br></td><br><td><br><p>5,4mg</p><br></td><br><td class=\"last\"><br><p>38%</p><br></td><br></tr><br><tr><br><td class=\"first\"><br><p>S&oacute;dio</p><br></td><br><td><br><p>2,8mg</p><br></td><br><td class=\"last\"><br><p>0%</p><br></td><br></tr><br></tbody><br></table><br><br /><br /><br /></td><br></tr><br></tbody><br></table><br><p>*% Valores di&aacute;rios de refer&ecirc;ncia com base em uma dieta de 2000Kcal ou 8400kJ.&nbsp;Seus valores di&aacute;rios podem ser maiores ou menores dependendo de suas necessidades energ&eacute;ticas.<br /><br />N&atilde;o cont&eacute;m quantidade significativa de gorduras saturadas, gorduras trans e fibra alimentar.</p><br><p>&nbsp;</p><br></div><br><div class=\"nota\"><br><h3>Tome nota:</h3><br><div class=\"fundo\"><br><div><br><h3>Prote&iacute;nas</h3><br><p>2g</p><br></div><br><div><br><h3>Ferro</h3><br><p>5,4mg</p><br></div><br><div><br><h3>S&oacute;dio</h3><br><p>2,8mg</p><br></div><br><div class=\"last\"><br><h3>Carboidratos</h3><br><p>12,6</p><br><p>Kcal</p><br></div><br></div><br><p><strong>Ingredientes:&nbsp;</strong>Chlorella Pyrenoidosa Org&acirc;nica. N&Atilde;O CONT&Eacute;M GL&Uacute;TEN.</p><br></div><br><div class=\"advertencias\"><br><h3>Advert&ecirc;ncias:</h3><br><p>Manter longe do alcance das crian&ccedil;as.</p><br><p>Minist&eacute;rio da Sa&uacute;de adverte: N&atilde;o existem evid&ecirc;ncias cient&iacute;ficas comprovadas de que este alimento previna, trate ou cure doen&ccedil;as.</p><br></div><br><div class=\"qntdos\"><br><div><br><h3>Quantidade</h3><br><h3 class=\"last\">Doses</h3><br></div><br><div><br><p>450&nbsp;Comprimidos</p><br><p class=\"last\">56</p><br></div><br></div><br><div class=\"instrucoes\"><br><h3>Instru&ccedil;&otilde;es de uso:</h3><br><p>Ingerir de 8 a 15 comprimidos por dia com l&iacute;quido. Crian&ccedil;as: 50mg por quilo de peso. (Cada 15 comprimidos = 3g)</p><br><br /><br /><br /></div><br><br /><br /></div>"
		// 		],
		// 		"O QUE FALAM DE MIM?": [
		// 			"<h3>O que falam de mim?</h3>"
		// 		],
		// 		"ONDE NASCI": [
		// 			"<p>KENBI é uma empresa especializada em suplementos alimentares com tecnologia japonesa. Ela faz parte do grupo TRD, com sede em Tóquio e com 15 anos de história na produção e terceirização de suplementos nutricionais, com a mais avançada tecnologia. Ela seleciona matérias-primas diferenciadas de excelente qualidade como é o caso da  Chlorella Kenbi. Eles enviam a matéria prima em pó para a Token-Jitsugyou, maior empresa de alimentos em Taiwan, para produção dos comprimidos, seguindo as normas de segurança exigidos pelo governo do Japão. Assim, a KENBI consegue produzir Chlorella com alto padrão de qualidade. E esse mesmo produto comercializado no japão é que vem para o Brasil. Este é o diferencial da Chlorella Kenbi que além de ser produzido sobre o rígido controle de qualidade do Japão, ela é 100% pura e natural, sem misturas ou aditivos químicos, com alta digestibilidade.</p>"
		// 		],
		// 		"CÓDIGO ANVISA": [
		// 			"5.6484.0007.001-4"
		// 		],
		// 		"VÍDEO": [
		// 			"<iframe width=\"370\" height=\"370\" src=\"//www.youtube.com/embed/EBCQHQYKqDs\" frameborder=\"0\" allowfullscreen></iframe><br><br>"
		// 		],
		// 		"Descrição": [
		// 			"MERCADOLIVRE",
		// 			"MEUS NUTRIENTES",
		// 			"O QUE FALAM DE MIM?",
		// 			"ONDE NASCI",
		// 			"CÓDIGO ANVISA",
		// 			"VÍDEO"
		// 		],
		// 		"DESCRICAO MERCADOLIVRE": [
		// 			"<img src=\"http://lojaprojetoverao.vteximg.com.br/arquivos/ids/159519?v=635831481903570000\"/><br><br><br><img src=\"http://lojaprojetoverao.vteximg.com.br/arquivos/ids/159521?v=635831481917570000\"/>"
		// 		],
		// 		"Mercadolivre": [
		// 			"DESCRICAO MERCADOLIVRE"
		// 		],
		// 		"OBJETIVOS": [
		// 			"FORTALECER A IMUNIDADE"
		// 		],
		// 		"FORMA": [
		// 			"COMPRIMIDOS"
		// 		],
		// 		"PRODUTOS ORGÂNICOS": [
		// 			"NÃO"
		// 		],
		// 		"PRODUTOS VEGETARIANOS": [
		// 			"SIM"
		// 		],
		// 		"LIVRE DE GLÚTEN": [
		// 			"SIM"
		// 		],
		// 		"SEM LACTOSE": [
		// 			"SIM"
		// 		],
		// 		"ZERO AÇUCAR": [
		// 			"SIM"
		// 		],
		// 		"NATURAL": [
		// 			"SIM"
		// 		],
		// 		"Filtros Departamentos/Categorias": [
		// 			"OBJETIVOS",
		// 			"FORMA",
		// 			"PRODUTOS ORGÂNICOS",
		// 			"PRODUTOS VEGETARIANOS",
		// 			"LIVRE DE GLÚTEN",
		// 			"SEM LACTOSE",
		// 			"ZERO AÇUCAR",
		// 			"NATURAL"
		// 		],
		// 		"allSpecifications": [
		// 			"SELOS",
		// 			"SEXO",
		// 			"ORGÂNICO",
		// 			"ORIGEM",
		// 			"PREÇO",
		// 			"MERCADOLIVRE",
		// 			"MEUS NUTRIENTES",
		// 			"O QUE FALAM DE MIM?",
		// 			"ONDE NASCI",
		// 			"CÓDIGO ANVISA",
		// 			"VÍDEO",
		// 			"DESCRICAO MERCADOLIVRE",
		// 			"OBJETIVOS",
		// 			"FORMA",
		// 			"PRODUTOS ORGÂNICOS",
		// 			"PRODUTOS VEGETARIANOS",
		// 			"LIVRE DE GLÚTEN",
		// 			"SEM LACTOSE",
		// 			"ZERO AÇUCAR",
		// 			"NATURAL"
		// 		],
		// 		"description": "<p>Voc&ecirc; sabia que a <strong>CHLORELLA</strong> &eacute; uma alga? Uma alga verde unicelular, cultivada em &aacute;gua doce e que atualmente tem sido alvo de in&uacute;meras pesquisas devido ao seu alto valor nutritivo e suas propriedades ben&eacute;ficas &agrave; sa&uacute;de. Alguns desses estudos s&atilde;o da NASA (National Aeronautics and Space Administration), a mesma ag&ecirc;ncia respons&aacute;vel por levar o homem pela primeira vez &agrave; Lua! E eles mostram como a <strong>Chlorella</strong> &eacute; rica e completa em nutrientes, o que explica porque a NASA incluiu essa alga no card&aacute;pio de seus astronautas. Isso porque ela fornece prote&iacute;nas, carboidratos, gorduras boas, vitaminas, minerais, fitonutrientes como os pigmentos carotenoides (astaxantina, cantaxantina, loraxantina, flavoxantina e neoxantina) e a clorofila, importantes para o funcionamento do corpo humano.</p><br><p>&nbsp;</p><br><br><p>Alguns dizem que ela possui todos os elementos necess&aacute;rios para dar sustento &agrave; vida na Terra. Com tudo isso se o dil&uacute;vio acontecer hoje, j&aacute; sabemos agora o que levar em nossa arca de No&eacute;, n&atilde;o &eacute; mesmo? Vale tamb&eacute;m ressaltar um important&iacute;ssimo nutriente natural especial presente unicamente na <strong>CHLORELLA</strong> chamado <strong>Chlorella Growth Factor</strong>, o <strong>C.G.F.</strong> Um complexo nucleot&iacute;dio-pept&iacute;dio, com polissacar&iacute;dios e &aacute;cidos nucleicos, 10% de RNA e 3% de DNA. Respons&aacute;veis por estimular o crescimento e a repara&ccedil;&atilde;o do material gen&eacute;tico das c&eacute;lulas, fortalecer o sistema imunol&oacute;gico do seu corpo e suprir as c&eacute;lulas de energia, o que faz com que o<strong> C.G.F</strong> seja um importante aliado do vigor f&iacute;sico e da sua sa&uacute;de. Dessa forma, voc&ecirc; vai perceber que o consumo di&aacute;rio da <strong>CHLORELLA com C.G.F</strong> tem como resultados mais comuns a energia aumentada, sono mais repousante, al&iacute;vio de depress&atilde;o e ansiedade, melhora na capacidade de concentra&ccedil;&atilde;o, h&aacute;lito melhor, al&iacute;vio de constipa&ccedil;&atilde;o e melhora nas condi&ccedil;&otilde;es da pele. E o que tudo isso significa?</p><br><p>&nbsp;</p><br><p>Quer dizer que a ingest&atilde;o de <strong>CHLORELLA</strong>, de maneira frequente e di&aacute;ria, funciona como desintoxicante e regulador do intestino, al&eacute;m de proteger o sistema imunol&oacute;gico do seu corpo, o que fortalece o organismo e previne doen&ccedil;as. O consumo de <strong>CHLORELLA</strong> ajuda tamb&eacute;m a fortalecer ossos, prevenir fraturas e osteoporose, pois ela possui boa concentra&ccedil;&atilde;o de c&aacute;lcio em sua composi&ccedil;&atilde;o, al&eacute;m de magn&eacute;sio e clorofila. E, devido &agrave;s altas taxas de f&oacute;sforo, a <strong>CHLORELLA</strong> atua no c&eacute;rebro promovendo melhor atividade, al&eacute;m de prevenir hipertens&atilde;o, colesterol e triglicer&iacute;deos. Viu s&oacute; quantos benef&iacute;cios ela pode trazer para sua sa&uacute;de? Por que n&atilde;o come&ccedil;ar hoje a cuidar da sua sa&uacute;de com a <strong>CHLORELLA KENBI 100% PURA</strong>?&nbsp;</p><br><p>&nbsp;</p><br><p><strong>Benef&iacute;cios e Diferenciais</strong></p><br><ul><br>  <li>- Desintoxicar o organismo, eliminando os metais pesados e as subst&acirc;ncias qu&iacute;micas t&oacute;xicas;</li><br>  <li>- Melhorar o funcionamento do intestino, gra&ccedil;as a sua elevada concentra&ccedil;&atilde;o de clorofila;</li><br>  <li>- Estimular a atividade dos macr&oacute;fagos e dos linf&oacute;citos refor&ccedil;ando a capacidade do sistema imunit&aacute;rio para combater v&iacute;rus, bact&eacute;rias, prote&iacute;nas estranhas ou produtos qu&iacute;micos;</li><br>  <li>- Oxigenar as c&eacute;lulas;</li><br>  <li>- Equilibrar o pH do organismo, dado que &eacute; alcalina;</li><br>  <li>- Emagrecimento;</li><br>  <li>- Fortalecimento do sistema imunol&oacute;gico;</li><br>  <li>- Aumento dos n&iacute;veis de energia e disposi&ccedil;&atilde;o;</li><br>  <li>- Diminui&ccedil;&atilde;o dos n&iacute;veis de colesterol;</li><br>  <li>- Controle da press&atilde;o arterial;</li><br>  <li>- Previne a anemia;</li><br>  <li>- Fortalecimento do Sistema Imunol&oacute;gico;</li><br>  <li>- Diminui as dores musculares;</li><br>  <li>- Auxilia na sa&uacute;de do cora&ccedil;&atilde;o.</li><br></ul><br><p>&nbsp;</p><br><p><strong>Informa&ccedil;&otilde;es Complementares</strong></p><br><p><br />A CHLORELLA acabou se tornando um dos suplementos alimentares mais estudados para complementar a alimenta&ccedil;&atilde;o humana por seu alto valor nutritivo e por isso recomenda-se o seu consumo di&aacute;rio. &ldquo;Mas tudo em excesso faz mal!&rdquo; ou pelo menos &eacute; o que dizem, mas na verdade a CHLORELLA consegue abrir uma exce&ccedil;&atilde;o nesse caso, porque alguns m&eacute;dicos a recomendam em grandes doses para o aux&iacute;lio no tratamento de c&acirc;ncer, ou seja, em situa&ccedil;&otilde;es especiais uma grande quantidade pode ser ben&eacute;fica. Existem at&eacute; relatos de muitos usu&aacute;rios sobre a melhora que a CHLORELLA fez para a sua recupera&ccedil;&atilde;o.</p><br><p>&nbsp;</p><br><p><strong>Ingredientes</strong></p><br><p><br />Chlorella Pyrenoidosa. N&Atilde;O CONT&Eacute;M GL&Uacute;TEN.</p><br><p>&nbsp;</p><br><p><strong>Modo de Uso</strong></p><br><p><br />Ingerir de 8 a 15 comprimidos por dia com l&iacute;quido.)</p><p>Para crianças com idade a partir de 6 meses, a dose padrão é de 50mg/kg de peso/dia. (ex. 12kg x 50mg = 600 = 3 comprimidos de chlorella)</p><br><p>&nbsp;</p><br><p><img title=\"Chlorella_Kenbi_tabela_Loja_Projeto_Verao\" src=\"http://lojaprojetoverao.vteximg.com.br/arquivos/kenbi-geral-05.jpg\" alt=\"Chlorella_Kenbi_tabela_Loja_Projeto_Verao\" /></p><br><br><br><a href=\"https://www.lojaprojetoverao.com.br/kit-3x-chlorella-kenbi-100--pura---450-comprimidos/p\"><img src=\"http://lojaprojetoverao.vteximg.com.br/arquivos/kenbi-kits-3x-banner-450-comprimidos.jpg\"></a>",
		// 		"items": [
		// 			{
		// 				"itemId": "192401",
		// 				"name": "Chlorella Kenbi 100% Pura 450 Comprimidos",
		// 				"nameComplete": "Chlorella Kenbi 100% Pura 450 Comprimidos",
		// 				"complementName": "Experimente inserir em sua dieta diária a CHLORELLA e sinta o resultado que esse superalimento irá te trazer. Chlorella Kenbi 100% Pura em 450 comprimidos.",
		// 				"ean": "7896183844745",
		// 				"referenceId": [
		// 					{
		// 						"Key": "RefId",
		// 						"Value": "2025_0_0_U"
		// 					}
		// 				],
		// 				"measurementUnit": "un",
		// 				"unitMultiplier": 1.0000,
		// 				"modalType": null,
		// 				"isKit": false,
		// 				"images": [
		// 					{
		// 						"imageId": "163343",
		// 						"imageLabel": "",
		// 						"imageTag": "<img src=\"~/arquivos/ids/163343-#width#-#height#/mkt-kenbi-chlorella-pyreinoidosa-450-comprimidos-loja-projeto-verao.jpg?v=636633766037500000\" width=\"#width#\" height=\"#height#\" alt=\"mkt-kenbi-chlorella-pyreinoidosa-450-comprimidos-loja-projeto-verao\" id=\"\" />",
		// 						"imageUrl": "http://lojaprojetoverao.vteximg.com.br/arquivos/ids/163343/mkt-kenbi-chlorella-pyreinoidosa-450-comprimidos-loja-projeto-verao.jpg?v=636633766037500000",
		// 						"imageText": "mkt-kenbi-chlorella-pyreinoidosa-450-comprimidos-loja-projeto-verao"
		// 					},
		// 					{
		// 						"imageId": "161059",
		// 						"imageLabel": "",
		// 						"imageTag": "<img src=\"~/arquivos/ids/161059-#width#-#height#/kenbi-chlorella-100--pura-450-comprimidos-L-loja-projeto-verao.jpg?v=636376308318970000\" width=\"#width#\" height=\"#height#\" alt=\"kenbi-chlorella-100--pura-450-comprimidos-L-loja-projeto-verao\" id=\"\" />",
		// 						"imageUrl": "http://lojaprojetoverao.vteximg.com.br/arquivos/ids/161059/kenbi-chlorella-100--pura-450-comprimidos-L-loja-projeto-verao.jpg?v=636376308318970000",
		// 						"imageText": "kenbi-chlorella-100--pura-450-comprimidos-L-loja-projeto-verao"
		// 					},
		// 					{
		// 						"imageId": "161061",
		// 						"imageLabel": "",
		// 						"imageTag": "<img src=\"~/arquivos/ids/161061-#width#-#height#/kenbi-chlorella-100--pura-450-comprimidos-C-loja-projeto-verao.jpg?v=636376308943030000\" width=\"#width#\" height=\"#height#\" alt=\"kenbi-chlorella-100--pura-450-comprimidos-C-loja-projeto-verao\" id=\"\" />",
		// 						"imageUrl": "http://lojaprojetoverao.vteximg.com.br/arquivos/ids/161061/kenbi-chlorella-100--pura-450-comprimidos-C-loja-projeto-verao.jpg?v=636376308943030000",
		// 						"imageText": "kenbi-chlorella-100--pura-450-comprimidos-C-loja-projeto-verao"
		// 					}
		// 				],
		// 				"sellers": [
		// 					{
		// 						"sellerId": "1",
		// 						"sellerName": "Projeto Verão",
		// 						"addToCartLink": "https://lojaprojetoverao.vtexcommercestable.com.br/checkout/cart/add?sku=192401&qty=1&seller=1&sc=1&price=12400&cv=a57eac28bbf5f1d02c725d95fb30d759_&sc=1",
		// 						"sellerDefault": true,
		// 						"commertialOffer": {
		// 							"DeliverySlaSamplesPerRegion": {
		// 								"0": {
		// 									"DeliverySlaPerTypes": [],
		// 									"Region": null
		// 								}
		// 							},
		// 							"Installments": [
		// 								{
		// 									"Value": 124.0,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 124.0,
		// 									"NumberOfInstallments": 1,
		// 									"PaymentSystemName": "American Express",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "American Express à vista"
		// 								},
		// 								{
		// 									"Value": 62.0,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 124.0,
		// 									"NumberOfInstallments": 2,
		// 									"PaymentSystemName": "American Express",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "American Express 2 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 41.33,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 124.0,
		// 									"NumberOfInstallments": 3,
		// 									"PaymentSystemName": "American Express",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "American Express 3 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 31.0,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 124.0,
		// 									"NumberOfInstallments": 4,
		// 									"PaymentSystemName": "American Express",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "American Express 4 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 24.8,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 124.0,
		// 									"NumberOfInstallments": 5,
		// 									"PaymentSystemName": "American Express",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "American Express 5 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 20.66,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 124.0,
		// 									"NumberOfInstallments": 6,
		// 									"PaymentSystemName": "American Express",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "American Express 6 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 17.71,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 124.0,
		// 									"NumberOfInstallments": 7,
		// 									"PaymentSystemName": "American Express",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "American Express 7 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 15.5,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 124.0,
		// 									"NumberOfInstallments": 8,
		// 									"PaymentSystemName": "American Express",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "American Express 8 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 124.0,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 124.0,
		// 									"NumberOfInstallments": 1,
		// 									"PaymentSystemName": "Visa",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Visa à vista"
		// 								},
		// 								{
		// 									"Value": 62.0,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 124.0,
		// 									"NumberOfInstallments": 2,
		// 									"PaymentSystemName": "Visa",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Visa 2 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 41.33,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 124.0,
		// 									"NumberOfInstallments": 3,
		// 									"PaymentSystemName": "Visa",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Visa 3 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 31.0,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 124.0,
		// 									"NumberOfInstallments": 4,
		// 									"PaymentSystemName": "Visa",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Visa 4 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 24.8,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 124.0,
		// 									"NumberOfInstallments": 5,
		// 									"PaymentSystemName": "Visa",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Visa 5 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 20.66,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 124.0,
		// 									"NumberOfInstallments": 6,
		// 									"PaymentSystemName": "Visa",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Visa 6 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 17.71,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 124.0,
		// 									"NumberOfInstallments": 7,
		// 									"PaymentSystemName": "Visa",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Visa 7 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 15.5,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 124.0,
		// 									"NumberOfInstallments": 8,
		// 									"PaymentSystemName": "Visa",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Visa 8 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 124.0,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 124.0,
		// 									"NumberOfInstallments": 1,
		// 									"PaymentSystemName": "Diners",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Diners à vista"
		// 								},
		// 								{
		// 									"Value": 62.0,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 124.0,
		// 									"NumberOfInstallments": 2,
		// 									"PaymentSystemName": "Diners",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Diners 2 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 41.33,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 124.0,
		// 									"NumberOfInstallments": 3,
		// 									"PaymentSystemName": "Diners",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Diners 3 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 31.0,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 124.0,
		// 									"NumberOfInstallments": 4,
		// 									"PaymentSystemName": "Diners",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Diners 4 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 24.8,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 124.0,
		// 									"NumberOfInstallments": 5,
		// 									"PaymentSystemName": "Diners",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Diners 5 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 20.66,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 124.0,
		// 									"NumberOfInstallments": 6,
		// 									"PaymentSystemName": "Diners",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Diners 6 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 17.71,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 124.0,
		// 									"NumberOfInstallments": 7,
		// 									"PaymentSystemName": "Diners",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Diners 7 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 15.5,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 124.0,
		// 									"NumberOfInstallments": 8,
		// 									"PaymentSystemName": "Diners",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Diners 8 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 124.0,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 124.0,
		// 									"NumberOfInstallments": 1,
		// 									"PaymentSystemName": "Mastercard",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Mastercard à vista"
		// 								},
		// 								{
		// 									"Value": 62.0,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 124.0,
		// 									"NumberOfInstallments": 2,
		// 									"PaymentSystemName": "Mastercard",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Mastercard 2 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 41.33,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 124.0,
		// 									"NumberOfInstallments": 3,
		// 									"PaymentSystemName": "Mastercard",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Mastercard 3 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 31.0,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 124.0,
		// 									"NumberOfInstallments": 4,
		// 									"PaymentSystemName": "Mastercard",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Mastercard 4 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 24.8,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 124.0,
		// 									"NumberOfInstallments": 5,
		// 									"PaymentSystemName": "Mastercard",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Mastercard 5 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 20.66,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 124.0,
		// 									"NumberOfInstallments": 6,
		// 									"PaymentSystemName": "Mastercard",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Mastercard 6 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 17.71,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 124.0,
		// 									"NumberOfInstallments": 7,
		// 									"PaymentSystemName": "Mastercard",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Mastercard 7 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 15.5,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 124.0,
		// 									"NumberOfInstallments": 8,
		// 									"PaymentSystemName": "Mastercard",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Mastercard 8 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 124.0,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 124.0,
		// 									"NumberOfInstallments": 1,
		// 									"PaymentSystemName": "Hipercard",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Hipercard à vista"
		// 								},
		// 								{
		// 									"Value": 62.0,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 124.0,
		// 									"NumberOfInstallments": 2,
		// 									"PaymentSystemName": "Hipercard",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Hipercard 2 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 41.33,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 124.0,
		// 									"NumberOfInstallments": 3,
		// 									"PaymentSystemName": "Hipercard",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Hipercard 3 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 31.0,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 124.0,
		// 									"NumberOfInstallments": 4,
		// 									"PaymentSystemName": "Hipercard",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Hipercard 4 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 24.8,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 124.0,
		// 									"NumberOfInstallments": 5,
		// 									"PaymentSystemName": "Hipercard",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Hipercard 5 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 20.66,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 124.0,
		// 									"NumberOfInstallments": 6,
		// 									"PaymentSystemName": "Hipercard",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Hipercard 6 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 17.71,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 124.0,
		// 									"NumberOfInstallments": 7,
		// 									"PaymentSystemName": "Hipercard",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Hipercard 7 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 15.5,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 124.0,
		// 									"NumberOfInstallments": 8,
		// 									"PaymentSystemName": "Hipercard",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Hipercard 8 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 124.0,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 124.0,
		// 									"NumberOfInstallments": 1,
		// 									"PaymentSystemName": "Elo",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Elo à vista"
		// 								},
		// 								{
		// 									"Value": 62.0,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 124.0,
		// 									"NumberOfInstallments": 2,
		// 									"PaymentSystemName": "Elo",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Elo 2 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 41.33,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 124.0,
		// 									"NumberOfInstallments": 3,
		// 									"PaymentSystemName": "Elo",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Elo 3 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 31.0,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 124.0,
		// 									"NumberOfInstallments": 4,
		// 									"PaymentSystemName": "Elo",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Elo 4 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 24.8,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 124.0,
		// 									"NumberOfInstallments": 5,
		// 									"PaymentSystemName": "Elo",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Elo 5 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 20.66,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 124.0,
		// 									"NumberOfInstallments": 6,
		// 									"PaymentSystemName": "Elo",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Elo 6 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 17.71,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 124.0,
		// 									"NumberOfInstallments": 7,
		// 									"PaymentSystemName": "Elo",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Elo 7 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 15.5,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 124.0,
		// 									"NumberOfInstallments": 8,
		// 									"PaymentSystemName": "Elo",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Elo 8 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 124.0,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 124.0,
		// 									"NumberOfInstallments": 1,
		// 									"PaymentSystemName": "Vale",
		// 									"PaymentSystemGroupName": "giftCardPaymentGroup",
		// 									"Name": "Vale à vista"
		// 								},
		// 								{
		// 									"Value": 124.0,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 124.0,
		// 									"NumberOfInstallments": 1,
		// 									"PaymentSystemName": "BOLBRADESCO",
		// 									"PaymentSystemGroupName": "bankInvoicePaymentGroup",
		// 									"Name": "BOLBRADESCO à vista"
		// 								}
		// 							],
		// 							"DiscountHighLight": [],
		// 							"GiftSkuIds": [],
		// 							"Teasers": [],
		// 							"BuyTogether": [],
		// 							"Price": 124.0,
		// 							"ListPrice": 124.2,
		// 							"PriceWithoutDiscount": 124.0,
		// 							"RewardValue": 0.0,
		// 							"PriceValidUntil": "2020-02-28T22:38:20Z",
		// 							"AvailableQuantity": 28,
		// 							"Tax": 0.0,
		// 							"DeliverySlaSamples": [
		// 								{
		// 									"DeliverySlaPerTypes": [],
		// 									"Region": null
		// 								}
		// 							],
		// 							"GetInfoErrorMessage": null,
		// 							"CacheVersionUsedToCallCheckout": "a57eac28bbf5f1d02c725d95fb30d759_"
		// 						}
		// 					}
		// 				],
		// 				"Videos": []
		// 			}
		// 		]
		// 	},
		// 	{
		// 		"productId": "1524",
		// 		"productName": "Kit 3x Magnésio Dimalato Puro (500mg) 120 Cápsulas - Meissen",
		// 		"brand": "Meissen",
		// 		"linkText": "kit-3x-magnesio-dimalato-550mg-120-capsulas-meissen",
		// 		"productReference": "0001575",
		// 		"categoryId": "12001",
		// 		"productTitle": "",
		// 		"metaTagDescription": "O Magnesio Dimalato e uma otima fonte de magnesio e acido malico com alta biodisponibilidade, ou seja, garante uma boa absorcao pelo nosso corpo.",
		// 		"clusterHighlights": {},
		// 		"productClusters": {
		// 			"140": "Loja",
		// 			"141": "Comparadores",
		// 			"164": "Zoom",
		// 			"177": "Black Friday Meissen"
		// 		},
		// 		"searchableClusters": {},
		// 		"categories": [
		// 			"/Kit/",
		// 			"/Compra coletiva/Kits e combos/",
		// 			"/Compra coletiva/",
		// 			"/Vitaminas e minerais/Minerais/Magnésio/",
		// 			"/Vitaminas e minerais/Minerais/",
		// 			"/Vitaminas e minerais/"
		// 		],
		// 		"categoriesIds": [
		// 			"/12001/",
		// 			"/1768433969/191119192/",
		// 			"/1768433969/",
		// 			"/1521962469/1205244504/1272483216/",
		// 			"/1521962469/1205244504/",
		// 			"/1521962469/"
		// 		],
		// 		"link": "https://lojaprojetoverao.vtexcommercestable.com.br/kit-3x-magnesio-dimalato-550mg-120-capsulas-meissen/p",
		// 		"SELOS": [
		// 			"SEM GLÚTEN",
		// 			"SEM LACTOSE",
		// 			"ZERO AÇÚCAR (DIET)",
		// 			"SEM AROMATIZANTES",
		// 			"SEM CONSERVANTES",
		// 			"NATURAL",
		// 			"REGISTRO ANVISA"
		// 		],
		// 		"Especificações": [
		// 			"SELOS"
		// 		],
		// 		"SEXO": [
		// 			"HOMEM",
		// 			"MULHER"
		// 		],
		// 		"ORGÂNICO": [
		// 			"NÃO"
		// 		],
		// 		"FINALIDADE": [
		// 			"SAÚDE DAS ARTICULAÇÕES E OSSOS SAUDÁVEIS",
		// 			"FORTALECER A IMUNIDADE",
		// 			"QUALIDADE DO SONO"
		// 		],
		// 		"LACTOSE": [
		// 			"NÃO"
		// 		],
		// 		"ORIGEM": [
		// 			"NACIONAL"
		// 		],
		// 		"PREÇO": [
		// 			"DE 100 ATÉ 199"
		// 		],
		// 		"Personal Filtros": [
		// 			"SEXO",
		// 			"ORGÂNICO",
		// 			"FINALIDADE",
		// 			"LACTOSE",
		// 			"ORIGEM",
		// 			"PREÇO"
		// 		],
		// 		"MERCADOLIVRE": [
		// 			"O magnésio é um dos minerais essenciais para a regeneração celular, e é utilizado em mais de 350 reações enzimáticas no organismo, mais do que qualquer outro mineral. Ao lado de oxigênio e iodo, o magnésio é o terceiro elemento mais importante para sustentar a vida, assim como para reverter as doenças e o envelhecimento.<br>O magnésio ainda favorece a absorção do cálcio da alimentação e reduz a incidência de câimbras e fraqueza muscular.<br>O Magnésio Dimalato é uma ótima fonte de magnésio e ácido málico com alta biodisponibilidade, ou seja, garante uma boa absorção pelo nosso corpo.<br>Um dos estudos demonstrou que a ingestão de Magnésio Dimalato duas vezes por dia durante 2 a 6 meses melhoram significativamente os níveis de energia e a função muscular e reduzem o nível de dor de pacientes com fibromialgia. Pacientes com fibromialgia possuem redução de oxigênio e Magnésio Dimalato demostrou benefícios significativos por melhorar a produção de energia.<br>Magnésio Dimalato \"Meissen\"<br>Potes com cápsulas gelatinosas animal transparente de 500mg<br>Ingredientes: Magnésio Dimalato.<br>Recomendação de Uso: Ingerir 1 cápsula ao dia com líquido.<br><br>DADOS DE CONSERVAÇÃO:<br><br>Conservar em embalagem original bem fechada em lugar seco, fresco e arejado.<br>Consumir este produto conforme a Recomendação de Ingestão Diária constante da embalagem.<br>*Gestantes, nutrizes e crianças até 3 anos somente deve consumir este produto sob orientação de nutricionista ou médico.<br><br>Produto Dispensado de Registro conforme RDC 27/2010"
		// 		],
		// 		"MEUS NUTRIENTES": [
		// 			"<div class=\"nutrientes\"><br><div class=\"informacao\"><br><table style=\"overflow: hidden; display: block; border-collapse: collapse;\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\"><br><tbody><br><tr><br><td><br><h3>Informa&ccedil;&otilde;es Nutricionais</h3><br></td><br></tr><br><tr><br><td><br><p>Por&ccedil;&atilde;o de 500mg (1 c&aacute;psulas)</p><br></td><br></tr><br><tr><br><td><br><div class=\"quantidade\">Quantidade por por&ccedil;&atilde;o</div><br><div class=\"vd\">%V.D*</div><br></td><br></tr><br><tr><br><td><br><table style=\"overflow: hidden; display: block; border-collapse: collapse;\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\"><br><tbody><br><tr><br><td class=\"first\"><br><p>Valor energ&eacute;tico</p><br></td><br><td><br><p>0cal=0kJ</p><br></td><br><td class=\"last\"><br><p>0%</p><br></td><br></tr><br><tr><br><td class=\"first\"><br><p>Carboidratos</p><br></td><br><td><br><p>0g</p><br></td><br><td class=\"last\"><br><p>0%</p><br></td><br></tr><br><tr><br><td class=\"first\"><br><p>Prote&iacute;nas</p><br></td><br><td><br><p>0g</p><br></td><br><td class=\"last\"><br><p>0%</p><br></td><br></tr><br><tr><br><td class=\"first\"><br><p>Gorduras totais</p><br></td><br><td><br><p>0g</p><br></td><br><td class=\"last\"><br><p>0%</p><br></td><br></tr><br><tr><br><td class=\"first\"><br><p>Gorduras Saturadas</p><br></td><br><td><br><p>0g</p><br></td><br><td class=\"last\"><br><p>0%</p><br></td><br></tr><br><tr><br><td class=\"first\"><br><p>Gorduras Trans</p><br></td><br><td><br><p>0g</p><br></td><br><td class=\"last\"><br><p>**</p><br></td><br></tr><br><tr><br>  <td class=\"first\"><br>  <p>Fibra Alimentar</p><br>  </td><br>  <td><br>  <p>0g</p><br>  </td><br>  <td class=\"last\"><br>  <p>0%</p><br>  </td><br></tr><br><tr><br><td class=\"first\"><br><p>Sódio</p><br></td><br><td><br><p>0mg</p><br></td><br><td class=\"last\"><br><p>0%</p><br></td><br></tr><br><tr><br><td class=\"first\"><br><p>Magnésio</p><br></td><br><td><br><p>150mg</p><br></td><br><td class=\"last\"><br><p>58%</p><br></td><br></tr><br></tbody><br></table><br></td><br></tr><br></tbody><br></table><br><p>% *Valores di&aacute;rios de refer&ecirc;ncia com base em uma dieta de 2000kcal ou 8400kJ. Seus valores di&aacute;rios podem ser maiores ou menores dependendo de suas necessidades energ&eacute;ticas. **Valores de referência n&atilde;o estabelecidos.</p><br></div><br><div class=\"nota\"><br><h3>Tome nota:</h3><br><div class=\"fundo\"><br><div><br><h3>Magnésio</h3><br><p>150mg</p><br></div><br><div><br><h3>Carboidratos</h3><br><p>0g</p><br></div><br><div><br><h3>Glúten</h3><br><p>0g</p><br></div><br><div class=\"last\"><br><h3>Calorias</h3><br><p>0</p><br><p>Kcal </p><br></div><br></div><br><p><strong>Ingredientes:</strong> Magnésio Dimalato</p><br><p>C&aacute;psula: gelatina e &aacute;gua purificada. N&Atilde;O CONT&Eacute;M GL&Uacute;TEN.</p><br></div><br><div class=\"advertencias\"><br><h3>Advert&ecirc;ncias:</h3><br><p>Gestantes, nutrizes e crianças até 3 anos, somente devem consumir esse produto sob orientação de nutricionista ou médico.</p><br><p>Consumir este produto conforme a recomendação diária constante na embalagem. </p><br><p>Conservar a embalagem original bem fechada, em lugar fresco e arejado.</p><br></div><br><div class=\"qntdos\"><br><div><br><h3>Quantidade</h3><br><h3 class=\"last\">Doses</h3><br></div><br><div><br><p>180 C&aacute;psulas</p><br><p class=\"last\">180</p><br></div><br></div><br><div class=\"instrucoes\"><br><h3>Instru&ccedil;&otilde;es de uso:</h3><br><p>Ingerir 1(uma) c&aacute;psula ao dia.</p><br></div><br></div>"
		// 		],
		// 		"ONDE NASCI": [
		// 			"<p>A MEISSEN é uma empresa brasileira fundada em 1961 e atua no mercado desde então, oferecendo produtos de qualidade usando matérias primas selecionadas e de origem comprovada. Os produtos não têm adição de qualquer tipo de conservantes ou estabilizantes, mantendo suas propriedades naturais. </p><br><p>Os processos produtivos são acompanhados por rígidos controles de qualidade além de ter uma séria preocupação com o meio ambiente. Um exemplo disso é o uso de fibras de poliéster provenientes da reciclagem de garrafas PET e a doação de resíduos recicláveis gerados na produção, para moradores da comunidade local na região de Cotia.</p><br><p>Confie na seriedade de uma tradicionalíssima marca, preocupada em aliar responsabilidade social e ambiental com qualidade de produtos genuinamente naturais e de procedência comprovada, assim como tem feito em toda a sua história.</p>"
		// 		],
		// 		"CÓDIGO ANVISA": [
		// 			"Produto Dispensado de Registro conforme RDC 27/2010"
		// 		],
		// 		"Descrição": [
		// 			"MERCADOLIVRE",
		// 			"MEUS NUTRIENTES",
		// 			"ONDE NASCI",
		// 			"CÓDIGO ANVISA"
		// 		],
		// 		"OBJETIVOS": [
		// 			"SAÚDE DAS ARTICULAÇÕES E OSSOS SAUDÁVEIS",
		// 			"FORTALECER A IMUNIDADE",
		// 			"QUALIDADE DO SONO"
		// 		],
		// 		"FORMA": [
		// 			"CÁPSULAS"
		// 		],
		// 		"PRODUTOS ORGÂNICOS": [
		// 			"NÃO"
		// 		],
		// 		"PRODUTOS VEGETARIANOS": [
		// 			"SIM"
		// 		],
		// 		"LIVRE DE GLÚTEN": [
		// 			"SIM"
		// 		],
		// 		"SEM LACTOSE": [
		// 			"SIM"
		// 		],
		// 		"ZERO AÇUCAR": [
		// 			"SIM"
		// 		],
		// 		"Filtros Departamentos/Categorias": [
		// 			"OBJETIVOS",
		// 			"FORMA",
		// 			"PRODUTOS ORGÂNICOS",
		// 			"PRODUTOS VEGETARIANOS",
		// 			"LIVRE DE GLÚTEN",
		// 			"SEM LACTOSE",
		// 			"ZERO AÇUCAR"
		// 		],
		// 		"allSpecifications": [
		// 			"SELOS",
		// 			"SEXO",
		// 			"ORGÂNICO",
		// 			"FINALIDADE",
		// 			"LACTOSE",
		// 			"ORIGEM",
		// 			"PREÇO",
		// 			"MERCADOLIVRE",
		// 			"MEUS NUTRIENTES",
		// 			"ONDE NASCI",
		// 			"CÓDIGO ANVISA",
		// 			"OBJETIVOS",
		// 			"FORMA",
		// 			"PRODUTOS ORGÂNICOS",
		// 			"PRODUTOS VEGETARIANOS",
		// 			"LIVRE DE GLÚTEN",
		// 			"SEM LACTOSE",
		// 			"ZERO AÇUCAR"
		// 		],
		// 		"description": "<p>O&nbsp;magn&eacute;sio&nbsp;&eacute; um dos <strong>minerais essenciais</strong> para a regenera&ccedil;&atilde;o celular, e &eacute; utilizado em mais de <strong>350 rea&ccedil;&otilde;es enzim&aacute;ticas</strong> no organismo, mais do que qualquer outro mineral. Ao lado de oxig&ecirc;nio e iodo, o magn&eacute;sio &eacute; o terceiro elemento mais importante para sustentar a vida, assim como para reverter as doen&ccedil;as e o envelhecimento.</p><br><p>O magn&eacute;sio ainda favorece a absor&ccedil;&atilde;o do c&aacute;lcio da alimenta&ccedil;&atilde;o e reduz a incid&ecirc;ncia de <strong>c&acirc;imbras</strong> e <strong>fraqueza muscular</strong>.</p><br><p>O Magn&eacute;sio Dimalato &eacute; uma &oacute;tima fonte de magn&eacute;sio e <strong>&aacute;cido m&aacute;lico</strong> com alta biodisponibilidade, ou seja, garante uma boa absor&ccedil;&atilde;o pelo nosso corpo.</p><br><p>Um dos estudos demonstrou que a ingest&atilde;o de Magn&eacute;sio Dimalato duas vezes por dia durante 2 a 6 meses melhoram significativamente os n&iacute;veis de energia e a fun&ccedil;&atilde;o muscular e reduzem o n&iacute;vel de dor de pacientes com&nbsp;<strong>fibromialgia.</strong>&nbsp;Pacientes com fibromialgia possuem redu&ccedil;&atilde;o de oxig&ecirc;nio e Magn&eacute;sio Dimalato demostrou benef&iacute;cios significativos por melhorar a&nbsp;<strong>produ&ccedil;&atilde;o de energia</strong>.</p><br><p><strong>Magn&eacute;sio Dimalato Meissen</strong> vem em Potes com c&aacute;psulas transparente.</p><br><p>&nbsp;</p><br><p><strong>Benefícios e Diferenciais:</strong></p><br><p>- Ácido Málico e Magnésio</p><br><p>- Auxilia no do combate a Fibromialgia</p><br><p>- Auxilia no combate ao cansaço crônico</p><br><p>- Ácido Málico é natural</p><br><p>- Boa absorção pelo organismo</p><br><p>- Preferencial ao Cloreto de Magnésio para pessoas com distúrbio digestivo</p><br><p>&nbsp;</p><br><p><strong>Ingredientes</strong>: </p><br><p>Magnésio Dimalto. </p><br><p>Cápsula: Gelatina e água purificada.</p><br><p>NÂO CONTÉM GLÚTEN.</p><br><p>&nbsp;</p><br><p><strong>Recomenda&ccedil;&atilde;o de Uso: </strong></p><br><p>Ingerir 2(duas) c&aacute;psula ao dia com l&iacute;quido.</p><br><p>&nbsp;</p><br><center><img src=\"http://lojaprojetoverao.vteximg.com.br/arquivos/magnesio-dimalato-meissen-120caps.jpg\"></center><br><br><br><br><a href=\"https://www.lojaprojetoverao.com.br/kit-3x-cloreto-de-magnesio-pa-display-10-saches-33-meissen/p\"><img src=\"http://lojaprojetoverao.vteximg.com.br/arquivos/meissen-cloreto-magnesio-kits-3x-10saches-33g.jpg\"></a><br><a href=\"https://www.lojaprojetoverao.com.br/kit-3x-cloreto-de-magnesio-pa-500mg-60-capsulas-meissen/p\"><img src=\"http://lojaprojetoverao.vteximg.com.br/arquivos/meissen-cloreto-magnesio-kits-3x-60vcaps.jpg\"></a><br><a href=\"https://www.lojaprojetoverao.com.br/kit-3x-cloreto-de-magnesio-pa-500mg-120-capsulas-meissen/p\"><img src=\"http://lojaprojetoverao.vteximg.com.br/arquivos/meissen-cloreto-magnesio-kits-3x-120vcaps.jpg\"></a><br><a href=\"https://www.lojaprojetoverao.com.br/kit-6x-magnesio-dimalato-500mg-60-capsulas-gelatinosas-meissen/p\"><img src=\"http://lojaprojetoverao.vteximg.com.br/arquivos/meissen-magnesio-dimalato-kits-6x-60caps.jpg\"></a><br><a href=\"https://www.lojaprojetoverao.com.br/kit-3x-magnesio-quelato-433mg-120-capsulas-meissen/p\"><img src=\"http://lojaprojetoverao.vteximg.com.br/arquivos/meissen-magnesio-quelato-kits-3x-120caps.jpg\"></a><br><a href=\"https://www.lojaprojetoverao.com.br/kit-6x-magnesio-quelato-433mg-120-capsulas-meissen/p\"><img src=\"http://lojaprojetoverao.vteximg.com.br/arquivos/meissen-magnesio-quelato-kits-6x-120caps.jpg\"></a>",
		// 		"items": [
		// 			{
		// 				"itemId": "1220048123",
		// 				"name": "Kit 3x Magnésio Dimalato Puro (500mg) 120 Cápsulas - Meissen",
		// 				"nameComplete": "Kit 3x Magnésio Dimalato Puro (500mg) 120 Cápsulas - Meissen",
		// 				"complementName": "O Magnésio Dimalato é uma ótima fonte de magnésio e ácido málico com alta biodisponibilidade, ou seja, garante uma boa absorção pelo nosso corpo.",
		// 				"ean": "",
		// 				"referenceId": [
		// 					{
		// 						"Key": "RefId",
		// 						"Value": "1524_0_0_U"
		// 					}
		// 				],
		// 				"measurementUnit": "un",
		// 				"unitMultiplier": 1.0000,
		// 				"modalType": null,
		// 				"isKit": true,
		// 				"kitItems": [
		// 					{
		// 						"itemId": "531203056",
		// 						"amount": 3
		// 					}
		// 				],
		// 				"images": [
		// 					{
		// 						"imageId": "164833",
		// 						"imageLabel": "",
		// 						"imageTag": "<img src=\"~/arquivos/ids/164833-#width#-#height#/meissen-kit-3x-magnesio-dimalato-120-capsulas-500mg-loja-projeto-verao-b.jpg?v=636742566114730000\" width=\"#width#\" height=\"#height#\" alt=\"meissen-kit-3x-magnesio-dimalato-120-capsulas-500mg-loja-projeto-verao-b\" id=\"\" />",
		// 						"imageUrl": "http://lojaprojetoverao.vteximg.com.br/arquivos/ids/164833/meissen-kit-3x-magnesio-dimalato-120-capsulas-500mg-loja-projeto-verao-b.jpg?v=636742566114730000",
		// 						"imageText": "meissen-kit-3x-magnesio-dimalato-120-capsulas-500mg-loja-projeto-verao-b"
		// 					},
		// 					{
		// 						"imageId": "164785",
		// 						"imageLabel": "",
		// 						"imageTag": "<img src=\"~/arquivos/ids/164785-#width#-#height#/meissen-kit-3x-magnesio-dimalato-120-capsulas-500mg-loja-projeto-verao.jpg?v=636739819713130000\" width=\"#width#\" height=\"#height#\" alt=\"meissen-kit-3x-magnesio-dimalato-120-capsulas-500mg-loja-projeto-verao\" id=\"\" />",
		// 						"imageUrl": "http://lojaprojetoverao.vteximg.com.br/arquivos/ids/164785/meissen-kit-3x-magnesio-dimalato-120-capsulas-500mg-loja-projeto-verao.jpg?v=636739819713130000",
		// 						"imageText": "meissen-kit-3x-magnesio-dimalato-120-capsulas-500mg-loja-projeto-verao"
		// 					},
		// 					{
		// 						"imageId": "164834",
		// 						"imageLabel": "",
		// 						"imageTag": "<img src=\"~/arquivos/ids/164834-#width#-#height#/meissen-magnesio-dimalato-120-capsulas-500mg-loja-projeto-verao-03.jpg?v=636742566320730000\" width=\"#width#\" height=\"#height#\" alt=\"meissen-magnesio-dimalato-120-capsulas-500mg-loja-projeto-verao-03\" id=\"\" />",
		// 						"imageUrl": "http://lojaprojetoverao.vteximg.com.br/arquivos/ids/164834/meissen-magnesio-dimalato-120-capsulas-500mg-loja-projeto-verao-03.jpg?v=636742566320730000",
		// 						"imageText": "meissen-magnesio-dimalato-120-capsulas-500mg-loja-projeto-verao-03"
		// 					}
		// 				],
		// 				"sellers": [
		// 					{
		// 						"sellerId": "1",
		// 						"sellerName": "Projeto Verão",
		// 						"addToCartLink": "https://lojaprojetoverao.vtexcommercestable.com.br/checkout/cart/add?sku=1220048123&qty=1&seller=1&sc=1&price=11849&cv=d2510e59b2d431b011beb95adc7bc31b_&sc=1",
		// 						"sellerDefault": true,
		// 						"commertialOffer": {
		// 							"DeliverySlaSamplesPerRegion": {
		// 								"0": {
		// 									"DeliverySlaPerTypes": [],
		// 									"Region": null
		// 								}
		// 							},
		// 							"Installments": [
		// 								{
		// 									"Value": 118.49,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 118.49,
		// 									"NumberOfInstallments": 1,
		// 									"PaymentSystemName": "American Express",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "American Express à vista"
		// 								},
		// 								{
		// 									"Value": 59.24,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 118.49,
		// 									"NumberOfInstallments": 2,
		// 									"PaymentSystemName": "American Express",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "American Express 2 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 39.49,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 118.49,
		// 									"NumberOfInstallments": 3,
		// 									"PaymentSystemName": "American Express",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "American Express 3 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 29.62,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 118.49,
		// 									"NumberOfInstallments": 4,
		// 									"PaymentSystemName": "American Express",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "American Express 4 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 23.69,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 118.49,
		// 									"NumberOfInstallments": 5,
		// 									"PaymentSystemName": "American Express",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "American Express 5 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 19.74,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 118.49,
		// 									"NumberOfInstallments": 6,
		// 									"PaymentSystemName": "American Express",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "American Express 6 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 16.92,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 118.49,
		// 									"NumberOfInstallments": 7,
		// 									"PaymentSystemName": "American Express",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "American Express 7 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 14.81,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 118.49,
		// 									"NumberOfInstallments": 8,
		// 									"PaymentSystemName": "American Express",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "American Express 8 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 118.49,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 118.49,
		// 									"NumberOfInstallments": 1,
		// 									"PaymentSystemName": "Visa",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Visa à vista"
		// 								},
		// 								{
		// 									"Value": 59.24,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 118.49,
		// 									"NumberOfInstallments": 2,
		// 									"PaymentSystemName": "Visa",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Visa 2 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 39.49,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 118.49,
		// 									"NumberOfInstallments": 3,
		// 									"PaymentSystemName": "Visa",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Visa 3 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 29.62,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 118.49,
		// 									"NumberOfInstallments": 4,
		// 									"PaymentSystemName": "Visa",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Visa 4 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 23.69,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 118.49,
		// 									"NumberOfInstallments": 5,
		// 									"PaymentSystemName": "Visa",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Visa 5 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 19.74,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 118.49,
		// 									"NumberOfInstallments": 6,
		// 									"PaymentSystemName": "Visa",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Visa 6 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 16.92,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 118.49,
		// 									"NumberOfInstallments": 7,
		// 									"PaymentSystemName": "Visa",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Visa 7 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 14.81,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 118.49,
		// 									"NumberOfInstallments": 8,
		// 									"PaymentSystemName": "Visa",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Visa 8 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 118.49,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 118.49,
		// 									"NumberOfInstallments": 1,
		// 									"PaymentSystemName": "Diners",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Diners à vista"
		// 								},
		// 								{
		// 									"Value": 59.24,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 118.49,
		// 									"NumberOfInstallments": 2,
		// 									"PaymentSystemName": "Diners",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Diners 2 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 39.49,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 118.49,
		// 									"NumberOfInstallments": 3,
		// 									"PaymentSystemName": "Diners",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Diners 3 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 29.62,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 118.49,
		// 									"NumberOfInstallments": 4,
		// 									"PaymentSystemName": "Diners",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Diners 4 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 23.69,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 118.49,
		// 									"NumberOfInstallments": 5,
		// 									"PaymentSystemName": "Diners",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Diners 5 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 19.74,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 118.49,
		// 									"NumberOfInstallments": 6,
		// 									"PaymentSystemName": "Diners",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Diners 6 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 16.92,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 118.49,
		// 									"NumberOfInstallments": 7,
		// 									"PaymentSystemName": "Diners",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Diners 7 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 14.81,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 118.49,
		// 									"NumberOfInstallments": 8,
		// 									"PaymentSystemName": "Diners",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Diners 8 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 118.49,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 118.49,
		// 									"NumberOfInstallments": 1,
		// 									"PaymentSystemName": "Mastercard",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Mastercard à vista"
		// 								},
		// 								{
		// 									"Value": 59.24,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 118.49,
		// 									"NumberOfInstallments": 2,
		// 									"PaymentSystemName": "Mastercard",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Mastercard 2 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 39.49,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 118.49,
		// 									"NumberOfInstallments": 3,
		// 									"PaymentSystemName": "Mastercard",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Mastercard 3 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 29.62,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 118.49,
		// 									"NumberOfInstallments": 4,
		// 									"PaymentSystemName": "Mastercard",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Mastercard 4 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 23.69,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 118.49,
		// 									"NumberOfInstallments": 5,
		// 									"PaymentSystemName": "Mastercard",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Mastercard 5 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 19.74,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 118.49,
		// 									"NumberOfInstallments": 6,
		// 									"PaymentSystemName": "Mastercard",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Mastercard 6 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 16.92,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 118.49,
		// 									"NumberOfInstallments": 7,
		// 									"PaymentSystemName": "Mastercard",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Mastercard 7 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 14.81,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 118.49,
		// 									"NumberOfInstallments": 8,
		// 									"PaymentSystemName": "Mastercard",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Mastercard 8 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 118.49,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 118.49,
		// 									"NumberOfInstallments": 1,
		// 									"PaymentSystemName": "Hipercard",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Hipercard à vista"
		// 								},
		// 								{
		// 									"Value": 59.24,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 118.49,
		// 									"NumberOfInstallments": 2,
		// 									"PaymentSystemName": "Hipercard",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Hipercard 2 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 39.49,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 118.49,
		// 									"NumberOfInstallments": 3,
		// 									"PaymentSystemName": "Hipercard",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Hipercard 3 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 29.62,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 118.49,
		// 									"NumberOfInstallments": 4,
		// 									"PaymentSystemName": "Hipercard",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Hipercard 4 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 23.69,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 118.49,
		// 									"NumberOfInstallments": 5,
		// 									"PaymentSystemName": "Hipercard",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Hipercard 5 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 19.74,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 118.49,
		// 									"NumberOfInstallments": 6,
		// 									"PaymentSystemName": "Hipercard",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Hipercard 6 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 16.92,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 118.49,
		// 									"NumberOfInstallments": 7,
		// 									"PaymentSystemName": "Hipercard",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Hipercard 7 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 14.81,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 118.49,
		// 									"NumberOfInstallments": 8,
		// 									"PaymentSystemName": "Hipercard",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Hipercard 8 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 118.49,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 118.49,
		// 									"NumberOfInstallments": 1,
		// 									"PaymentSystemName": "Elo",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Elo à vista"
		// 								},
		// 								{
		// 									"Value": 59.24,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 118.49,
		// 									"NumberOfInstallments": 2,
		// 									"PaymentSystemName": "Elo",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Elo 2 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 39.49,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 118.49,
		// 									"NumberOfInstallments": 3,
		// 									"PaymentSystemName": "Elo",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Elo 3 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 29.62,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 118.49,
		// 									"NumberOfInstallments": 4,
		// 									"PaymentSystemName": "Elo",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Elo 4 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 23.69,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 118.49,
		// 									"NumberOfInstallments": 5,
		// 									"PaymentSystemName": "Elo",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Elo 5 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 19.74,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 118.49,
		// 									"NumberOfInstallments": 6,
		// 									"PaymentSystemName": "Elo",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Elo 6 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 16.92,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 118.49,
		// 									"NumberOfInstallments": 7,
		// 									"PaymentSystemName": "Elo",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Elo 7 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 14.81,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 118.49,
		// 									"NumberOfInstallments": 8,
		// 									"PaymentSystemName": "Elo",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Elo 8 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 118.49,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 118.49,
		// 									"NumberOfInstallments": 1,
		// 									"PaymentSystemName": "Vale",
		// 									"PaymentSystemGroupName": "giftCardPaymentGroup",
		// 									"Name": "Vale à vista"
		// 								},
		// 								{
		// 									"Value": 118.49,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 118.49,
		// 									"NumberOfInstallments": 1,
		// 									"PaymentSystemName": "BOLBRADESCO",
		// 									"PaymentSystemGroupName": "bankInvoicePaymentGroup",
		// 									"Name": "BOLBRADESCO à vista"
		// 								}
		// 							],
		// 							"DiscountHighLight": [],
		// 							"GiftSkuIds": [],
		// 							"Teasers": [],
		// 							"BuyTogether": [],
		// 							"Price": 118.49,
		// 							"ListPrice": 131.55,
		// 							"PriceWithoutDiscount": 118.49,
		// 							"RewardValue": 0.0,
		// 							"PriceValidUntil": "2020-02-28T22:41:57Z",
		// 							"AvailableQuantity": 38,
		// 							"Tax": 0.0,
		// 							"DeliverySlaSamples": [
		// 								{
		// 									"DeliverySlaPerTypes": [],
		// 									"Region": null
		// 								}
		// 							],
		// 							"GetInfoErrorMessage": null,
		// 							"CacheVersionUsedToCallCheckout": "d2510e59b2d431b011beb95adc7bc31b_"
		// 						}
		// 					}
		// 				],
		// 				"Videos": []
		// 			}
		// 		]
		// 	},
		// 	{
		// 		"productId": "756",
		// 		"productName": "Kit 3x Magnésio Dimalato Puro (500mg) 60 Cápsulas gelatinosas - Meissen",
		// 		"brand": "Meissen",
		// 		"linkText": "kit-3x-magnesio-dimalato-500mg-60-capsulas-gelatinosas-meissen",
		// 		"productReference": "0000706",
		// 		"categoryId": "12001",
		// 		"productTitle": "",
		// 		"metaTagDescription": "O Magnesio Dimalato e uma otima fonte de magnesio e acido malico com alta biodisponibilidade, ou seja, garante uma boa absorcao pelo nosso corpo.",
		// 		"clusterHighlights": {},
		// 		"productClusters": {
		// 			"140": "Loja",
		// 			"141": "Comparadores",
		// 			"164": "Zoom",
		// 			"177": "Black Friday Meissen"
		// 		},
		// 		"searchableClusters": {},
		// 		"categories": [
		// 			"/Kit/",
		// 			"/Compra coletiva/Kits e combos/",
		// 			"/Compra coletiva/",
		// 			"/Objetivos/Saúde dos homens/",
		// 			"/Objetivos/",
		// 			"/Vitaminas e minerais/Minerais/Magnésio/",
		// 			"/Vitaminas e minerais/Minerais/",
		// 			"/Vitaminas e minerais/",
		// 			"/Objetivos/Saúde feminina/"
		// 		],
		// 		"categoriesIds": [
		// 			"/12001/",
		// 			"/1768433969/191119192/",
		// 			"/1768433969/",
		// 			"/36144580/750627591/",
		// 			"/36144580/",
		// 			"/1521962469/1205244504/1272483216/",
		// 			"/1521962469/1205244504/",
		// 			"/1521962469/",
		// 			"/36144580/1953866447/"
		// 		],
		// 		"link": "https://lojaprojetoverao.vtexcommercestable.com.br/kit-3x-magnesio-dimalato-500mg-60-capsulas-gelatinosas-meissen/p",
		// 		"SELOS": [
		// 			"SEM GLÚTEN",
		// 			"SEM LACTOSE",
		// 			"ZERO AÇÚCAR (DIET)",
		// 			"SEM AROMATIZANTES",
		// 			"SEM CONSERVANTES",
		// 			"NATURAL",
		// 			"REGISTRO ANVISA"
		// 		],
		// 		"Especificações": [
		// 			"SELOS"
		// 		],
		// 		"SEXO": [
		// 			"HOMEM",
		// 			"MULHER"
		// 		],
		// 		"ORGÂNICO": [
		// 			"NÃO"
		// 		],
		// 		"FINALIDADE": [
		// 			"SAÚDE DAS ARTICULAÇÕES E OSSOS SAUDÁVEIS",
		// 			"FORTALECER A IMUNIDADE",
		// 			"QUALIDADE DO SONO"
		// 		],
		// 		"LACTOSE": [
		// 			"NÃO"
		// 		],
		// 		"ORIGEM": [
		// 			"NACIONAL"
		// 		],
		// 		"PREÇO": [
		// 			"DE 100 ATÉ 199"
		// 		],
		// 		"Personal Filtros": [
		// 			"SEXO",
		// 			"ORGÂNICO",
		// 			"FINALIDADE",
		// 			"LACTOSE",
		// 			"ORIGEM",
		// 			"PREÇO"
		// 		],
		// 		"MERCADOLIVRE": [
		// 			"O magnésio é um dos minerais essenciais para a regeneração celular, e é utilizado em mais de 350 reações enzimáticas no organismo, mais do que qualquer outro mineral. Ao lado de oxigênio e iodo, o magnésio é o terceiro elemento mais importante para sustentar a vida, assim como para reverter as doenças e o envelhecimento.<br>O magnésio ainda favorece a absorção do cálcio da alimentação e reduz a incidência de câimbras e fraqueza muscular.<br>O Magnésio Dimalato é uma ótima fonte de magnésio e ácido málico com alta biodisponibilidade, ou seja, garante uma boa absorção pelo nosso corpo.<br>Um dos estudos demonstrou que a ingestão de Magnésio Dimalato duas vezes por dia durante 2 a 6 meses melhoram significativamente os níveis de energia e a função muscular e reduzem o nível de dor de pacientes com fibromialgia. Pacientes com fibromialgia possuem redução de oxigênio e Magnésio Dimalato demostrou benefícios significativos por melhorar a produção de energia.<br>Magnésio Dimalato \"Meissen\"<br>Potes com cápsulas gelatinosas animal transparente de 500mg<br>Ingredientes: Magnésio Dimalato.<br>Recomendação de Uso: Ingerir 1 cápsula ao dia com líquido.<br><br>DADOS DE CONSERVAÇÃO:<br><br>Conservar em embalagem original bem fechada em lugar seco, fresco e arejado.<br>Consumir este produto conforme a Recomendação de Ingestão Diária constante da embalagem.<br>*Gestantes, nutrizes e crianças até 3 anos somente deve consumir este produto sob orientação de nutricionista ou médico.<br><br>Produto Dispensado de Registro conforme RDC 27/2010"
		// 		],
		// 		"MEUS NUTRIENTES": [
		// 			"<div class=\"nutrientes\"><br><div class=\"informacao\"><br><table style=\"overflow: hidden; display: block; border-collapse: collapse;\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\"><br><tbody><br><tr><br><td><br><h3>Informa&ccedil;&otilde;es Nutricionais</h3><br></td><br></tr><br><tr><br><td><br><p>Por&ccedil;&atilde;o de 500mg (1 c&aacute;psulas)</p><br></td><br></tr><br><tr><br><td><br><div class=\"quantidade\">Quantidade por por&ccedil;&atilde;o</div><br><div class=\"vd\">%V.D*</div><br></td><br></tr><br><tr><br><td><br><table style=\"overflow: hidden; display: block; border-collapse: collapse;\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\"><br><tbody><br><tr><br><td class=\"first\"><br><p>Valor energ&eacute;tico</p><br></td><br><td><br><p>0cal=0kJ</p><br></td><br><td class=\"last\"><br><p>0%</p><br></td><br></tr><br><tr><br><td class=\"first\"><br><p>Carboidratos</p><br></td><br><td><br><p>0g</p><br></td><br><td class=\"last\"><br><p>0%</p><br></td><br></tr><br><tr><br><td class=\"first\"><br><p>Prote&iacute;nas</p><br></td><br><td><br><p>0g</p><br></td><br><td class=\"last\"><br><p>0%</p><br></td><br></tr><br><tr><br><td class=\"first\"><br><p>Gorduras totais</p><br></td><br><td><br><p>0g</p><br></td><br><td class=\"last\"><br><p>0%</p><br></td><br></tr><br><tr><br><td class=\"first\"><br><p>Gorduras Saturadas</p><br></td><br><td><br><p>0g</p><br></td><br><td class=\"last\"><br><p>0%</p><br></td><br></tr><br><tr><br><td class=\"first\"><br><p>Gorduras Trans</p><br></td><br><td><br><p>0g</p><br></td><br><td class=\"last\"><br><p>**</p><br></td><br></tr><br><tr><br>  <td class=\"first\"><br>  <p>Fibra Alimentar</p><br>  </td><br>  <td><br>  <p>0g</p><br>  </td><br>  <td class=\"last\"><br>  <p>0%</p><br>  </td><br></tr><br><tr><br><td class=\"first\"><br><p>Sódio</p><br></td><br><td><br><p>0mg</p><br></td><br><td class=\"last\"><br><p>0%</p><br></td><br></tr><br><tr><br><td class=\"first\"><br><p>Magnésio</p><br></td><br><td><br><p>150mg</p><br></td><br><td class=\"last\"><br><p>58%</p><br></td><br></tr><br></tbody><br></table><br></td><br></tr><br></tbody><br></table><br><p>% *Valores di&aacute;rios de refer&ecirc;ncia com base em uma dieta de 2000kcal ou 8400kJ. Seus valores di&aacute;rios podem ser maiores ou menores dependendo de suas necessidades energ&eacute;ticas. **Valores de referência n&atilde;o estabelecidos.</p><br></div><br><div class=\"nota\"><br><h3>Tome nota:</h3><br><div class=\"fundo\"><br><div><br><h3>Magnésio</h3><br><p>150mg</p><br></div><br><div><br><h3>Carboidratos</h3><br><p>0g</p><br></div><br><div><br><h3>Glúten</h3><br><p>0g</p><br></div><br><div class=\"last\"><br><h3>Calorias</h3><br><p>0</p><br><p>Kcal </p><br></div><br></div><br><p><strong>Ingredientes:</strong> Magnésio Dimalato</p><br><p>C&aacute;psula: gelatina e &aacute;gua purificada. N&Atilde;O CONT&Eacute;M GL&Uacute;TEN.</p><br></div><br><div class=\"advertencias\"><br><h3>Advert&ecirc;ncias:</h3><br><p>Gestantes, nutrizes e crianças até 3 anos, somente devem consumir esse produto sob orientação de nutricionista ou médico.</p><br><p>Consumir este produto conforme a recomendação diária constante na embalagem. </p><br><p>Conservar a embalagem original bem fechada, em lugar fresco e arejado.</p><br></div><br><div class=\"qntdos\"><br><div><br><h3>Quantidade</h3><br><h3 class=\"last\">Doses</h3><br></div><br><div><br><p>180 C&aacute;psulas</p><br><p class=\"last\">180</p><br></div><br></div><br><div class=\"instrucoes\"><br><h3>Instru&ccedil;&otilde;es de uso:</h3><br><p>Ingerir 1(uma) c&aacute;psula ao dia.</p><br></div><br></div>"
		// 		],
		// 		"ONDE NASCI": [
		// 			"<p>A MEISSEN é uma empresa brasileira fundada em 1961 e atua no mercado desde então, oferecendo produtos de qualidade usando matérias primas selecionadas e de origem comprovada. Os produtos não têm adição de qualquer tipo de conservantes ou estabilizantes, mantendo suas propriedades naturais. </p><br><p>Os processos produtivos são acompanhados por rígidos controles de qualidade além de ter uma séria preocupação com o meio ambiente. Um exemplo disso é o uso de fibras de poliéster provenientes da reciclagem de garrafas PET e a doação de resíduos recicláveis gerados na produção, para moradores da comunidade local na região de Cotia.</p><br><p>Confie na seriedade de uma tradicionalíssima marca, preocupada em aliar responsabilidade social e ambiental com qualidade de produtos genuinamente naturais e de procedência comprovada, assim como tem feito em toda a sua história.</p>"
		// 		],
		// 		"CÓDIGO ANVISA": [
		// 			"Produto Dispensado de Registro conforme RDC 27/2010"
		// 		],
		// 		"Descrição": [
		// 			"MERCADOLIVRE",
		// 			"MEUS NUTRIENTES",
		// 			"ONDE NASCI",
		// 			"CÓDIGO ANVISA"
		// 		],
		// 		"OBJETIVOS": [
		// 			"SAÚDE DAS ARTICULAÇÕES E OSSOS SAUDÁVEIS",
		// 			"FORTALECER A IMUNIDADE",
		// 			"QUALIDADE DO SONO"
		// 		],
		// 		"FORMA": [
		// 			"CÁPSULAS"
		// 		],
		// 		"PRODUTOS ORGÂNICOS": [
		// 			"NÃO"
		// 		],
		// 		"PRODUTOS VEGETARIANOS": [
		// 			"SIM"
		// 		],
		// 		"LIVRE DE GLÚTEN": [
		// 			"SIM"
		// 		],
		// 		"SEM LACTOSE": [
		// 			"SIM"
		// 		],
		// 		"ZERO AÇUCAR": [
		// 			"SIM"
		// 		],
		// 		"Filtros Departamentos/Categorias": [
		// 			"OBJETIVOS",
		// 			"FORMA",
		// 			"PRODUTOS ORGÂNICOS",
		// 			"PRODUTOS VEGETARIANOS",
		// 			"LIVRE DE GLÚTEN",
		// 			"SEM LACTOSE",
		// 			"ZERO AÇUCAR"
		// 		],
		// 		"allSpecifications": [
		// 			"SELOS",
		// 			"SEXO",
		// 			"ORGÂNICO",
		// 			"FINALIDADE",
		// 			"LACTOSE",
		// 			"ORIGEM",
		// 			"PREÇO",
		// 			"MERCADOLIVRE",
		// 			"MEUS NUTRIENTES",
		// 			"ONDE NASCI",
		// 			"CÓDIGO ANVISA",
		// 			"OBJETIVOS",
		// 			"FORMA",
		// 			"PRODUTOS ORGÂNICOS",
		// 			"PRODUTOS VEGETARIANOS",
		// 			"LIVRE DE GLÚTEN",
		// 			"SEM LACTOSE",
		// 			"ZERO AÇUCAR"
		// 		],
		// 		"description": "<p>O&nbsp;magn&eacute;sio&nbsp;&eacute; um dos <strong>minerais essenciais</strong> para a regenera&ccedil;&atilde;o celular, e &eacute; utilizado em mais de <strong>350 rea&ccedil;&otilde;es enzim&aacute;ticas</strong> no organismo, mais do que qualquer outro mineral. Ao lado de oxig&ecirc;nio e iodo, o magn&eacute;sio &eacute; o terceiro elemento mais importante para sustentar a vida, assim como para reverter as doen&ccedil;as e o envelhecimento.</p><br><p>O magn&eacute;sio ainda favorece a absor&ccedil;&atilde;o do c&aacute;lcio da alimenta&ccedil;&atilde;o e reduz a incid&ecirc;ncia de <strong>c&acirc;imbras</strong> e <strong>fraqueza muscular</strong>.</p><br><p>O Magn&eacute;sio Dimalato &eacute; uma &oacute;tima fonte de magn&eacute;sio e <strong>&aacute;cido m&aacute;lico</strong> com alta biodisponibilidade, ou seja, garante uma boa absor&ccedil;&atilde;o pelo nosso corpo.</p><br><p>Um dos estudos demonstrou que a ingest&atilde;o de Magn&eacute;sio Dimalato duas vezes por dia durante 2 a 6 meses melhoram significativamente os n&iacute;veis de energia e a fun&ccedil;&atilde;o muscular e reduzem o n&iacute;vel de dor de pacientes com&nbsp;<strong>fibromialgia.</strong>&nbsp;Pacientes com fibromialgia possuem redu&ccedil;&atilde;o de oxig&ecirc;nio e Magn&eacute;sio Dimalato demostrou benef&iacute;cios significativos por melhorar a&nbsp;<strong>produ&ccedil;&atilde;o de energia</strong>.</p><br><p><strong>Magn&eacute;sio Dimalato Meissen</strong> vem em Potes com c&aacute;psulas transparente.</p><br><p>&nbsp;</p><br><p><strong>Benefícios e Diferenciais:</strong></p><br><p>- Ácido Málico e Magnésio</p><br><p>- Auxilia no do combate a Fibromialgia</p><br><p>- Auxilia no combate ao cansaço crônico</p><br><p>- Ácido Málico é natural</p><br><p>- Boa absorção pelo organismo</p><br><p>- Preferencial ao Cloreto de Magnésio para pessoas com distúrbio digestivo</p><br><p>&nbsp;</p><br><p><strong>Ingredientes</strong>: </p><br><p>Magnésio Dimalto. </p><br><p>Cápsula: Gelatina e água purificada.</p><br><p>NÂO CONTÉM GLÚTEN.</p><br><p>&nbsp;</p><br><p><strong>Recomenda&ccedil;&atilde;o de Uso: </strong></p><br><p>Ingerir 2 c&aacute;psula ao dia com l&iacute;quido.</p><br><p>&nbsp;</p><br><center><img src=\"http://lojaprojetoverao.vteximg.com.br/arquivos/magnesio-dimalato-meissen.jpg\"></center><br><br><br><br><a href=\"https://www.lojaprojetoverao.com.br/kit-3x-cloreto-de-magnesio-pa-display-10-saches-33-meissen/p\"><img src=\"http://lojaprojetoverao.vteximg.com.br/arquivos/meissen-cloreto-magnesio-kits-3x-10saches-33g.jpg\"></a><br><a href=\"https://www.lojaprojetoverao.com.br/kit-3x-cloreto-de-magnesio-pa-500mg-60-capsulas-meissen/p\"><img src=\"http://lojaprojetoverao.vteximg.com.br/arquivos/meissen-cloreto-magnesio-kits-3x-60vcaps.jpg\"></a><br><a href=\"https://www.lojaprojetoverao.com.br/kit-3x-cloreto-de-magnesio-pa-500mg-120-capsulas-meissen/p\"><img src=\"http://lojaprojetoverao.vteximg.com.br/arquivos/meissen-cloreto-magnesio-kits-3x-120vcaps.jpg\"></a><br><a href=\"https://www.lojaprojetoverao.com.br/kit-6x-magnesio-dimalato-500mg-60-capsulas-gelatinosas-meissen/p\"><img src=\"http://lojaprojetoverao.vteximg.com.br/arquivos/meissen-magnesio-dimalato-kits-6x-60caps.jpg\"></a><br><a href=\"https://www.lojaprojetoverao.com.br/kit-3x-magnesio-quelato-433mg-120-capsulas-meissen/p\"><img src=\"http://lojaprojetoverao.vteximg.com.br/arquivos/meissen-magnesio-quelato-kits-3x-120caps.jpg\"></a><br><a href=\"https://www.lojaprojetoverao.com.br/kit-6x-magnesio-quelato-433mg-120-capsulas-meissen/p\"><img src=\"http://lojaprojetoverao.vteximg.com.br/arquivos/meissen-magnesio-quelato-kits-6x-120caps.jpg\"></a>",
		// 		"items": [
		// 			{
		// 				"itemId": "2040580031",
		// 				"name": "Kit 3x Magnésio Dimalato Puro (500mg) 60 Cápsulas gelatinosas - Meissen",
		// 				"nameComplete": "Kit 3x Magnésio Dimalato Puro (500mg) 60 Cápsulas gelatinosas - Meissen",
		// 				"complementName": "O Magnésio Dimalato é uma ótima fonte de magnésio e ácido málico com alta biodisponibilidade, ou seja, garante uma boa absorção pelo nosso corpo.",
		// 				"ean": "8802355004299",
		// 				"referenceId": [
		// 					{
		// 						"Key": "RefId",
		// 						"Value": "756_0_0_U"
		// 					}
		// 				],
		// 				"measurementUnit": "un",
		// 				"unitMultiplier": 1.0000,
		// 				"modalType": null,
		// 				"isKit": true,
		// 				"kitItems": [
		// 					{
		// 						"itemId": "1739766082",
		// 						"amount": 3
		// 					}
		// 				],
		// 				"images": [
		// 					{
		// 						"imageId": "163109",
		// 						"imageLabel": "",
		// 						"imageTag": "<img src=\"~/arquivos/ids/163109-#width#-#height#/meissen-magnesio-dimalato-kit-3x-60-capsulas-500mg-36g-loja-projeto-verao.jpg?v=636615809899330000\" width=\"#width#\" height=\"#height#\" alt=\"meissen-magnesio-dimalato-kit-3x-60-capsulas-500mg-36g-loja-projeto-verao\" id=\"\" />",
		// 						"imageUrl": "http://lojaprojetoverao.vteximg.com.br/arquivos/ids/163109/meissen-magnesio-dimalato-kit-3x-60-capsulas-500mg-36g-loja-projeto-verao.jpg?v=636615809899330000",
		// 						"imageText": "meissen-magnesio-dimalato-kit-3x-60-capsulas-500mg-36g-loja-projeto-verao"
		// 					}
		// 				],
		// 				"sellers": [
		// 					{
		// 						"sellerId": "1",
		// 						"sellerName": "Projeto Verão",
		// 						"addToCartLink": "https://lojaprojetoverao.vtexcommercestable.com.br/checkout/cart/add?sku=2040580031&qty=1&seller=1&sc=1&price=6588&cv=bd9c2123fc6fe3d45d7d9ea3abd51f4a_&sc=1",
		// 						"sellerDefault": true,
		// 						"commertialOffer": {
		// 							"DeliverySlaSamplesPerRegion": {
		// 								"0": {
		// 									"DeliverySlaPerTypes": [],
		// 									"Region": null
		// 								}
		// 							},
		// 							"Installments": [
		// 								{
		// 									"Value": 65.88,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 65.88,
		// 									"NumberOfInstallments": 1,
		// 									"PaymentSystemName": "American Express",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "American Express à vista"
		// 								},
		// 								{
		// 									"Value": 32.94,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 65.88,
		// 									"NumberOfInstallments": 2,
		// 									"PaymentSystemName": "American Express",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "American Express 2 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 21.96,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 65.88,
		// 									"NumberOfInstallments": 3,
		// 									"PaymentSystemName": "American Express",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "American Express 3 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 16.47,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 65.88,
		// 									"NumberOfInstallments": 4,
		// 									"PaymentSystemName": "American Express",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "American Express 4 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 13.17,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 65.88,
		// 									"NumberOfInstallments": 5,
		// 									"PaymentSystemName": "American Express",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "American Express 5 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 10.98,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 65.88,
		// 									"NumberOfInstallments": 6,
		// 									"PaymentSystemName": "American Express",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "American Express 6 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 9.41,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 65.88,
		// 									"NumberOfInstallments": 7,
		// 									"PaymentSystemName": "American Express",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "American Express 7 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 8.23,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 65.88,
		// 									"NumberOfInstallments": 8,
		// 									"PaymentSystemName": "American Express",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "American Express 8 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 65.88,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 65.88,
		// 									"NumberOfInstallments": 1,
		// 									"PaymentSystemName": "Visa",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Visa à vista"
		// 								},
		// 								{
		// 									"Value": 32.94,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 65.88,
		// 									"NumberOfInstallments": 2,
		// 									"PaymentSystemName": "Visa",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Visa 2 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 21.96,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 65.88,
		// 									"NumberOfInstallments": 3,
		// 									"PaymentSystemName": "Visa",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Visa 3 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 16.47,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 65.88,
		// 									"NumberOfInstallments": 4,
		// 									"PaymentSystemName": "Visa",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Visa 4 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 13.17,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 65.88,
		// 									"NumberOfInstallments": 5,
		// 									"PaymentSystemName": "Visa",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Visa 5 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 10.98,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 65.88,
		// 									"NumberOfInstallments": 6,
		// 									"PaymentSystemName": "Visa",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Visa 6 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 9.41,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 65.88,
		// 									"NumberOfInstallments": 7,
		// 									"PaymentSystemName": "Visa",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Visa 7 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 8.23,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 65.88,
		// 									"NumberOfInstallments": 8,
		// 									"PaymentSystemName": "Visa",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Visa 8 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 65.88,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 65.88,
		// 									"NumberOfInstallments": 1,
		// 									"PaymentSystemName": "Diners",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Diners à vista"
		// 								},
		// 								{
		// 									"Value": 32.94,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 65.88,
		// 									"NumberOfInstallments": 2,
		// 									"PaymentSystemName": "Diners",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Diners 2 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 21.96,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 65.88,
		// 									"NumberOfInstallments": 3,
		// 									"PaymentSystemName": "Diners",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Diners 3 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 16.47,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 65.88,
		// 									"NumberOfInstallments": 4,
		// 									"PaymentSystemName": "Diners",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Diners 4 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 13.17,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 65.88,
		// 									"NumberOfInstallments": 5,
		// 									"PaymentSystemName": "Diners",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Diners 5 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 10.98,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 65.88,
		// 									"NumberOfInstallments": 6,
		// 									"PaymentSystemName": "Diners",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Diners 6 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 9.41,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 65.88,
		// 									"NumberOfInstallments": 7,
		// 									"PaymentSystemName": "Diners",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Diners 7 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 8.23,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 65.88,
		// 									"NumberOfInstallments": 8,
		// 									"PaymentSystemName": "Diners",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Diners 8 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 65.88,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 65.88,
		// 									"NumberOfInstallments": 1,
		// 									"PaymentSystemName": "Mastercard",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Mastercard à vista"
		// 								},
		// 								{
		// 									"Value": 32.94,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 65.88,
		// 									"NumberOfInstallments": 2,
		// 									"PaymentSystemName": "Mastercard",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Mastercard 2 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 21.96,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 65.88,
		// 									"NumberOfInstallments": 3,
		// 									"PaymentSystemName": "Mastercard",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Mastercard 3 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 16.47,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 65.88,
		// 									"NumberOfInstallments": 4,
		// 									"PaymentSystemName": "Mastercard",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Mastercard 4 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 13.17,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 65.88,
		// 									"NumberOfInstallments": 5,
		// 									"PaymentSystemName": "Mastercard",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Mastercard 5 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 10.98,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 65.88,
		// 									"NumberOfInstallments": 6,
		// 									"PaymentSystemName": "Mastercard",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Mastercard 6 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 9.41,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 65.88,
		// 									"NumberOfInstallments": 7,
		// 									"PaymentSystemName": "Mastercard",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Mastercard 7 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 8.23,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 65.88,
		// 									"NumberOfInstallments": 8,
		// 									"PaymentSystemName": "Mastercard",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Mastercard 8 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 65.88,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 65.88,
		// 									"NumberOfInstallments": 1,
		// 									"PaymentSystemName": "Hipercard",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Hipercard à vista"
		// 								},
		// 								{
		// 									"Value": 32.94,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 65.88,
		// 									"NumberOfInstallments": 2,
		// 									"PaymentSystemName": "Hipercard",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Hipercard 2 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 21.96,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 65.88,
		// 									"NumberOfInstallments": 3,
		// 									"PaymentSystemName": "Hipercard",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Hipercard 3 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 16.47,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 65.88,
		// 									"NumberOfInstallments": 4,
		// 									"PaymentSystemName": "Hipercard",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Hipercard 4 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 13.17,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 65.88,
		// 									"NumberOfInstallments": 5,
		// 									"PaymentSystemName": "Hipercard",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Hipercard 5 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 10.98,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 65.88,
		// 									"NumberOfInstallments": 6,
		// 									"PaymentSystemName": "Hipercard",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Hipercard 6 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 9.41,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 65.88,
		// 									"NumberOfInstallments": 7,
		// 									"PaymentSystemName": "Hipercard",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Hipercard 7 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 8.23,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 65.88,
		// 									"NumberOfInstallments": 8,
		// 									"PaymentSystemName": "Hipercard",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Hipercard 8 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 65.88,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 65.88,
		// 									"NumberOfInstallments": 1,
		// 									"PaymentSystemName": "Elo",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Elo à vista"
		// 								},
		// 								{
		// 									"Value": 32.94,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 65.88,
		// 									"NumberOfInstallments": 2,
		// 									"PaymentSystemName": "Elo",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Elo 2 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 21.96,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 65.88,
		// 									"NumberOfInstallments": 3,
		// 									"PaymentSystemName": "Elo",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Elo 3 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 16.47,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 65.88,
		// 									"NumberOfInstallments": 4,
		// 									"PaymentSystemName": "Elo",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Elo 4 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 13.17,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 65.88,
		// 									"NumberOfInstallments": 5,
		// 									"PaymentSystemName": "Elo",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Elo 5 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 10.98,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 65.88,
		// 									"NumberOfInstallments": 6,
		// 									"PaymentSystemName": "Elo",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Elo 6 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 9.41,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 65.88,
		// 									"NumberOfInstallments": 7,
		// 									"PaymentSystemName": "Elo",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Elo 7 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 8.23,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 65.88,
		// 									"NumberOfInstallments": 8,
		// 									"PaymentSystemName": "Elo",
		// 									"PaymentSystemGroupName": "creditCardPaymentGroup",
		// 									"Name": "Elo 8 vezes sem juros"
		// 								},
		// 								{
		// 									"Value": 65.88,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 65.88,
		// 									"NumberOfInstallments": 1,
		// 									"PaymentSystemName": "Vale",
		// 									"PaymentSystemGroupName": "giftCardPaymentGroup",
		// 									"Name": "Vale à vista"
		// 								},
		// 								{
		// 									"Value": 65.88,
		// 									"InterestRate": 0.0,
		// 									"TotalValuePlusInterestRate": 65.88,
		// 									"NumberOfInstallments": 1,
		// 									"PaymentSystemName": "BOLBRADESCO",
		// 									"PaymentSystemGroupName": "bankInvoicePaymentGroup",
		// 									"Name": "BOLBRADESCO à vista"
		// 								}
		// 							],
		// 							"DiscountHighLight": [],
		// 							"GiftSkuIds": [],
		// 							"Teasers": [],
		// 							"BuyTogether": [],
		// 							"Price": 65.88,
		// 							"ListPrice": 77.97,
		// 							"PriceWithoutDiscount": 65.88,
		// 							"RewardValue": 0.0,
		// 							"PriceValidUntil": "2020-02-28T22:41:13Z",
		// 							"AvailableQuantity": 63,
		// 							"Tax": 0.0,
		// 							"DeliverySlaSamples": [
		// 								{
		// 									"DeliverySlaPerTypes": [],
		// 									"Region": null
		// 								}
		// 							],
		// 							"GetInfoErrorMessage": null,
		// 							"CacheVersionUsedToCallCheckout": "bd9c2123fc6fe3d45d7d9ea3abd51f4a_"
		// 						}
		// 					}
		// 				],
		// 				"Videos": []
		// 			}
		// 		]
		// 	}
		// ]);
	});
}

module.exports.getProductByUri = (path) => {
	return new Promise((resolve, reject) => {
		request(`${searchApi}/${path}/p`, (error, response, body) => {
			if (!error && response.statusCode == 200 || response.statusCode == 206) {
				resolve(JSON.parse(body));
			}
		});
	});
}

exports.listCategorys = async () => {
	return new Promise((resolve, reject) => {
		request(`http://${config.hostApi}/api/catalog_system/pub/category/tree/3`, (error, response, body) => {
			if (!error && response.statusCode == 200 || response.statusCode == 206) {
				resolve(JSON.parse(body));
			}
		});
	});
}

exports.getOrderForm = async () => {
	return new Promise((resolve, reject) => {
		request(`http://${config.hostApi}/api/checkout/pub/orderForm`, (error, response, body) => {
			if (!error && response.statusCode == 200 || response.statusCode == 206) {
				resolve(JSON.parse(body));
			} else {
				reject();
			}
		});
	});
}

exports.proxy = (path, req, res) => {
	return new Promise(async (resolve, reject) => {

		var options = {
			url: `${req.protocol}://lojaprojetoverao.vtexcommercestable.com.br${path}`,
			headers: {
				// "X-VTEX-API-AppKey": config.appKey,
				// "X-VTEX-API-AppToken": config.appToken,
				'VtexIdclientAutCookie': req.cookies["VtexIdclientAutCookie_lojaprojetoverao"],
				...req.headers
			},
			method: req.method,

		};

		if (
			options.url.indexOf("/masterdata") > -1 || 
			options.url.indexOf("/orderForm") > -1 || 
			options.url.indexOf("/authentication") > -1 || 
			options.url.indexOf("/brand") > -1 ||
			options.url.indexOf("/pvt") > -1) {
			
			options.headers = {
				"X-VTEX-API-AppKey": config.appKey,
				"X-VTEX-API-AppToken": config.appToken,
				...options.headers
			};
		}

		if (req.headers["content-type"] && req.headers["content-type"].indexOf("application/x-www-form-urlencoded") > -1) {
			const object = JSON.stringify(req.body);
			if (object !== "{}") {
				options.body = queryString.stringify(req.body);
			}
		}

		if (req.headers["content-type"] && req.headers["content-type"].indexOf("multipart/form-data") > -1) {
			if (req.files) {

				const formData = {};

				Object.keys(req.files).forEach((file) => {


					formData[file] = {
						value: req.files[file].data,
						options: {
							filename: req.files[file].name,
							contentType: req.files[file].mimetype
						}
					}
				});

				options.formData = formData;
			}

		}

		if (req.headers["content-type"] && req.headers["content-type"].indexOf("application/json") > -1) {
			if (req.body) {
				options.body = JSON.stringify(req.body);
			}
		}

		if (req.headers["accept"] && req.headers["accept"].indexOf("image/") > -1) {
			if (req.body) {
				options.encoding = null;
			}
		}

		delete options.headers["accept"];
		delete options.headers["accept-encoding"];
		delete options.headers["content-length"];
		delete options.headers["accept-language"];
		delete options.headers["referer"];
		delete options.headers["host"];


		request(options, (error, response, body) => {
			if (!error && response.statusCode == 200 || response.statusCode == 206 || response.statusCode == 204 || response.statusCode == 201) {
				try {
					resolve(JSON.parse(body));
				} catch (error) {
					resolve(body);
				}
			} else {
				reject(response);
			}
		});
	});
}


exports.listBrand = async () => {
	return new Promise((resolve, reject) => {

		const options = {
			host: config.hostApi,
			path: config.innerPath + "/api/catalog_system/pvt/brand/list",
			method: "GET",
			headers: {
				"origin": "x-requested-with",
				"X-VTEX-API-AppKey": config.appKey,
				"X-VTEX-API-AppToken": config.appToken
			}
		};

		const req = http.request(options, function (res) {
			let _data = '';

			res.on('data', function (data) {
				_data += data;
			});

			res.on('end', () => {
				resolve(JSON.parse(_data));
			});
		}).on("error", (err) => {
			reject("Error: " + err.message);
		});

		req.end();

	});
}


exports.getFilter = async (params) => {
	return new Promise((resolve, reject) => {

		const options = {
			host: config.hostApi,
			path: config.innerPath + "/api/catalog_system/pub/facets/search/" + params,
			method: "GET",
			headers: {
				"origin": "x-requested-with",
				"X-VTEX-API-AppKey": config.appKey,
				"X-VTEX-API-AppToken": config.appToken
			}
		};

		const req = http.request(options, function (res) {
			let _data = '';

			res.on('data', function (data) {
				_data += data;
			});

			res.on('end', () => {
				resolve(JSON.parse(_data));
			});
		}).on("error", (err) => {
			reject("Error: " + err.message);
		});

		req.end();

	});
}

