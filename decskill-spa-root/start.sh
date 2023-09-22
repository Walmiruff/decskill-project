#!/bin/bash

# Diretório raiz da aplicação
root_dir=$(pwd)

# Diretório do MFE Explore
spa1_dir="$root_dir/../decskill-mfe-explore"

# Diretório do MFE Home
spa2_dir="$root_dir/../decskill-mfe-home"

# Função para iniciar um SPA
start_spa() {
  local spa_name="$1"
  local spa_dir="$2"

  echo "Iniciando $spa_name em $spa_dir..."
  cd "$spa_dir" || exit
  npm start
}

# Iniciar os SPAs
start_spa "SPA 1" "$spa1_dir" &
start_spa "SPA 2" "$spa2_dir"

# Aguardar que todos os SPAs terminem (pressione Ctrl+C para interromper)
wait
