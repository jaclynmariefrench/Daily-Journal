const database = {
    "entries": [
        { 
            id: 1,
            date: "4/12/2021",
            concept: "HTML & CSS",
            entry: "We talked about HTML components and how to make grid layouts with Flexbox in CSS.",
            mood: "happy"
        },
        {
            id: 2,
            date: "07/26/2025",
            concept: "Complex Flexbox",
            entry: "I tried to have an element in my Flexbox layout also be another Flexbox layout. It hurt my brain. I hate Steve.",
            mood: "Sad"
        },
        {
            id: 3,
            date: "4/20/2021",
            concept: "Functions",
            entry: "I spent most of the day jumping from project to project to understand functions better.",
            mood: "Confused"
        },
        {
            id: 4,
            date: "4/19/2021",
            concept: "Wireframing",
            entry: "I had a lot of fun designing my daily journal in figma.",
            mood: "happy"
        }
    ]
}

export const getJournalEntries = () => {
    const copyOfDate = [...database.entries]
    return copyOfData
}