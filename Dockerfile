# Usa a imagem oficial do Node.js como base
FROM node:20-slim

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia os arquivos package.json e package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instala as dependências do projeto
RUN npm install

# Copia o restante do código da aplicação
COPY . .

# Expõe a porta que a aplicação irá rodar
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["npm", "start"]
