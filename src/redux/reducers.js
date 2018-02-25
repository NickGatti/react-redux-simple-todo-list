import addTodo from './actions'

const initialState = [
    {
        author: 'Nick',
        title: 'All the things',
        content: 'Be the example, sacrifice myself to show others the truth.'
    },
    {
        author: 'John',
        title: 'The ultimate way to explain things',
        content: 'Show that when you believe in yourself and other people anything is possible.'
    },
    {
        author: 'Maria',
        title: 'The best possible fix for things',
        content: 'Paint the picture, a big picture in a big way.'
    },
    {
        author: 'Troy',
        title: 'The best possible ways to explore life',
        content: 'The proof, what happens when just one thing can go right'
    },
    {
        author: 'Jeff',
        title: 'The ultimate process for diplomacy',
        content: 'All seeing, sees the verge of conflict'
    },
    {
        author: 'David',
        title: 'The way to stand tall in high winds',
        content: 'Knocks shit down when it looks like shit, smashes it. Even at his own risk.'
    },
    {
        author: 'Vaga',
        title: 'The way to believe in the right things',
        content: 'Feels the way around until he loses himself'
    },
]

export const addTodoReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
    case ( 'ADD_TODO' ):
        return state.concat( action.payload )
    default:
        return state
    }
}