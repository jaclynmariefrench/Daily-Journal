import { Entries } from "./Entries.js"

export const DailyJournal = () => {
    return `
        <h1>Daily Journal</h1>

        <div class="entryList">
            ${ Entries() }
        </div>

        <article class="entryForm">
        <form class="form__container" action="">
        <fieldset class="date__entry">
          <label for="journalDate">Date of entry</label>
          <input type="date" name="journalDate" id="journalDate" />
        </fieldset>
      </form>
      <form class="form__container" action="">
        <fieldset class="concepts">
          <label for="conceptsCovered">Concepts Covered</label>
          <input type="text" name="conceptsCovered" id="conceptsCovered" />
        </fieldset>
      </form>
      <form class="form__container" action="">
        <fieldset class="journal__entry">
          <label for="journalEntry">Journal Entry</label>
          <input type="text" name="journalEntry" id="journalEntry" />
        </fieldset>
      </form>
      <form class="form__container" action="">
        <fieldset class="mood">
          <label for="moodOfTheDay">Mood Of The Day</label>
          <select class="dropdown">
            <div id="myDropdown" class="dropdown-content">
              <option value="sad">sad</option>
              <option value="happy">happy</option>
              <option value="mad">mad</option>
              <option value="confused">confused</option>
            </div>
          </select>
        </article>
    `
}

