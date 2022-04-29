export interface Todo {
    id: string;
    name: string;
    description: string;
    tag: string;
    createdAt: string;
    updatedAt: string;
}

export interface News {
    id: string
    showOrder: number
    title: String
    image: String
    link: String
    tag: String
    createdAt: string;
    updatedAt: string;

}

export interface ListNews {
    data: NewsContainer;
}

export interface ListTodos {
    data: TodoContainer;
}


export interface TodoContainer {
    listTodos: ListTodoData;
}


export interface NewsContainer {
    listNews: ListNewsData;
}

export interface ListTodoData {
    items: Todo[];
    nextToken?: string;
}

export interface ListNewsData {
    items: News[];
    nextToken?: string;
}