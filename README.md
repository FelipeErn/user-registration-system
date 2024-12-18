﻿# **User Registration System**

## **Descrição do Projeto**

Este é um sistema simples de registro de usuários que implementa os padrões de design **Strategy** e **Observer**. O sistema permite a ordenação dinâmica de uma lista de usuários por diferentes algoritmos de ordenação e a geração de relatórios sobre os usuários registrados. A solução é modular e flexível, permitindo a troca de comportamentos em tempo de execução.

### **Padrões de Design Utilizados**
1. **Strategy**: Este padrão é usado para implementar diferentes estratégias de ordenação (BubbleSort, QuickSort, MergeSort). A ideia é permitir a troca dinâmica de algoritmos de ordenação.
2. **Observer**: O padrão Observer foi utilizado para notificar os sistemas interessados sempre que um novo relatório for gerado, o que ajuda a manter o sistema reativo e desacoplado.

---

## **Funcionalidades**

- **Ordenação de usuários**: O sistema permite ordenar os usuários de acordo com a idade, utilizando os algoritmos de BubbleSort, QuickSort e MergeSort.
- **Geração de Relatórios**: Um relatório é gerado com informações sobre o total de usuários, o mais jovem, o mais velho e os usuários registrados hoje.
- **Notificação de Relatório**: Quando um novo relatório é gerado, uma notificação é emitida no console.

---

## **Tecnologias Utilizadas**

- **Node.js**: Plataforma para execução do código JavaScript no lado do servidor.
- **JavaScript (ES6+)**: Linguagem utilizada para o desenvolvimento do sistema.
- **NPM (Node Package Manager)**: Utilizado para gerenciar pacotes e dependências.

---

## **Estrutura de Pastas**

A estrutura do projeto é organizada da seguinte maneira:


---

## **Como Executar**

### **Pré-requisitos**

- **Node.js** (v20.12.0 ou superior)
- **NPM** (v10.5.0 ou superior)

### **Passos para Execução**

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/seu-usuario/user-registration-system.git
   cd user-registration-system

Instale as dependências: Caso ainda não tenha feito isso, execute o seguinte comando para instalar as dependências necessárias:

bash
Copiar código
npm install
Execute o projeto: Para rodar o sistema, basta executar o comando:

bash
Copiar código
node src/index.js
O sistema irá gerar a ordenação dos usuários usando os três algoritmos de ordenação e exibir um relatório no console.

Exemplo de Execução
Ao rodar o projeto, o console exibirá as saídas de ordenação e relatório. Aqui está um exemplo do que será mostrado:

Usuários ordenados por idade (BubbleSort):
json
Copiar código
[
  { name: 'Alice', age: 25, registered: '2023-09-10' },
  { name: 'Bob', age: 30, registered: '2023-05-15' },
  { name: 'Charlie', age: 20, registered: '2024-01-01' }
]
Usuários ordenados por idade (QuickSort):
json
Copiar código
[
  { name: 'Charlie', age: 20, registered: '2024-01-01' }
]
Usuários ordenados por idade (MergeSort):
json
Copiar código
[
  { name: 'Charlie', age: 20, registered: '2024-01-01' },
  { name: 'Bob', age: 30, registered: '2023-05-15' },
  { name: 'Alice', age: 25, registered: '2023-09-10' }
]
Relatório Gerado:
json
Copiar código
{
  totalUsers: 3,
  youngest: { name: 'Charlie', age: 20, registered: '2024-01-01' },
  oldest: { name: 'Bob', age: 30, registered: '2023-05-15' },
  registeredToday: []
}
Notificação de Relatório:
arduino
Copiar código

Console Notification: Novo relatório foi gerado.
