import { getJournalEntries } from "./database.js"

export const Entries = () => {
    const entries = getJournalEntries()
    const allEntriesAsHTML = ""


    for (const entry of entries) {
        allEntriesAsHTML += `
           <h2>${entries.concept}</h2>
           <div>${entries.entry}</div>
           <div>${entries.date}</div>
        `
    }

    return allEntriesAsHTML
}

export const JournalForm = () => {
    let formHTML = ""
    for (const iterator of object) {
        
    }
}