#!/bin/bash

# Diretório raiz da aplicação
root_dir=$(pwd)

# Diretório do Host
spa1_dir="$root_dir/decskill-spa-root"

# Diretório do MFE Explore
spa2_dir="$root_dir/../decskill-mfe-explore"

# Diretório do MFE Home
spa3_dir="$root_dir/../decskill-mfe-home"

# Função para iniciar um SPA
install_spa() {
  local spa_name="$1"
  local spa_dir="$2"

  echo "Instalando $spa_name em $spa_dir..."
  cd "$spa_dir" || exit
  npm install
}

# Instalar a deps dos SPAs
install_spa "install SPA 1" "$spa1_dir" &
install_spa "install SPA 2" "$spa2_dir" &
install_spa "install SPA 3" "$spa3_dir"

# Aguardar que todos os SPAs terminem (pressione Ctrl+C para interromper)
wait
