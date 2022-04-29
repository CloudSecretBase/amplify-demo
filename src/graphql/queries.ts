/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTodo = /* GraphQL */ `
  query GetTodo($id: ID!) {
    getTodo(id: $id) {
      id
      name
      description
      tag
      createdAt
      updatedAt
    }
  }
`;
export const listTodos = /* GraphQL */ `
  query ListTodos(
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        tag
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getNews = /* GraphQL */ `
  query GetNews($id: ID!, $showOrder: ID!) {
    getNews(id: $id, showOrder: $showOrder) {
      id
      showOrder
      title
      image
      link
      tag
      createdAt
      updatedAt
    }
  }
`;
export const listNews = /* GraphQL */ `
  query ListNews(
    $id: ID
    $showOrder: ModelIDKeyConditionInput
    $filter: ModelNewsFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listNews(
      id: $id
      showOrder: $showOrder
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        showOrder
        title
        image
        link
        tag
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const newsByTag = /* GraphQL */ `
  query NewsByTag(
    $tag: String!
    $sortDirection: ModelSortDirection
    $filter: ModelNewsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    newsByTag(
      tag: $tag
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        showOrder
        title
        image
        link
        tag
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
