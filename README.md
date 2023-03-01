# Balanceador de Carga
## Trabalho
Trabalho da matéria de Sistemas Distribuidos, com objetivo de entender o processo de Balanceamento de Carga em sistemas, sendo esse 
um método de dividir os processos que estão sendo executados no sistema para que não haja a sobrecarga de nenhum dos dispositivos envolvidos,
neste caso tivemos como tarfa oferecer duas opções de execução, foi dada o seguinte enunciado para o trabalho: 
> Desenvolva um Balanceador de Carga que receba conexões e seja capaz de enviar o tráfego para três diferentes servidores (S1, S2 e S3). Dois algoritmos devem ser implementados:
> 1) Round Robin padrão
> 2) Encaminhamento baseado no tipo de conexão (TCP ou UDP). Nesse algoritmo, S1 deve receber as conexões TCP, S2 e S3 devem receber as conexões UDP. A distribuição entre S2 e S3 deve usar o algoritmo Round Robin.
> Para a execução do Balanceador de carga, deve ser passado um parâmetro numérico para a escolha do algoritmo.
## Instruções
1. Após o clone no repositório, rodar o comando `npm install` para instalação das dependencias necessárias para o funcionamento do projeto, é necessário ter node.js instalado na máquina.
2. É necessária a execução de todos os tres servidores para o funcionamento do trabalho, para isso basta executar a linha de comando `npm run dev`, feito isso
será aberta tres janelas do terminal node cada uma ouvindo seu respectivo servidor.
3. Com os tres servidores funcionando, execute o comando `npm start -- 1`, sendo '1' a primeira opção de implementação, e o comando `npm start` a segunda opção, sem argumentos, escolha apenas um.
4. Por fim, rodar o comando `npm test` para executar o algoritmo de teste, e verificar se a saída está correta. 
