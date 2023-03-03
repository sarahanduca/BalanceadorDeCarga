# Balanceador de Carga

## Trabalho

Trabalho da matéria de Sistemas Distribuidos, com objetivo de entender o processo de Balanceamento de Carga em sistemas, sendo esse
um método de dividir os processos que estão sendo executados no sistema para que não haja a sobrecarga de nenhum dos dispositivos envolvidos,
neste caso tivemos como tarfa oferecer duas opções de execução, foi dada o seguinte enunciado para o trabalho:

> Desenvolva um Balanceador de Carga que receba conexões e seja capaz de enviar o tráfego para três diferentes servidores (S1, S2 e S3). Dois algoritmos devem ser implementados:
>
> 1. Round Robin padrão
> 2. Encaminhamento baseado no tipo de conexão (TCP ou UDP). Nesse algoritmo, S1 deve receber as conexões TCP, S2 e S3 devem receber as conexões UDP. A distribuição entre S2 e S3 deve usar o algoritmo Round Robin.
>    Para a execução do Balanceador de carga, deve ser passado um parâmetro numérico para a escolha do algoritmo.

## Requisitos

Necessário ter instalado na máquina o Node.JS e o NPM ou Yarn.

## Instruções

1. Após o clone do repositório, execute o comando `npm install` para instalação das dependencias necessárias para o funcionamento do projeto.
2. PExecute a linha de comando `npm run dev`, feito isso serão abertas três janelas do terminal node, cada uma ouvindo seu respectivo servidor (s1, s2 e s3).
3. Com os três servidores funcionando, execute o comando `npm start` para execução da API principal, que é o balanceador de carga propriamente dito.
4. Por fim, execute o comando `npm test`, este comando aceita argumentos, sendo `npm test -- 1` a primeira opção de implementação, e o comando `npm test` a segunda opção. Escolha apenas um. Com isso o algoritmo de teste será executado.
