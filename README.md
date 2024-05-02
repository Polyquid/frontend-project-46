> ### Badges Github Actions:
[![Actions Status](https://github.com/Polyquid/frontend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/Polyquid/frontend-project-46/actions)
[![Github Actions](https://github.com/Polyquid/frontend-project-46/actions/workflows/test.yml/badge.svg)](https://github.com/Polyquid/frontend-project-46/actions)
> ### Badges Codeclimate:
[![Maintainability](https://api.codeclimate.com/v1/badges/fa3082e7f968281e3fe7/maintainability)](https://codeclimate.com/github/Polyquid/frontend-project-46/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/fa3082e7f968281e3fe7/test_coverage)](https://codeclimate.com/github/Polyquid/frontend-project-46/test_coverage)

# Вычислитель отличий

**Вычислитель отличий** – программа, определяющая разницу между двумя структурами данных.

**Возможности утилиты**:

- Поддержка разных входных форматов: yaml, json

- Генерация отчета в виде plain text, stylish и json

## Установка

1. `make install` или `npm ci`

2. `npm link`

## Использование

`gendiff [options] <filepath1> <filepath2>`

Параметры:

`-v`, `--version` output the current version

`-f`, `--format [type]` output format (default: "stylish")

`-h`, `--help` display help for command

## Демонстрация работы библиотеки
[Вывод в формате stylish](https://asciinema.org/a/evE3Se7Kqe41ShhfFqjCtmxDr)

[Вывод в формате plain text](https://asciinema.org/a/y8WWCOJzNbD2H6a5LKjjcfLOz)

[Вывод в формате json](https://asciinema.org/a/o3yQPlPOUxVu7H1x61rZ4oG04)