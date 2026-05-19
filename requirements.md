# Requisitos funcionais — TODO List

## Premissas

- **Usuário único e anônimo**: não há contas, perfis ou sessões autenticadas.
- **Acesso direto**: ao abrir a aplicação, o usuário vê imediatamente sua lista de tarefas.
- **Responsivo**: uso em desktop e mobile (requisito não funcional, mas impacta telas).

---a

## RF01 — Visualizar lista de tarefas

| ID     | Requisito                                                                            |
| ------ | ------------------------------------------------------------------------------------ |
| RF01.1 | Ao carregar a aplicação, exibir todas as tarefas existentes no armazenamento local.  |
| RF01.2 | Exibir, no mínimo: título da tarefa e indicador de conclusão (pendente / concluída). |
| RF01.3 | Exibir contadores: total de tarefas, pendentes e concluídas.                         |
| RF01.4 | Exibir estado vazio quando não houver tarefas, com orientação para criar a primeira. |

---

## RF02 — Criar tarefa

| ID     | Requisito                                                                               |
| ------ | --------------------------------------------------------------------------------------- |
| RF02.1 | Permitir criar uma nova tarefa informando um título (obrigatório).                      |
| RF02.2 | Título não pode ser vazio nem apenas espaços em branco.                                 |
| RF02.3 | Título deve ter limite máximo de caracteres (ex.: 200) com feedback de validação.       |
| RF02.4 | Nova tarefa inicia como **pendente**.                                                   |
| RF02.5 | Após criar, a tarefa aparece na lista e o campo de entrada é limpo para nova digitação. |
| RF02.6 | Permitir criar tarefa via tecla Enter (além de botão de adicionar).                     |

**Opcional (recomendado):**

| ID     | Requisito                                                |
| ------ | -------------------------------------------------------- |
| RF02.7 | Permitir descrição/notas opcionais na criação ou edição. |
| RF02.8 | Permitir data de vencimento opcional.                    |
| RF02.9 | Permitir prioridade opcional (baixa / média / alta).     |

---

## RF03 — Editar tarefa

| ID     | Requisito                                                          |
| ------ | ------------------------------------------------------------------ |
| RF03.1 | Permitir editar o título de uma tarefa existente.                  |
| RF03.2 | Aplicar as mesmas regras de validação da criação (RF02.2, RF02.3). |
| RF03.3 | Salvar alterações de forma persistente no armazenamento local.     |
| RF03.4 | Cancelar edição deve restaurar o valor anterior sem salvar.        |

**Opcional:** editar descrição, data de vencimento e prioridade (se RF02.7–RF02.9 existirem).

---

## RF04 — Marcar tarefa como concluída / pendente

| ID     | Requisito                                                                                     |
| ------ | --------------------------------------------------------------------------------------------- |
| RF04.1 | Permitir marcar uma tarefa como concluída (checkbox ou ação equivalente).                     |
| RF04.2 | Permitir desmarcar uma tarefa concluída, voltando ao status pendente.                         |
| RF04.3 | Tarefas concluídas devem ter distinção visual clara (ex.: texto riscado, opacidade reduzida). |
| RF04.4 | Persistir o status após cada alteração.                                                       |

---

## RF05 — Excluir tarefa

| ID     | Requisito                                                               |
| ------ | ----------------------------------------------------------------------- |
| RF05.1 | Permitir excluir uma tarefa individual.                                 |
| RF05.2 | Solicitar confirmação antes de excluir (evitar exclusão acidental).     |
| RF05.3 | Após exclusão, remover da lista e do armazenamento local imediatamente. |

---

## RF06 — Filtrar e ordenar

| ID     | Requisito                                                              |
| ------ | ---------------------------------------------------------------------- |
| RF06.1 | Filtrar visualização por: **todas**, **pendentes**, **concluídas**.    |
| RF06.2 | Manter o filtro ativo durante a sessão até o usuário alterá-lo.        |
| RF06.3 | Ordenar tarefas por data de criação (mais recentes primeiro) — padrão. |

**Opcional:**

| ID     | Requisito                                            |
| ------ | ---------------------------------------------------- |
| RF06.4 | Ordenar por prioridade ou data de vencimento.        |
| RF06.5 | Busca por texto no título (e descrição, se existir). |

---

## RF07 — Ações em lote

| ID     | Requisito                                                                                 |
| ------ | ----------------------------------------------------------------------------------------- |
| RF07.1 | Permitir marcar **todas as tarefas visíveis** como concluídas (respeitando filtro ativo). |
| RF07.2 | Permitir limpar **todas as tarefas concluídas** de uma vez, com confirmação.              |

---

## RF08 — Persistência e recuperação de dados

| ID     | Requisito                                                                                        |
| ------ | ------------------------------------------------------------------------------------------------ |
| RF08.1 | Salvar automaticamente qualquer alteração (criar, editar, concluir, excluir) sem botão “Salvar”. |
| RF08.2 | Ao reabrir a aplicação no mesmo navegador, restaurar o estado completo da lista.                 |
| RF08.3 | Cada tarefa deve ter identificador único interno (UUID) para operações consistentes.             |
| RF08.4 | Registrar data/hora de criação e de última atualização (uso interno ou exibição opcional).       |

---

## RF09 — Feedback ao usuário

| ID     | Requisito                                                                                                            |
| ------ | -------------------------------------------------------------------------------------------------------------------- |
| RF09.1 | Exibir mensagens de erro de validação inline (campo inválido).                                                       |
| RF09.2 | Exibir confirmação visual breve após ações destrutivas ou em lote (toast/snackbar).                                  |
| RF09.3 | Em falha de persistência (armazenamento cheio ou indisponível), informar o usuário sem perder silenciosamente dados. |

---
