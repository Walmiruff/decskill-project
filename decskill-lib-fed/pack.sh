#!/bin/bash

# Função para construir e empacotar uma biblioteca
build_and_pack() {
  npm run build:lib-$1 || exit
  cd dist/dcsk/$1 || exit
  npm pack
  cd ../../.. # Volte ao diretório raiz do projeto
}

# Construir e empacotar as bibliotecas
build_and_pack "components"
#build_and_pack "store"
#build_and_pack "security"
