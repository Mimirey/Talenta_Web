#!/bin/bash
# check .env file is availabel
# 
# check if user is root

if [ "$(id -u)" -ne 0 ]; then
  echo "This script must be run as root. Please use sudo."
  exit 1
fi

if [ ! -f .env ]; then
  echo ".env file not found!"
  cp .env.example .env
  echo ".env file created from .env.example"
fi
# run docker compose build
#

docker compose -f docker-compose.yml build

docker compose up -d

docker compose ps
